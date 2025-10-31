/**
 * Table 컴포넌트
 * 
 * 목적: 데이터를 표 형태로 표시하는 컴포넌트
 * 기능: 정렬, 필터링, 선택, 페이지네이션, 반응형 지원
 * 접근성: ARIA 가이드라인 준수, 키보드 네비게이션 지원
 */

import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import { CaretUpdownFilledIcon } from '@designbasekorea/icons';
import { Button } from '../Button/Button';
import EmptyState from '../EmptyState/EmptyState';
import { Pagination } from '../Pagination/Pagination';
import { Checkbox } from '../Checkbox/Checkbox';
import { Badge } from '../Badge/Badge';
import { Select } from '../Select/Select';
import './Table.scss';

export type TableSize = 's' | 'm' | 'l';
export type TableVariant = 'default' | 'striped' | 'bordered' | 'hoverable';
export type SortDirection = 'asc' | 'desc' | null;

export interface TableColumn<T = any> {
    /** 컬럼 키 */
    key: string;
    /** 컬럼 헤더 */
    header: string;
    /** 데이터 접근자 */
    accessor?: (item: T) => any;
    /** 정렬 가능 여부 */
    sortable?: boolean;
    /** 컬럼 너비 */
    width?: string | number;
    /** 컬럼 정렬 */
    align?: 'left' | 'center' | 'right';
    /** 커스텀 렌더러 */
    render?: (value: any, item: T, index: number) => React.ReactNode;
    /** 고정 컬럼 */
    fixed?: 'left' | 'right';
}

export interface TableProps<T = any> {
    /** 테이블 데이터 */
    data: T[];
    /** 테이블 컬럼 정의 */
    columns: TableColumn<T>[];
    /** 테이블 제목 */
    title?: string;
    /** 데이터 개수 뱃지 표시 여부 */
    showCountBadge?: boolean;
    /** 필터 기능 표시 여부 */
    showFilter?: boolean;
    /** 필터 옵션들 */
    filterOptions?: { value: string; label: string }[];
    /** 필터 변경 핸들러 */
    onFilterChange?: (filterValue: string) => void;
    /** 테이블 크기 */
    size?: TableSize;
    /** 테이블 스타일 */
    variant?: TableVariant;
    /** 선택 가능 여부 */
    selectable?: boolean;
    /** 다중 선택 가능 여부 */
    multiSelect?: boolean;
    /** 선택된 행들 */
    selectedRows?: string[];
    /** 선택 변경 핸들러 */
    onSelectionChange?: (selectedRows: string[]) => void;
    /** 정렬 가능 여부 */
    sortable?: boolean;
    /** 정렬 상태 */
    sortColumn?: string;
    /** 정렬 방향 */
    sortDirection?: SortDirection;
    /** 정렬 변경 핸들러 */
    onSortChange?: (column: string, direction: SortDirection) => void;
    /** 로딩 상태 */
    loading?: boolean;
    /** 빈 데이터 메시지 */
    emptyMessage?: string;
    /** 행 클릭 핸들러 */
    onRowClick?: (item: T, index: number) => void;
    /** 행 키 접근자 */
    rowKey?: string | ((item: T, index: number) => string);
    /** 테이블 높이 */
    height?: string | number;
    /** 스크롤 가능 여부 */
    scrollable?: boolean;
    /** 페이지네이션 사용 여부 */
    pagination?: boolean;
    /** 현재 페이지 (1-base) */
    page?: number;
    /** 페이지 크기 */
    pageSize?: number;
    /** 총 아이템 수 (서버 페이지네이션용). 미지정 시 data.length 사용 */
    totalItems?: number;
    /** 페이지 변경 핸들러 */
    onPageChange?: (page: number) => void;
    /** 페이지 크기 변경 핸들러 */
    onPageSizeChange?: (size: number) => void;
    /** 페이지 크기 옵션 */
    pageSizeOptions?: number[];
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 props */
    [key: string]: any;
}

