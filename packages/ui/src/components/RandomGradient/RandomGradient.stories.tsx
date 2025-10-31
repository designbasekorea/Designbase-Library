/**
 * RandomGradient 컴포넌트 스토리
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RandomGradient } from './RandomGradient';
import { Button } from '../Button/Button';

const meta: Meta<typeof RandomGradient> = {
    title: 'Components/RandomGradient',
    component: RandomGradient,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        scheme: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'purple', 'ocean', 'sunset'],
            description: '그라데이션 색상 계열',
        },
        tone: {
            control: { type: 'select' },
            options: ['light', 'vivid', 'dark'],
            description: '그라데이션 톤',
        },
        width: {
            control: 'text',
            description: '너비',
        },
        height: {
            control: 'text',
            description: '높이',
        },
        blur: {
            control: { type: 'number', min: 0, max: 200 },
            description: '블러 강도 (px, 최소값 80px)',
        },
        colorCount: {
            control: { type: 'number', min: 3, max: 6 },
            description: '색상 개수',
        },
        animated: {
            control: 'boolean',
            description: '애니메이션 활성화',
        },
        animationDuration: {
            control: { type: 'number' },
            description: '애니메이션 주기 (초)',
        },
        overlay: {
            control: 'boolean',
            description: '오버레이 활성화',
        },
        overlayOpacity: {
            control: { type: 'number', min: 0, max: 1, step: 0.1 },
            description: '오버레이 투명도',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        scheme: 'primary',
        height: '400px',
    },
};

export const AllSchemes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'purple', 'ocean', 'sunset'] as const).map((scheme) => (
                <div key={scheme}>
                    <h3 style={{ marginBottom: '12px', textTransform: 'capitalize' }}>{scheme}</h3>
                    <RandomGradient scheme={scheme} tone="vivid" height="200px">
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                        }}>
                            {scheme.toUpperCase()}
                        </div>
                    </RandomGradient>
                </div>
            ))}
        </div>
    ),
};

export const AllTones: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {(['light', 'vivid', 'dark'] as const).map((tone) => (
                <div key={tone}>
                    <h3 style={{ marginBottom: '12px', textTransform: 'capitalize' }}>{tone} Tone</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        {(['primary', 'success', 'warning', 'error', 'purple', 'ocean'] as const).map((scheme) => (
                            <RandomGradient key={scheme} scheme={scheme} tone={tone} height="150px">
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    color: tone === 'light' ? '#333' : 'white',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    textShadow: tone === 'light' ? '0 1px 4px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.3)'
                                }}>
                                    {scheme}
                                </div>
                            </RandomGradient>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    ),
};

export const WithContent: Story = {
    args: {
        scheme: 'sunset',
        height: '500px',
        children: (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '48px',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '24px',
                    textShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}>
                    환영합니다
                </h2>
                <p style={{
                    fontSize: '20px',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '32px',
                    textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                    멋진 그라데이션 배경과 함께하는 당신의 웹사이트
                </p>
                <Button variant="primary" size="l">
                    시작하기
                </Button>
            </div>
        ),
    },
};

export const CardGrid: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {(['primary', 'success', 'warning', 'error', 'purple', 'ocean'] as const).map((scheme) => (
                <RandomGradient key={scheme} scheme={scheme} height="200px">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        padding: '24px',
                        textAlign: 'center'
                    }}>
                        <h4 style={{
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginBottom: '8px',
                            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                        }}>
                            {scheme.charAt(0).toUpperCase() + scheme.slice(1)} 카드
                        </h4>
                        <p style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '14px',
                            textShadow: '0 1px 4px rgba(0,0,0,0.2)'
                        }}>
                            200px 높이
                        </p>
                    </div>
                </RandomGradient>
            ))}
        </div>
    ),
};

export const Animated: Story = {
    args: {
        scheme: 'ocean',
        height: '400px',
        animated: true,
        animationDuration: 10,
        children: (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: 'white',
                fontSize: '32px',
                fontWeight: 'bold',
                textShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}>
                애니메이션 그라데이션
            </div>
        ),
    },
};

export const TimeSaleExample: Story = {
    render: () => (
        <RandomGradient scheme="error" height="300px" blur={100}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '32px',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '16px',
                    textShadow: '0 4px 12px rgba(0,0,0,0.4)'
                }}>
                    🔥 특별 타임세일
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: 'rgba(255,255,255,0.95)',
                    marginBottom: '24px',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>
                    지금 바로 구매하고 50% 할인 받으세요!
                </p>
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '0 4px 12px rgba(0,0,0,0.4)'
                }}>
                    <div>05:30:45</div>
                </div>
            </div>
        </RandomGradient>
    ),
};

export const HeroSection: Story = {
    render: () => (
        <RandomGradient scheme="primary" height="600px" blur={100} animated={true}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '64px 32px',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '64px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '24px',
                    textShadow: '0 4px 16px rgba(0,0,0,0.3)'
                }}>
                    Designbase
                </h1>
                <p style={{
                    fontSize: '24px',
                    color: 'rgba(255,255,255,0.95)',
                    marginBottom: '48px',
                    maxWidth: '600px',
                    textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                    디자인 시스템을 더 쉽고 빠르게 만들어보세요
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Button variant="primary" size="xl">
                        시작하기
                    </Button>
                    <Button variant="secondary" size="xl">
                        더 알아보기
                    </Button>
                </div>
            </div>
        </RandomGradient>
    ),
};

export const DifferentBlur: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Blur: 30px (최소값 80px로 자동 조정)</h3>
                <RandomGradient scheme="purple" height="150px" blur={30}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                        최소 블러 (80px)
                    </div>
                </RandomGradient>
            </div>
            <div>
                <h3>Blur: 80px (기본값)</h3>
                <RandomGradient scheme="purple" height="150px" blur={80}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                        기본 블러
                    </div>
                </RandomGradient>
            </div>
            <div>
                <h3>Blur: 120px</h3>
                <RandomGradient scheme="purple" height="150px" blur={120}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                        높은 블러
                    </div>
                </RandomGradient>
            </div>
        </div>
    ),
};

export const WithoutOverlay: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
                <h3>오버레이 있음</h3>
                <RandomGradient scheme="ocean" height="250px" overlay={true}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                        With Overlay
                    </div>
                </RandomGradient>
            </div>
            <div>
                <h3>오버레이 없음</h3>
                <RandomGradient scheme="ocean" height="250px" overlay={false}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                        Without Overlay
                    </div>
                </RandomGradient>
            </div>
        </div>
    ),
};

export const ColorCount: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[3, 4, 5, 6].map((count) => (
                <div key={count}>
                    <h3>{count}개 색상</h3>
                    <RandomGradient scheme="primary" height="150px" colorCount={count}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                            {count} Colors
                        </div>
                    </RandomGradient>
                </div>
            ))}
        </div>
    ),
};

export const LightToneOnly: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {(['primary', 'success', 'warning', 'error', 'purple', 'ocean'] as const).map((scheme) => (
                <RandomGradient key={scheme} scheme={scheme} tone="light" height="150px">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        color: '#333',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textShadow: '0 1px 4px rgba(0,0,0,0.1)'
                    }}>
                        {scheme}
                    </div>
                </RandomGradient>
            ))}
        </div>
    ),
};
