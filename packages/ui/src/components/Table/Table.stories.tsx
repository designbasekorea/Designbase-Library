import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { useState, useMemo } from 'react';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'striped', 'bordered', 'hoverable'],
        },
        selectable: {
            control: { type: 'boolean' },
        },
        multiSelect: {
            control: { type: 'boolean' },
        },
        sortable: {
            control: { type: 'boolean' },
        },
        loading: {
            control: { type: 'boolean' },
        },
        scrollable: {
            control: { type: 'boolean' },
        },
        onSelectionChange: {
            action: 'selection changed',
        },
        onSortChange: {
            action: 'sort changed',
        },
        onRowClick: {
            action: 'row clicked',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    lastLogin: string;
    description: string;
    department: string;
    phone: string;
}

const makeUsers = (count: number): User[] => {
    const roles = ['관리자', '사용자', '편집자'];
    const statuses: User['status'][] = ['active', 'inactive', 'pending'];
    const departments = ['개발팀', '디자인팀', '마케팅팀', '영업팀', '인사팀'];
    const users: User[] = [];
    for (let i = 1; i <= count; i++) {
        users.push({
            id: String(i),
            name: `사용자 ${i}`,
            email: `user${i}@example.com`,
            role: roles[i % roles.length],
            status: statuses[i % statuses.length],
            lastLogin: `2024-01-${String((i % 28) + 1).padStart(2, '0')}`,
            description: `이것은 사용자 ${i}에 대한 상세한 설명입니다. 매우 긴 텍스트가 들어가서 테이블의 가로 스크롤을 테스트할 수 있습니다.`,
            department: departments[i % departments.length],
            phone: `010-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
        });
    }
    return users;
};

const sampleData: User[] = makeUsers(50);

const columns = [
    { key: 'name', header: '이름', sortable: true, width: '150px' },
    { key: 'email', header: '이메일', sortable: true, width: '200px' },
    { key: 'role', header: '역할', sortable: true, width: '120px' },
    { key: 'status', header: '상태', sortable: true, width: '100px' },
    { key: 'lastLogin', header: '마지막 로그인', sortable: true, width: '150px' },
    { key: 'description', header: '설명', sortable: true, width: '300px' },
    { key: 'department', header: '부서', sortable: true, width: '150px' },
    { key: 'phone', header: '전화번호', sortable: true, width: '150px' },
];

export const Default: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        const [pageSize, setPageSize] = useState(10);
        const totalItems = sampleData.length;
        const paged = useMemo(() => {
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            return sampleData.slice(start, end);
        }, [page, pageSize]);

        return (
            <Table
                data={paged}
                columns={columns}
                rowKey="id"
                pagination
                page={page}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={setPage}
                onPageSizeChange={(size) => { setPage(1); setPageSize(size); }}
                pageSizeOptions={[5, 10, 20]}
            />
        );
    },
};

export const WithHeader: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        const [pageSize, setPageSize] = useState(10);
        const totalItems = sampleData.length;
        const paged = useMemo(() => sampleData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize), [page, pageSize]);
        return (
            <Table
                data={paged}
                columns={columns}
                rowKey="id"
                title="사용자 목록"
                showCountBadge
                showFilter
                filterOptions={[
                    { value: 'all', label: '전체' },
                    { value: 'active', label: '활성' },
                    { value: 'inactive', label: '비활성' },
                    { value: 'pending', label: '대기' },
                ]}
                pagination
                page={page}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={setPage}
                onPageSizeChange={(size) => { setPage(1); setPageSize(size); }}
                pageSizeOptions={[5, 10, 20]}
            />
        );
    },
};

// 불필요한 다양한 예제 제거(간소화)

export const Interactive: Story = {
    render: () => {
        const [selectedRows, setSelectedRows] = useState<string[]>([]);
        const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
        const [page, setPage] = useState(1);
        const [pageSize, setPageSize] = useState(10);
        const totalItems = sampleData.length;
        const paged = useMemo(() => sampleData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize), [page, pageSize]);

        return (
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <p>선택된 행: {selectedRows.join(', ') || '없음'}</p>
                    <p>정렬: {sortConfig ? `${sortConfig.key} (${sortConfig.direction})` : '없음'}</p>
                </div>
                <Table
                    data={paged}
                    columns={columns}
                    rowKey="id"
                    selectable
                    multiSelect
                    sortable
                    variant="hoverable"
                    pagination
                    page={page}
                    pageSize={pageSize}
                    totalItems={totalItems}
                    onPageChange={setPage}
                    onPageSizeChange={(size) => { setPage(1); setPageSize(size); }}
                    pageSizeOptions={[5, 10, 20]}
                    selectedRows={selectedRows}
                    onSelectionChange={setSelectedRows}
                    onSortChange={(column, direction) => setSortConfig({ key: column, direction: direction || 'asc' })}
                    onRowClick={(row) => alert(`클릭된 행: ${row.name}`)}
                />
            </div>
        );
    },
};

// 기타 예제 제거(간소화)
