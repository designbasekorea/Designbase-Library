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

// 모든 변형(variants)을 보여주는 스토리
export const AllVariants: Story = {
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

// 모든 크기를 보여주는 스토리
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button variant="primary" size="xs">XS</Button>
            <Button variant="primary" size="sm">SM</Button>
            <Button variant="primary" size="md">MD</Button>
            <Button variant="primary" size="lg">LG</Button>
            <Button variant="primary" size="xl">XL</Button>
        </div>
    ),
};

// 모든 타입을 보여주는 스토리
export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>기본 버튼</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary</Button>
                </div>
            </div>

            <div>
                <h3>아이콘이 있는 버튼</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" startIcon={SearchIcon}>
                        검색
                    </Button>
                    <Button variant="secondary" endIcon={ArrowRightIcon}>
                        다음
                    </Button>
                    <Button variant="tertiary" startIcon={DownloadIcon}>
                        다운로드
                    </Button>
                </div>
            </div>

            <div>
                <h3>상태별 버튼</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary">기본</Button>
                    <Button variant="primary" disabled>
                        비활성화
                    </Button>
                    <Button variant="primary" loading>
                        로딩 중
                    </Button>
                </div>
            </div>

            <div>
                <h3>둥글기 조절</h3>
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
            </div>

            <div>
                <h3>전체 너비 버튼</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                    <Button variant="primary" fullWidth>
                        전체 너비 Primary
                    </Button>
                    <Button variant="secondary" fullWidth>
                        전체 너비 Secondary
                    </Button>
                </div>
            </div>
        </div>
    ),
};

// 아이콘 버튼들을 보여주는 스토리
export const IconButtons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>아이콘 전용 버튼</h3>
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
            </div>

            <div>
                <h3>아이콘 전용 버튼 크기별</h3>
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
            </div>

            <div>
                <h3>아이콘 전용 버튼 둥글기별</h3>
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
            </div>

            <div>
                <h3>로딩 상태 아이콘 버튼</h3>
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
