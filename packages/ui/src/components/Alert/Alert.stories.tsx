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
            options: ['default', 'info', 'success', 'warning', 'danger'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
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
            <Alert variant="default" showIcon title="기본">기본 알림 메시지입니다.</Alert>
            <Alert variant="info" showIcon title="정보">정보 알림 메시지입니다.</Alert>
            <Alert variant="success" showIcon title="성공">성공 알림 메시지입니다.</Alert>
            <Alert variant="warning" showIcon title="경고">경고 알림 메시지입니다.</Alert>
            <Alert variant="danger" showIcon title="위험">위험 알림 메시지입니다.</Alert>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <Alert size="s" showIcon variant="info" title="작은 크기">작은 크기 알림입니다.</Alert>
            <Alert size="m" showIcon variant="success" title="중간 크기">중간 크기 알림입니다.</Alert>
            <Alert size="l" showIcon variant="warning" title="큰 크기">큰 크기 알림입니다.</Alert>
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>제목 없는 기본 알림</h3>
                <Alert variant="info" showIcon>기본 알림 메시지입니다.</Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>제목 있는 알림</h3>
                <Alert variant="success" showIcon title="성공">제목이 있는 성공 알림입니다.</Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>닫기 버튼 있는 알림</h3>
                <Alert variant="warning" showIcon closable>닫을 수 있는 경고 알림입니다.</Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>액션 버튼 있는 알림 (Primary + Tertiary)</h3>
                <Alert
                    variant="danger"
                    showIcon
                    title="삭제 확인"
                    actionButtons={[
                        {
                            label: '삭제',
                            variant: 'primary',
                            size: 'm',
                            onClick: () => console.log('삭제 클릭'),
                        },
                        {
                            label: '취소',
                            variant: 'tertiary',
                            size: 'm',
                            onClick: () => console.log('취소 클릭'),
                        }
                    ]}
                >
                    이 항목을 삭제하시겠습니까?
                </Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>기본 스타일 알림 (Default)</h3>
                <Alert variant="default" showIcon title="알림">흰색 배경과 연한 그레이 테두리의 기본 알림입니다.</Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>기본 스타일 + 액션 버튼</h3>
                <Alert
                    variant="default"
                    showIcon
                    title="확인 필요"
                    actionButtons={[
                        {
                            label: '확인',
                            variant: 'primary',
                            size: 'm',
                            onClick: () => console.log('확인 클릭'),
                        },
                        {
                            label: '취소',
                            variant: 'tertiary',
                            size: 'm',
                            onClick: () => console.log('취소 클릭'),
                        }
                    ]}
                >
                    작업을 계속 진행하시겠습니까?
                </Alert>
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>아이콘 없는 알림</h3>
                <Alert variant="info" showIcon={false} title="아이콘 없음">아이콘이 표시되지 않는 알림입니다.</Alert>
            </div>
        </div>
    ),
};
