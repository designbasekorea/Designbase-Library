import React, { useEffect, useRef, useState } from 'react';
import { Toggle, Badge } from '@designbasekorea/ui';
import { ChevronDownIcon } from '@designbasekorea/icons';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './FigmaSection.scss';

export interface FigmaSectionProps {
    title?: I18nText | React.ReactNode;
    dataCategory: string;
    iconButton?: React.ReactNode;
    children: React.ReactNode;
    marginBottom?: number;
    isEnabled?: boolean;
    onToggle?: (category: string) => void;
    className?: string;
    enableScrollNavigation?: boolean;
    headerHeight?: number;
    onActiveSectionChange?: (category: string) => void;
    t?: TFunctionLite;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    onCollapseChange?: (collapsed: boolean, category: string) => void;
    /** 타이틀 우측 뱃지 텍스트 */
    badge?: string;
    /** 오버플로우를 visible로 설정 (드롭다운, 팝오버 등이 잘리는 경우) */
    overflowVisible?: boolean;
}

export const FigmaSection: React.FC<FigmaSectionProps> = ({
    title,
    dataCategory,
    iconButton,
    children,
    marginBottom,
    isEnabled = true,
    onToggle,
    className,
    enableScrollNavigation = false,
    headerHeight = 94,
    onActiveSectionChange,
    t,
    collapsible = false,
    defaultCollapsed = false,
    onCollapseChange,
    badge,
    overflowVisible = false,
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const clipRef = useRef<HTMLDivElement>(null);   // ← 높이 애니메이션 컨테이너
    const innerRef = useRef<HTMLDivElement>(null);  // ← 패딩/콘텐츠 컨테이너
    const animatingRef = useRef(false);
    const [collapsed, setCollapsed] = useState(defaultCollapsed);

    const sectionStyle = marginBottom ? { marginBottom: `${marginBottom}px` } : undefined;

    const classes = [
        'designbase-figma-section',
        !isEnabled && 'designbase-figma-section--disabled',
        collapsible && 'designbase-figma-section--collapsible',
        collapsed && collapsible && 'designbase-figma-section--collapsed',
        overflowVisible && 'designbase-figma-section--overflow-visible',
        className,
    ].filter(Boolean).join(' ');

    const toggle = () => {
        if (!collapsible) return;
        setCollapsed(v => {
            const next = !v;
            onCollapseChange?.(next, dataCategory);
            animate(next);
            return next;
        });
    };

    /** 핵심 애니메이션 로직: clip의 height만 조절 */
    const animate = (toCollapsed: boolean) => {
        const clip = clipRef.current;
        const inner = innerRef.current;
        if (!clip || !inner) return;

        const transitionMs = 250; // css와 동일하게 유지
        const setH = (h: string) => { clip.style.height = h; };

        if (animatingRef.current) {
            // 진행 중이면 현재 값으로부터 이어가기
            const current = `${clip.getBoundingClientRect().height}px`;
            clip.style.transition = 'none';
            setH(current);
            // reflow
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            clip.offsetHeight;
            clip.style.transition = '';
        }

        animatingRef.current = true;

        if (toCollapsed) {
            // 닫기: 현재 실제 높이로 세팅 → reflow → 0으로
            const start = `${inner.scrollHeight}px`;
            setH(start);
            // reflow
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            clip.offsetHeight;
            setH('0px');
        } else {
            // 열기: 0에서 실제 높이까지 → 끝나면 auto
            setH('0px');
            // reflow
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            clip.offsetHeight;
            setH(`${inner.scrollHeight}px`);
        }

        const onEnd = (e: TransitionEvent) => {
            if (e.propertyName !== 'height') return;
            clip.removeEventListener('transitionend', onEnd);
            if (!toCollapsed) {
                setH('auto'); // 동적 내용 변화 대응
            }
            animatingRef.current = false;
        };
        clip.addEventListener('transitionend', onEnd);

        // 안전장치(transitionend 누락 대비)
        window.setTimeout(() => {
            if (!animatingRef.current) return;
            if (!toCollapsed) setH('auto');
            animatingRef.current = false;
        }, transitionMs + 50);
    };

    /** 첫 마운트 시 초기 상태를 반영 */
    useEffect(() => {
        const clip = clipRef.current;
        const inner = innerRef.current;
        if (!clip || !inner) return;
        clip.style.height = collapsed ? '0px' : 'auto';
    }, []); // 한 번만

    /** 컨텐츠 크기 변경(언어 변경/데이터 로드 등) 시 펼쳐진 상태면 높이 재동기화 */
    useEffect(() => {
        if (collapsed) return;
        const clip = clipRef.current;
        const inner = innerRef.current;
        if (!clip || !inner) return;
        if (clip.style.height === 'auto') return; // 이미 auto면 OK
        clip.style.height = `${inner.scrollHeight}px`;
    }, [children, collapsed]);

    /** 스크롤 네비게이션 옵저버 */
    useEffect(() => {
        if (!enableScrollNavigation || !onActiveSectionChange || !sectionRef.current) return;
        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => entry.isIntersecting && onActiveSectionChange(dataCategory)),
            { root: null, rootMargin: `-${headerHeight}px 0px -50% 0px`, threshold: 0 }
        );
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [enableScrollNavigation, dataCategory, headerHeight, onActiveSectionChange]);

    return (
        <section
            ref={sectionRef}
            className={classes}
            {...(dataCategory ? { 'data-category': dataCategory } : {})}
            style={sectionStyle}
        >
            {title && (
                <div
                    className="designbase-figma-section__header"
                    onClick={collapsible ? toggle : undefined}
                    style={collapsible ? { cursor: 'pointer' } : undefined}
                >
                    <div className="designbase-figma-section__title-area">
                        <h2 className="designbase-figma-section__title">
                            {typeof title === 'string' || (typeof title === 'object' && 'key' in title)
                                ? resolveText(t, title as I18nText)
                                : title}
                            {badge && (
                                <Badge variant="secondary" size="s">
                                    {badge}
                                </Badge>
                            )}
                        </h2>

                    </div>
                    <div className="designbase-figma-section__controls">
                        {iconButton}
                        {collapsible && (
                            <span className={`designbase-figma-section__collapse-icon ${collapsed ? 'designbase-figma-section__collapse-icon--collapsed' : ''}`}>
                                <ChevronDownIcon size={16} />
                            </span>
                        )}
                        {onToggle && (
                            <Toggle checked={isEnabled} onChange={() => onToggle(dataCategory)} size="s" />
                        )}
                    </div>
                </div>
            )}

            <div className={`designbase-figma-section__content ${!isEnabled ? 'designbase-figma-section__content--hidden' : ''}`}>
                {/* ★ height 애니메이션 전용 래퍼 */}
                <div ref={clipRef} className="designbase-figma-section__content-clip">
                    {/* ★ 패딩/간격/불투명도는 inner에서만 */}
                    <div ref={innerRef} className={`designbase-figma-section__content-inner ${collapsible && collapsed ? 'is-collapsed' : ''}`}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

FigmaSection.displayName = 'FigmaSection';

// 스크롤 네비게이션 유틸리티 함수들
export const scrollToSection = (category: string, headerHeight: number = 94) => {
    const section = document.querySelector(`section[data-category="${category}"]`);
    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
};

export const getActiveSection = (headerHeight: number = 94): string | null => {
    const scrollPosition = window.scrollY + headerHeight;
    const sections = Array.from(document.querySelectorAll('section[data-category]'));

    for (const section of sections) {
        const category = section.getAttribute('data-category');
        if (!category) continue;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
        const sectionBottom = section.getBoundingClientRect().bottom + window.scrollY - headerHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            return category;
        }
    }

    return null;
};

export default FigmaSection;
