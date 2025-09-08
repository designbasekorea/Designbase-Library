import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {
    RocketIcon,
    StarIcon,
    ArrowRightIcon,
    PlayIcon,
    DownloadIcon,
    UserIcon,
    SettingsIcon,
    BellIcon
} from '@designbase/icons';
import HeroFeature from './HeroFeature';

const meta: Meta<typeof HeroFeature> = {
    title: 'Components/HeroFeature',
    component: HeroFeature,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: '웹사이트의 메인 히어로 섹션을 위한 Hero Feature 컴포넌트입니다. 다양한 레이아웃, 스타일, 기능을 지원합니다.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
            description: 'Hero의 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'centered', 'split', 'overlay', 'minimal'],
            description: 'Hero의 레이아웃 변형',
        },
        theme: {
            control: { type: 'select' },
            options: ['light', 'dark', 'gradient', 'image'],
            description: 'Hero의 테마',
        },
        alignment: {
            control: { type: 'select' },
            options: ['left', 'center', 'right'],
            description: '콘텐츠 정렬',
        },
        animated: {
            control: { type: 'boolean' },
            description: '애니메이션 효과',
        },
        parallax: {
            control: { type: 'boolean' },
            description: '패럴랙스 효과',
        },
        fullHeight: {
            control: { type: 'boolean' },
            description: '전체 높이',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 데이터
const sampleButtons = [
    {
        text: '시작하기',
        href: '#',
        variant: 'primary' as const,
        size: 'lg' as const,
        icon: <ArrowRightIcon size={20} />,
        onClick: fn(),
    },
    {
        text: '자세히 보기',
        href: '#',
        variant: 'outline' as const,
        size: 'lg' as const,
        onClick: fn(),
    }
];

const sampleStats = [
    {
        label: '활성 사용자',
        value: '10,000+',
        description: '전 세계에서 사용 중'
    },
    {
        label: '평점',
        value: '4.9/5',
        description: '사용자 만족도'
    },
    {
        label: '다운로드',
        value: '50K+',
        description: '지난 30일간'
    }
];

export const Default: Story = {
    args: {
        title: '혁신적인 디자인 시스템',
        subtitle: 'Designbase',
        description: '모던하고 일관된 디자인 시스템으로 더 나은 사용자 경험을 제공하세요. 개발자와 디자이너를 위한 완벽한 솔루션입니다.',
        icon: <RocketIcon size={32} />,
        badge: { text: 'New', color: 'success', variant: 'solid' },
        buttons: sampleButtons,
        stats: sampleStats,
        size: 'lg',
        variant: 'default',
        theme: 'light',
        alignment: 'left',
        animated: true,
    },
};

export const Centered: Story = {
    args: {
        title: '중앙 정렬 히어로',
        subtitle: 'Centered Layout',
        description: '중앙 정렬된 레이아웃으로 중요한 메시지를 강조합니다. 사용자의 시선을 자연스럽게 끌어당깁니다.',
        icon: <StarIcon size={32} />,
        badge: { text: 'Featured', color: 'primary', variant: 'solid' },
        buttons: sampleButtons,
        size: 'lg',
        variant: 'centered',
        theme: 'gradient',
        alignment: 'center',
        animated: true,
    },
};

export const Split: Story = {
    args: {
        title: '분할 레이아웃 히어로',
        subtitle: 'Split Layout',
        description: '텍스트와 이미지가 나란히 배치된 분할 레이아웃입니다. 시각적 균형을 통해 더욱 매력적인 디자인을 제공합니다.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        imageAlt: '디자인 시스템 예시',
        buttons: sampleButtons,
        size: 'lg',
        variant: 'split',
        theme: 'light',
        alignment: 'left',
        animated: true,
    },
};

export const Overlay: Story = {
    args: {
        title: '오버레이 히어로',
        subtitle: 'Overlay Layout',
        description: '배경 이미지 위에 텍스트가 오버레이된 레이아웃입니다. 강력한 시각적 임팩트를 제공합니다.',
        backgroundImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        overlayOpacity: 0.6,
        buttons: sampleButtons,
        size: 'xl',
        variant: 'overlay',
        theme: 'image',
        alignment: 'center',
        animated: true,
        fullHeight: true,
    },
};

export const Minimal: Story = {
    args: {
        title: '미니멀 히어로',
        subtitle: 'Minimal Design',
        description: '깔끔하고 미니멀한 디자인으로 핵심 메시지에 집중합니다. 불필요한 요소를 제거하여 사용자의 주의를 끌어냅니다.',
        icon: <SettingsIcon size={24} />,
        buttons: [
            {
                text: '시작하기',
                href: '#',
                variant: 'primary' as const,
                size: 'md' as const,
                onClick: fn(),
            }
        ],
        size: 'md',
        variant: 'minimal',
        theme: 'light',
        alignment: 'center',
        animated: false,
    },
};

export const DarkTheme: Story = {
    args: {
        title: '다크 테마 히어로',
        subtitle: 'Dark Theme',
        description: '다크 테마로 모던하고 세련된 느낌을 제공합니다. 야간 모드나 고급스러운 브랜드에 적합합니다.',
        icon: <BellIcon size={32} />,
        badge: { text: 'Premium', color: 'warning', variant: 'solid' },
        buttons: sampleButtons,
        stats: sampleStats,
        size: 'lg',
        variant: 'default',
        theme: 'dark',
        alignment: 'left',
        animated: true,
    },
};

export const WithVideo: Story = {
    args: {
        title: '비디오 배경 히어로',
        subtitle: 'Video Background',
        description: '동적인 비디오 배경으로 더욱 생동감 있는 히어로 섹션을 만듭니다. 사용자의 관심을 끌어내는 강력한 방법입니다.',
        backgroundVideo: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        overlayOpacity: 0.4,
        buttons: [
            {
                text: '재생',
                href: '#',
                variant: 'primary' as const,
                size: 'lg' as const,
                icon: <PlayIcon size={24} />,
                onClick: fn(),
            },
            {
                text: '자세히 보기',
                href: '#',
                variant: 'outline' as const,
                size: 'lg' as const,
                onClick: fn(),
            }
        ],
        size: 'xl',
        variant: 'overlay',
        theme: 'image',
        alignment: 'center',
        animated: true,
        fullHeight: true,
    },
};

export const Promotional: Story = {
    args: {
        title: '프로모션 히어로',
        subtitle: 'Special Offer',
        description: '특별한 프로모션이나 할인 정보를 강조하는 히어로 섹션입니다. 사용자의 행동을 유도하는 효과적인 방법입니다.',
        icon: <StarIcon size={32} />,
        badge: { text: '50% 할인', color: 'error', variant: 'solid' },
        buttons: [
            {
                text: '지금 구매',
                href: '#',
                variant: 'primary' as const,
                size: 'lg' as const,
                icon: <ArrowRightIcon size={20} />,
                onClick: fn(),
            },
            {
                text: '자세히 보기',
                href: '#',
                variant: 'ghost' as const,
                size: 'lg' as const,
                onClick: fn(),
            }
        ],
        stats: [
            {
                label: '남은 시간',
                value: '24:00:00',
                description: '프로모션 종료까지'
            },
            {
                label: '할인율',
                value: '50%',
                description: '최대 할인율'
            }
        ],
        size: 'lg',
        variant: 'centered',
        theme: 'gradient',
        alignment: 'center',
        animated: true,
    },
};

export const ProductShowcase: Story = {
    args: {
        title: '제품 쇼케이스',
        subtitle: 'Product Launch',
        description: '새로운 제품이나 서비스를 소개하는 히어로 섹션입니다. 제품의 핵심 가치와 특징을 효과적으로 전달합니다.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
        imageAlt: '제품 이미지',
        icon: <UserIcon size={32} />,
        badge: { text: 'New Release', color: 'info', variant: 'solid' },
        buttons: [
            {
                text: '다운로드',
                href: '#',
                variant: 'primary' as const,
                size: 'lg' as const,
                icon: <DownloadIcon size={20} />,
                onClick: fn(),
            },
            {
                text: '데모 보기',
                href: '#',
                variant: 'outline' as const,
                size: 'lg' as const,
                icon: <PlayIcon size={20} />,
                onClick: fn(),
            }
        ],
        stats: [
            {
                label: '다운로드',
                value: '100K+',
                description: '전 세계 사용자'
            },
            {
                label: '평점',
                value: '4.8/5',
                description: '사용자 만족도'
            },
            {
                label: '언어',
                value: '20+',
                description: '지원 언어'
            }
        ],
        size: 'xl',
        variant: 'split',
        theme: 'light',
        alignment: 'left',
        animated: true,
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Small Size</h3>
                <HeroFeature
                    title="작은 히어로"
                    description="작은 크기의 히어로 섹션입니다."
                    size="sm"
                    variant="centered"
                />
            </div>
            <div>
                <h3>Medium Size</h3>
                <HeroFeature
                    title="중간 히어로"
                    description="중간 크기의 히어로 섹션입니다."
                    size="md"
                    variant="centered"
                />
            </div>
            <div>
                <h3>Large Size</h3>
                <HeroFeature
                    title="큰 히어로"
                    description="큰 크기의 히어로 섹션입니다."
                    size="lg"
                    variant="centered"
                />
            </div>
            <div>
                <h3>Extra Large Size</h3>
                <HeroFeature
                    title="매우 큰 히어로"
                    description="매우 큰 크기의 히어로 섹션입니다."
                    size="xl"
                    variant="centered"
                />
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [currentVariant, setCurrentVariant] = React.useState<'default' | 'centered' | 'split' | 'overlay' | 'minimal'>('default');
        const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark' | 'gradient' | 'image'>('light');

        return (
            <div>
                <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
                    <h3>컨트롤</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                        <label>
                            Variant:
                            <select value={currentVariant} onChange={(e) => setCurrentVariant(e.target.value as any)}>
                                <option value="default">Default</option>
                                <option value="centered">Centered</option>
                                <option value="split">Split</option>
                                <option value="overlay">Overlay</option>
                                <option value="minimal">Minimal</option>
                            </select>
                        </label>
                        <label>
                            Theme:
                            <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value as any)}>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="gradient">Gradient</option>
                                <option value="image">Image</option>
                            </select>
                        </label>
                    </div>
                </div>

                <HeroFeature
                    title="인터랙티브 히어로"
                    subtitle="Interactive Demo"
                    description="실시간으로 변형과 테마를 변경할 수 있는 인터랙티브 데모입니다."
                    icon={currentTheme === 'dark' ? <StarIcon size={32} /> : <RocketIcon size={32} />}
                    badge={{ text: 'Interactive', color: 'primary', variant: 'solid' }}
                    buttons={sampleButtons}
                    size="lg"
                    variant={currentVariant}
                    theme={currentTheme}
                    alignment="center"
                    animated={true}
                    backgroundImage={currentTheme === 'image' ? 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop' : undefined}
                    overlayColor={currentTheme === 'image' ? 'rgba(0, 0, 0, 0.5)' : undefined}
                />
            </div>
        );
    },
};
