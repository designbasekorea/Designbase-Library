/**
 * Chip 컴포넌트
 * 
 * 목적: 작은 정보나 태그를 표시하는 컴포넌트
 * 기능: 삭제 가능, 아이콘, 색상 variant, 클릭 이벤트
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React from 'react';
import clsx from 'clsx';
import './Chip.scss';

export type ChipSize = 'sm' | 'md' | 'lg';
export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'outlined' | 'neutral';
export type ChipColor = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface ChipProps {
    /** 칩 라벨 */
    label: string;
    /** 칩 크기 */
    size?: ChipSize;
    /** 칩 스타일 */
    variant?: ChipVariant;
    /** 칩 색상 */
    color?: ChipColor;
    /** 삭제 가능 여부 */
    deletable?: boolean;
    /** 삭제 핸들러 */
    onDelete?: () => void;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 시작 아이콘 */
    startIcon?: React.ReactNode;
    /** 끝 아이콘 */
    endIcon?: React.ReactNode;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 선택 상태 */
    selected?: boolean;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Chip: React.FC<ChipProps> = ({
    label,
    size = 'md',
    variant = 'default',
    color = 'primary',
    deletable = false,
    onDelete,
    onClick,
    startIcon,
    endIcon,
    disabled = false,
    selected = false,
    fullWidth = false,
    className,
    ...props
}) => {
    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!disabled && onDelete) {
            onDelete();
        }
    };

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const classes = clsx(
        'designbase-chip',
        `designbase-chip--${size}`,
        `designbase-chip--${variant}`,
        `designbase-chip--${color}`,
        {
            'designbase-chip--deletable': deletable,
            'designbase-chip--disabled': disabled,
            'designbase-chip--selected': selected,
            'designbase-chip--clickable': onClick,
            'designbase-chip--full-width': fullWidth,
        },
        className
    );

    return (
        <div
            className={classes}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick && !disabled ? 0 : undefined}
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
            {...props}
        >
            {startIcon && (
                <span className="designbase-chip__start-icon">
                    {startIcon}
                </span>
            )}

            <span className="designbase-chip__label">
                {label}
            </span>

            {endIcon && !deletable && (
                <span className="designbase-chip__end-icon">
                    {endIcon}
                </span>
            )}

            {deletable && (
                <button
                    type="button"
                    className="designbase-chip__delete-button"
                    onClick={handleDelete}
                    disabled={disabled}
                    aria-label={`${label} 삭제`}
                >
                    <i className="designbase-icon-x" />
                </button>
            )}
        </div>
    );
};

Chip.displayName = 'Chip';

export default Chip;
