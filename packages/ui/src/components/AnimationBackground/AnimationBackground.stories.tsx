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
                component: '배경에 다양한 애니메이션 효과를 적용할 수 있는 AnimationBackground 컴포넌트입니다. 그라디언트, 레인보우, 펄스, 파도, 파티클, 별, 오로라, 불, 바다, 일몰 등의 효과를 지원합니다.',
            },
        },
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['gradient', 'rainbow', 'pulse', 'wave', 'particles', 'stars', 'aurora', 'fire', 'ocean', 'sunset'],
            description: '애니메이션 타입',
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
        speed: 3000,
        repeat: 0,
        delay: 0,
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
        starSize: 2,
        clickable: false,
        disabled: false,
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;



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
                    <h3>Rainbow</h3>
                    <AnimationBackground
                        type="rainbow"
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            레인보우 배경
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
                    <h3>Aurora</h3>
                    <AnimationBackground
                        type="aurora"
                        colors={['#00ff88', '#00ccff', '#ff00ff']}
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            오로라 배경
                        </div>
                    </AnimationBackground>
                </div>

                <div>
                    <h3>Fire</h3>
                    <AnimationBackground
                        type="fire"
                        colors={['#ff4500', '#ff8c00', '#ffd700']}
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            불 배경
                        </div>
                    </AnimationBackground>
                </div>

                <div>
                    <h3>Ocean</h3>
                    <AnimationBackground
                        type="ocean"
                        colors={['#006994', '#0099cc', '#00ccff']}
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            바다 배경
                        </div>
                    </AnimationBackground>
                </div>

                <div>
                    <h3>Sunset</h3>
                    <AnimationBackground
                        type="sunset"
                        colors={['#ff6b6b', '#ffa500', '#ffd700']}
                        height="150px"
                    >
                        <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
                            일몰 배경
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

// 복합 예제
export const ComplexExamples: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div>
                    <h2>웹사이트 히어로 섹션</h2>
                    <AnimationBackground
                        type="aurora"
                        height="400px"
                        colors={['#667eea', '#764ba2', '#f093fb']}
                    >
                        <div style={{
                            padding: '80px 40px',
                            color: 'white',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '20px'
                        }}>
                            <h1 style={{ fontSize: '3rem', margin: 0 }}>환영합니다</h1>
                            <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>
                                멋진 애니메이션 배경 컴포넌트입니다
                            </p>
                            <button style={{
                                padding: '15px 30px',
                                border: 'none',
                                borderRadius: '25px',
                                background: 'rgba(255,255,255,0.2)',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                backdropFilter: 'blur(10px)'
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

                        <AnimationBackground
                            type="fire"
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
                                불 버튼
                            </div>
                        </AnimationBackground>
                    </div>
                </div>
            </div>
        );
    },
};
