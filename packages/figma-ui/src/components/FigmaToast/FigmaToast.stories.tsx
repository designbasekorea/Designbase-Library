import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '@designbasekorea/ui';
import { FigmaToastProvider, FigmaToast, useToast, useFigmaToast } from './FigmaToast';

const meta: Meta<typeof FigmaToast> = {
    title: 'Figma UI/FigmaToast',
    component: FigmaToast,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['success', 'error', 'warning', 'info'],
        },
        duration: {
            control: { type: 'number' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 사용법 (기존 useToast와 호환)
export const Default: Story = {
    render: () => {
        const { showToast, toastComponent } = useFigmaToast();

        return (
            <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 16px 0' }}>기본 사용법 (기존 useToast와 호환)</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Button onPress={() => showToast('성공 메시지입니다!', 'success')}>
                        성공 토스트
                    </Button>
                    <Button onPress={() => showToast('에러 메시지입니다!', 'error')}>
                        에러 토스트
                    </Button>
                    <Button onPress={() => showToast('경고 메시지입니다!', 'warning')}>
                        경고 토스트
                    </Button>
                    <Button onPress={() => showToast('정보 메시지입니다!', 'info')}>
                        정보 토스트
                    </Button>
                </div>
                {toastComponent}
            </div>
        );
    },
};

// Provider를 사용한 고급 사용법
export const WithProvider: Story = {
    render: () => {
        const ToastDemo = () => {
            const { showToast, addToast } = useToast();

            return (
                <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 16px 0' }}>Provider를 사용한 고급 토스트</h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                        <Button onPress={() => showToast('간단한 메시지')}>
                            간단한 토스트
                        </Button>
                        <Button onPress={() => addToast({
                            title: '복잡한 토스트',
                            description: '이것은 설명이 포함된 토스트입니다.',
                            status: 'success',
                            duration: 5000,
                            showProgress: true,
                        })}>
                            복잡한 토스트
                        </Button>
                        <Button onPress={() => addToast({
                            title: '긴 토스트',
                            description: '이 토스트는 자동으로 닫히지 않습니다.',
                            status: 'warning',
                            duration: 0, // 자동 닫힘 비활성화
                        })}>
                            영구 토스트
                        </Button>
                    </div>
                </div>
            );
        };

        return (
            <FigmaToastProvider position="top-right" maxToasts={3}>
                <ToastDemo />
            </FigmaToastProvider>
        );
    },
};

// 다양한 위치
export const Positions: Story = {
    render: () => {
        const PositionDemo = ({ position }: { position: 'top-right' | 'top-center' | 'bottom-center' | 'bottom-right' }) => {
            const { showToast } = useToast();

            return (
                <div style={{ padding: '20px' }}>
                    <h4 style={{ margin: '0 0 12px 0' }}>{position}</h4>
                    <Button onPress={() => showToast(`${position} 위치의 토스트`)}>
                        토스트 표시
                    </Button>
                </div>
            );
        };

        return (
            <div>
                <FigmaToastProvider position="top-right">
                    <PositionDemo position="top-right" />
                </FigmaToastProvider>
                <FigmaToastProvider position="top-center">
                    <PositionDemo position="top-center" />
                </FigmaToastProvider>
                <FigmaToastProvider position="bottom-center">
                    <PositionDemo position="bottom-center" />
                </FigmaToastProvider>
                <FigmaToastProvider position="bottom-right">
                    <PositionDemo position="bottom-right" />
                </FigmaToastProvider>
            </div>
        );
    },
};

// 여러 토스트 동시 표시
export const MultipleToasts: Story = {
    render: () => {
        const MultipleDemo = () => {
            const { addToast } = useToast();

            const showMultiple = () => {
                addToast({ title: '첫 번째 토스트', status: 'success' });
                setTimeout(() => addToast({ title: '두 번째 토스트', status: 'warning' }), 500);
                setTimeout(() => addToast({ title: '세 번째 토스트', status: 'error' }), 1000);
                setTimeout(() => addToast({ title: '네 번째 토스트', status: 'info' }), 1500);
            };

            return (
                <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 16px 0' }}>여러 토스트 동시 표시</h3>
                    <Button onPress={showMultiple}>
                        여러 토스트 표시
                    </Button>
                </div>
            );
        };

        return (
            <FigmaToastProvider position="top-right" maxToasts={5}>
                <MultipleDemo />
            </FigmaToastProvider>
        );
    },
};

// 프로그레스바가 있는 토스트
export const WithProgress: Story = {
    render: () => {
        const ProgressDemo = () => {
            const { addToast } = useToast();

            return (
                <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 16px 0' }}>프로그레스바가 있는 토스트</h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Button onPress={() => addToast({
                            title: '3초 토스트',
                            description: '프로그레스바와 함께 3초 후 자동 닫힘',
                            status: 'info',
                            duration: 3000,
                            showProgress: true,
                        })}>
                            3초 토스트
                        </Button>
                        <Button onPress={() => addToast({
                            title: '5초 토스트',
                            description: '프로그레스바와 함께 5초 후 자동 닫힘',
                            status: 'success',
                            duration: 5000,
                            showProgress: true,
                        })}>
                            5초 토스트
                        </Button>
                    </div>
                </div>
            );
        };

        return (
            <FigmaToastProvider position="top-right">
                <ProgressDemo />
            </FigmaToastProvider>
        );
    },
};

// 기존 useToast와의 호환성 테스트
export const CompatibilityTest: Story = {
    render: () => {
        const { showToast, toastComponent } = useFigmaToast();

        return (
            <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 16px 0' }}>기존 useToast와의 호환성 테스트</h3>
                <p style={{ margin: '0 0 16px 0', color: '#666' }}>
                    기존 코드를 그대로 사용할 수 있습니다.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Button onPress={() => showToast('기존 방식으로 토스트 표시')}>
                        기존 방식
                    </Button>
                </div>
                {toastComponent}
            </div>
        );
    },
};
