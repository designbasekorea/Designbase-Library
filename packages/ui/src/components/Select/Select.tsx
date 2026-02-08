/**
 * Select 컴포넌트
 * 
 * 목적: 드롭다운 형태의 선택 컴포넌트 제공
 * 기능: 단일/다중 선택, 검색, 그룹화, 커스텀 옵션 렌더링
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from '@designbasekorea/icons';
import { Checkbox } from '../Checkbox/Checkbox';
import { SearchBar } from '../SearchBar/SearchBar';
import type { IconProps } from '@designbasekorea/icons';
import './Select.scss';

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    group?: string;
    [key: string]: any;
}

export interface SelectProps {
    /** 선택된 값 */
    value?: string | string[];
    /** 기본값 */
    defaultValue?: string | string[];
    /** 옵션 목록 */
    options: SelectOption[];
    /** 라벨 */
    label?: string;
    /** 플레이스홀더 */
    placeholder?: string;
    /** 다중 선택 여부 */
    multiple?: boolean;
    /** 검색 가능 여부 */
    searchable?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 읽기 전용 여부 */
    readOnly?: boolean;
    /** 필수 여부 */
    required?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 헬퍼 텍스트 */
    helperText?: string;
    /** 크기 */
    size?: 's' | 'm' | 'l';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 드롭다운 너비 */
    dropdownWidth?: 'auto' | 'full';
    /** 드롭다운 위치 */
    position?: 'bottom' | 'top';
    /** 최대 높이 */
    maxHeight?: number;
    /** 클리어 버튼 표시 여부 */
    showClearButton?: boolean;
    /** 모바일에서 바텀 시트로 표시 여부 */
    useMobileBottomSheet?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 값 변경 핸들러 */
    onChange?: (value: string | string[]) => void;
    /** 포커스 핸들러 */
    onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
    /** 블러 핸들러 */
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
    /** 추가 props */
    [key: string]: any;
}

