import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';
import AnimationBackground from './AnimationBackground';

const meta: Meta<typeof AnimationBackground> = {
    title: 'Components/AnimationBackground',
    component: AnimationBackground,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '배경에 다양한 애니메이션 효과를 적용할 수 있는 AnimationBackground 컴포넌트입니다. 그라디언트, 펄스, 파도, 파티클, 별, 오로라 등을 지원하며, 테마(다크/라이트)와 그리드 오버레이를 조합할 수 있습니다.',
            },
        },
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['gradient', 'pulse', 'wave', 'particles', 'stars', 'aurora'],
            description: '애니메이션 타입',
        },
        theme: {
            control: { type: 'radio' },
            options: ['dark', 'light'],
            description: '테마 (다크/라이트, 오로라·배경 톤)',
        },
        showGrid: {
            control: { type: 'boolean' },
            description: '그리드 오버레이 표시',
        },
        gridSize: {
            control: { type: 'number', min: 10, max: 80, step: 5 },
            description: '그리드 칸 크기 (px)',
        },
        gridColor: {
            control: { type: 'color' },
            description: '그리드 색상',
        },
        gridOpacity: {
            control: { type: 'number', min: 0.02, max: 0.5, step: 0.01 },
            description: '그리드 투명도',
        },
        speed: {
            control: { type: 'number', min: 500, max: 10000, step: 500 },
            description: '애니메이션 속도 (ms)',
        },
        repeat: {
            control: { type: 'number', min: 0, max: 10, step: 1 },
            description: '애니메이션 반복 횟수 (0은 무한 반복)',
        },
        delay: {
            control: { type: 'number', min: 0, max: 3000, step: 100 },
            description: '애니메이션 지연 시간 (ms)',
        },
        direction: {
            control: { type: 'select' },
            options: ['left', 'right', 'up', 'down', 'diagonal', 'radial'],
            description: '애니메이션 방향',
        },
        intensity: {
            control: { type: 'select' },
            options: ['subtle', 'medium', 'vivid'],
            description: '오로라/배경 강도 (aurora 타입)',
        },
        blur: {
            control: { type: 'number', min: 20, max: 120, step: 10 },
            description: '오로라 블러 강도 (px)',
        },
        colors: {
            control: { type: 'object' },
            description: '배경 색상들',
        },
        width: {
            control: { type: 'text' },
            description: '컴포넌트 너비',
        },
        height: {
            control: { type: 'text' },
            description: '컴포넌트 높이',
        },
        borderRadius: {
            control: { type: 'text' },
            description: '테두리 반경',
        },
        opacity: {
            control: { type: 'number', min: 0, max: 1, step: 0.1 },
            description: '투명도',
        },
        blendMode: {
            control: { type: 'select' },
            options: ['normal', 'multiply', 'screen', 'overlay', 'soft-light', 'hard-light', 'color-dodge', 'color-burn', 'darken', 'lighten', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'],
            description: '블렌드 모드',
        },
        particleCount: {
            control: { type: 'number', min: 10, max: 200, step: 10 },
            description: '파티클 개수 (particles 타입용)',
        },
        particleSize: {
            control: { type: 'number', min: 1, max: 10, step: 1 },
            description: '파티클 크기 (particles 타입용)',
        },
        starCount: {
            control: { type: 'number', min: 20, max: 300, step: 20 },
            description: '별 개수 (stars 타입용)',
        },
        starSize: {
            control: { type: 'number', min: 1, max: 8, step: 1 },
            description: '별 크기 (stars 타입용)',
        },
        clickable: {
            control: { type: 'boolean' },
            description: '클릭 가능',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화',
        },
        onClick: {
            action: 'onClick',
            description: '클릭 핸들러',
        },
    },
    args: {
        type: 'gradient',
        theme: 'dark',
        intensity: 'subtle',
        blur: 80,
        speed: 3000,
        repeat: 0,
        direction: 'left',
        colors: ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
        width: '300px',
        height: '200px',
        borderRadius: '8px',
        opacity: 1,
        blendMode: 'normal',
        particleCount: 50,
        particleSize: 2,
        starCount: 100,
        starSize: 1.5,
        clickable: false,
        disabled: false,
        showGrid: false,
        gridSize: 40,
        gridOpacity: 0.1,
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;



// 필수: Light Aurora Mesh + Blueprint (전달하신 레퍼런스 그대로)
export const LightAuroraMeshAndBlueprint: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', color: 'var(--db-text-primary)' }}>Light Aurora Mesh</h4>
                <AnimationBackground
                    type="aurora"
                    theme="light"
                    colors={['#c084fc', '#f472b6', '#38bdf8']}
                    speed={6000}
                    intensity="medium"
                    showGrid
                    gridSize={40}
                    gridOpacity={0.05}
                    height="200px"
                    borderRadius="16px"
                >
                    <div style={{ padding: '24px', color: '#1e293b', textAlign: 'center', fontSize: '1rem' }}>
                        라이트 오로라 메쉬 + 그리드
                    </div>
                </AnimationBackground>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0', color: 'var(--db-text-primary)' }}>Blueprint</h4>
                <AnimationBackground
                    type="gradient"
                    theme="dark"
                    colors={['#1e293b', '#0f172a']}
                    direction="up"
                    showGrid
                    gridColor="#60a5fa"
                    gridSize={20}
                    gridOpacity={0.05}
                    height="200px"
                    borderRadius="16px"
                >
                    <div style={{ padding: '24px', color: 'white', textAlign: 'center', fontSize: '1rem' }}>
                        블루프린트 그리드
                    </div>
                </AnimationBackground>
            </div>
        </div>
    ),
};

