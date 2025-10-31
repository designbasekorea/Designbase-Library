import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InfoIcon } from '@designbasekorea/icons';
import Banner from './Banner';

const meta: Meta<typeof Banner> = {
    title: 'Components/Banner',
    component: Banner,
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
            options: ['primary', 'secondary', 'tertiary', 'image'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '기본 배너',
        description: '중요한 정보나 알림을 표시합니다.',
        variant: 'primary',
        size: 'm',
    },
};

// 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Banner
                title="Small Size"
                description="작은 크기의 배너입니다."
                size="s"
                variant="primary"
            />
            <Banner
                title="Medium Size"
                description="중간 크기의 배너입니다."
                size="m"
                variant="primary"
            />
            <Banner
                title="Large Size"
                description="큰 크기의 배너입니다."
                size="l"
                variant="primary"
            />
        </div>
    ),
};

// Variants (primary, secondary, tertiary, image)
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Banner
                title="Primary"
                description="브랜드 프라이머리 색상 배경에 흰색 텍스트"
                icon={<InfoIcon size={20} />}
                variant="primary"
            />
            <Banner
                title="Secondary"
                description="브랜드 세컨더리 색상 배경"
                icon={<InfoIcon size={20} />}
                variant="secondary"
            />
            <Banner
                title="Tertiary"
                description="부드러운 배경의 배너입니다."
                icon={<InfoIcon size={20} />}
                variant="tertiary"
            />
            <Banner
                title="Image Background"
                description="배경 이미지 + dim + 흰색 텍스트"
                icon={<InfoIcon size={20} />}
                variant="image"
                backgroundImage="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=200&fit=crop"
            />
        </div>
    ),
};
