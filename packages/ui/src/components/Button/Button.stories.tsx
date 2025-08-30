/**
 * Button 컴포넌트 스토리
 * 
 * 목적: 버튼 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: variant, size, state, icon 조합 예제
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import {
    SearchIcon,
    ArrowRightIcon,
    PlusIcon,
    DownloadIcon,
    EditIcon,
    TrashIcon,
} from '@designbase/icons';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary', 'danger', 'ghost'],
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        radius: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'pill'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼
export const Default: Story = {
    args: {
        children: '버튼',
    },
};

// 아이콘이 있는 버튼들
export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" startIcon={SearchIcon}>
                검색
            </Button>
            <Button variant="secondary" endIcon={ArrowRightIcon}>
                다음
            </Button>
            <Button variant="primary" startIcon={PlusIcon}>
                추가
            </Button>
            <Button variant="tertiary" startIcon={DownloadIcon}>
                다운로드
            </Button>
            <Button variant="ghost" startIcon={EditIcon}>
                편집
            </Button>
            <Button variant="danger" startIcon={TrashIcon}>
                삭제
            </Button>
        </div>
    ),
};

// 아이콘 전용 버튼들
export const IconOnly: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" iconOnly aria-label="검색">
                <SearchIcon size={16} />
            </Button>
            <Button variant="secondary" iconOnly aria-label="다음">
                <ArrowRightIcon size={16} />
            </Button>
            <Button variant="tertiary" iconOnly aria-label="추가">
                <PlusIcon size={16} />
            </Button>
            <Button variant="ghost" iconOnly aria-label="편집">
                <EditIcon size={16} />
            </Button>
            <Button variant="danger" iconOnly aria-label="삭제">
                <TrashIcon size={16} />
            </Button>
        </div>
    ),
};

// 아이콘 전용 버튼 크기별
export const IconOnlySizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button variant="primary" size="xs" iconOnly aria-label="검색">
                <SearchIcon size={12} />
            </Button>
            <Button variant="primary" size="sm" iconOnly aria-label="검색">
                <SearchIcon size={14} />
            </Button>
            <Button variant="primary" size="md" iconOnly aria-label="검색">
                <SearchIcon size={16} />
            </Button>
            <Button variant="primary" size="lg" iconOnly aria-label="검색">
                <SearchIcon size={18} />
            </Button>
            <Button variant="primary" size="xl" iconOnly aria-label="검색">
                <SearchIcon size={20} />
            </Button>
        </div>
    ),
};

// 아이콘 전용 버튼 둥글기별
export const IconOnlyRadius: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" radius="sm" iconOnly aria-label="검색">
                <SearchIcon size={16} />
            </Button>
            <Button variant="primary" radius="md" iconOnly aria-label="검색">
                <SearchIcon size={16} />
            </Button>
            <Button variant="primary" radius="lg" iconOnly aria-label="검색">
                <SearchIcon size={16} />
            </Button>
            <Button variant="primary" radius="pill" iconOnly aria-label="검색">
                <SearchIcon size={16} />
            </Button>
        </div>
    ),
};

// 크기별 버튼
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button variant="primary" size="xs">
                XS
            </Button>
            <Button variant="primary" size="sm">
                SM
            </Button>
            <Button variant="primary" size="md">
                MD
            </Button>
            <Button variant="primary" size="lg">
                LG
            </Button>
            <Button variant="primary" size="xl">
                XL
            </Button>
        </div>
    ),
};

// 둥글기 조절
export const BorderRadius: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" radius="sm">
                둥글기 SM
            </Button>
            <Button variant="primary" radius="md">
                둥글기 MD
            </Button>
            <Button variant="primary" radius="lg">
                둥글기 LG
            </Button>
            <Button variant="primary" radius="pill">
                둥글기 Pill
            </Button>
        </div>
    ),
};

// 상태별 버튼
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary">기본</Button>
            <Button variant="primary" disabled>
                비활성화
            </Button>
            <Button variant="primary" loading>
                로딩 중
            </Button>
        </div>
    ),
};

// 로딩 상태 상세 예제
export const LoadingStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>다양한 Variant의 로딩 상태</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" loading>Primary 로딩</Button>
                    <Button variant="secondary" loading>Secondary 로딩</Button>
                    <Button variant="tertiary" loading>Tertiary 로딩</Button>
                    <Button variant="danger" loading>Danger 로딩</Button>
                    <Button variant="ghost" loading>Ghost 로딩</Button>
                </div>
            </div>

            <div>
                <h3>다양한 크기의 로딩 상태</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Button variant="primary" size="xs" loading>XS</Button>
                    <Button variant="primary" size="sm" loading>SM</Button>
                    <Button variant="primary" size="md" loading>MD</Button>
                    <Button variant="primary" size="lg" loading>LG</Button>
                    <Button variant="primary" size="xl" loading>XL</Button>
                </div>
            </div>

            <div>
                <h3>아이콘이 있는 로딩 상태</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" startIcon={SearchIcon} loading>
                        검색 중
                    </Button>
                    <Button variant="secondary" endIcon={ArrowRightIcon} loading>
                        처리 중
                    </Button>
                    <Button variant="danger" startIcon={TrashIcon} loading>
                        삭제 중
                    </Button>
                </div>
            </div>

            <div>
                <h3>아이콘 전용 로딩 상태</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" iconOnly loading aria-label="로딩 중">
                        <SearchIcon size={16} />
                    </Button>
                    <Button variant="secondary" iconOnly loading aria-label="로딩 중">
                        <PlusIcon size={16} />
                    </Button>
                    <Button variant="danger" iconOnly loading aria-label="로딩 중">
                        <TrashIcon size={16} />
                    </Button>
                </div>
            </div>
        </div>
    ),
};

// Variant별 버튼
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
        </div>
    ),
};

// 아이콘 색상 variant
export const IconColorVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" startIcon={SearchIcon}>
                Primary
            </Button>
            <Button variant="secondary" startIcon={SearchIcon}>
                Secondary
            </Button>
            <Button variant="tertiary" startIcon={SearchIcon}>
                Tertiary
            </Button>
            <Button variant="danger" startIcon={TrashIcon}>
                Danger
            </Button>
            <Button variant="ghost" startIcon={EditIcon}>
                Ghost
            </Button>
        </div>
    ),
};
