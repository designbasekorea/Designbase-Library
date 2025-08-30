/**
 * Pagination 컴포넌트
 * 
 * 목적: 데이터 목록의 페이지 네비게이션 제공
 * 기능: 페이지 번호, 이전/다음 버튼, 페이지 크기 선택, 전체 아이템 수 표시
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React from 'react';
import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon, ArrowBarLeftIcon, ArrowBarRightIcon } from '@designbase/icons';
import { Select } from '../Select/Select';
import './Pagination.scss';

export type PaginationSize = 'sm' | 'md' | 'lg';
export type PaginationVariant = 'default' | 'outlined' | 'minimal';
export type PaginationAlignment = 'left' | 'center' | 'right';

export interface PaginationProps {
    /** 현재 페이지 번호 */
    currentPage: number;
    /** 전체 페이지 수 */
    totalPages: number;
    /** 전체 아이템 수 */
    totalItems?: number;
    /** 페이지당 아이템 수 */
    pageSize?: number;
    /** 페이지 크기 옵션들 */
    pageSizeOptions?: number[];
    /** 페이지 변경 핸들러 */
    onPageChange: (page: number) => void;
    /** 페이지 크기 변경 핸들러 */
    onPageSizeChange?: (pageSize: number) => void;
    /** 페이지네이션 크기 */
    size?: PaginationSize;
    /** 페이지네이션 스타일 */
    variant?: PaginationVariant;
    /** 정렬 방식 */
    alignment?: PaginationAlignment;
    /** 표시할 페이지 번호 개수 */
    siblingCount?: number;
    /** 경계 페이지 번호 개수 */
    boundaryCount?: number;
    /** 이전/다음 버튼 텍스트 */
    showPreviousNext?: boolean;
    /** 첫/마지막 페이지 버튼 표시 */
    showFirstLast?: boolean;
    /** 페이지 크기 선택기 표시 */
    showPageSizeSelector?: boolean;
    /** 전체 아이템 수 표시 */
    showTotal?: boolean;
    /** 전체 아이템 수 템플릿 */
    totalTemplate?: (total: number, range: [number, number]) => string;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    totalItems,
    pageSize = 10,
    pageSizeOptions = [10, 20, 50, 100],
    onPageChange,
    onPageSizeChange,
    size = 'md',
    variant = 'default',
    alignment = 'center',
    siblingCount = 1,
    boundaryCount = 1,
    showPreviousNext = true,
    showFirstLast = false,
    showPageSizeSelector = false,
    showTotal = false,
    totalTemplate,
    disabled = false,
    fullWidth = false,
    className,
    ...props
}) => {
    // 페이지 범위 계산
    const getPageNumbers = () => {
        const totalNumbers = siblingCount * 2 + 3; // 이전, 다음, 현재, 경계 페이지들
        const totalBlocks = totalNumbers + 2; // 첫/마지막 페이지 버튼

        if (totalPages <= totalBlocks) {
            // 전체 페이지가 적은 경우 모든 페이지 번호 표시
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, boundaryCount);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - boundaryCount + 1);

        const shouldShowLeftDots = leftSiblingIndex > boundaryCount + 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - boundaryCount - 1;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, '...', totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = Array.from(
                { length: rightItemCount },
                (_, i) => totalPages - rightItemCount + i + 1
            );
            return [1, '...', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = Array.from(
                { length: rightSiblingIndex - leftSiblingIndex + 1 },
                (_, i) => leftSiblingIndex + i
            );
            return [1, '...', ...middleRange, '...', totalPages];
        }

        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };

    const handlePageClick = (page: number) => {
        if (disabled || page === currentPage || page < 1 || page > totalPages) {
            return;
        }
        onPageChange(page);
    };

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onPageSizeChange) {
            onPageSizeChange(Number(e.target.value));
        }
    };

    const getTotalTemplate = () => {
        if (!totalItems) return '';

        const start = (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalItems);

        if (totalTemplate) {
            return totalTemplate(totalItems, [start, end]);
        }

        return `${start}-${end} / ${totalItems}개`;
    };

    const pageNumbers = getPageNumbers();
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const classes = clsx(
        'designbase-pagination',
        `designbase-pagination--${size}`,
        `designbase-pagination--${variant}`,
        `designbase-pagination--${alignment}`,
        {
            'designbase-pagination--disabled': disabled,
            'designbase-pagination--full-width': fullWidth,
        },
        className
    );

    const containerClasses = clsx(
        'designbase-pagination__container',
        {
            'designbase-pagination__container--full-width': fullWidth,
        }
    );

    const renderPageButton = (page: number | string, index: number) => {
        if (page === '...') {
            return (
                <li key={`ellipsis-${index}`} className="designbase-pagination__ellipsis">
                    <span className="designbase-pagination__ellipsis-text">...</span>
                </li>
            );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
            <li key={pageNumber} className="designbase-pagination__item">
                <button
                    className={clsx(
                        'designbase-pagination__button',
                        {
                            'designbase-pagination__button--active': isActive,
                        }
                    )}
                    onClick={() => handlePageClick(pageNumber)}
                    disabled={disabled}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`페이지 ${pageNumber}로 이동`}
                >
                    {pageNumber}
                </button>
            </li>
        );
    };

    return (
        <div className={classes} role="navigation" aria-label="페이지 네비게이션" {...props}>
            <div className={containerClasses}>
                {/* 전체 아이템 수 표시 */}
                {showTotal && totalItems && (
                    <div className="designbase-pagination__total">
                        {getTotalTemplate()}
                    </div>
                )}

                {/* 페이지네이션 버튼들 */}
                <nav className="designbase-pagination__nav" aria-label="페이지 네비게이션">
                    <ul className="designbase-pagination__list">
                        {/* 첫 페이지 버튼 */}
                        {showFirstLast && !isFirstPage && (
                            <li className="designbase-pagination__item">
                                <button
                                    className="designbase-pagination__button designbase-pagination__button--first"
                                    onClick={() => handlePageClick(1)}
                                    disabled={disabled}
                                    aria-label="첫 페이지로 이동"
                                >
                                    <ArrowBarLeftIcon size={16} />
                                </button>
                            </li>
                        )}

                        {/* 이전 페이지 버튼 */}
                        {showPreviousNext && !isFirstPage && (
                            <li className="designbase-pagination__item">
                                <button
                                    className="designbase-pagination__button designbase-pagination__button--previous"
                                    onClick={() => handlePageClick(currentPage - 1)}
                                    disabled={disabled}
                                    aria-label="이전 페이지로 이동"
                                >
                                    <ChevronLeftIcon size={16} />
                                </button>
                            </li>
                        )}

                        {/* 페이지 번호들 */}
                        {pageNumbers.map(renderPageButton)}

                        {/* 다음 페이지 버튼 */}
                        {showPreviousNext && !isLastPage && (
                            <li className="designbase-pagination__item">
                                <button
                                    className="designbase-pagination__button designbase-pagination__button--next"
                                    onClick={() => handlePageClick(currentPage + 1)}
                                    disabled={disabled}
                                    aria-label="다음 페이지로 이동"
                                >
                                    <ChevronRightIcon size={16} />
                                </button>
                            </li>
                        )}

                        {/* 마지막 페이지 버튼 */}
                        {showFirstLast && !isLastPage && (
                            <li className="designbase-pagination__item">
                                <button
                                    className="designbase-pagination__button designbase-pagination__button--last"
                                    onClick={() => handlePageClick(totalPages)}
                                    disabled={disabled}
                                    aria-label="마지막 페이지로 이동"
                                >
                                    <ArrowBarRightIcon size={16} />
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>

                {/* 페이지 크기 선택기 */}
                {showPageSizeSelector && onPageSizeChange && (
                    <div className="designbase-pagination__page-size">
                        <label className="designbase-pagination__page-size-label">
                            페이지당:
                            <Select
                                value={pageSize.toString()}
                                options={pageSizeOptions.map(option => ({
                                    value: option.toString(),
                                    label: option.toString()
                                }))}
                                onChange={(value) => {
                                    const newValue = Array.isArray(value) ? value[0] : value;
                                    const parsedValue = parseInt(newValue);
                                    if (!isNaN(parsedValue)) {
                                        onPageSizeChange(parsedValue);
                                    }
                                }}
                                disabled={disabled}
                                size={size}
                                className="designbase-pagination__page-size-select"
                                searchable={false}
                                multiple={false}
                                showClearButton={false}
                            />
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

Pagination.displayName = 'Pagination';

export default Pagination;
