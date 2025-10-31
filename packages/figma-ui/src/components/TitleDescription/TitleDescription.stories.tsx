import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TitleDescription } from './TitleDescription';
import { Button } from '@designbasekorea/ui';

const meta = {
    title: 'Figma UI/TitleDescription',
    component: TitleDescription,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    '제목, 설명, 버튼, 기능 목록을 포함하는 타이틀 섹션 컴포넌트입니다. 랜딩 페이지나 소개 화면에 적합합니다.',
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '400px', padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        iconSrc: {
            control: 'text',
            description: '아이콘 이미지 소스',
        },
        iconAlt: {
            control: 'text',
            description: '아이콘 alt 텍스트',
        },
        title: {
            control: 'text',
            description: '제목',
        },
        description: {
            control: 'text',
            description: '설명',
        },
        button: {
            control: false,
            description: '버튼 요소',
        },
        features: {
            control: 'object',
            description: '기능 목록',
        },
    },
} satisfies Meta<typeof TitleDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'DesignBase UI',
        description: '피그마 플러그인을 위한 완벽한 UI 컴포넌트 라이브러리입니다.',
    },
};

export const WithButton: Story = {
    args: {
        title: '프리미엄으로 업그레이드',
        description: '무제한 기능과 우선 지원을 받으세요.',
        button: (
            <Button variant="primary" size="m" fullWidth>
                지금 시작하기
            </Button>
        ),
    },
};

export const WithIcon: Story = {
    args: {
        iconSrc: 'https://via.placeholder.com/64',
        iconAlt: 'DesignBase Logo',
        title: 'DesignBase',
        description: '디자인 시스템을 더 쉽게 만들어보세요.',
        button: (
            <Button variant="primary" size="m" fullWidth>
                시작하기
            </Button>
        ),
    },
};

export const WithFeatures: Story = {
    args: {
        title: '프리미엄 플랜',
        description: '모든 기능을 잠금 해제하고 팀과 함께 작업하세요.',
        button: (
            <Button variant="primary" size="m" fullWidth>
                프리미엄 구매
            </Button>
        ),
        features: [
            '무제한 프로젝트',
            '팀 협업 기능',
            '우선 고객 지원',
            '고급 분석 도구',
        ],
    },
};

export const Complete: Story = {
    args: {
        iconSrc: 'https://via.placeholder.com/64/3b82f6/ffffff?text=DB',
        iconAlt: 'DesignBase',
        title: 'DesignBase Pro',
        description: '전문가를 위한 완벽한 디자인 도구입니다. 팀과 함께 더 빠르게 작업하세요.',
        button: (
            <Button variant="primary" size="m" fullWidth>
                14일 무료 체험
            </Button>
        ),
        features: [
            '무제한 프로젝트 생성',
            '팀 멤버 초대 (최대 10명)',
            '클라우드 동기화',
            '우선 고객 지원',
            '고급 내보내기 옵션',
        ],
    },
};

export const LongDescription: Story = {
    args: {
        title: '긴 설명이 있는 예시',
        description:
            '이것은 매우 긴 설명 텍스트입니다. 여러 줄에 걸쳐 표시되며, 자동으로 줄바꿈됩니다. 사용자에게 제품이나 기능에 대한 자세한 정보를 전달할 수 있습니다.',
        button: (
            <Button variant="primary" size="m" fullWidth>
                자세히 보기
            </Button>
        ),
        features: [
            '첫 번째 주요 기능에 대한 설명입니다',
            '두 번째 기능도 긴 텍스트로 작성할 수 있습니다',
            '세 번째 기능',
        ],
    },
};

export const MinimalWithOnlyTitle: Story = {
    args: {
        title: '간단한 제목만',
        description: '설명 텍스트',
    },
};

export const OnlyFeatures: Story = {
    args: {
        title: '주요 기능',
        description: '다음과 같은 기능을 제공합니다.',
        features: [
            '빠른 성능',
            '직관적인 UI',
            '강력한 커스터마이징',
            '완벽한 문서',
        ],
    },
};

export const SecondaryButton: Story = {
    args: {
        title: '무료 플랜',
        description: '기본 기능을 무료로 사용해보세요.',
        button: (
            <Button variant="secondary" size="m" fullWidth>
                무료로 시작하기
            </Button>
        ),
        features: [
            '기본 프로젝트 (최대 3개)',
            '커뮤니티 지원',
            '기본 템플릿',
        ],
    },
};

export const MultipleButtons: Story = {
    args: {
        title: '여러 버튼 옵션',
        description: '선택지를 제공할 수 있습니다.',
        button: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <Button variant="primary" size="m" fullWidth>
                    프리미엄 시작
                </Button>
                <Button variant="secondary" size="m" fullWidth>
                    무료 체험
                </Button>
            </div>
        ),
    },
};

export const WithI18nKeys: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 없음)</h3>
                <TitleDescription
                    title={{ key: 'title.premium_plan' }}
                    description={{ key: 'title.premium_description' }}
                    features={[
                        { key: 'feature.unlimited_projects' },
                        { key: 'feature.team_collaboration' },
                        { key: 'feature.priority_support' }
                    ]}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 있음)</h3>
                <TitleDescription
                    title={{ key: 'title.premium_plan' }}
                    description={{ key: 'title.premium_description' }}
                    features={[
                        { key: 'feature.unlimited_projects' },
                        { key: 'feature.team_collaboration' },
                        { key: 'feature.priority_support' }
                    ]}
                    t={(key) => {
                        const translations: Record<string, string> = {
                            'title.premium_plan': '프리미엄 플랜',
                            'title.premium_description': '모든 기능을 잠금 해제하고 팀과 함께 작업하세요.',
                            'feature.unlimited_projects': '무제한 프로젝트',
                            'feature.team_collaboration': '팀 협업 기능',
                            'feature.priority_support': '우선 고객 지원'
                        };
                        return translations[key] || key;
                    }}
                />
            </div>
        </div>
    ),
};

