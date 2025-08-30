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

export const Default: Story = {
    args: {
        items: sampleItems,
    },
};

export const WithIcons: Story = {
    args: {
        items: sampleItemsWithIcons,
    },
};

export const Styles: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Breadcrumbs items={sampleItems} breadcrumbStyle="default" />
            <Breadcrumbs items={sampleItems} breadcrumbStyle="contained" />
            <Breadcrumbs items={sampleItems} breadcrumbStyle="underlined" />
        </div>
    ),
};

export const CustomSeparator: Story = {
    args: {
        items: sampleItems,
        separator: '>',
    },
};

export const Collapsed: Story = {
    args: {
        items: sampleItems,
        maxItems: 3,
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Breadcrumbs items={sampleItems} size="sm" />
            <Breadcrumbs items={sampleItems} size="md" />
            <Breadcrumbs items={sampleItems} size="lg" />
        </div>
    ),
};



export const Interactive: Story = {
    args: {
        items: sampleItems,
        onItemClick: (item) => {
            console.log('Clicked:', item);
            alert(`Clicked: ${item.label}`);
        },
    },
};



export const ResponsiveExample: Story = {
    args: {
        items: sampleItems,
        maxItems: 3,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

export const NavigationExample: Story = {
    render: () => (
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
            <h2 style={{ marginBottom: '16px' }}>웹사이트 네비게이션</h2>
            <Breadcrumbs
                items={sampleItems}
                onItemClick={(item) => console.log('Navigating to:', item.href)}
            />
        </div>
    ),
};

export const EcommerceExample: Story = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '16px' }}>쇼핑몰 제품 페이지</h3>
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
    ),
};
