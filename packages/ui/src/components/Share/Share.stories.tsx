import type { Meta, StoryObj } from '@storybook/react';
import { Share } from './Share';

const meta: Meta<typeof Share> = {
    title: 'Components/Share',
    component: Share,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['dropdown', 'modal'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        position: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'left', 'right'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 드롭다운 타입
export const Dropdown: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'dropdown',
        position: 'bottom',
        platforms: ['facebook', 'x', 'linkedin', 'whatsapp', 'email', 'link'],
        size: 'm',
    },
};

// 모달 타입
export const Modal: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'modal',
        modalTitle: '이 페이지 공유하기',
        showQrCode: true,
        platforms: ['facebook', 'x', 'linkedin', 'whatsapp', 'telegram', 'email', 'link', 'qr'],
        size: 'm',
    },
};