// 모든 애니메이션 타입
export const AllAnimationTypes: Story = {
    render: () => {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <div>
                    <h3>Gradient</h3>
                    <AnimationBackground
                        type="gradient"
                        colors={['#667eea', '#764ba2', '#f093fb']}
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            그라디언트 배경
                        </div>
                    </AnimationBackground>
                </div>

                <div>
                    <h3>Pulse</h3>
                    <AnimationBackground
                        type="pulse"
                        colors={['#ff6b6b', '#4ecdc4']}
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            펄스 배경
                        </div>
                    </AnimationBackground>
                </div>

                <div>
                    <h3>Wave</h3>
                    <AnimationBackground
                        type="wave"
                        colors={['#667eea', '#764ba2', '#f093fb']}
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            파도 배경
                        </div>
                    </AnimationBackground>
                </div>

                <div>
                    <h3>Particles</h3>
                    <AnimationBackground
                        type="particles"
                        colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
                        height="150px"
                        particleCount={30}
                    />
                </div>

                <div>
                    <h3>Stars</h3>
                    <AnimationBackground
                        type="stars"
                        colors={['#ffffff', '#ffd700', '#ff6b6b']}
                        height="150px"
                        starCount={80}
                    />
                </div>

                <div>
                    <h3>Aurora (은은한 블러 + 앱스트랙트)</h3>
                    <AnimationBackground
                        type="aurora"
                        intensity="subtle"
                        blur={80}
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'var(--db-text-primary)', textAlign: 'center' }}>
                            오로라 배경
                        </div>
                    </AnimationBackground>
                </div>
            </div>
        );
    },
};













// 블렌드 모드
export const BlendModes: Story = {
    render: () => {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', padding: '20px', borderRadius: '8px' }}>
                    <h3>Normal</h3>
                    <AnimationBackground
                        type="gradient"
                        blendMode="normal"
                        height="100px"
                        opacity={0.7}
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            Normal 블렌드
                        </div>
                    </AnimationBackground>
                </div>

                <div style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', padding: '20px', borderRadius: '8px' }}>
                    <h3>Multiply</h3>
                    <AnimationBackground
                        type="gradient"
                        blendMode="multiply"
                        height="100px"
                        opacity={0.7}
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            Multiply 블렌드
                        </div>
                    </AnimationBackground>
                </div>

                <div style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', padding: '20px', borderRadius: '8px' }}>
                    <h3>Screen</h3>
                    <AnimationBackground
                        type="gradient"
                        blendMode="screen"
                        height="100px"
                        opacity={0.7}
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            Screen 블렌드
                        </div>
                    </AnimationBackground>
                </div>

                <div style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', padding: '20px', borderRadius: '8px' }}>
                    <h3>Overlay</h3>
                    <AnimationBackground
                        type="gradient"
                        blendMode="overlay"
                        height="100px"
                        opacity={0.7}
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            Overlay 블렌드
                        </div>
                    </AnimationBackground>
                </div>
            </div>
        );
    },
};

// 테마 + 그리드 (다크 오로라, Light Aurora Mesh, Cyber Grid, Blueprint)
export const ThemeAndGrid: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0' }}>Dark Aurora Mesh</h4>
                <AnimationBackground
                    type="aurora"
                    theme="dark"
                    colors={['#6366f1', '#a855f7', '#ec4899']}
                    speed={6000}
                    intensity="vivid"
                    height="160px"
                    borderRadius="12px"
                >
                    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>다크 오로라</div>
                </AnimationBackground>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0' }}>Light Aurora Mesh</h4>
                <AnimationBackground
                    type="aurora"
                    theme="light"
                    colors={['#c084fc', '#f472b6', '#38bdf8']}
                    speed={6000}
                    intensity="medium"
                    showGrid
                    gridSize={40}
                    gridOpacity={0.12}
                    height="160px"
                    borderRadius="12px"
                >
                    <div style={{ padding: '20px', color: '#1e293b', textAlign: 'center' }}>라이트 오로라 메쉬</div>
                </AnimationBackground>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0' }}>Cyber Grid</h4>
                <AnimationBackground
                    type="particles"
                    theme="dark"
                    colors={['#2dd4bf', '#0ea5e9']}
                    particleCount={40}
                    clickable
                    speed={1000}
                    showGrid
                    gridColor="#2dd4bf"
                    gridOpacity={0.15}
                    gridSize={30}
                    height="160px"
                    borderRadius="12px"
                >
                    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>사이버 그리드</div>
                </AnimationBackground>
            </div>
            <div>
                <h4 style={{ margin: '0 0 8px 0' }}>Blueprint</h4>
                <AnimationBackground
                    type="gradient"
                    theme="dark"
                    colors={['#1e293b', '#0f172a']}
                    direction="up"
                    showGrid
                    gridColor="#60a5fa"
                    gridSize={20}
                    gridOpacity={0.2}
                    height="160px"
                    borderRadius="12px"
                >
                    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>블루프린트</div>
                </AnimationBackground>
            </div>
        </div>
    ),
};

