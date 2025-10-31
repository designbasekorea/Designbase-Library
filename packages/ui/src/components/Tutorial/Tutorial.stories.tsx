/**
 * Tutorial 컴포넌트 스토리북
 * 
 * 목적: 튜토리얼 컴포넌트의 다양한 사용 사례 시연
 * 기능: 단계별 튜토리얼, 타겟 강조, 팝오버 위치
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tutorial, type TutorialStep } from './Tutorial';
import { Button } from '../Button/Button';
import { Indicator } from '../Indicator/Indicator';

const meta: Meta<typeof Tutorial> = {
    title: 'Components/Tutorial',
    component: Tutorial,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: '첫 사용자를 위한 인터랙티브 튜토리얼 컴포넌트입니다. 특정 영역을 강조하고 팝오버로 설명을 제공합니다.'
            }
        }
    },
    argTypes: {
        steps: {
            description: '튜토리얼 단계들',
            control: { type: 'object' }
        },
        currentStep: {
            description: '현재 단계 (0부터 시작)',
            control: { type: 'number', min: 0 }
        },
        isActive: {
            description: '튜토리얼 활성화 상태',
            control: { type: 'boolean' }
        },
        indicatorType: {
            description: '인디케이터 타입',
            control: { type: 'select' },
            options: ['dots', 'numbers']
        },
        indicatorSize: {
            description: '인디케이터 크기',
            control: { type: 'select' },
            options: ['s', 'm', 'l']
        }
    }
};

export default meta;
type Story = StoryObj<typeof Tutorial>;

// 데모용 컨텐츠
const DemoContent = () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2>데모 앱</h2>

        <div style={{ display: 'flex', gap: '12px' }}>
            <Button id="demo-button-1" variant="primary">
                주요 기능 1
            </Button>
            <Button id="demo-button-2" variant="secondary">
                주요 기능 2
            </Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '12px', border: '1px solid var(--db-border-base)', borderRadius: '8px' }}>
                <h4>카드 1</h4>
                <p>이것은 첫 번째 카드입니다.</p>
            </div>
            <div style={{ padding: '12px', border: '1px solid var(--db-border-base)', borderRadius: '8px' }}>
                <h4>카드 2</h4>
                <p>이것은 두 번째 카드입니다.</p>
            </div>
        </div>

        <div style={{ padding: '12px', backgroundColor: 'var(--db-surface-layer-1)', borderRadius: '8px' }}>
            <h4>중요한 정보</h4>
            <p>이 영역에는 중요한 정보가 표시됩니다.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>진행률: 45/180kcal</span>
            <Button variant="primary" size="s">완료</Button>
        </div>
    </div>
);

// 기본 튜토리얼 단계들
const basicSteps: TutorialStep[] = [
    {
        id: 'welcome',
        target: 'h2',
        title: '환영합니다!',
        content: '이 앱의 주요 기능들을 단계별로 알아보겠습니다.',
        placement: 'bottom'
    },
    {
        id: 'buttons',
        target: '#demo-button-1',
        title: '주요 기능 버튼',
        content: '이 버튼을 클릭하면 주요 기능을 사용할 수 있습니다.',
        placement: 'bottom'
    },
    {
        id: 'cards',
        target: 'div[style*="grid"]',
        title: '정보 카드',
        content: '여기서 다양한 정보를 확인할 수 있습니다.',
        placement: 'top'
    },
    {
        id: 'info',
        target: 'div[style*="backgroundColor"]',
        title: '중요한 정보',
        content: '이 영역에는 중요한 정보가 표시됩니다.',
        placement: 'left'
    },
    {
        id: 'progress',
        target: 'div[style*="justifyContent"]',
        title: '진행률 확인',
        content: '여기서 현재 진행률을 확인할 수 있습니다.',
        placement: 'top'
    }
];

// 기본 튜토리얼
export const Default: Story = {
    render: () => {
        const [isActive, setIsActive] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        return (
            <div>
                <DemoContent />

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                    <Button onPress={() => setIsActive(true)}>
                        튜토리얼 시작
                    </Button>
                    <Button variant="secondary" onPress={() => setIsActive(false)}>
                        튜토리얼 종료
                    </Button>
                </div>

                <Tutorial
                    steps={basicSteps}
                    currentStep={currentStep}
                    isActive={isActive}
                    onStepChange={setCurrentStep}
                    onEnd={() => setIsActive(false)}
                    onNext={() => console.log('다음 단계')}
                    onPrev={() => console.log('이전 단계')}
                />
            </div>
        );
    }
};

// 숫자 인디케이터
export const WithNumbers: Story = {
    render: () => {
        const [isActive, setIsActive] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        return (
            <div>
                <DemoContent />

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                    <Button onPress={() => setIsActive(true)}>
                        숫자 인디케이터로 시작
                    </Button>
                </div>

                <Tutorial
                    steps={basicSteps}
                    currentStep={currentStep}
                    isActive={isActive}
                    indicatorType="numbers"
                    indicatorSize="m"
                    onStepChange={setCurrentStep}
                    onEnd={() => setIsActive(false)}
                />
            </div>
        );
    }
};

// 점 인디케이터
export const WithDots: Story = {
    render: () => {
        const [isActive, setIsActive] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        return (
            <div>
                <DemoContent />

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                    <Button onPress={() => setIsActive(true)}>
                        점 인디케이터로 시작
                    </Button>
                </div>

                <Tutorial
                    steps={basicSteps}
                    currentStep={currentStep}
                    isActive={isActive}
                    indicatorType="dots"
                    indicatorSize="l"
                    onStepChange={setCurrentStep}
                    onEnd={() => setIsActive(false)}
                />
            </div>
        );
    }
};

// 커스텀 컨텐츠가 있는 튜토리얼
export const WithCustomContent: Story = {
    render: () => {
        const [isActive, setIsActive] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        const customSteps: TutorialStep[] = [
            {
                id: 'welcome',
                target: 'h2',
                title: '환영합니다!',
                content: '이 앱의 주요 기능들을 단계별로 알아보겠습니다.',
                placement: 'bottom'
            },
            {
                id: 'buttons',
                target: '#demo-button-1',
                title: '주요 기능 버튼',
                content: '이 버튼을 클릭하면 주요 기능을 사용할 수 있습니다.',
                placement: 'bottom',
                children: (
                    <div style={{ marginTop: '12px', padding: '8px', backgroundColor: 'var(--db-surface-layer-1)', borderRadius: '4px' }}>
                        <p style={{ margin: 0, fontSize: '12px', color: 'var(--db-text-secondary)' }}>
                            💡 <strong>팁:</strong> 이 기능은 매일 사용할 수 있습니다!
                        </p>
                    </div>
                )
            },
            {
                id: 'cards',
                target: 'div[style*="grid"]',
                title: '정보 카드',
                content: '여기서 다양한 정보를 확인할 수 있습니다.',
                placement: 'top',
                children: (
                    <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                        <Button size="s" variant="secondary" onPress={() => console.log('더 알아보기')}>더 알아보기</Button>
                        <Button size="s" onPress={() => console.log('지금 시작하기')}>지금 시작하기</Button>
                    </div>
                )
            }
        ];

        return (
            <div>
                <DemoContent />

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                    <Button onPress={() => setIsActive(true)}>
                        커스텀 컨텐츠로 시작
                    </Button>
                </div>

                <Tutorial
                    steps={customSteps}
                    currentStep={currentStep}
                    isActive={isActive}
                    onStepChange={setCurrentStep}
                    onEnd={() => setIsActive(false)}
                />
            </div>
        );
    }
};

// 자동 배치 튜토리얼
export const AutoPlacement: Story = {
    render: () => {
        const [isActive, setIsActive] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        const autoSteps: TutorialStep[] = [
            {
                id: 'welcome',
                target: 'h2',
                title: '환영합니다!',
                content: '자동으로 최적의 위치에 팝오버가 표시됩니다.',
                placement: 'auto'
            },
            {
                id: 'buttons',
                target: '#demo-button-1',
                title: '주요 기능 버튼',
                content: '자동 배치로 항상 보기 좋은 위치에 표시됩니다.',
                placement: 'auto'
            },
            {
                id: 'cards',
                target: 'div[style*="grid"]',
                title: '정보 카드',
                content: '화면 크기에 따라 자동으로 위치가 조정됩니다.',
                placement: 'auto'
            }
        ];

        return (
            <div>
                <DemoContent />

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                    <Button onPress={() => setIsActive(true)}>
                        자동 배치로 시작
                    </Button>
                </div>

                <Tutorial
                    steps={autoSteps}
                    currentStep={currentStep}
                    isActive={isActive}
                    onStepChange={setCurrentStep}
                    onEnd={() => setIsActive(false)}
                />
            </div>
        );
    }
};

// 접근성 테스트
export const AccessibilityTest: Story = {
    render: () => {
        const [isActive, setIsActive] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        return (
            <div>
                <DemoContent />

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
                    <Button onPress={() => setIsActive(true)}>
                        접근성 테스트 시작
                    </Button>
                </div>

                <Tutorial
                    steps={basicSteps}
                    currentStep={currentStep}
                    isActive={isActive}
                    onStepChange={setCurrentStep}
                    onEnd={() => setIsActive(false)}
                />

                <div style={{ marginTop: '16px', fontSize: '14px', color: 'var(--db-text-secondary)' }}>
                    <p><strong>키보드 단축키:</strong></p>
                    <ul>
                        <li>ESC: 튜토리얼 종료</li>
                        <li>←: 이전 단계</li>
                        <li>→: 다음 단계</li>
                    </ul>
                </div>
            </div>
        );
    }
};
