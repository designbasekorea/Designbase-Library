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
} from '@designbasekorea/icons';

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
            options: ['s', 'm', 'l'],
        },
        radius: {
            control: { type: 'select' },
            options: ['s', 'm', 'l', 'pill'],
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
            <Button variant="primary" size="s">S</Button>
            <Button variant="primary" size="m">M</Button>
            <Button variant="primary" size="l">L</Button>
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
                        로딩 중...
                    </Button>
                    <Button variant="primary" loading loadingText="처리 중...">
                        분석하기
                    </Button>
                </div>
            </div>

            <div>
                <h3>둥글기 조절</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" radius="s">
                        둥글기 S
                    </Button>
                    <Button variant="primary" radius="m">
                        둥글기 M
                    </Button>
                    <Button variant="primary" radius="l">
                        둥글기 L
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
                        <SearchIcon />
                    </Button>
                    <Button variant="secondary" iconOnly aria-label="다음">
                        <ArrowRightIcon />
                    </Button>
                    <Button variant="tertiary" iconOnly aria-label="추가">
                        <PlusIcon />
                    </Button>
                    <Button variant="ghost" iconOnly aria-label="편집">
                        <EditIcon />
                    </Button>
                    <Button variant="danger" iconOnly aria-label="삭제">
                        <TrashIcon />
                    </Button>
                </div>
            </div>

            <div>
                <h3>아이콘 전용 버튼 크기별</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Button variant="primary" size="s" iconOnly aria-label="검색">
                        <SearchIcon />
                    </Button>
                    <Button variant="primary" size="m" iconOnly aria-label="검색">
                        <SearchIcon />
                    </Button>
                    <Button variant="primary" size="l" iconOnly aria-label="검색">
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <div>
                <h3>아이콘 전용 버튼 둥글기별</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" radius="s" iconOnly aria-label="검색">
                        <SearchIcon />
                    </Button>
                    <Button variant="primary" radius="m" iconOnly aria-label="검색">
                        <SearchIcon />
                    </Button>
                    <Button variant="primary" radius="l" iconOnly aria-label="검색">
                        <SearchIcon />
                    </Button>
                    <Button variant="primary" radius="pill" iconOnly aria-label="검색">
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <div>
                <h3>로딩 상태 아이콘 버튼</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" iconOnly loading aria-label="로딩 중...">
                        <SearchIcon />
                    </Button>
                    <Button variant="secondary" iconOnly loading aria-label="로딩 중...">
                        <PlusIcon />
                    </Button>
                    <Button variant="danger" iconOnly loading aria-label="로딩 중...">
                        <TrashIcon />
                    </Button>
                </div>
            </div>
        </div>
    ),
};

// 툴팁이 있는 아이콘 버튼들을 보여주는 스토리
export const IconButtonsWithTooltips: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>기본 툴팁이 있는 아이콘 버튼</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" iconOnly tooltip="검색하기">
                        <SearchIcon />
                    </Button>
                    <Button variant="secondary" iconOnly tooltip="다음으로 이동">
                        <ArrowRightIcon />
                    </Button>
                    <Button variant="tertiary" iconOnly tooltip="새 항목 추가">
                        <PlusIcon />
                    </Button>
                    <Button variant="ghost" iconOnly tooltip="편집하기">
                        <EditIcon />
                    </Button>
                    <Button variant="danger" iconOnly tooltip="삭제하기">
                        <TrashIcon />
                    </Button>
                </div>
            </div>

            <div>
                <h3>커스텀 툴팁 설정</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button
                        variant="primary"
                        iconOnly
                        tooltip="왼쪽에 표시되는 툴팁"
                        tooltipProps={{ position: 'left', variant: 'primary' }}
                    >
                        <SearchIcon />
                    </Button>
                    <Button
                        variant="secondary"
                        iconOnly
                        tooltip="아래쪽에 표시되는 툴팁"
                        tooltipProps={{ position: 'bottom', variant: 'info' }}
                    >
                        <ArrowRightIcon />
                    </Button>
                    <Button
                        variant="tertiary"
                        iconOnly
                        tooltip="성공 메시지"
                        tooltipProps={{ position: 'top', variant: 'success' }}
                    >
                        <PlusIcon />
                    </Button>
                    <Button
                        variant="danger"
                        iconOnly
                        tooltip="경고 메시지"
                        tooltipProps={{ position: 'right', variant: 'warning' }}
                    >
                        <TrashIcon />
                    </Button>
                </div>
            </div>

            <div>
                <h3>툴팁 크기별 아이콘 버튼</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Button
                        variant="primary"
                        size="s"
                        iconOnly
                        tooltip="중간 툴팁"
                        tooltipProps={{ size: 'm' }}
                    >
                        <SearchIcon />
                    </Button>
                    <Button
                        variant="primary"
                        size="m"
                        iconOnly
                        tooltip="큰 툴팁"
                        tooltipProps={{ size: 'l' }}
                    >
                        <SearchIcon />
                    </Button>
                    <Button
                        variant="primary"
                        size="l"
                        iconOnly
                        tooltip="매우 큰 툴팁"
                        tooltipProps={{ size: 'l' }}
                    >
                        <SearchIcon />
                    </Button>
                </div>
            </div>

            <div>
                <h3>툴팁이 있는 로딩 버튼</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button
                        variant="primary"
                        iconOnly
                        loading
                        tooltip="로딩 중입니다..."
                    >
                        <SearchIcon />
                    </Button>
                    <Button
                        variant="secondary"
                        iconOnly
                        loading
                        tooltip="처리 중입니다..."
                    >
                        <PlusIcon />
                    </Button>
                    <Button
                        variant="danger"
                        iconOnly
                        loading
                        tooltip="삭제 중입니다..."
                    >
                        <TrashIcon />
                    </Button>
                </div>
            </div>
        </div>
    ),
};

// 툴팁과 일반 버튼 비교
export const WithAndWithoutTooltips: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>툴팁 없는 아이콘 버튼 (애매모호함)</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" iconOnly>
                        <SearchIcon />
                    </Button>
                    <Button variant="secondary" iconOnly>
                        <ArrowRightIcon />
                    </Button>
                    <Button variant="tertiary" iconOnly>
                        <PlusIcon />
                    </Button>
                    <Button variant="ghost" iconOnly>
                        <EditIcon />
                    </Button>
                    <Button variant="danger" iconOnly>
                        <TrashIcon />
                    </Button>
                </div>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                    위 버튼들은 무엇을 하는지 명확하지 않습니다.
                </p>
            </div>

            <div>
                <h3>툴팁이 있는 아이콘 버튼 (명확함)</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button variant="primary" iconOnly tooltip="검색하기">
                        <SearchIcon />
                    </Button>
                    <Button variant="secondary" iconOnly tooltip="다음으로 이동">
                        <ArrowRightIcon />
                    </Button>
                    <Button variant="tertiary" iconOnly tooltip="새 항목 추가">
                        <PlusIcon />
                    </Button>
                    <Button variant="ghost" iconOnly tooltip="편집하기">
                        <EditIcon />
                    </Button>
                    <Button variant="danger" iconOnly tooltip="삭제하기">
                        <TrashIcon />
                    </Button>
                </div>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                    위 버튼들은 마우스를 올리면 기능을 설명하는 툴팁이 표시됩니다.
                </p>
            </div>
        </div>
    ),
};
