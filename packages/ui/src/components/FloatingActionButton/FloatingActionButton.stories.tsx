/**
 * FloatingActionButton 컴포넌트 스토리
 * 
 * 목적: FloatingActionButton 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 크기, 위치, 변형, 애니메이션 효과 등 다양한 설정 예제
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FloatingActionButton } from './FloatingActionButton';

const meta: Meta<typeof FloatingActionButton> = {
    title: 'Components/FloatingActionButton',
    component: FloatingActionButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
        },
        position: {
            control: { type: 'select' },
            options: ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'center'],
        },
        animation: {
            control: { type: 'select' },
            options: ['scale', 'rotate', 'bounce', 'pulse', 'none'],
        },
        elevation: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
        extended: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        loading: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 FAB
export const Default: Story = {
    args: {
        icon: '+',
        onClick: () => console.log('FAB clicked!'),
    },
};

// 크기별 FAB
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <FloatingActionButton
                    size="sm"
                    icon="+"
                    onClick={() => console.log('Small FAB clicked!')}
                />
                <span>Small (40px)</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <FloatingActionButton
                    size="md"
                    icon="+"
                    onClick={() => console.log('Medium FAB clicked!')}
                />
                <span>Medium (56px)</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <FloatingActionButton
                    size="lg"
                    icon="+"
                    onClick={() => console.log('Large FAB clicked!')}
                />
                <span>Large (72px)</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <FloatingActionButton
                    size="xl"
                    icon="+"
                    onClick={() => console.log('Extra Large FAB clicked!')}
                />
                <span>Extra Large (88px)</span>
            </div>
        </div>
    ),
};

// 변형별 FAB
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <FloatingActionButton
                variant="primary"
                icon="+"
                onClick={() => console.log('Primary FAB clicked!')}
            />
            <FloatingActionButton
                variant="secondary"
                icon="⚙️"
                onClick={() => console.log('Secondary FAB clicked!')}
            />
            <FloatingActionButton
                variant="success"
                icon="✓"
                onClick={() => console.log('Success FAB clicked!')}
            />
            <FloatingActionButton
                variant="warning"
                icon="⚠️"
                onClick={() => console.log('Warning FAB clicked!')}
            />
            <FloatingActionButton
                variant="danger"
                icon="🗑️"
                onClick={() => console.log('Danger FAB clicked!')}
            />
            <FloatingActionButton
                variant="info"
                icon="ℹ️"
                onClick={() => console.log('Info FAB clicked!')}
            />
        </div>
    ),
};

// 위치별 FAB
export const Positions: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', border: '1px solid #ccc' }}>
            <div style={{ padding: '20px' }}>
                <h3>다양한 위치의 FAB</h3>
                <p>화면의 각 모서리와 중앙에 FAB이 배치되어 있습니다.</p>
            </div>

            <FloatingActionButton
                position="top-left"
                icon="⬅️"
                onClick={() => console.log('Top-left FAB clicked!')}
            />
            <FloatingActionButton
                position="top-right"
                icon="➡️"
                onClick={() => console.log('Top-right FAB clicked!')}
            />
            <FloatingActionButton
                position="bottom-left"
                icon="⬅️"
                onClick={() => console.log('Bottom-left FAB clicked!')}
            />
            <FloatingActionButton
                position="bottom-right"
                icon="➡️"
                onClick={() => console.log('Bottom-right FAB clicked!')}
            />
            <FloatingActionButton
                position="center"
                icon="🎯"
                onClick={() => console.log('Center FAB clicked!')}
            />
        </div>
    ),
};

// 확장된 FAB
export const Extended: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <FloatingActionButton
                extended={true}
                icon="+"
                label="새로 만들기"
                onClick={() => console.log('Extended FAB clicked!')}
            />
            <FloatingActionButton
                extended={true}
                icon="📧"
                label="메일 보내기"
                variant="success"
                onClick={() => console.log('Mail FAB clicked!')}
            />
            <FloatingActionButton
                extended={true}
                icon="📷"
                label="사진 촬영"
                variant="info"
                onClick={() => console.log('Camera FAB clicked!')}
            />
        </div>
    ),
};

// 애니메이션 효과
export const Animations: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    animation="scale"
                    icon="📏"
                    onClick={() => console.log('Scale FAB clicked!')}
                />
                <span>Scale</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    animation="rotate"
                    icon="🔄"
                    onClick={() => console.log('Rotate FAB clicked!')}
                />
                <span>Rotate</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    animation="bounce"
                    icon="⚡"
                    onClick={() => console.log('Bounce FAB clicked!')}
                />
                <span>Bounce</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    animation="pulse"
                    icon="💓"
                    onClick={() => console.log('Pulse FAB clicked!')}
                />
                <span>Pulse</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    animation="none"
                    icon="🚫"
                    onClick={() => console.log('None FAB clicked!')}
                />
                <span>None</span>
            </div>
        </div>
    ),
};

// 그림자 효과
export const Elevations: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    elevation="none"
                    icon="👻"
                    onClick={() => console.log('None elevation FAB clicked!')}
                />
                <span>None</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    elevation="sm"
                    icon="🌫️"
                    onClick={() => console.log('Small elevation FAB clicked!')}
                />
                <span>Small</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    elevation="md"
                    icon="☁️"
                    onClick={() => console.log('Medium elevation FAB clicked!')}
                />
                <span>Medium</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    elevation="lg"
                    icon="⛅"
                    onClick={() => console.log('Large elevation FAB clicked!')}
                />
                <span>Large</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    elevation="xl"
                    icon="🌩️"
                    onClick={() => console.log('Extra Large elevation FAB clicked!')}
                />
                <span>Extra Large</span>
            </div>
        </div>
    ),
};

// 상태별 FAB
export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    icon="✅"
                    onClick={() => console.log('Normal FAB clicked!')}
                />
                <span>Normal</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    disabled={true}
                    icon="❌"
                    onClick={() => console.log('Disabled FAB clicked!')}
                />
                <span>Disabled</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <FloatingActionButton
                    loading={true}
                    onClick={() => console.log('Loading FAB clicked!')}
                />
                <span>Loading</span>
            </div>
        </div>
    ),
};

// 실제 사용 예제
export const UsageExamples: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ position: 'relative', width: '100vw', height: '100vh', border: '1px solid #ccc' }}>
                <div style={{ padding: '20px' }}>
                    <h3>실제 사용 예제</h3>
                    <p>다양한 용도로 사용되는 FAB 예제들입니다.</p>
                </div>

                {/* 메인 FAB */}
                <FloatingActionButton
                    position="bottom-right"
                    icon={isOpen ? '✕' : '+'}
                    animation="rotate"
                    onClick={() => setIsOpen(!isOpen)}
                />

                {/* 서브 FAB들 (메인 FAB이 열렸을 때만 표시) */}
                {isOpen && (
                    <>
                        <FloatingActionButton
                            position="bottom-right"
                            icon="📧"
                            size="sm"
                            style={{ bottom: '88px', right: '24px' }}
                            onClick={() => console.log('Email FAB clicked!')}
                        />
                        <FloatingActionButton
                            position="bottom-right"
                            icon="📷"
                            size="sm"
                            style={{ bottom: '136px', right: '24px' }}
                            onClick={() => console.log('Camera FAB clicked!')}
                        />
                        <FloatingActionButton
                            position="bottom-right"
                            icon="📝"
                            size="sm"
                            style={{ bottom: '184px', right: '24px' }}
                            onClick={() => console.log('Note FAB clicked!')}
                        />
                    </>
                )}

                {/* 다른 위치의 FAB들 */}
                <FloatingActionButton
                    position="top-right"
                    icon="🔍"
                    variant="info"
                    onClick={() => console.log('Search FAB clicked!')}
                />

                <FloatingActionButton
                    position="bottom-left"
                    extended={true}
                    icon="📞"
                    label="고객 지원"
                    variant="success"
                    onClick={() => console.log('Support FAB clicked!')}
                />
            </div>
        );
    },
};

// 접근성 예제
export const Accessibility: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <FloatingActionButton
                icon="♿"
                label="접근성 고려 FAB"
                extended={true}
                onClick={() => console.log('Accessibility FAB clicked!')}
            />
            <p>이 FAB은 스크린 리더와 키보드 네비게이션을 지원합니다.</p>
            <ul style={{ textAlign: 'left' }}>
                <li>Tab 키로 포커스 가능</li>
                <li>Enter/Space 키로 클릭 가능</li>
                <li>aria-label 속성으로 스크린 리더 지원</li>
                <li>포커스 표시로 시각적 피드백 제공</li>
            </ul>
        </div>
    ),
};
