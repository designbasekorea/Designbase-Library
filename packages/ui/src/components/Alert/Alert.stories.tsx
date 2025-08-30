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

export const WithTitle: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <Alert variant="info" title="정보">제목이 있는 정보 알림입니다.</Alert>
            <Alert variant="success" title="성공">제목이 있는 성공 알림입니다.</Alert>
            <Alert variant="warning" title="경고">제목이 있는 경고 알림입니다.</Alert>
            <Alert variant="danger" title="오류">제목이 있는 오류 알림입니다.</Alert>
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

export const Closable: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <Alert variant="info" closable>닫을 수 있는 알림입니다.</Alert>
            <Alert variant="success" closable>닫을 수 있는 성공 알림입니다.</Alert>
            <Alert variant="warning" closable>닫을 수 있는 경고 알림입니다.</Alert>
            <Alert variant="danger" closable>닫을 수 있는 오류 알림입니다.</Alert>
        </div>
    ),
};

export const WithActions: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <Alert
                variant="info"
                title="업데이트 가능"
                actions={[
                    <Button key="update" size="sm" variant="primary">업데이트</Button>,
                    <Button key="later" size="sm" variant="secondary">나중에</Button>
                ]}
            >
                새로운 버전이 사용 가능합니다.
            </Alert>
            <Alert
                variant="danger"
                title="삭제 확인"
                actions={[
                    <Button key="delete" size="sm" variant="danger">삭제</Button>,
                    <Button key="cancel" size="sm" variant="secondary">취소</Button>
                ]}
            >
                이 항목을 삭제하시겠습니까?
            </Alert>
        </div>
    ),
};

export const WithActionButtons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
            <Alert
                variant="warning"
                title="네트워크 연결 오류"
                actionButtons={[
                    {
                        label: '재시도',
                        variant: 'primary',
                        onClick: () => console.log('재시도 클릭'),
                    },
                    {
                        label: '설정',
                        variant: 'secondary',
                        onClick: () => console.log('설정 클릭'),
                    },
                    {
                        label: '무시',
                        variant: 'secondary',
                        onClick: () => console.log('무시 클릭'),
                    }
                ]}
            >
                네트워크 연결이 끊어졌습니다. 연결을 확인하고 다시 시도해주세요.
            </Alert>

            <Alert
                variant="success"
                title="저장 완료"
                actionButtons={[
                    {
                        label: '자세히 보기',
                        variant: 'primary',
                        onClick: () => console.log('자세히 보기 클릭'),
                    },
                    {
                        label: '닫기',
                        variant: 'secondary',
                        onClick: () => console.log('닫기 클릭'),
                    }
                ]}
            >
                모든 변경사항이 성공적으로 저장되었습니다.
            </Alert>

            <Alert
                variant="danger"
                title="계정 보안 경고"
                actionButtons={[
                    {
                        label: '보안 설정',
                        variant: 'danger',
                        onClick: () => console.log('보안 설정 클릭'),
                    },
                    {
                        label: '나중에',
                        variant: 'secondary',
                        onClick: () => console.log('나중에 클릭'),
                    },
                    {
                        label: '무시',
                        variant: 'secondary',
                        onClick: () => console.log('무시 클릭'),
                        disabled: true,
                    }
                ]}
            >
                비밀번호가 90일 이상 변경되지 않았습니다. 보안을 위해 비밀번호를 변경해주세요.
            </Alert>
        </div>
    ),
};