export const Table = <T extends Record<string, any>>({
    data,
    columns,
    title,
    showCountBadge = false,
    showFilter = false,
    filterOptions = [],
    onFilterChange,
    size = 'm',
    variant = 'default',
    selectable = false,
    multiSelect = false,
    selectedRows = [],
    onSelectionChange,
    sortable = false,
    sortColumn,
    sortDirection,
    onSortChange,
    loading = false,
    emptyMessage = '데이터가 없습니다.',
    onRowClick,
    rowKey = 'id',
    height,
    scrollable = false,
    pagination = false,
    page,
    pageSize,
    totalItems,
    onPageChange,
    onPageSizeChange,
    pageSizeOptions,
    className,
    ...props
}: TableProps<T>) => {
    const [internalSelectedRows, setInternalSelectedRows] = useState<string[]>(selectedRows);
    const [internalPage, setInternalPage] = useState<number>(page || 1);
    const [internalPageSize, setInternalPageSize] = useState<number>(pageSize || 10);
    const [internalSortColumn, setInternalSortColumn] = useState<string | undefined>(sortColumn);
    const [internalSortDirection, setInternalSortDirection] = useState<SortDirection>(sortDirection ?? null);

    const getRowKey = (item: T, index: number) => {
        if (typeof rowKey === 'string') {
            return item[rowKey] || index.toString();
        }
        return rowKey(item, index);
    };

    const handleSort = (column: TableColumn<T>) => {
        if (!sortable || !column.sortable) return;

        const currentCol = effectiveSortColumn;
        const currentDir = effectiveSortDirection;
        let nextDir: SortDirection = 'asc';
        if (currentCol === column.key) {
            if (currentDir === 'asc') nextDir = 'desc';
            else if (currentDir === 'desc') nextDir = null;
            else nextDir = 'asc';
        } else {
            nextDir = 'asc';
        }

        if (onSortChange) {
            onSortChange(column.key, nextDir);
        } else {
            setInternalSortColumn(nextDir ? column.key : undefined);
            setInternalSortDirection(nextDir);
        }
    };

    const handleRowSelect = (itemRowKey: string, checked: boolean) => {
        let newSelectedRows: string[];

        if (multiSelect) {
            if (checked) {
                newSelectedRows = [...internalSelectedRows, itemRowKey];
            } else {
                newSelectedRows = internalSelectedRows.filter(key => key !== itemRowKey);
            }
        } else {
            newSelectedRows = checked ? [itemRowKey] : [];
        }

        setInternalSelectedRows(newSelectedRows);
        onSelectionChange?.(newSelectedRows);
    };

    const handleSelectAll = (checked: boolean) => {
        const allRowKeys = data.map((item, index) => getRowKey(item, index));
        const newSelectedRows = checked ? allRowKeys : [];

        setInternalSelectedRows(newSelectedRows);
        onSelectionChange?.(newSelectedRows);
    };

    const effectiveSortColumn = sortColumn !== undefined ? sortColumn : internalSortColumn;
    const effectiveSortDirection = sortDirection !== undefined ? sortDirection : internalSortDirection;

    const sortedData = useMemo(() => {
        if (!effectiveSortColumn || !effectiveSortDirection) return data;

        const column = columns.find(col => col.key === effectiveSortColumn);
        if (!column || !column.sortable) return data;

        return [...data].sort((a, b) => {
            const aValue = column.accessor ? column.accessor(a) : a[column.key];
            const bValue = column.accessor ? column.accessor(b) : b[column.key];

            if (aValue < bValue) return effectiveSortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return effectiveSortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, effectiveSortColumn, effectiveSortDirection, columns, internalSortColumn, internalSortDirection]);

    const isAllSelected = data.length > 0 && internalSelectedRows.length === data.length;
    const isIndeterminate = internalSelectedRows.length > 0 && internalSelectedRows.length < data.length;

    // 페이지네이션 계산
    const effectivePageSize = pageSize || internalPageSize;
    const total = totalItems ?? sortedData.length;
    const totalPages = Math.max(1, Math.ceil(total / effectivePageSize));
    const currentPage = Math.min(page || internalPage, totalPages);
    const startIndex = (currentPage - 1) * effectivePageSize;
    const endIndex = startIndex + effectivePageSize;
    const paginatedData = pagination ? sortedData.slice(startIndex, endIndex) : sortedData;

    const classes = clsx(
        'designbase-table',
        `designbase-table--${size}`,
        `designbase-table--${variant}`,
        {
            'designbase-table--selectable': selectable,
            'designbase-table--sortable': sortable,
            'designbase-table--scrollable': scrollable,
            'designbase-table--loading': loading,
        },
        className
    );

    const tableClasses = clsx(
        'designbase-table__table',
        {
            'designbase-table__table--scrollable': scrollable,
        }
    );

    const renderSortIcon = (column: TableColumn<T>) => {
        if (!sortable || !column.sortable) return null;

        return (
            <span className="designbase-table__sort-icon">
                <CaretUpdownFilledIcon size={14} className="designbase-table__sort-icon--idle" />
            </span>
        );
    };

    const renderCell = (column: TableColumn<T>, item: T, index: number) => {
        const value = column.accessor ? column.accessor(item) : item[column.key];

        if (column.render) {
            return column.render(value, item, index);
        }

        return value;
    };

    if (loading) {
        return (
            <div className={classes} {...props}>
                <div className="designbase-table__loading">
                    <div className="designbase-table__loading-spinner" />
                    <span>로딩 중...</span>
                </div>
            </div>
        );
    }

    return (
        <div className={classes} style={{ height }} {...props}>
            {/* 테이블 헤더 */}
            {(title || showCountBadge || showFilter) && (
                <div className="designbase-table__header">
                    <div className="designbase-table__header-left">
                        {title && (
                            <h3 className="designbase-table__title">{title}</h3>
                        )}
                        {showCountBadge && (
                            <Badge
                                count={data.length}
                                style="number"
                                variant="primary"
                                size="s"
                            />
                        )}
                    </div>
                    {showFilter && filterOptions.length > 0 && (
                        <div className="designbase-table__header-right">
                            <Select
                                placeholder="필터 선택"
                                options={filterOptions}
                                onChange={(value: string | string[]) => onFilterChange?.(Array.isArray(value) ? value[0] : value)}
                                size={size}
                                showClearButton={false}
                                searchable={false}
                                multiple={false}
                            />
                        </div>
                    )}
                </div>
            )}
            <div className="designbase-table__container">
                <table className={tableClasses}>
                    <thead className="designbase-table__thead">
                        <tr className="designbase-table__tr">
                            {selectable && (
                                <th className="designbase-table__th designbase-table__th--checkbox">
                                    <Checkbox
                                        isSelected={isAllSelected}
                                        isIndeterminate={isIndeterminate}
                                        onChange={(checked: boolean) => handleSelectAll(checked)}
                                        size="s"
                                        hasLabel={false}
                                    />
                                </th>
                            )}
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={clsx(
                                        'designbase-table__th',
                                        {
                                            'designbase-table__th--sortable': sortable && column.sortable,
                                            'designbase-table__th--sorted': sortColumn === column.key,
                                            [`designbase-table__th--${column.align || 'left'}`]: column.align,
                                            'designbase-table__th--fixed-left': column.fixed === 'left',
                                            'designbase-table__th--fixed-right': column.fixed === 'right',
                                        }
                                    )}
                                    style={{ width: column.width }}
                                    onClick={() => handleSort(column)}
                                >
                                    <div className="designbase-table__th-content">
                                        <span className="designbase-table__th-text">{column.header}</span>
                                        {renderSortIcon(column)}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="designbase-table__tbody">
                        {paginatedData.length === 0 ? (
                            <tr className="designbase-table__tr">
                                <td
                                    colSpan={columns.length + (selectable ? 1 : 0)}
                                    className="designbase-table__td designbase-table__td--empty"
                                >
                                    <EmptyState
                                        title="데이터가 없습니다"
                                        description={emptyMessage}
                                        variant="no-data"
                                        size="m"
                                    />
                                </td>
                            </tr>
                        ) : (
                            paginatedData.map((item, index) => {
                                const key = getRowKey(item, index);
                                const isSelected = internalSelectedRows.includes(key);

                                return (
                                    <tr
                                        key={key}
                                        className={clsx(
                                            'designbase-table__tr',
                                            {
                                                'designbase-table__tr--selected': isSelected,
                                                'designbase-table__tr--clickable': onRowClick,
                                            }
                                        )}
                                        onClick={() => onRowClick?.(item, index)}
                                    >
                                        {selectable && (
                                            <td className="designbase-table__td designbase-table__td--checkbox">
                                                <Checkbox
                                                    isSelected={isSelected}
                                                    onChange={(checked: boolean) => handleRowSelect(key, checked)}
                                                    size="s"
                                                    hasLabel={false}
                                                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                                                />
                                            </td>
                                        )}
                                        {columns.map((column) => (
                                            <td
                                                key={column.key}
                                                className={clsx(
                                                    'designbase-table__td',
                                                    {
                                                        [`designbase-table__td--${column.align || 'left'}`]: column.align,
                                                        'designbase-table__td--fixed-left': column.fixed === 'left',
                                                        'designbase-table__td--fixed-right': column.fixed === 'right',
                                                    }
                                                )}
                                            >
                                                {renderCell(column, item, index)}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* 푸터: 페이지네이션 */}
            {pagination && (
                <div className="designbase-table__footer">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalItems={total}
                        pageSize={effectivePageSize}
                        pageSizeOptions={pageSizeOptions || [10, 20, 50]}
                        onPageChange={(p) => { setInternalPage(p); onPageChange?.(p); }}
                        onPageSizeChange={(s) => { setInternalPage(1); setInternalPageSize(s); onPageSizeChange?.(s); onPageChange?.(1); }}
                        showPageSizeSelector
                        showTotal
                        alignment="right"
                        size={size}
                    />
                </div>
            )}
        </div>
    );
};

Table.displayName = 'Table';

export default Table;
