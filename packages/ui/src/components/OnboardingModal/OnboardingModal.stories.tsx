/**
 * OnboardingModal 컴포넌트 스토리북
 * 
 * 목적: 온보딩 모달 컴포넌트의 다양한 사용 사례 시연
 * 기능: 기본 사용법, 커스터마이징, 접근성 테스트
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { OnboardingModal, type OnboardingStep } from './OnboardingModal';
import { Button } from '../Button/Button';
import { StarIcon, HeartIcon, CircleCheckedIcon } from '@designbasekorea/icons';

const meta: Meta<typeof OnboardingModal> = {
    title: 'Components/OnboardingModal',
    component: OnboardingModal,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: '온보딩/튜토리얼을 위한 모달 컴포넌트입니다. 이미지, 텍스트, 네비게이션, 인디케이터를 지원합니다.'
            }
        }
    },
    argTypes: {
        steps: {
            description: '온보딩 단계들',
            control: { type: 'object' }
        },
        currentStep: {
            description: '현재 단계 (0부터 시작)',
            control: { type: 'number', min: 0 }
        },
        isOpen: {
            description: '모달 열림 상태',
            control: { type: 'boolean' }
        },
        showCloseButton: {
            description: '닫기 버튼 표시 여부',
            control: { type: 'boolean' }
        },
        showIndicator: {
            description: '인디케이터 표시 여부',
            control: { type: 'boolean' }
        }
    }
};

export default meta;
type Story = StoryObj<typeof OnboardingModal>;

// 기본 온보딩 단계들
const basicSteps: OnboardingStep[] = [
    {
        id: 'welcome',
        title: '환영합니다!',
        description: '디자인베이스에 오신 것을 환영합니다. 간단한 가이드를 통해 주요 기능들을 알아보세요.',
        image: 'https://via.placeholder.com/280x200/4F46E5/FFFFFF?text=Welcome'
    },
    {
        id: 'features',
        title: '주요 기능',
        description: '직관적인 인터페이스와 강력한 기능들로 더 나은 디자인을 만들어보세요.',
        image: 'https://via.placeholder.com/280x200/10B981/FFFFFF?text=Features'
    },
    {
        id: 'complete',
        title: '완료!',
        description: '이제 모든 준비가 완료되었습니다. 디자인베이스와 함께 시작해보세요!',
        image: 'https://via.placeholder.com/280x200/F59E0B/FFFFFF?text=Complete'
    }
];

// 아이콘을 사용한 단계들
const iconSteps: OnboardingStep[] = [
    {
        id: 'step1',
        title: '첫 번째 단계',
        description: '이것은 첫 번째 온보딩 단계입니다.',
        image: <StarIcon size={80} color="var(--db-brand-primary)" />
    },
    {
        id: 'step2',
        title: '두 번째 단계',
        description: '이것은 두 번째 온보딩 단계입니다.',
        image: <HeartIcon size={80} color="var(--db-status-success)" />
    },
    {
        id: 'step3',
        title: '세 번째 단계',
        description: '이것은 세 번째 온보딩 단계입니다.',
        image: <CircleCheckedIcon size={80} color="var(--db-status-info)" />
    }
];

// 기본 온보딩 모달
export const Default: Story = {
    args: {
        steps: basicSteps,
        currentStep: 0,
        isOpen: true,
        showCloseButton: true,
        showIndicator: true
    }
};

// 단계별 온보딩 모달
export const StepByStep: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        return (
            <div>
                <Button onClick={() => setIsOpen(true)}>
                    온보딩 시작하기
                </Button>

                <OnboardingModal
                    steps={basicSteps}
                    currentStep={currentStep}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    onStepChange={setCurrentStep}
                    onComplete={() => {
                        alert('온보딩이 완료되었습니다!');
                        setIsOpen(false);
                    }}
                />
            </div>
        );
    }
};

// 아이콘 사용 온보딩
export const WithIcons: Story = {
    args: {
        steps: iconSteps,
        currentStep: 0,
        isOpen: true,
        showCloseButton: true,
        showIndicator: true
    }
};

// 커스텀 컨텐츠가 있는 온보딩
export const WithCustomContent: Story = {
    args: {
        steps: [
            {
                id: 'custom1',
                title: '커스텀 컨텐츠',
                description: '이 단계에는 추가 컨텐츠가 포함되어 있습니다.',
                image: 'https://via.placeholder.com/280x200/8B5CF6/FFFFFF?text=Custom',
                content: (
                    <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--db-surface-layer-1)', borderRadius: '8px' }}>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--db-text-secondary)' }}>
                            💡 <strong>팁:</strong> 이 기능을 사용하면 더 효율적으로 작업할 수 있습니다.
                        </p>
                    </div>
                )
            },
            {
                id: 'custom2',
                title: '버튼 예시',
                description: '인터랙티브한 요소들도 포함할 수 있습니다.',
                image: 'https://via.placeholder.com/280x200/EF4444/FFFFFF?text=Interactive',
                content: (
                    <div style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        <Button size="s" variant="secondary">더 알아보기</Button>
                        <Button size="s">지금 시작하기</Button>
                    </div>
                )
            }
        ],
        currentStep: 0,
        isOpen: true,
        showCloseButton: true,
        showIndicator: true
    }
};

// 최소한의 옵션
export const Minimal: Story = {
    args: {
        steps: [
            {
                id: 'minimal',
                title: '간단한 온보딩',
                description: '최소한의 요소들로 구성된 온보딩입니다.'
            }
        ],
        currentStep: 0,
        isOpen: true,
        showCloseButton: false,
        showIndicator: false
    }
};

// 긴 텍스트가 있는 온보딩
export const LongText: Story = {
    args: {
        steps: [
            {
                id: 'long1',
                title: '매우 긴 제목이 있는 온보딩 단계입니다',
                description: '이것은 매우 긴 설명 텍스트입니다. 온보딩 모달이 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다. 텍스트가 길어도 적절히 줄바꿈되고 가독성이 유지됩니다.',
                image: 'https://via.placeholder.com/280x200/6366F1/FFFFFF?text=Long+Text'
            },
            {
                id: 'long2',
                title: '또 다른 긴 제목',
                description: '여러 줄에 걸친 긴 설명이 포함된 온보딩 단계입니다. 사용자가 읽기 편하도록 적절한 간격과 크기로 표시됩니다.',
                image: 'https://via.placeholder.com/280x200/EC4899/FFFFFF?text=Another+Long+Text'
            }
        ],
        currentStep: 0,
        isOpen: true,
        showCloseButton: true,
        showIndicator: true
    }
};

// 접근성 테스트
export const AccessibilityTest: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [currentStep, setCurrentStep] = useState(0);

        return (
            <div>
                <Button onClick={() => setIsOpen(true)}>
                    접근성 테스트 시작
                </Button>

                <OnboardingModal
                    steps={basicSteps}
                    currentStep={currentStep}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    onStepChange={setCurrentStep}
                    onComplete={() => {
                        alert('접근성 테스트 완료!');
                        setIsOpen(false);
                    }}
                />

                <div style={{ marginTop: '16px', fontSize: '14px', color: 'var(--db-text-secondary)' }}>
                    <p><strong>키보드 단축키:</strong></p>
                    <ul>
                        <li>ESC: 모달 닫기</li>
                        <li>←: 이전 단계</li>
                        <li>→: 다음 단계</li>
                    </ul>
                </div>
            </div>
        );
    }
};
