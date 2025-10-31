import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { InteractionFeedback } from './InteractionFeedback';
import { Button, Select } from '@designbasekorea/ui';

const meta: Meta<typeof InteractionFeedback> = {
    title: 'Figma UI/InteractionFeedback',
    component: InteractionFeedback,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: { type: 'select' },
            options: ['default', 'warning', 'error', 'success', 'info', 'loading'],
        },
        visible: {
            control: { type: 'boolean' },
        },
        // fixed 옵션은 제거되었습니다 (자동 레이아웃)
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: '3개 선택됨',
        visible: true,
    },
};

export const WithWarning: Story = {
    args: {
        status: 'warning',
        message: '5개 선택됨',
        statusMessage: '무료 사용자는 3개까지만 선택할 수 있습니다',
        visible: true,
    },
};

export const WithError: Story = {
    args: {
        status: 'error',
        message: '선택 오류',
        statusMessage: '최대 100개까지만 선택할 수 있습니다',
        visible: true,
    },
};

export const WithSuccess: Story = {
    args: {
        status: 'success',
        message: '변환 완료',
        statusMessage: '10개의 레이어가 성공적으로 변환되었습니다',
        visible: true,
    },
};

export const WithInfo: Story = {
    args: {
        status: 'info',
        message: '처리 중',
        statusMessage: '선택한 레이어를 분석하고 있습니다...',
        visible: true,
    },
};

export const WithLoading: Story = {
    args: {
        status: 'loading',
        message: '불러오는 중입니다...',
        visible: true,
    },
};

export const WithSortControl: Story = {
    render: () => {
        const [sortOrder, setSortOrder] = useState('default');
        const [selectedCount] = useState(5);

        return (
            <div style={{ height: '400px', position: 'relative', border: '1px dashed #ccc' }}>
                <InteractionFeedback
                    message={`${selectedCount}개 선택됨`}
                    visible={true}
                    rightAction={
                        <Select
                            value={sortOrder}
                            onChange={(value: string) => setSortOrder(value)}
                            size="s"
                            disabled={selectedCount < 2}
                            options={[
                                { value: 'default', label: '기본 순서' },
                                { value: 'name-asc', label: '이름 오름차순' },
                                { value: 'name-desc', label: '이름 내림차순' },
                                { value: 'position-x', label: 'X 위치' },
                                { value: 'position-y', label: 'Y 위치' }
                            ]}
                        />
                    }
                />
            </div>
        );
    },
};

export const WithCustomContent: Story = {
    render: () => {
        const [count, setCount] = useState(0);

        return (
            <div style={{ height: '400px', position: 'relative', border: '1px dashed #ccc' }}>
                <InteractionFeedback
                    visible={count > 0}
                    leftContent={
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '12px', color: 'var(--db-text-secondary)' }}>
                                카운터:
                            </span>
                            <strong style={{ fontSize: '14px', color: 'var(--db-text-primary)' }}>
                                {count}
                            </strong>
                        </div>
                    }
                    rightAction={
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Button
                                size="s"
                                variant="secondary"
                                onPress={() => setCount(c => Math.max(0, c - 1))}
                            >
                                -
                            </Button>
                            <Button
                                size="s"
                                variant="primary"
                                onPress={() => setCount(c => c + 1)}
                            >
                                +
                            </Button>
                        </div>
                    }
                />
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <Button onPress={() => setCount(5)}>5개 선택</Button>
                </div>
            </div>
        );
    },
};

export const InteractiveExample: Story = {
    render: () => {
        const [selectedCount, setSelectedCount] = useState(0);
        const [sortOrder, setSortOrder] = useState('default');
        const maxFreeSelections = 3;
        const maxProSelections = 100;
        const isPaidUser = false;

        const getStatus = () => {
            if (!isPaidUser && selectedCount > maxFreeSelections) return 'warning';
            if (isPaidUser && selectedCount > maxProSelections) return 'error';
            if (selectedCount > 0) return 'success';
            return 'default';
        };

        const getWarningMessage = () => {
            if (!isPaidUser && selectedCount > maxFreeSelections) {
                return '무료 사용자는 3개까지만 선택할 수 있습니다';
            }
            if (isPaidUser && selectedCount > maxProSelections) {
                return `Pro 사용자는 최대 ${maxProSelections}개까지 선택할 수 있습니다`;
            }
            return null;
        };

        return (
            <div style={{ height: '400px', position: 'relative', border: '1px dashed #ccc' }}>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h3 style={{ margin: 0, fontSize: '14px' }}>레이어 선택 시뮬레이션</h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Button size="s" onPress={() => setSelectedCount(0)}>선택 해제</Button>
                        <Button size="s" onPress={() => setSelectedCount(2)}>2개 선택</Button>
                        <Button size="s" onPress={() => setSelectedCount(3)}>3개 선택</Button>
                        <Button size="s" onPress={() => setSelectedCount(5)}>5개 선택 (경고)</Button>
                        <Button size="s" onPress={() => setSelectedCount(10)}>10개 선택</Button>
                    </div>
                </div>

                <InteractionFeedback
                    status={getStatus()}
                    message={selectedCount > 0 ? `${selectedCount}개 선택됨` : undefined}
                    statusMessage={getWarningMessage() || undefined}
                    visible={selectedCount > 0}
                    rightAction={
                        selectedCount > 1 ? (
                            <Select
                                value={sortOrder}
                                onChange={(value: string) => setSortOrder(value)}
                                size="s"
                                options={[
                                    { value: 'default', label: '기본 순서' },
                                    { value: 'name-asc', label: '이름 오름차순' },
                                    { value: 'name-desc', label: '이름 내림차순' },
                                    { value: 'position-x', label: 'X 위치' },
                                    { value: 'position-y', label: 'Y 위치' }
                                ]}
                            />
                        ) : null
                    }
                />
            </div>
        );
    },
};

export const WithActionButtons: Story = {
    render: () => {
        const [visible, setVisible] = useState(true);

        return (
            <div style={{ height: '200px', position: 'relative', border: '1px dashed #ccc', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '20px' }}>
                    <Button onPress={() => setVisible(!visible)}>
                        피드백 {visible ? '숨기기' : '표시'}
                    </Button>
                </div>

                <InteractionFeedback
                    message="5개 선택됨"
                    visible={visible}
                    rightAction={
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Button size="s" variant="secondary">
                                취소
                            </Button>
                            <Button size="s" variant="primary">
                                적용
                            </Button>
                        </div>
                    }
                />
            </div>
        );
    },
};

export const WithI18nKeys: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 없음)</h3>
                <InteractionFeedback
                    message={{ key: 'feedback.selected_count' }}
                    statusMessage={{ key: 'feedback.limit_warning' }}
                    status="warning"
                    visible={true}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 있음)</h3>
                <InteractionFeedback
                    message={{ key: 'feedback.selected_count' }}
                    statusMessage={{ key: 'feedback.limit_warning' }}
                    status="warning"
                    visible={true}
                    t={(key) => {
                        const translations: Record<string, string> = {
                            'feedback.selected_count': '3개 선택됨',
                            'feedback.limit_warning': '무료 사용자는 3개까지만 선택할 수 있습니다',
                            'feedback.success_save': '성공적으로 저장되었습니다',
                            'feedback.error_message': '선택 오류'
                        };
                        return translations[key] || key;
                    }}
                />
            </div>
        </div>
    ),
};

