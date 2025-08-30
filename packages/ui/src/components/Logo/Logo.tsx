/**
 * Logo 컴포넌트
 * 
 * 목적: 브랜드 로고를 표시하는 컴포넌트 제공
 * 기능: 텍스트 로고, 이미지 로고, 다양한 크기와 스타일 지원
 * 접근성: ARIA 가이드라인 준수, alt 텍스트 지원
 */

import React from 'react';
import clsx from 'clsx';
import './Logo.scss';

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LogoVariant = 'default' | 'primary' | 'secondary' | 'white' | 'dark';

export interface LogoProps {
    /** 로고 텍스트 */
    text?: string;
    /** 로고 이미지 URL */
    src?: string;
    /** 이미지 대체 텍스트 */
    alt?: string;
    /** 로고 크기 */
    size?: LogoSize;
    /** 로고 스타일 variant */
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
    text = 'Logo',
    src,
    alt,
    size = 'md',
    variant = 'default',
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
        `designbase-logo--${variant}`,
        {
            'designbase-logo--clickable': clickable || href,
            'designbase-logo--full-width': fullWidth,
        },
        className
    );

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    const renderLogo = () => {
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