// UI용 오로라 배경 (은은·블러·앱스트랙트)
export const AuroraForUI: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ color: 'var(--db-text-secondary)', margin: 0 }}>
                오로라 타입: 은은한 블러 + 앱스트랙트 형태로, 카드/섹션/히어로 배경으로 쓰기 좋습니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <AnimationBackground
                    type="aurora"
                    intensity="subtle"
                    blur={80}
                    height="180px"
                    borderRadius="16px"
                >
                    <div style={{ padding: '24px', color: 'var(--db-text-primary)' }}>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>Subtle (기본)</h4>
                        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--db-text-secondary)' }}>
                            블러 80px, 은은한 강도
                        </p>
                    </div>
                </AnimationBackground>
                <AnimationBackground
                    type="aurora"
                    intensity="medium"
                    blur={60}
                    height="180px"
                    borderRadius="16px"
                >
                    <div style={{ padding: '24px', color: 'var(--db-text-primary)' }}>
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>Medium</h4>
                        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--db-text-secondary)' }}>
                            조금 더 뚜렷한 오로라
                        </p>
                    </div>
                </AnimationBackground>
            </div>
        </div>
    ),
};

// 복합 예제
export const ComplexExamples: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div>
                    <h2>웹사이트 히어로 섹션 (오로라 배경)</h2>
                    <AnimationBackground
                        type="aurora"
                        intensity="subtle"
                        blur={100}
                        height="400px"
                    >
                        <div style={{
                            padding: '80px 40px',
                            color: 'var(--db-text-primary)',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '20px'
                        }}>
                            <h1 style={{ fontSize: '3rem', margin: 0 }}>환영합니다</h1>
                            <p style={{ fontSize: '1.2rem', margin: 0, color: 'var(--db-text-secondary)' }}>
                                은은한 오로라 배경과 함께
                            </p>
                            <button style={{
                                padding: '15px 30px',
                                border: 'none',
                                borderRadius: '25px',
                                background: 'var(--db-brand-primary)',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '1rem',
                            }}>
                                시작하기
                            </button>
                        </div>
                    </AnimationBackground>
                </div>

                <div>
                    <h2>카드 배경</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        <AnimationBackground
                            type="gradient"
                            height="200px"
                            borderRadius="12px"
                            colors={['#ff6b6b', '#ffa500']}
                        >
                            <div style={{ padding: '20px', color: 'white' }}>
                                <h3>그라디언트 카드</h3>
                                <p>아름다운 그라디언트 배경을 가진 카드입니다.</p>
                            </div>
                        </AnimationBackground>

                        <AnimationBackground
                            type="wave"
                            height="200px"
                            borderRadius="12px"
                            colors={['#667eea', '#764ba2']}
                        >
                            <div style={{ padding: '20px', color: 'white' }}>
                                <h3>파도 카드</h3>
                                <p>동적인 파도 애니메이션을 가진 카드입니다.</p>
                            </div>
                        </AnimationBackground>

                        <AnimationBackground
                            type="particles"
                            height="200px"
                            borderRadius="12px"
                            colors={['#4ecdc4', '#45b7d1']}
                            particleCount={40}
                        >
                            <div style={{ padding: '20px', color: 'white' }}>
                                <h3>파티클 카드</h3>
                                <p>움직이는 파티클을 가진 카드입니다.</p>
                            </div>
                        </AnimationBackground>
                    </div>
                </div>

                <div>
                    <h2>버튼 배경</h2>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <AnimationBackground
                            type="gradient"
                            width="200px"
                            height="50px"
                            borderRadius="25px"
                            clickable={true}
                        >
                            <div style={{
                                padding: '15px',
                                color: 'white',
                                textAlign: 'center',
                                cursor: 'pointer'
                            }}>
                                그라디언트 버튼
                            </div>
                        </AnimationBackground>

                        <AnimationBackground
                            type="pulse"
                            width="200px"
                            height="50px"
                            borderRadius="25px"
                            clickable={true}
                        >
                            <div style={{
                                padding: '15px',
                                color: 'white',
                                textAlign: 'center',
                                cursor: 'pointer'
                            }}>
                                펄스 버튼
                            </div>
                        </AnimationBackground>
                    </div>
                </div>
            </div>
        );
    },
};