export const Select: React.FC<SelectProps> = ({
    value,
    defaultValue,
    options,
    label,
    placeholder = '선택하세요',
    multiple = false,
    searchable = false,
    disabled = false,
    readOnly = false,
    required = false,
    error = false,
    errorMessage,
    helperText,
    size = 'm',
    fullWidth = false,
    dropdownWidth = 'auto',
    position = 'bottom',
    maxHeight = 200,
    showClearButton = true,
    useMobileBottomSheet = false,
    className,
    onChange,
    onFocus,
    onBlur,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | string[]>(
        value ?? defaultValue ?? (multiple ? [] : '')
    );
    const [searchTerm, setSearchTerm] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const tagsContainerRef = useRef<HTMLDivElement>(null);

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchTerm('');
                setFocusedIndex(-1);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // 키보드 네비게이션
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setIsOpen(true);
                }
                return;
            }

            switch (event.key) {
                case 'Escape':
                    event.preventDefault();
                    setIsOpen(false);
                    setSearchTerm('');
                    setFocusedIndex(-1);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    setFocusedIndex(prev => {
                        const filteredOptions = getFilteredOptions();
                        return prev < filteredOptions.length - 1 ? prev + 1 : prev;
                    });
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    setFocusedIndex(prev => prev > 0 ? prev - 1 : -1);
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (focusedIndex >= 0) {
                        const filteredOptions = getFilteredOptions();
                        const option = filteredOptions[focusedIndex];
                        if (option && !option.disabled) {
                            handleOptionSelect(option);
                        }
                    }
                    break;
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, focusedIndex, multiple, selectedValue]);

    // 값 변경 시 상태 업데이트
    useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);

    // 검색어 변경 시 포커스 인덱스 리셋
    useEffect(() => {
        setFocusedIndex(-1);
    }, [searchTerm]);

    const getFilteredOptions = useCallback(() => {
        if (!searchable || !searchTerm) return options;

        return options.filter(option =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [options, searchable, searchTerm]);

    const getSelectedLabels = useCallback(() => {
        if (multiple) {
            const selectedValues = selectedValue as string[];
            return selectedValues
                .map(value => options.find(option => option.value === value)?.label)
                .filter(Boolean)
                .join(', ');
        } else {
            const selectedValueStr = selectedValue as string;
            return options.find(option => option.value === selectedValueStr)?.label || '';
        }
    }, [selectedValue, options, multiple]);

    const handleToggle = () => {
        if (disabled || readOnly) return;
        setIsOpen(!isOpen);
        if (!isOpen && searchable) {
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    };

    const handleOptionSelect = (option: SelectOption) => {
        if (option.disabled) return;

        let newValue: string | string[];

        if (multiple) {
            const currentValues = selectedValue as string[];
            const isSelected = currentValues.includes(option.value);

            if (isSelected) {
                newValue = currentValues.filter(v => v !== option.value);
            } else {
                newValue = [...currentValues, option.value];
            }
        } else {
            newValue = option.value;
            setIsOpen(false);
            setSearchTerm('');
        }

        setSelectedValue(newValue);
        onChange?.(newValue);
    };

    const handleRemoveValue = (valueToRemove: string) => {
        if (!multiple) return;

        const currentValues = selectedValue as string[];
        const newValue = currentValues.filter(v => v !== valueToRemove);
        setSelectedValue(newValue);
        onChange?.(newValue);
    };

    const handleClearAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newValue = multiple ? [] : '';
        setSelectedValue(newValue);
        onChange?.(newValue);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const classes = clsx(
        'designbase-select',
        `designbase-select--${size}`,
        {
            'designbase-select--open': isOpen,
            'designbase-select--error': error,
            'designbase-select--disabled': disabled,
            'designbase-select--readonly': readOnly,
            'designbase-select--full-width': fullWidth,
            'designbase-select--multiple': multiple,
            'designbase-select--searchable': searchable,
        },
        className
    );

    const triggerClasses = clsx(
        'designbase-select__trigger',
        {
            'designbase-select__trigger--focused': isOpen,
            'designbase-select__trigger--searchable': searchable,
        }
    );

    const dropdownClasses = clsx(
        'designbase-select__dropdown',
        `designbase-select__dropdown--${dropdownWidth}`,
        `designbase-select__dropdown--${position}`,
        {
            'designbase-select__dropdown--open': isOpen,
            'designbase-select__dropdown--mobile-sheet': useMobileBottomSheet,
        }
    );

    const filteredOptions = getFilteredOptions();
    const selectedLabels = getSelectedLabels();
    const hasValue = multiple ? (selectedValue as string[]).length > 0 : selectedValue !== '';

    return (
        <div className={classes} ref={containerRef}>
            {label && (
                <label className="designbase-select__label">
                    {label}
                    {required && <span className="designbase-select__required">*</span>}
                </label>
            )}

            <div
                className={triggerClasses}
                onClick={handleToggle}
                onFocus={onFocus}
                onBlur={onBlur}
                tabIndex={disabled || readOnly ? -1 : 0}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-labelledby={label ? 'select-label' : undefined}
                {...props}
            >
                <div className="designbase-select__value">
                    {multiple ? (
                        <div className="designbase-select__tags" ref={tagsContainerRef}>
                            {(selectedValue as string[]).map((value) => {
                                const option = options.find(opt => opt.value === value);
                                return (
                                    <span key={value} className="designbase-select__tag">
                                        <span className="designbase-select__tag-label">
                                            {option?.label || value}
                                        </span>
                                        <button
                                            type="button"
                                            className="designbase-select__tag-remove"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveValue(value);
                                            }}
                                        >
                                            <CloseIcon size={12} />
                                        </button>
                                    </span>
                                );
                            })}
                        </div>
                    ) : (
                        <span className="designbase-select__single-value">
                            {selectedLabels || placeholder}
                        </span>
                    )}
                </div>

                <div className="designbase-select__indicators">
                    {showClearButton && hasValue && !disabled && !readOnly && (
                        <button
                            type="button"
                            className="designbase-select__clear-button"
                            onClick={handleClearAll}
                            aria-label="모든 값 지우기"
                        >
                            <CloseIcon size={16} />
                        </button>
                    )}
                    <div className="designbase-select__chevron">
                        {isOpen ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                    </div>
                </div>
            </div>

            <div className={dropdownClasses} ref={dropdownRef} >
                {searchable && (
                    <div
                        className="designbase-select__search"
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <SearchBar
                            value={searchTerm}
                            onChange={(value) => setSearchTerm(value)}
                            onSearch={(val) => setSearchTerm(val)}
                            placeholder="옵션 검색"
                            size={size}
                            variant="outlined"
                            fullWidth
                            onFocus={(e) => e.stopPropagation()}
                            onBlur={(e) => e.stopPropagation()}
                        />
                    </div>
                )}

                <div
                    className="designbase-select__options"
                    style={{ maxHeight: `${maxHeight}px` }}
                    role="listbox"
                >
                    {filteredOptions.length === 0 ? (
                        <div className="designbase-select__no-options">
                            {searchTerm ? '검색 결과가 없습니다.' : '옵션이 없습니다.'}
                        </div>
                    ) : (
                        filteredOptions.map((option, index) => {
                            const isSelected = multiple
                                ? (selectedValue as string[]).includes(option.value)
                                : selectedValue === option.value;

                            const isFocused = index === focusedIndex;

                            return (
                                <div
                                    key={option.value}
                                    className={clsx(
                                        'designbase-select__option',
                                        {
                                            'designbase-select__option--selected': isSelected,
                                            'designbase-select__option--focused': isFocused,
                                            'designbase-select__option--disabled': option.disabled,
                                        }
                                    )}
                                    onClick={() => handleOptionSelect(option)}
                                    role="option"
                                    aria-selected={isSelected}
                                >
                                    {multiple && (
                                        <div className="designbase-select__checkbox">
                                            <Checkbox
                                                isSelected={isSelected}
                                                isDisabled={option.disabled}
                                                size="s"
                                                hasLabel={false}
                                                onChange={() => handleOptionSelect(option)}
                                            />
                                        </div>
                                    )}
                                    <span className="designbase-select__option-label">
                                        {option.label}
                                    </span>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            {helperText && !error && (
                <p className="designbase-select__helper-text">{helperText}</p>
            )}

            {error && errorMessage && (
                <p className="designbase-select__error-message">{errorMessage}</p>
            )}
        </div>
    );
};

Select.displayName = 'Select';

export default Select;
