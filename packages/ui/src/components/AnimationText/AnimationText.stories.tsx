import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';
import AnimationText from './AnimationText';

const meta: Meta<typeof AnimationText> = {
    title: 'Components/AnimationText',
    component: AnimationText,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '텍스트에 다양한 애니메이션 효과를 적용할 수 있는 AnimationText 컴포넌트입니다. 타이핑, 페이드, 슬라이드, 바운스, 흔들기, 글로우, 그라디언트, 파도, 플립, 스케일 등의 효과를 지원합니다.',
            },
        },
    },
    argTypes: {
        children: {
            control: { type: 'text' },
            description: '애니메이션할 텍스트',
        },
        type: {
            control: { type: 'select' },
            options: ['typing', 'fade', 'slide', 'bounce', 'shake', 'glow', 'gradient', 'wave', 'flip', 'scale'],
            description: '애니메이션 타입',
        },
        speed: {
            control: { type: 'number', min: 100, max: 5000, step: 100 },
            description: '애니메이션 속도 (ms)',
        },
        repeat: {
            control: { type: 'number', min: 0, max: 10, step: 1 },
            description: '애니메이션 반복 횟수 (0은 무한 반복)',
        },
        delay: {
            control: { type: 'number', min: 0, max: 2000, step: 100 },
            description: '애니메이션 지연 시간 (ms)',
        },
        direction: {
            control: { type: 'select' },
            options: ['left', 'right', 'up', 'down', 'alternate'],
            description: '애니메이션 방향',
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            description: '텍스트 크기',
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'custom'],
            description: '텍스트 색상',
        },
        customColor: {
            control: { type: 'color' },
            description: '커스텀 색상',
        },
        weight: {
            control: { type: 'select' },
            options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
            description: '텍스트 굵기',
        },
        align: {
            control: { type: 'select' },
            options: ['left', 'center', 'right', 'justify'],
            description: '텍스트 정렬',
        },
        gradientColors: {
            control: { type: 'object' },
            description: '그라디언트 색상 (gradient 타입용)',
        },
        waveColors: {
            control: { type: 'object' },
            description: '파도 효과 색상 (wave 타입용)',
        },
        glowColor: {
            control: { type: 'color' },
            description: '글로우 효과 색상 (glow 타입용)',
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
        children: '애니메이션 텍스트',
        type: 'fade',
        speed: 1000,
        repeat: 0,
        delay: 0,
        direction: 'left',
        size: 'm',
        color: 'primary',
        weight: 'normal',
        align: 'left',
        gradientColors: ['#667eea', '#764ba2'],
        waveColors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
        glowColor: '#667eea',
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
                    <h3>Fade</h3>
                    <AnimationText type="fade" speed={1000}>
                        페이드 인 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Slide</h3>
                    <AnimationText type="slide" speed={1000} direction="left">
                        슬라이드 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Bounce</h3>
                    <AnimationText type="bounce" speed={1000}>
                        바운스 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Shake</h3>
                    <AnimationText type="shake" speed={1000}>
                        흔들기 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Glow</h3>
                    <AnimationText type="glow" speed={1000} glowColor="#ff6b6b">
                        글로우 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Gradient</h3>
                    <AnimationText type="gradient" speed={1000} gradientColors={['#667eea', '#764ba2', '#f093fb']}>
                        그라디언트 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Wave</h3>
                    <AnimationText type="wave" speed={1000} waveColors={['#ff6b6b', '#4ecdc4', '#45b7d1']}>
                        파도 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Flip</h3>
                    <AnimationText type="flip" speed={1000}>
                        플립 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Scale</h3>
                    <AnimationText type="scale" speed={1000}>
                        스케일 애니메이션
                    </AnimationText>
                </div>
                <div>
                    <h3>Typing</h3>
                    <AnimationText type="typing" speed={2000}>
                        타이핑 애니메이션
                    </AnimationText>
                </div>
            </div>
        );
    },
};


















