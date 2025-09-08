import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';
import { HomeOutlineIcon, ChevronRightIcon } from '@designbase/icons';

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        breadcrumbStyle: {
            control: { type: 'select' },
            options: ['default', 'contained', 'underlined'],
        },
        separator: {
            control: { type: 'text' },
        },
        maxItems: {
            control: { type: 'number', min: 2, max: 10 },
        },
        onItemClick: {
            action: 'item clicked',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    { id: 'home', label: '홈', href: '/', icon: <HomeOutlineIcon /> },
    { id: 'products', label: '제품', href: '/products' },
    { id: 'category', label: '카테고리', href: '/products/category' },
    { id: 'subcategory', label: '서브카테고리', href: '/products/category/subcategory' },
    { id: 'product', label: '제품 상세', href: '/products/category/subcategory/product' },
];

const sampleItemsWithIcons = [
    { id: 'home', label: '홈', href: '/', icon: <HomeOutlineIcon /> },
    { id: 'products', label: '제품', href: '/products', icon: <HomeOutlineIcon /> },
    { id: 'category', label: '카테고리', href: '/products/category', icon: <HomeOutlineIcon /> },
    { id: 'subcategory', label: '서브카테고리', href: '/products/category/subcategory', icon: <HomeOutlineIcon /> },
    { id: 'product', label: '제품 상세', href: '/products/category/subcategory/product', icon: <HomeOutlineIcon /> },
];

// 모든 스타일을 보여주는 스토리
export const AllStyles: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Default Style</h3>
                <Breadcrumbs items={sampleItems} breadcrumbStyle="default" />
            </div>
            <div>
                <h3>Contained Style</h3>
                <Breadcrumbs items={sampleItems} breadcrumbStyle="contained" />
            </div>
            <div>
                <h3>Underlined Style</h3>
                <Breadcrumbs items={sampleItems} breadcrumbStyle="underlined" />
            </div>
        </div>
    ),
};

// 모든 크기를 보여주는 스토리
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Small Size</h3>
                <Breadcrumbs items={sampleItems} size="sm" />
            </div>
            <div>
                <h3>Medium Size</h3>
                <Breadcrumbs items={sampleItems} size="md" />
            </div>
            <div>
                <h3>Large Size</h3>
                <Breadcrumbs items={sampleItems} size="lg" />
            </div>
        </div>
    ),
};

// 모든 타입을 보여주는 스토리
export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>기본 Breadcrumbs</h3>
                <Breadcrumbs items={sampleItems} />
            </div>

            <div>
                <h3>아이콘이 있는 Breadcrumbs</h3>
                <Breadcrumbs items={sampleItemsWithIcons} />
            </div>

            <div>
                <h3>커스텀 구분자</h3>
                <Breadcrumbs items={sampleItems} separator=">" />
            </div>

            <div>
                <h3>축약된 Breadcrumbs (최대 3개)</h3>
                <Breadcrumbs items={sampleItems} maxItems={3} />
            </div>

            <div>
                <h3>상호작용 가능한 Breadcrumbs</h3>
                <Breadcrumbs
                    items={sampleItems}
                    onItemClick={(item) => {
                        console.log('Clicked:', item);
                        alert(`Clicked: ${item.label}`);
                    }}
                />
            </div>
        </div>
    ),
};

// 실제 사용 예시들을 보여주는 스토리
export const Examples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>웹사이트 네비게이션</h3>
                <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
                    <Breadcrumbs
                        items={sampleItems}
                        onItemClick={(item) => console.log('Navigating to:', item.href)}
                    />
                </div>
            </div>

            <div>
                <h3>쇼핑몰 제품 페이지</h3>
                <div style={{ padding: '20px' }}>
                    <Breadcrumbs
                        items={[
                            { id: 'home', label: '홈', href: '/' },
                            { id: 'fashion', label: '패션', href: '/fashion' },
                            { id: 'men', label: '남성', href: '/fashion/men' },
                            { id: 'shirts', label: '셔츠', href: '/fashion/men/shirts' },
                            { id: 'casual', label: '캐주얼 셔츠', href: '/fashion/men/shirts/casual' },
                        ]}
                    />
                </div>
            </div>

            <div>
                <h3>반응형 예시 (모바일)</h3>
                <div style={{ padding: '20px', border: '1px solid #ddd' }}>
                    <Breadcrumbs
                        items={sampleItems}
                        maxItems={3}
                        collapseOnMobile={true}
                    />
                </div>
            </div>
        </div>
    ),
};
