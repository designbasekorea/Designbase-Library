import React, { useState, useEffect, useRef } from 'react';
import { scrollToSection, getActiveSection } from '../FigmaSection/FigmaSection';
import './FigmaSidebar.scss';

export interface FigmaSidebarProps {
    /** 카테고리 목록 */
    categories: string[];
    /** 카테고리 그룹 */
    categoryGroups?: Record<string, string[]>;
    /** 카테고리 라벨 맵핑 */
    categoryLabels?: Record<string, string>;
    /** 활성 카테고리 */
    activeCategory?: string;
    /** 카테고리 클릭 핸들러 */
    onCategoryClick?: (category: string) => void;
    /** 헤더 높이 (스크롤 오프셋용) */
    headerHeight?: number;
    /** 스크롤 패딩 */
    scrollPadding?: number;
    /** 스크롤 컨테이너 ID (지정하지 않으면 window) */
    scrollContainerId?: string;
    /** 사이드바 폭 (픽셀 단위) */
    width?: number;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const FigmaSidebar: React.FC<FigmaSidebarProps> = ({
    categories,
    categoryGroups = {},
    categoryLabels = {},
    activeCategory,
    onCategoryClick,
    headerHeight = 0,
    scrollPadding = 50,
    scrollContainerId,
    width,
    className,
}) => {
    const [internalActiveCategory, setInternalActiveCategory] = useState(activeCategory || categories[0]);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const currentActiveCategory = activeCategory || internalActiveCategory;

    const handleCategoryClick = (category: string) => {
        setInternalActiveCategory(category);
        onCategoryClick?.(category);

        // 스크롤 컨테이너 찾기
        const scrollContainer = scrollContainerId
            ? document.getElementById(scrollContainerId)
            : null;

        // 섹션 찾기
        const section = document.querySelector(`section[data-category="${category}"]`);
        if (section) {
            if (scrollContainer) {
                // 커스텀 스크롤 컨테이너가 있는 경우
                const containerRect = scrollContainer.getBoundingClientRect();
                const sectionRect = section.getBoundingClientRect();
                const scrollTop = scrollContainer.scrollTop;
                const sectionTop = sectionRect.top - containerRect.top + scrollTop - headerHeight;

                scrollContainer.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            } else {
                // window 스크롤 사용
                scrollToSection(category, headerHeight);
            }
        }
    };

    // 사이드바 스크롤 자동 조정
    useEffect(() => {
        if (currentActiveCategory && sidebarRef.current) {
            const activeButton = sidebarRef.current.querySelector(
                `[data-category="${currentActiveCategory}"]`
            );

            if (activeButton) {
                const sidebar = sidebarRef.current;
                const sidebarRect = sidebar.getBoundingClientRect();
                const buttonRect = activeButton.getBoundingClientRect();

                // 버튼이 사이드바 뷰포트의 패딩 영역을 벗어났는지 확인
                const isButtonOutOfView =
                    buttonRect.top < (sidebarRect.top + scrollPadding) ||
                    buttonRect.bottom > (sidebarRect.bottom - scrollPadding);

                if (isButtonOutOfView) {
                    const buttonTop = activeButton.offsetTop;
                    let targetScrollTop;

                    if (buttonRect.top < sidebarRect.top + scrollPadding) {
                        // 위로 벗어난 경우
                        targetScrollTop = buttonTop - scrollPadding;
                    } else {
                        // 아래로 벗어난 경우
                        targetScrollTop = buttonTop - sidebar.clientHeight + buttonRect.height + scrollPadding;
                    }

                    sidebar.scrollTo({
                        top: targetScrollTop,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [currentActiveCategory, scrollPadding]);

    // Intersection Observer를 사용한 더 정확한 스크롤 감지
    useEffect(() => {
        const sections = document.querySelectorAll('section[data-category]');
        if (sections.length === 0) return;

        // SplitView 내에서 사용될 때는 오른쪽 패널의 스크롤 컨테이너를 찾기
        const findScrollContainer = () => {
            if (scrollContainerId) {
                return document.getElementById(scrollContainerId);
            }

            // SplitView 패널 내의 스크롤 가능한 컨테이너 찾기
            const splitViewPanel = document.querySelector('.designbase-split-view__panel:last-child');
            if (splitViewPanel) {
                return splitViewPanel as HTMLElement;
            }

            return null;
        };

        const scrollContainer = findScrollContainer();

        const observerOptions = {
            root: scrollContainer,
            rootMargin: `-${headerHeight}px 0px -50% 0px`,
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            // 가장 많이 보이는 섹션 찾기
            let maxRatio = 0;
            let activeSection: string | null = null;

            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    const category = entry.target.getAttribute('data-category');
                    if (category) {
                        activeSection = category;
                    }
                }
            });

            if (activeSection && activeSection !== currentActiveCategory) {
                setInternalActiveCategory(activeSection);
            }
        }, observerOptions);

        // 모든 섹션 관찰
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, [currentActiveCategory, headerHeight, scrollContainerId]);

    const classes = [
        'designbase-figma-sidebar',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    // 그룹이 있는지 확인
    const hasGroups = Object.keys(categoryGroups).length > 0;

    return (
        <div
            className={classes}
            ref={sidebarRef}
            style={{ width: width ? `${width}px` : undefined }}
        >
            {hasGroups ? (
                // 그룹이 있는 경우
                Object.entries(categoryGroups).map(([groupName, groupCategories]) => {
                    const visibleCategories = groupCategories.filter(
                        category => categories.includes(category)
                    );

                    if (visibleCategories.length === 0) return null;

                    return (
                        <div key={groupName} className="designbase-figma-sidebar__group">
                            <div className="designbase-figma-sidebar__group-title">{groupName}</div>
                            {visibleCategories.map(category => (
                                <button
                                    key={category}
                                    className={`designbase-figma-sidebar__button ${currentActiveCategory === category ? 'designbase-figma-sidebar__button--active' : ''
                                        }`}
                                    onClick={() => handleCategoryClick(category)}
                                    data-category={category}
                                >
                                    {categoryLabels[category] || category}
                                </button>
                            ))}
                        </div>
                    );
                })
            ) : (
                // 그룹이 없는 경우 카테고리 직접 나열
                categories.map(category => (
                    <button
                        key={category}
                        className={`designbase-figma-sidebar__button ${currentActiveCategory === category ? 'designbase-figma-sidebar__button--active' : ''
                            }`}
                        onClick={() => handleCategoryClick(category)}
                        data-category={category}
                    >
                        {categoryLabels[category] || category}
                    </button>
                ))
            )}
        </div>
    );
};

FigmaSidebar.displayName = 'FigmaSidebar';

export default FigmaSidebar;
