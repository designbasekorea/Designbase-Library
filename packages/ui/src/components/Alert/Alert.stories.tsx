import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Button } from '../Button/Button';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['info', 'success', 'warning', 'danger'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '기본 알림 메시지입니다.',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <Alert variant="info">정보 알림 메시지입니다.</Alert>
            <Alert variant="success">성공 알림 메시지입니다.</Alert>
            <Alert variant="warning">경고 알림 메시지입니다.</Alert>
            <Alert variant="danger">위험 알림 메시지입니다.</Alert>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <Alert size="sm">작은 크기 알림입니다.</Alert>
            <Alert size="md">중간 크기 알림입니다.</Alert>
            <Alert size="lg">큰 크기 알림입니다.</Alert>
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>제목 없는 기본 알림</h3>
                <Alert variant="info">기본 알림 메시지입니다.</Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>제목 있는 알림</h3>
                <Alert variant="success" title="성공">제목이 있는 성공 알림입니다.</Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>닫기 버튼 있는 알림</h3>
                <Alert variant="warning" closable>닫을 수 있는 경고 알림입니다.</Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>액션 버튼 있는 알림</h3>
                <Alert
                    variant="danger"
                    title="삭제 확인"
                    actionButtons={[
                        {
                            label: '삭제',
                            variant: 'danger',
                            size: 'sm',
                            onClick: () => console.log('삭제 클릭'),
                        },
                        {
                            label: '취소',
                            variant: 'secondary',
                            size: 'sm',
                            onClick: () => console.log('취소 클릭'),
                        }
                    ]}
                >
                    이 항목을 삭제하시겠습니까?
                </Alert>
            </div>
        </div>
    ),
};
