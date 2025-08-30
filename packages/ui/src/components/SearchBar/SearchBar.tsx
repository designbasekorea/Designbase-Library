/**
 * SearchBar 컴포넌트
 * 
 * 목적: 검색 기능을 위한 전용 입력 컴포넌트
 * 기능: 검색 아이콘, 클리어 버튼, 검색어 초기화
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { SearchIcon, CloseIcon } from '@designbase/icons';
import type { BaseIconProps } from '@designbase/icons';
import './SearchBar.scss';

export type SearchBarSize = 'sm' | 'md' | 'lg';
export type SearchBarVariant = 'default' | 'outlined' | 'filled';

export interface SearchBarProps {
    /** 검색어 값 */
    value?: string;
    /** 기본값 */
    defaultValue?: string;
    /** 플레이스홀더 텍스트 */
    placeholder?: string;
    /** 검색바 크기 */
    size?: SearchBarSize;
    /** 검색바 스타일 */
    variant?: SearchBarVariant;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 읽기 전용 상태 */
    readOnly?: boolean;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 검색 아이콘 */
    searchIcon?: React.ComponentType<BaseIconProps>;
    /** 클리어 아이콘 */
    clearIcon?: React.ComponentType<BaseIconProps>;
    /** 검색어 변경 핸들러 */
    onChange?: (value: string) => void;
    /** 검색 실행 핸들러 */
    onSearch?: (value: string) => void;
    /** 포커스 핸들러 */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 블러 핸들러 */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 키 입력 핸들러 */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    defaultValue = '',
    placeholder = '검색...',
    size = 'md',
    variant = 'default',
    disabled = false,
    readOnly = false,
    fullWidth = false,
    searchIcon: SearchIconComponent = SearchIcon,
    clearIcon: ClearIconComponent = CloseIcon,
    onChange,
    onSearch,
    onFocus,
    onBlur,
    onKeyDown,
    className,
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);

    const currentValue = value !== undefined ? value : internalValue;

    useEffect(() => {
        if (value !== undefined) {
            setInternalValue(value);
        }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInternalValue(newValue);
        onChange?.(newValue);
    };

    const handleClear = () => {
        setInternalValue('');
        onChange?.('');
        inputRef.current?.focus();
    };

    const handleSearch = () => {
        if (currentValue.trim()) {
            onSearch?.(currentValue.trim());
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
        onKeyDown?.(e);
    };

    const classes = clsx(
        'designbase-search-bar',
        `designbase-search-bar--${size}`,
        `designbase-search-bar--${variant}`,
        {
            'designbase-search-bar--disabled': disabled,
            'designbase-search-bar--readonly': readOnly,
            'designbase-search-bar--full-width': fullWidth,
            'designbase-search-bar--has-value': currentValue && currentValue.length > 0,
        },
        className
    );

    const inputClasses = clsx(
        'designbase-search-bar__input',
        {
            'designbase-search-bar__input--disabled': disabled,
            'designbase-search-bar__input--readonly': readOnly,
        }
    );

    return (
        <div className={classes} role="search">
            <div className="designbase-search-bar__container">
                {/* 검색 아이콘 */}
                <div className="designbase-search-bar__search-icon">
                    <SearchIconComponent
                        size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
                    />
                </div>

                {/* 입력 필드 */}
                <input
                    ref={inputRef}
                    type="text"
                    className={inputClasses}
                    value={currentValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={handleKeyDown}
                    aria-label="검색어 입력"
                    {...props}
                />

                {/* 클리어 버튼 */}
                {currentValue && currentValue.length > 0 && !disabled && !readOnly && (
                    <button
                        type="button"
                        className="designbase-search-bar__clear-button"
                        onClick={handleClear}
                        aria-label="검색어 지우기"
                    >
                        <ClearIconComponent
                            size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

SearchBar.displayName = 'SearchBar';

export default SearchBar;
