/**
 * Logo 컴포넌트
 * 
 * 목적: 브랜드 로고를 표시하는 컴포넌트 제공
 * 기능: 텍스트 로고, 이미지 로고, 다양한 크기와 스타일 지원
 * 접근성: ARIA 가이드라인 준수, alt 텍스트 지원
 */

import React from 'react';
import clsx from 'clsx';
import { DesignBaseLogo, DesignBaseLogoMark } from './logos';
import './Logo.scss';

export type LogoSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type LogoVariant = 'original' | 'light' | 'dark' | 'default' | 'primary' | 'secondary' | 'white';
export type LogoType = 'designbase' | 'designbase-mark' | 'custom';

export interface LogoProps {
    /** 로고 타입 (designbase: 풀 로고, designbase-mark: 심볼만, custom: 커스텀) */
    type?: LogoType;
    /** 로고 텍스트 (type이 'custom'일 때만 사용) */
    text?: string;
    /** 로고 이미지 URL (type이 'custom'일 때만 사용) */
    src?: string;
    /** 이미지 대체 텍스트 */
    alt?: string;
    /** 로고 크기 */
    size?: LogoSize;
    /** 로고 스타일 variant (original: SVG 원본 색상, light: 밝은 색상/흰색, dark: 어두운 색상/검정) */
    variant?: LogoVariant;
    /** 클릭 가능 여부 */
    clickable?: boolean;
    /** 링크 URL (clickable이 true일 때) */
    href?: string;
    /** 새 탭에서 열기 여부 */
    target?: '_blank' | '_self';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 추가 props */
    [key: string]: any;
}

export const Logo: React.FC<LogoProps> = ({
    type = 'designbase',
    text = 'Logo',
    src,
    alt,
    size = 'm',
    variant = 'original',
    clickable = false,
    href,
    target = '_self',
    fullWidth = false,
    className,
    onClick,
    ...props
}) => {
    const classes = clsx(
        'designbase-logo',
        `designbase-logo--${size}`,
        variant && `designbase-logo--${variant}`,
        {
            'designbase-logo--clickable': clickable || href,
            'designbase-logo--full-width': fullWidth,
            'designbase-logo--svg': type !== 'custom',
        },
        className
    );

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    // 크기별 SVG 로고 크기 매핑
    // 로고타입 비율: 386:40 (9.65:1)
    // 심볼 비율: 95:100 (0.95:1)
    const getSvgDimensions = () => {
        const dimensions = {
            xs: { width: 96, height: 20, markSize: 19 },   // 20 * 9.65 / 2
            s: { width: 125, height: 26, markSize: 25 },   // 26 * 9.65 / 2
            m: { width: 193, height: 40, markSize: 38 },   // 40 * 9.65 / 2 (기본)
            l: { width: 256, height: 53, markSize: 50 },   // 53 * 9.65 / 2
            xl: { width: 320, height: 66, markSize: 63 },  // 66 * 9.65 / 2
        };
        return dimensions[size];
    };

    // variant별 색상 매핑
    const getLogoColor = (): string | undefined => {
        // original일 때는 undefined를 반환하여 SVG 원본 색상(검정) 사용
        // color prop을 전달하지 않으면 SVG 로고 컴포넌트가 원본 색상을 사용
        if (variant === 'original') {
            return undefined;
        }

        const colors: Record<Exclude<LogoVariant, 'original'>, string> = {
            light: '#ffffff', // 밝은 색상 (흰색)
            dark: '#000000', // 어두운 색상 (검정)
            default: 'var(--db-text-primary)',
            primary: 'var(--db-brand-primary)',
            secondary: 'var(--db-text-secondary)',
            white: '#ffffff', // white는 light와 동일하게 처리
        };
        return colors[variant as Exclude<LogoVariant, 'original'>];
    };

    const renderLogo = () => {
        const { width, height, markSize } = getSvgDimensions();
        const color = getLogoColor();

        // DesignBase 풀 로고
        if (type === 'designbase') {
            return (
                <DesignBaseLogo
                    width={width}
                    height={height}
                    {...(color !== undefined && { color })}
                    className="designbase-logo__svg"
                />
            );
        }

        // DesignBase 심볼 마크
        if (type === 'designbase-mark') {
            return (
                <DesignBaseLogoMark
                    size={markSize}
                    {...(color !== undefined && { color })}
                    className="designbase-logo__svg"
                />
            );
        }

        // 커스텀 로고
        if (src) {
            return (
                <img
                    src={src}
                    alt={alt || text}
                    className="designbase-logo__image"
                    {...props}
                />
            );
        }

        return (
            <span className="designbase-logo__text" {...props}>
                {text}
            </span>
        );
    };

    const logoContent = (
        <div className={classes} onClick={handleClick}>
            {renderLogo()}
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="designbase-logo__link"
            >
                {logoContent}
            </a>
        );
    }

    return logoContent;
};

Logo.displayName = 'Logo';

export default Logo;
