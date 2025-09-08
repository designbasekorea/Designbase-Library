import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'minimal'],
        },
        alignment: {
            control: { type: 'select' },
            options: ['left', 'center', 'right'],
        },
        showPreviousNext: {
            control: { type: 'boolean' },
        },
        showFirstLast: {
            control: { type: 'boolean' },
        },
        showPageSizeSelector: {
            control: { type: 'boolean' },
        },
        showTotal: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
        onPageChange: (page: number) => console.log('Page changed to:', page),
    },
};

export const WithTotal: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
        totalItems: 100,
        showTotal: true,
        onPageChange: (page: number) => console.log('Page changed to:', page),
    },
};

export const WithPageSizeSelector: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
        totalItems: 100,
        pageSize: 10,
        pageSizeOptions: [5, 10, 20, 50],
        showPageSizeSelector: true,
        onPageChange: (page: number) => console.log('Page changed to:', page),
        onPageSizeChange: (pageSize: number) => console.log('Page size changed to:', pageSize),
    },
};

export const WithFirstLastButtons: Story = {
    args: {
        currentPage: 5,
        totalPages: 10,
        showFirstLast: true,
        onPageChange: (page: number) => console.log('Page changed to:', page),
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Small Size</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    size="sm"
                    onPageChange={(page: number) => console.log('Page changed to:', page)}
                />
            </div>
            <div>
                <h3>Medium Size (Default)</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    size="md"
                    onPageChange={(page: number) => console.log('Page changed to:', page)}
                />
            </div>
            <div>
                <h3>Large Size</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    size="lg"
                    onPageChange={(page: number) => console.log('Page changed to:', page)}
                />
            </div>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Default Variant</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    variant="default"
                    onPageChange={(page: number) => console.log('Page changed to:', page)}
                />
            </div>
            <div>
                <h3>Outlined Variant</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    variant="outlined"
                    onPageChange={(page: number) => console.log('Page changed to:', page)}
                />
            </div>
            <div>
                <h3>Minimal Variant</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    variant="minimal"
                    onPageChange={(page: number) => console.log('Page changed to:', page)}
                />
            </div>
        </div>
    ),
};

export const Alignments: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Left Alignment</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    alignment="left"
                    onPageChange={(page) => console.log('Page changed to:', page)}
                />
            </div>
            <div>
                <h3>Center Alignment (Default)</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    alignment="center"
                    onPageChange={(page) => console.log('Page changed to:', page)}
                />
            </div>
            <div>
                <h3>Right Alignment</h3>
                <Pagination
                    currentPage={1}
                    totalPages={10}
                    alignment="right"
                    onPageChange={(page) => console.log('Page changed to:', page)}
                />
            </div>
        </div>
    ),
};

export const ManyPages: Story = {
    args: {
        currentPage: 50,
        totalPages: 100,
        totalItems: 1000,
        showTotal: true,
        onPageChange: (page: number) => console.log('Page changed to:', page),
    },
};

export const FewPages: Story = {
    args: {
        currentPage: 1,
        totalPages: 3,
        totalItems: 30,
        showTotal: true,
        onPageChange: (page: number) => console.log('Page changed to:', page),
    },
};

export const Disabled: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
        disabled: true,
        onPageChange: (page: number) => console.log('Page changed to:', page),
    },
};

export const FullWidth: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
        totalItems: 100,
        showTotal: true,
        showPageSizeSelector: true,
        fullWidth: true,
        onPageChange: (page: number) => console.log('Page changed to:', page),
        onPageSizeChange: (pageSize: number) => console.log('Page size changed to:', pageSize),
    },
};

export const CustomTotalTemplate: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
        totalItems: 100,
        showTotal: true,
        totalTemplate: (total: number, range: [number, number]) =>
            `총 ${total}개 중 ${range[0]}번째부터 ${range[1]}번째까지 표시`,
        onPageChange: (page: number) => console.log('Page changed to:', page),
    },
};

export const Interactive: Story = {
    render: () => {
        const [currentPage, setCurrentPage] = useState(1);
        const [pageSize, setPageSize] = useState(10);
        const totalItems = 100;
        const totalPages = Math.ceil(totalItems / pageSize);

        const handlePageChange = (page: number) => {
            setCurrentPage(page);
            console.log('Page changed to:', page);
        };

        const handlePageSizeChange = (newPageSize: number) => {
            setPageSize(newPageSize);
            setCurrentPage(1); // 페이지 크기가 변경되면 첫 페이지로 이동
            console.log('Page size changed to:', newPageSize);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>인터랙티브 페이지네이션</h3>
                    <p>현재 페이지: <strong>{currentPage}</strong></p>
                    <p>페이지 크기: <strong>{pageSize}</strong></p>
                    <p>전체 아이템: <strong>{totalItems}</strong></p>
                    <p>전체 페이지: <strong>{totalPages}</strong></p>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    pageSize={pageSize}
                    pageSizeOptions={[5, 10, 20, 50]}
                    showTotal={true}
                    showPageSizeSelector={true}
                    showFirstLast={true}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                />
            </div>
        );
    },
};

export const DataTableExample: Story = {
    render: () => {
        const [currentPage, setCurrentPage] = useState(1);
        const [pageSize, setPageSize] = useState(10);

        // 샘플 데이터
        const allData = Array.from({ length: 100 }, (_, i) => ({
            id: i + 1,
            name: `사용자 ${i + 1}`,
            email: `user${i + 1}@example.com`,
            role: i % 3 === 0 ? '관리자' : i % 3 === 1 ? '편집자' : '뷰어',
        }));

        const totalItems = allData.length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const currentData = allData.slice(startIndex, endIndex);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>데이터 테이블 예제</h3>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginBottom: '20px'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f3f4f6' }}>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb' }}>ID</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb' }}>이름</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb' }}>이메일</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #e5e7eb' }}>역할</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item) => (
                                <tr key={item.id}>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>{item.id}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>{item.name}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>{item.email}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    pageSize={pageSize}
                    pageSizeOptions={[5, 10, 20, 50]}
                    showTotal={true}
                    showPageSizeSelector={true}
                    showFirstLast={true}
                    fullWidth={true}
                    onPageChange={setCurrentPage}
                    onPageSizeChange={(newPageSize) => {
                        setPageSize(newPageSize);
                        setCurrentPage(1);
                    }}
                />
            </div>
        );
    },
};

export const ResponsiveExample: Story = {
    render: () => (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px'
        }}>
            <h3>반응형 예제</h3>
            <p>화면 크기를 조절해보세요. 모바일에서는 페이지네이션이 세로로 배치됩니다.</p>
            <Pagination
                currentPage={1}
                totalPages={10}
                totalItems={100}
                showTotal={true}
                showPageSizeSelector={true}
                onPageChange={(page) => console.log('Page changed to:', page)}
                onPageSizeChange={(pageSize) => console.log('Page size changed to:', pageSize)}
            />
        </div>
    ),
};
