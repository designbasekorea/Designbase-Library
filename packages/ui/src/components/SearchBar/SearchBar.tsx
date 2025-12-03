/**
 * SearchBar 컴포넌트
 * 
 * 목적: 검색 기능을 위한 전용 입력 컴포넌트
 * 기능: 검색 아이콘, 클리어 버튼, 검색어 초기화
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { SearchIcon, CloseIcon } from '@designbasekorea/icons';
import type { IconProps } from '@designbasekorea/icons';
import './SearchBar.scss';

export type SearchBarSize = 's' | 'm' | 'l';
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
    searchIcon?: React.ComponentType<IconProps>;
    /** 클리어 아이콘 */
    clearIcon?: React.ComponentType<IconProps>;
    /** 최근 검색어 저장 여부 */
    enableRecentSearches?: boolean;
    /** 최근 검색어 저장 키 (로컬스토리지) */
    recentSearchesKey?: string;
    /** 추천 검색어 목록 */
    suggestedSearches?: string[];
    /** 추천 검색어 롤링 간격 (ms) */
    suggestionRollingInterval?: number;
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
    size = 'm',
    variant = 'default',
    disabled = false,
    readOnly = false,
    fullWidth = false,
    searchIcon: SearchIconComponent = SearchIcon,
    clearIcon: ClearIconComponent = CloseIcon,
    enableRecentSearches = false,
    recentSearchesKey = 'searchbar-recent-searches',
    suggestedSearches = [],
    suggestionRollingInterval = 5000,
    onChange,
    onSearch,
    onFocus,
    onBlur,
    onKeyDown,
    className,
    ...rest
}) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const [showRecentSearches, setShowRecentSearches] = useState(false);
    const [currentSuggestion, setCurrentSuggestion] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const currentValue = value !== undefined ? value : internalValue;

    // 최근 검색어 로드
    useEffect(() => {
        if (enableRecentSearches) {
            try {
                const stored = localStorage.getItem(recentSearchesKey);
                if (stored) {
                    setRecentSearches(JSON.parse(stored));
                }
            } catch (error) {
                console.warn('최근 검색어를 불러올 수 없습니다:', error);
            }
        }
    }, [enableRecentSearches, recentSearchesKey]);

    // 추천 검색어 롤링 (value가 없을 때만)
    useEffect(() => {
        if (suggestedSearches.length > 0 && !currentValue && currentValue === '') {
            suggestionIntervalRef.current = setInterval(() => {
                setCurrentSuggestion(prev => (prev + 1) % suggestedSearches.length);
            }, suggestionRollingInterval);
        } else {
            if (suggestionIntervalRef.current) {
                clearInterval(suggestionIntervalRef.current);
                suggestionIntervalRef.current = null;
            }
        }

        return () => {
            if (suggestionIntervalRef.current) {
                clearInterval(suggestionIntervalRef.current);
            }
        };
    }, [suggestedSearches.length, currentValue, suggestionRollingInterval]);

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

    const handleSearch = (searchValue?: string) => {
        const searchTerm = searchValue || currentValue.trim();
        if (searchTerm) {
            onSearch?.(searchTerm);

            // 최근 검색어 저장
            if (enableRecentSearches) {
                const newRecentSearches = [
                    searchTerm,
                    ...recentSearches.filter(item => item !== searchTerm)
                ].slice(0, 10); // 최대 10개

                setRecentSearches(newRecentSearches);
                try {
                    localStorage.setItem(recentSearchesKey, JSON.stringify(newRecentSearches));
                } catch (error) {
                    console.warn('최근 검색어를 저장할 수 없습니다:', error);
                }
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
        onKeyDown?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        setShowRecentSearches(enableRecentSearches && recentSearches.length > 0);
        onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        // 약간의 지연을 두어 클릭 이벤트가 처리되도록 함
        setTimeout(() => {
            setShowRecentSearches(false);
        }, 200);
        onBlur?.(e);
    };

    const handleRecentSearchClick = (searchTerm: string) => {
        setInternalValue(searchTerm);
        onChange?.(searchTerm);
        setShowRecentSearches(false);
        handleSearch(searchTerm);
    };

    const handleRemoveRecentSearch = (searchTerm: string) => {
        const newRecentSearches = recentSearches.filter(item => item !== searchTerm);
        setRecentSearches(newRecentSearches);
        try {
            localStorage.setItem(recentSearchesKey, JSON.stringify(newRecentSearches));
        } catch (error) {
            console.warn('최근 검색어를 삭제할 수 없습니다:', error);
        }
    };

    const handleClearAllRecentSearches = () => {
        setRecentSearches([]);
        try {
            localStorage.removeItem(recentSearchesKey);
        } catch (error) {
            console.warn('최근 검색어를 모두 삭제할 수 없습니다:', error);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInternalValue(suggestion);
        onChange?.(suggestion);
        // 롤링 중단
        if (suggestionIntervalRef.current) {
            clearInterval(suggestionIntervalRef.current);
            suggestionIntervalRef.current = null;
        }
        handleSearch(suggestion);
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

    // 현재 플레이스홀더 (value가 없을 때만 추천 검색어 롤링)
    const currentPlaceholder = suggestedSearches.length > 0 && !currentValue && currentValue === ''
        ? suggestedSearches[currentSuggestion]
        : placeholder;

    return (
        <div className={classes} role="search">
            <div className="designbase-search-bar__container">
                {/* 검색 아이콘 */}
                <div className="designbase-search-bar__search-icon">
                    <SearchIconComponent
                        size={size === 's' ? 16 : size === 'l' ? 24 : 20}
                    />
                </div>

                {/* 입력 필드 */}
                <input
                    ref={inputRef}
                    type="text"
                    className={inputClasses}
                    value={currentValue}
                    placeholder={currentPlaceholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    aria-label="검색어 입력"
                    {...rest}
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
                            size={size === 's' ? 16 : size === 'l' ? 24 : 20}
                        />
                    </button>
                )}
            </div>

            {/* 최근 검색어 드롭다운 */}
            {showRecentSearches && recentSearches.length > 0 && (
                <div className="designbase-search-bar__recent-searches">
                    <div className="designbase-search-bar__recent-header">
                        <span className="designbase-search-bar__recent-title">최근 검색어</span>
                        <button
                            type="button"
                            className="designbase-search-bar__clear-all-button"
                            onClick={handleClearAllRecentSearches}
                            aria-label="모든 최근 검색어 삭제"
                        >
                            전체 삭제
                        </button>
                    </div>
                    <div className="designbase-search-bar__recent-list">
                        {recentSearches.map((searchTerm, index) => (
                            <div key={index} className="designbase-search-bar__recent-item">
                                <button
                                    type="button"
                                    className="designbase-search-bar__recent-search-button"
                                    onClick={() => handleRecentSearchClick(searchTerm)}
                                >
                                    {searchTerm}
                                </button>
                                <button
                                    type="button"
                                    className="designbase-search-bar__recent-remove-button"
                                    onClick={() => handleRemoveRecentSearch(searchTerm)}
                                    aria-label={`${searchTerm} 삭제`}
                                >
                                    <CloseIcon size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 추천 검색어 (포커스 시에만 표시) */}
            {suggestedSearches.length > 0 && isFocused && !currentValue && (
                <div className="designbase-search-bar__suggestions">
                    <div className="designbase-search-bar__suggestions-header">
                        <span className="designbase-search-bar__suggestions-title">추천 검색어</span>
                    </div>
                    <div className="designbase-search-bar__suggestions-list">
                        {suggestedSearches.map((suggestion, index) => (
                            <button
                                key={index}
                                type="button"
                                className={clsx(
                                    'designbase-search-bar__suggestion-item',
                                    {
                                        'designbase-search-bar__suggestion-item--active': index === currentSuggestion
                                    }
                                )}
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

SearchBar.displayName = 'SearchBar';

export default SearchBar;
