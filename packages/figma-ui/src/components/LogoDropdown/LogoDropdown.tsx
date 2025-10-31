import React, { useState } from 'react';
import clsx from 'clsx';
import { ExternalLinkIcon, AppWindowIcon, YoutubeIcon, InstagramIcon, MailIcon, FigmaIcon } from '@designbasekorea/icons';
import { Logo } from '@designbasekorea/ui';
import './LogoDropdown.scss';

export interface LogoDropdownLink {
    name: string;
    url: string;
    icon?: React.ReactNode;
}

// 기본 링크 목록
const defaultLinks: LogoDropdownLink[] = [
    {
        name: 'officialWebsite',
        url: 'https://designbase.co.kr',
        icon: <AppWindowIcon size={20} />,
    },
    {
        name: 'youtube',
        url: 'https://youtube.com/designbase',
        icon: <YoutubeIcon size={20} />,
    },
    {
        name: 'instagram',
        url: 'https://instagram.com/designbase',
        icon: <InstagramIcon size={20} />,
    },
    {
        name: 'figmaCommunity',
        url: 'https://www.figma.com/@designbasekorea',
        icon: <FigmaIcon size={20} />,
    },
    {
        name: 'contact',
        url: 'mailto:designbasekorea@gmail.com',
        icon: <MailIcon size={20} />,
    },
];

// 기본 번역 함수
const defaultTranslations: Record<string, string> = {
    officialWebsite: '공식 웹사이트',
    youtube: '유튜브',
    instagram: '인스타그램',
    figmaCommunity: '피그마 커뮤니티',
    contact: '문의하기',
};

const defaultT = (key: string) => defaultTranslations[key] || key;

export interface LogoDropdownProps {
    /** 로고 이미지 소스 (선택사항, 없으면 DesignBase 로고 사용) */
    logoSrc?: string;
    /** 로고 alt 텍스트 */
    logoAlt?: string;
    /** 로고 타입 (designbase, designbase-mark, custom) */
    logoType?: 'designbase' | 'designbase-mark' | 'custom';
    /** 로고 크기 */
    logoSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
    /** 드롭다운 링크 목록 (선택사항, 없으면 기본 링크 사용) */
    links?: LogoDropdownLink[];
    /** 드롭다운 위치 */
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    /** 추가 CSS 클래스 */
    className?: string;
    /** 다국어 지원을 위한 번역 함수 */
    t?: (key: string) => string;
}

export const LogoDropdown: React.FC<LogoDropdownProps> = ({
    logoSrc,
    logoAlt = 'DesignBase',
    logoType = 'designbase',
    logoSize = 'xs',
    links = defaultLinks, // 기본 링크 사용
    position = 'top-left',
    className,
    t = defaultT, // 기본 번역 함수 사용
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleLinkClick = (url: string) => {
        // 피그마 플러그인에서는 새 창으로 열기
        if (url.startsWith('mailto:')) {
            // 이메일 링크는 기본 동작 사용
            return;
        }

        // 외부 링크는 새 창으로 열기
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const classes = clsx(
        'designbase-figma-logo-dropdown',
        `designbase-figma-logo-dropdown--${position}`,
        {
            'designbase-figma-logo-dropdown--open': isOpen,
        },
        className
    );

    const renderLogo = () => {
        // 커스텀 이미지가 있으면 이미지 사용
        if (logoSrc) {
            return (
                <img
                    className="designbase-figma-logo-dropdown__logo"
                    src={logoSrc}
                    alt={logoAlt}
                    onClick={toggleDropdown}
                />
            );
        }

        // 없으면 DesignBase 로고 컴포넌트 사용
        return (
            <div
                className="designbase-figma-logo-dropdown__logo"
                onClick={toggleDropdown}
            >
                <Logo
                    type={logoType}
                    size={logoSize}
                    variant="default"
                />
            </div>
        );
    };

    return (
        <div className={classes}>
            {renderLogo()}
            {isOpen && (
                <ul className="designbase-figma-logo-dropdown__menu">
                    {links.map((link, index) => (
                        <li key={index} className="designbase-figma-logo-dropdown__item">
                            <button
                                type="button"
                                className="designbase-figma-logo-dropdown__link"
                                onClick={() => handleLinkClick(link.url)}
                            >
                                {link.icon && (
                                    <span className="designbase-figma-logo-dropdown__icon">
                                        {link.icon}
                                    </span>
                                )}
                                <span className="designbase-figma-logo-dropdown__text">
                                    {t(link.name)}
                                </span>
                                <ExternalLinkIcon
                                    size={16}
                                    className="designbase-figma-logo-dropdown__arrow"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

LogoDropdown.displayName = 'LogoDropdown';

export default LogoDropdown;
