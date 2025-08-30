import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary', 'white', 'dark'],
        },
        clickable: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Logo',
        size: 'md',
    },
};

export const TextLogos: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>기본 텍스트 로고</h3>
                <Logo text="DesignBase" />
            </div>
            <div>
                <h3>다양한 브랜드명</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Logo text="DesignBase" />
                    <Logo text="Acme Corp" />
                    <Logo text="TechFlow" />
                    <Logo text="InnovateLab" />
                </div>
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>크기별 텍스트 로고</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h4>XS</h4>
                        <Logo text="DesignBase" size="xs" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4>SM</h4>
                        <Logo text="DesignBase" size="sm" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4>MD</h4>
                        <Logo text="DesignBase" size="md" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4>LG</h4>
                        <Logo text="DesignBase" size="lg" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4>XL</h4>
                        <Logo text="DesignBase" size="xl" />
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>스타일 variant</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Logo text="DesignBase" variant="default" />
                    <Logo text="DesignBase" variant="primary" />
                    <Logo text="DesignBase" variant="secondary" />
                    <Logo text="DesignBase" variant="dark" />
                </div>
            </div>
            <div>
                <h3>흰색 배경에서의 흰색 로고</h3>
                <div style={{
                    backgroundColor: '#1f2937',
                    padding: '16px',
                    borderRadius: '8px',
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap'
                }}>
                    <Logo text="DesignBase" variant="white" />
                    <Logo text="Acme Corp" variant="white" />
                </div>
            </div>
        </div>
    ),
};

export const ImageLogos: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>이미지 로고 예제</h3>
                <p style={{ color: '#666', marginBottom: '16px' }}>
                    실제 이미지 URL을 사용하여 테스트해보세요.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Logo
                        src="https://via.placeholder.com/120x40/3b82f6/ffffff?text=Logo"
                        alt="DesignBase Logo"
                        size="md"
                    />
                    <Logo
                        src="https://via.placeholder.com/100x30/10b981/ffffff?text=Acme"
                        alt="Acme Logo"
                        size="sm"
                    />
                </div>
            </div>
            <div>
                <h3>이미지 로고 크기별</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Logo
                        src="https://via.placeholder.com/60x20/3b82f6/ffffff?text=XS"
                        alt="XS Logo"
                        size="xs"
                    />
                    <Logo
                        src="https://via.placeholder.com/80x25/3b82f6/ffffff?text=SM"
                        alt="SM Logo"
                        size="sm"
                    />
                    <Logo
                        src="https://via.placeholder.com/100x30/3b82f6/ffffff?text=MD"
                        alt="MD Logo"
                        size="md"
                    />
                    <Logo
                        src="https://via.placeholder.com/120x35/3b82f6/ffffff?text=LG"
                        alt="LG Logo"
                        size="lg"
                    />
                    <Logo
                        src="https://via.placeholder.com/140x40/3b82f6/ffffff?text=XL"
                        alt="XL Logo"
                        size="xl"
                    />
                </div>
            </div>
        </div>
    ),
};

export const Clickable: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>클릭 가능한 로고</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Logo
                        text="DesignBase"
                        clickable
                        onClick={() => alert('로고 클릭!')}
                    />
                    <Logo
                        text="Acme Corp"
                        href="https://example.com"
                        target="_blank"
                    />
                    <Logo
                        src="https://via.placeholder.com/100x30/3b82f6/ffffff?text=Logo"
                        alt="Clickable Logo"
                        href="#"
                        onClick={() => alert('이미지 로고 클릭!')}
                    />
                </div>
            </div>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>전체 너비 로고</h3>
                <div style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '16px',
                    width: '300px'
                }}>
                    <Logo
                        text="DesignBase"
                        fullWidth
                        size="lg"
                    />
                </div>
            </div>
            <div>
                <h3>전체 너비 이미지 로고</h3>
                <div style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '16px',
                    width: '300px'
                }}>
                    <Logo
                        src="https://via.placeholder.com/200x50/3b82f6/ffffff?text=Full+Width+Logo"
                        alt="Full Width Logo"
                        fullWidth
                        size="lg"
                    />
                </div>
            </div>
        </div>
    ),
};

export const InContext: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>헤더에서의 사용</h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                }}>
                    <Logo text="DesignBase" size="lg" />
                    <nav style={{ display: 'flex', gap: '24px' }}>
                        <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>홈</a>
                        <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>서비스</a>
                        <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>문의</a>
                    </nav>
                </div>
            </div>

            <div>
                <h3>다크 헤더에서의 사용</h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 24px',
                    backgroundColor: '#1f2937',
                    borderRadius: '8px'
                }}>
                    <Logo text="DesignBase" size="lg" variant="white" />
                    <nav style={{ display: 'flex', gap: '24px' }}>
                        <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>홈</a>
                        <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>서비스</a>
                        <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>문의</a>
                    </nav>
                </div>
            </div>

            <div>
                <h3>푸터에서의 사용</h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                }}>
                    <Logo text="DesignBase" variant="secondary" />
                    <div style={{ color: '#6b7280', fontSize: '14px' }}>
                        © 2024 DesignBase. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [clickCount, setClickCount] = React.useState(0);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3>인터랙티브 로고</h3>
                    <p style={{ color: '#666', marginBottom: '16px' }}>
                        로고를 클릭해보세요! 클릭 횟수: {clickCount}
                    </p>
                    <Logo
                        text="DesignBase"
                        clickable
                        onClick={() => setClickCount(prev => prev + 1)}
                    />
                </div>
            </div>
        );
    },
};
