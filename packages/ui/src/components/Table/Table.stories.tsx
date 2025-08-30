import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { useState } from 'react';

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
            options: ['sm', 'md', 'lg'],
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
}

const sampleData: User[] = [
    {
        id: '1',
        name: '김철수',
        email: 'kim@example.com',
        role: '관리자',
        status: 'active',
        lastLogin: '2024-01-15',
    },
    {
        id: '2',
        name: '이영희',
        email: 'lee@example.com',
        role: '사용자',
        status: 'active',
        lastLogin: '2024-01-14',
    },
    {
        id: '3',
        name: '박민수',
        email: 'park@example.com',
        role: '편집자',
        status: 'inactive',
        lastLogin: '2024-01-10',
    },
    {
        id: '4',
        name: '정수진',
        email: 'jung@example.com',
        role: '사용자',
        status: 'pending',
        lastLogin: '2024-01-12',
    },
    {
        id: '5',
        name: '최동현',
        email: 'choi@example.com',
        role: '관리자',
        status: 'active',
        lastLogin: '2024-01-13',
    },
];

const columns = [
    { key: 'name', header: '이름', sortable: true },
    { key: 'email', header: '이메일', sortable: true },
    { key: 'role', header: '역할', sortable: true },
    { key: 'status', header: '상태', sortable: true },
    { key: 'lastLogin', header: '마지막 로그인', sortable: true },
];

export const Default: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
    },
};

export const WithHeader: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
        title: '사용자 목록',
        showCountBadge: true,
        showFilter: true,
        filterOptions: [
            { value: 'all', label: '전체' },
            { value: 'active', label: '활성' },
            { value: 'inactive', label: '비활성' },
            { value: 'pending', label: '대기' },
        ],
        onFilterChange: (value) => console.log('Filter changed:', value),
    },
};

export const WithSelection: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
        selectable: true,
    },
};

export const MultiSelect: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
        selectable: true,
        multiSelect: true,
    },
};

export const Sortable: Story = {
    args: {
        data: sampleData,
        columns: [
            { key: 'name', header: '이름', sortable: true },
            { key: 'email', header: '이메일', sortable: true },
            { key: 'role', header: '역할', sortable: true },
            { key: 'status', header: '상태', sortable: true },
            { key: 'lastLogin', header: '마지막 로그인', sortable: true },
        ],
        rowKey: 'id',
        sortable: true,
    },
};

export const Striped: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
        variant: 'striped',
    },
};

export const Bordered: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
        variant: 'bordered',
    },
};

export const Hoverable: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
        variant: 'hoverable',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Small</h3>
                <Table data={sampleData} columns={columns} rowKey="id" size="sm" />
            </div>
            <div>
                <h3>Medium</h3>
                <Table data={sampleData} columns={columns} rowKey="id" size="md" />
            </div>
            <div>
                <h3>Large</h3>
                <Table data={sampleData} columns={columns} rowKey="id" size="lg" />
            </div>
        </div>
    ),
};

export const Loading: Story = {
    args: {
        data: [],
        columns,
        rowKey: 'id',
        loading: true,
    },
};

export const Empty: Story = {
    args: {
        data: [],
        columns,
        rowKey: 'id',
        emptyMessage: '데이터가 없습니다.',
    },
};

export const Scrollable: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
        scrollable: true,
        height: '300px',
    },
};

export const Interactive: Story = {
    render: () => {
        const [selectedRows, setSelectedRows] = useState<string[]>([]);
        const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

        return (
            <div>
                <div style={{ marginBottom: '16px' }}>
                    <p>선택된 행: {selectedRows.join(', ') || '없음'}</p>
                    <p>정렬: {sortConfig ? `${sortConfig.key} (${sortConfig.direction})` : '없음'}</p>
                </div>
                <Table
                    data={sampleData}
                    columns={columns}
                    rowKey="id"
                    selectable
                    multiSelect
                    sortable
                    variant="hoverable"
                    selectedRows={selectedRows}
                    onSelectionChange={setSelectedRows}
                    onSortChange={setSortConfig}
                    onRowClick={(row) => alert(`클릭된 행: ${row.name}`)}
                />
            </div>
        );
    },
};

export const CustomRowKey: Story = {
    args: {
        data: sampleData.map(item => ({ ...item, customKey: `user-${item.id}` })),
        columns,
        rowKey: 'customKey',
    },
};

export const FixedColumns: Story = {
    args: {
        data: sampleData,
        columns: [
            { key: 'name', label: '이름', sortable: true, fixed: 'left' },
            { key: 'email', label: '이메일', sortable: true },
            { key: 'role', label: '역할', sortable: true },
            { key: 'status', label: '상태', sortable: true },
            { key: 'lastLogin', label: '마지막 로그인', sortable: true, fixed: 'right' },
        ],
        rowKey: 'id',
        scrollable: true,
        height: '300px',
    },
};

export const DataTableExample: Story = {
    render: () => {
        const [currentPage, setCurrentPage] = useState(1);
        const [pageSize, setPageSize] = useState(10);
        const [selectedRows, setSelectedRows] = useState<string[]>([]);

        // Simulate pagination
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedData = sampleData.slice(startIndex, endIndex);

        return (
            <div>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>사용자 관리</h3>
                    <div>
                        <button style={{ marginRight: '8px' }}>새 사용자 추가</button>
                        <button disabled={selectedRows.length === 0}>선택 삭제</button>
                    </div>
                </div>
                <Table
                    data={paginatedData}
                    columns={columns}
                    rowKey="id"
                    selectable
                    multiSelect
                    sortable
                    variant="striped"
                    selectedRows={selectedRows}
                    onSelectionChange={setSelectedRows}
                />
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>총 {sampleData.length}개 항목</span>
                    <div>
                        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                            <option value={5}>5개씩</option>
                            <option value={10}>10개씩</option>
                            <option value={20}>20개씩</option>
                        </select>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            style={{ marginLeft: '8px' }}
                        >
                            이전
                        </button>
                        <span style={{ margin: '0 8px' }}>{currentPage}</span>
                        <button
                            disabled={endIndex >= sampleData.length}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            다음
                        </button>
                    </div>
                </div>
            </div>
        );
    },
};

export const ResponsiveExample: Story = {
    args: {
        data: sampleData,
        columns,
        rowKey: 'id',
        variant: 'bordered',
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
