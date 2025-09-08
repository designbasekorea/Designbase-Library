import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { setTheme, getTheme, type Theme } from '@designbase/theme';
import './ThemeToggle.scss';

export interface ThemeToggleProps {
    /** 표시할 테마 옵션들 */
    themes?: Theme[];
    /** 기본 테마 */
    defaultTheme?: Theme;
    /** 컴포넌트 크기 */
    size?: 'sm' | 'md' | 'lg';
    /** 스타일 변형 */
    variant?: 'button' | 'dropdown' | 'tabs';
    /** 테마 변경 시 콜백 */
    onThemeChange?: (theme: Theme) => void;
    /** 클래스명 */
    className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
    themes = ['light', 'dark'],
    defaultTheme = 'light',
    size = 'md',
    variant = 'button',
    onThemeChange,
    className,
}) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // 초기 테마 설정
        const savedTheme = getTheme();
        if (savedTheme && themes.includes(savedTheme)) {
            setCurrentTheme(savedTheme);
        }
    }, [themes]);

    const handleThemeChange = (theme: Theme) => {
        setTheme(theme);
        setCurrentTheme(theme);
        setIsOpen(false);
        onThemeChange?.(theme);
    };

    const getThemeIcon = (theme: Theme) => {
        switch (theme) {
            case 'light':
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                );
            case 'dark':
                return (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const getThemeLabel = (theme: Theme) => {
        switch (theme) {
            case 'light':
                return '라이트';
            case 'dark':
                return '다크';
            default:
                return theme;
        }
    };

    const classes = classNames(
        'designbase-theme-toggle',
        `designbase-theme-toggle--${variant}`,
        `designbase-theme-toggle--${size}`,
        className
    );

    if (variant === 'button') {
        return (
            <div className={classes}>
                {themes.map((theme) => (
                    <button
                        key={theme}
                        className={classNames(
                            'designbase-theme-toggle__button',
                            {
                                'designbase-theme-toggle__button--active': currentTheme === theme,
                            }
                        )}
                        onClick={() => handleThemeChange(theme)}
                        title={`${getThemeLabel(theme)} 테마로 변경`}
                    >
                        {getThemeIcon(theme)}
                        <span className="designbase-theme-toggle__label">
                            {getThemeLabel(theme)}
                        </span>
                    </button>
                ))}
            </div>
        );
    }

    if (variant === 'dropdown') {
        return (
            <div className={classes}>
                <button
                    className="designbase-theme-toggle__trigger"
                    onClick={() => setIsOpen(!isOpen)}
                    title="테마 선택"
                >
                    {getThemeIcon(currentTheme)}
                    <span className="designbase-theme-toggle__label">
                        {getThemeLabel(currentTheme)}
                    </span>
                    <svg
                        className={classNames(
                            'designbase-theme-toggle__arrow',
                            { 'designbase-theme-toggle__arrow--open': isOpen }
                        )}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M7 10l5 5 5-5z" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="designbase-theme-toggle__dropdown">
                        {themes.map((theme) => (
                            <button
                                key={theme}
                                className={classNames(
                                    'designbase-theme-toggle__option',
                                    {
                                        'designbase-theme-toggle__option--active': currentTheme === theme,
                                    }
                                )}
                                onClick={() => handleThemeChange(theme)}
                            >
                                {getThemeIcon(theme)}
                                <span>{getThemeLabel(theme)}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    if (variant === 'tabs') {
        return (
            <div className={classes}>
                {themes.map((theme) => (
                    <button
                        key={theme}
                        className={classNames(
                            'designbase-theme-toggle__tab',
                            {
                                'designbase-theme-toggle__tab--active': currentTheme === theme,
                            }
                        )}
                        onClick={() => handleThemeChange(theme)}
                    >
                        {getThemeIcon(theme)}
                        <span>{getThemeLabel(theme)}</span>
                    </button>
                ))}
            </div>
        );
    }

    return null;
};

export default ThemeToggle;
