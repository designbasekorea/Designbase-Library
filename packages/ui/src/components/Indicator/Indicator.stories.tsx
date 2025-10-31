/**
 * Indicator 컴포넌트 스토리북
 * 
 * 목적: 인디케이터 컴포넌트의 다양한 사용 사례 시연
 * 기능: 점 타입, 숫자 타입, 라인 타입, 타이머 기능
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Indicator } from './Indicator';

const meta: Meta<typeof Indicator> = {
    title: 'Components/Indicator',
    component: Indicator,
    parameters: {
        docs: {
            description: {
                component: '진행 상태를 시각적으로 표시하는 인디케이터 컴포넌트입니다. 점, 숫자, 라인 타입을 지원하며 자동 롤링 타이머 기능을 제공합니다.'
            }
        }
    },
    argTypes: {
        current: {
            description: '현재 단계 (0부터 시작)',
            control: { type: 'number', min: 0 }
        },
        total: {
            description: '전체 단계 수',
            control: { type: 'number', min: 1 }
        },
        type: {
            description: '인디케이터 타입',
            control: { type: 'select' },
            options: ['dots', 'numbers', 'line']
        },
        direction: {
            description: '인디케이터 방향',
            control: { type: 'select' },
            options: ['horizontal', 'vertical']
        },
        size: {
            description: '인디케이터 크기',
            control: { type: 'select' },
            options: ['s', 'm', 'l']
        },
        clickable: {
            description: '클릭 가능 여부',
            control: { type: 'boolean' }
        },
        timer: {
            description: '자동 롤링 타이머 활성화',
            control: { type: 'boolean' }
        },
        timerDuration: {
            description: '타이머 시간 (밀리초)',
            control: { type: 'number', min: 1000, max: 10000, step: 500 }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Indicator>;

// 기본 점 타입
export const Dots: Story = {
    args: {
        current: 2,
        total: 5,
        type: 'dots',
        size: 'm',
        clickable: false
    }
};

// 숫자 타입
export const Numbers: Story = {
    args: {
        current: 3,
        total: 6,
        type: 'numbers',
        size: 'm',
        clickable: false
    }
};

// 라인 타입
export const Line: Story = {
    args: {
        current: 2,
        total: 5,
        type: 'line',
        size: 'm',
        clickable: false
    }
};

// 크기별 비교
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <h4>점 타입</h4>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div>Small</div>
                        <Indicator current={1} total={4} type="dots" size="s" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div>Medium</div>
                        <Indicator current={1} total={4} type="dots" size="m" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div>Large</div>
                        <Indicator current={1} total={4} type="dots" size="l" />
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <h4>라인 타입</h4>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div>Small</div>
                        <Indicator current={1} total={4} type="line" size="s" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div>Medium</div>
                        <Indicator current={1} total={4} type="line" size="m" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div>Large</div>
                        <Indicator current={1} total={4} type="line" size="l" />
                    </div>
                </div>
            </div>
        </div>
    )
};

// 클릭 가능한 상태
export const Clickable: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <h4>클릭 가능한 점 타입</h4>
                <Indicator
                    current={1}
                    total={5}
                    type="dots"
                    size="m"
                    clickable={true}
                    onStepClick={(step) => alert(`단계 ${step + 1}로 이동!`)}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <h4>클릭 가능한 라인 타입</h4>
                <Indicator
                    current={2}
                    total={5}
                    type="line"
                    size="m"
                    clickable={true}
                    onStepClick={(step) => alert(`단계 ${step + 1}로 이동!`)}
                />
            </div>
        </div>
    )
};

// 세로 방향
export const Vertical: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <h4>세로 점 타입</h4>
                <Indicator
                    current={1}
                    total={4}
                    type="dots"
                    direction="vertical"
                    size="m"
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <h4>세로 라인 타입</h4>
                <Indicator
                    current={2}
                    total={5}
                    type="line"
                    direction="vertical"
                    size="m"
                />
            </div>
        </div>
    )
};

// 자동 롤링 타이머
export const AutoRolling: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <h4>점 타입 자동 롤링 (3초)</h4>
                <Indicator
                    current={1}
                    total={4}
                    type="dots"
                    size="m"
                    timer={true}
                    timerDuration={3000}
                    onTimerComplete={() => console.log('타이머 완료!')}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <h4>라인 타입 자동 롤링 (5초)</h4>
                <Indicator
                    current={1}
                    total={4}
                    type="line"
                    size="m"
                    timer={true}
                    timerDuration={5000}
                    onTimerComplete={() => console.log('타이머 완료!')}
                />
            </div>
        </div>
    )
};
