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
            options: ['original', 'light', 'dark', 'default', 'primary', 'secondary', 'white'],
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
        type: 'designbase',
        size: 'm',
    },
};

export const DesignBaseLogos: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>DesignBase 풀 로고</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Logo type="designbase" size="xs" />
                    <Logo type="designbase" size="s" />
                    <Logo type="designbase" size="m" />
                    <Logo type="designbase" size="l" />
                    <Logo type="designbase" size="xl" />
                </div>
            </div>
            <div>
                <h3>DesignBase 심볼 마크</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Logo type="designbase-mark" size="xs" />
                    <Logo type="designbase-mark" size="s" />
                    <Logo type="designbase-mark" size="m" />
                    <Logo type="designbase-mark" size="l" />
                    <Logo type="designbase-mark" size="xl" />
                </div>
            </div>
        </div>
    ),
};

export const DesignBaseVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h3>컬러 조정 옵션</h3>
                <div style={{
                    padding: '24px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap'
                }}>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Original (원본 색상)</p>
                        <Logo type="designbase" variant="original" size="l" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Dark (검정)</p>
                        <Logo type="designbase" variant="dark" size="l" />
                    </div>
                    <div style={{ backgroundColor: '#1f2937', padding: '8px', borderRadius: '4px' }}>
                        <p style={{ fontSize: '12px', color: '#fff', marginBottom: '8px' }}>Light (흰색)</p>
                        <Logo type="designbase" variant="light" size="l" />
                    </div>
                </div>
            </div>
            <div>
                <h3>라이트 배경</h3>
                <div style={{
                    padding: '24px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap'
                }}>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Default</p>
                        <Logo type="designbase" variant="default" size="l" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Primary</p>
                        <Logo type="designbase" variant="primary" size="l" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Secondary</p>
                        <Logo type="designbase" variant="secondary" size="l" />
                    </div>
                </div>
            </div>
            <div>
                <h3>다크 배경</h3>
                <div style={{
                    padding: '24px',
                    backgroundColor: '#1f2937',
                    borderRadius: '8px',
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap'
                }}>
                    <div>
                        <p style={{ fontSize: '12px', color: '#fff', marginBottom: '8px' }}>Light (흰색)</p>
                        <Logo type="designbase" variant="light" size="l" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', color: '#fff', marginBottom: '8px' }}>White</p>
                        <Logo type="designbase" variant="white" size="l" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', color: '#fff', marginBottom: '8px' }}>Primary</p>
                        <Logo type="designbase" variant="primary" size="l" />
                    </div>
                </div>
            </div>
            <div>
                <h3>심볼 마크 - 다양한 색상</h3>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Original</p>
                        <Logo type="designbase-mark" variant="original" size="l" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Light</p>
                        <div style={{ backgroundColor: '#1f2937', padding: '8px', borderRadius: '4px', display: 'inline-block' }}>
                            <Logo type="designbase-mark" variant="light" size="l" />
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Dark</p>
                        <Logo type="designbase-mark" variant="dark" size="l" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Primary</p>
                        <Logo type="designbase-mark" variant="primary" size="l" />
                    </div>
                </div>
            </div>
        </div>
    ),
};

export const CustomTextLogos: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>커스텀 텍스트 로고</h3>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
                    type="custom"을 사용하면 커스텀 텍스트나 이미지를 로고로 사용할 수 있습니다.
                </p>
                <Logo type="custom" text="DesignBase" />
            </div>
            <div>
                <h3>다양한 브랜드명</h3>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Logo type="custom" text="Acme Corp" />
                    <Logo type="custom" text="TechFlow" />
                    <Logo type="custom" text="InnovateLab" />
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
                        <Logo text="DesignBase" size="s" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4>MD</h4>
                        <Logo text="DesignBase" size="m" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4>LG</h4>
                        <Logo text="DesignBase" size="l" />
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

export const CustomImageLogos: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>커스텀 이미지 로고 예제</h3>
                <p style={{ color: '#666', marginBottom: '16px' }}>
                    type="custom"과 src를 함께 사용하여 커스텀 이미지 로고를 표시할 수 있습니다.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Logo
                        type="custom"
                        src="https://via.placeholder.com/120x40/3b82f6/ffffff?text=Logo"
                        alt="Custom Logo"
                        size="m"
                    />
                    <Logo
                        type="custom"
                        src="https://via.placeholder.com/100x30/10b981/ffffff?text=Acme"
                        alt="Acme Logo"
                        size="s"
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
                        size="s"
                    />
                    <Logo
                        src="https://via.placeholder.com/100x30/3b82f6/ffffff?text=MD"
                        alt="MD Logo"
                        size="m"
                    />
                    <Logo
                        src="https://via.placeholder.com/120x35/3b82f6/ffffff?text=LG"
                        alt="LG Logo"
                        size="l"
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
                        size="l"
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
                        size="l"
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
                    <Logo text="DesignBase" size="l" />
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
                    <Logo text="DesignBase" size="l" variant="white" />
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
