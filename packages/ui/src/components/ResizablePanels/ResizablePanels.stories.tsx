import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ResizablePanels from './ResizablePanels';

const meta: Meta<typeof ResizablePanels> = {
    title: 'Components/ResizablePanels',
    component: ResizablePanels,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '우측하단에 리사이즈 핸들을 가지고, 최소/최대 크기 제한을 지원하는 패널 컴포넌트입니다. 마우스나 터치로 크기를 자유롭게 조정할 수 있습니다.',
            },
        },
    },
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['both', 'horizontal', 'vertical'],
            description: '리사이즈 방향',
        },
        handlePosition: {
            control: { type: 'select' },
            options: ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'right', 'bottom'],
            description: '리사이즈 핸들 위치',
        },
        snapToGrid: {
            control: { type: 'number', min: 0, max: 100, step: 5 },
            description: '그리드 스냅 간격 (0 = 비활성화)',
        },
        showGuides: {
            control: { type: 'boolean' },
            description: '리사이즈 중 가이드라인 표시',
        },
        showSizeIndicator: {
            control: { type: 'boolean' },
            description: '리사이즈 중 크기 표시',
        },
        showConstraints: {
            control: { type: 'boolean' },
            description: '최소/최대 제약 조건 경고 표시',
        },
        showBorder: {
            control: { type: 'boolean' },
            description: '테두리 표시',
        },
        shadow: {
            control: { type: 'boolean' },
            description: '그림자 효과',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 사용법
export const Default: Story = {
    args: {
        initialWidth: 400,
        initialHeight: 300,
        minWidth: 200,
        minHeight: 150,
        maxWidth: 800,
        maxHeight: 600,
        showBorder: true,
        shadow: true,
        onResizeStart: fn(),
        onResize: fn(),
        onResizeEnd: fn(),
        onSizeChange: fn(),
    },
    render: (args) => (
        <div style={{ padding: '20px', height: '100vh' }}>
            <ResizablePanels {...args}>
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h3>리사이즈 가능한 패널</h3>
                    <p>우측하단의 핸들을 드래그하여 크기를 조정하세요</p>
                    <div style={{
                        width: '80%',
                        height: '60%',
                        backgroundColor: '#e9ecef',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}>
                        내용 영역
                    </div>
                </div>
            </ResizablePanels>
        </div>
    ),
};

// 가로 방향만 리사이즈
export const HorizontalOnly: Story = {
    args: {
        ...Default.args,
        direction: 'horizontal',
        handlePosition: 'right',
        initialWidth: 300,
        initialHeight: 200,
    },
    render: (args) => (
        <div style={{ padding: '20px', height: '100vh' }}>
            <ResizablePanels {...args}>
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#e3f2fd',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h3>가로 방향만 리사이즈</h3>
                    <p>우측의 핸들을 드래그하여 너비만 조정할 수 있습니다</p>
                </div>
            </ResizablePanels>
        </div>
    ),
};

// 세로 방향만 리사이즈
export const VerticalOnly: Story = {
    args: {
        ...Default.args,
        direction: 'vertical',
        handlePosition: 'bottom',
        initialWidth: 350,
        initialHeight: 250,
    },
    render: (args) => (
        <div style={{ padding: '20px', height: '100vh' }}>
            <ResizablePanels {...args}>
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#f3e5f5',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h3>세로 방향만 리사이즈</h3>
                    <p>하단의 핸들을 드래그하여 높이만 조정할 수 있습니다</p>
                </div>
            </ResizablePanels>
        </div>
    ),
};

// 그리드 스냅 기능
export const WithGridSnap: Story = {
    args: {
        ...Default.args,
        snapToGrid: 20,
        initialWidth: 400,
        initialHeight: 300,
    },
    render: (args) => (
        <div style={{ padding: '20px', height: '100vh' }}>
            <ResizablePanels {...args}>
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#fff3e0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h3>그리드 스냅 기능</h3>
                    <p>20px 간격으로 크기가 스냅됩니다</p>
                    <div style={{
                        width: '100%',
                        height: '60%',
                        backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                        borderRadius: '8px',
                        marginTop: '20px'
                    }} />
                </div>
            </ResizablePanels>
        </div>
    ),
};

// 다양한 핸들 위치
export const DifferentHandlePositions: Story = {
    render: () => (
        <div style={{ padding: '20px', height: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <ResizablePanels
                initialWidth={300}
                initialHeight={200}
                handlePosition="top-left"
                handleColor="#ff5722"
                showBorder={true}
                onResizeStart={fn()}
                onResize={fn()}
                onResizeEnd={fn()}
                onSizeChange={fn()}
            >
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#ffebee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h4>Top-Left 핸들</h4>
                </div>
            </ResizablePanels>

            <ResizablePanels
                initialWidth={300}
                initialHeight={200}
                handlePosition="top-right"
                handleColor="#4caf50"
                showBorder={true}
                onResizeStart={fn()}
                onResize={fn()}
                onResizeEnd={fn()}
                onSizeChange={fn()}
            >
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#e8f5e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h4>Top-Right 핸들</h4>
                </div>
            </ResizablePanels>

            <ResizablePanels
                initialWidth={300}
                initialHeight={200}
                handlePosition="bottom-left"
                handleColor="#2196f3"
                showBorder={true}
                onResizeStart={fn()}
                onResize={fn()}
                onResizeEnd={fn()}
                onSizeChange={fn()}
            >
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#e3f2fd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h4>Bottom-Left 핸들</h4>
                </div>
            </ResizablePanels>

            <ResizablePanels
                initialWidth={300}
                initialHeight={200}
                handlePosition="bottom-right"
                handleColor="#9c27b0"
                showBorder={true}
                onResizeStart={fn()}
                onResize={fn()}
                onResizeEnd={fn()}
                onSizeChange={fn()}
            >
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#f3e5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h4>Bottom-Right 핸들</h4>
                </div>
            </ResizablePanels>
        </div>
    ),
};

// 이벤트 핸들링 예시
export const WithEventHandling: Story = {
    render: () => {
        const [size, setSize] = useState({ width: 400, height: 300 });
        const [isResizing, setIsResizing] = useState(false);

        return (
            <div style={{ padding: '20px', height: '100vh' }}>
                <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <h3>이벤트 모니터링</h3>
                    <p><strong>현재 크기:</strong> {Math.round(size.width)} × {Math.round(size.height)}</p>
                    <p><strong>상태:</strong> {isResizing ? '리사이징 중' : '대기 중'}</p>
                </div>

                <ResizablePanels
                    initialWidth={400}
                    initialHeight={300}
                    minWidth={200}
                    minHeight={150}
                    maxWidth={800}
                    maxHeight={600}
                    showBorder={true}
                    shadow={true}
                    onResizeStart={() => setIsResizing(true)}
                    onResize={setSize}
                    onResizeEnd={() => setIsResizing(false)}
                >
                    <div style={{
                        padding: '20px',
                        height: '100%',
                        backgroundColor: '#e8f5e8',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <h3>이벤트 핸들링 예시</h3>
                        <p>크기를 조정하면 위의 정보가 실시간으로 업데이트됩니다</p>
                        <div style={{
                            width: '80%',
                            height: '40%',
                            backgroundColor: '#c8e6c9',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '20px',
                            fontSize: '14px'
                        }}>
                            실시간 크기: {Math.round(size.width)} × {Math.round(size.height)}
                        </div>
                    </div>
                </ResizablePanels>
            </div>
        );
    },
};

// 최소/최대 제약 조건 테스트
export const ConstraintTesting: Story = {
    args: {
        initialWidth: 300,
        initialHeight: 200,
        minWidth: 250,
        minHeight: 180,
        maxWidth: 500,
        maxHeight: 400,
        showConstraints: true,
        showSizeIndicator: true,
        showGuides: true,
        showBorder: true,
        shadow: true,
        onResizeStart: fn(),
        onResize: fn(),
        onResizeEnd: fn(),
        onSizeChange: fn(),
    },
    render: (args) => (
        <div style={{ padding: '20px', height: '100vh' }}>
            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
                <h3>제약 조건 테스트</h3>
                <p><strong>최소 크기:</strong> 250 × 180</p>
                <p><strong>최대 크기:</strong> 500 × 400</p>
                <p>이 범위를 벗어나면 경고가 표시됩니다</p>
            </div>

            <ResizablePanels {...args}>
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#fff3e0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h3>제약 조건 테스트 패널</h3>
                    <p>최소/최대 크기 제한을 테스트해보세요</p>
                    <div style={{
                        width: '80%',
                        height: '50%',
                        backgroundColor: '#ffe0b2',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '20px',
                        border: '2px dashed #ffb74d'
                    }}>
                        제약 조건 영역
                    </div>
                </div>
            </ResizablePanels>
        </div>
    ),
};

// 커스텀 핸들 아이콘
export const CustomHandleIcon: Story = {
    args: {
        ...Default.args,
        handleIcon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 18h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V8H8v2zM4 20h16V4H4v16z" />
            </svg>
        ),
        handleColor: '#ff6b6b',
        handleHoverColor: '#ee5a52',
        handleSize: 24,
    },
    render: (args) => (
        <div style={{ padding: '20px', height: '100vh' }}>
            <ResizablePanels {...args}>
                <div style={{
                    padding: '20px',
                    height: '100%',
                    backgroundColor: '#ffeaa7',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h3>커스텀 핸들 아이콘</h3>
                    <p>우측하단의 빨간색 핸들을 확인하세요</p>
                    <div style={{
                        width: '80%',
                        height: '60%',
                        backgroundColor: '#fdcb6e',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}>
                        커스텀 아이콘
                    </div>
                </div>
            </ResizablePanels>
        </div>
    ),
};
