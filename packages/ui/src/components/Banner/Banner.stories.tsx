import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {
    InfoIcon,
    WarningIcon,
    ErrorIcon,
    CircleCheckFilledIcon,
    StarIcon,
    ArrowRightIcon,
    DownloadIcon,
    BellIcon,
    SettingsIcon
} from '@designbase/icons';
import Banner from './Banner';

const meta: Meta<typeof Banner> = {
    title: 'Components/Banner',
    component: Banner,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '알림, 경고, 프로모션 등을 표시하는 Banner 컴포넌트입니다. 다양한 스타일과 기능을 지원합니다.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: '배너의 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'success', 'warning', 'error', 'info', 'promo'],
            description: '배너의 스타일 변형',
        },
        style: {
            control: { type: 'select' },
            options: ['solid', 'outline', 'soft', 'gradient'],
            description: '배너의 스타일',
        },
        position: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'fixed', 'sticky'],
            description: '배너의 위치',
        },
        alignment: {
            control: { type: 'select' },
            options: ['left', 'center', 'right'],
            description: '콘텐츠 정렬',
        },
        dismissible: {
            control: { type: 'boolean' },
            description: '닫기 버튼 표시',
        },
        animated: {
            control: { type: 'boolean' },
            description: '애니메이션 효과',
        },
        shadow: {
            control: { type: 'boolean' },
            description: '그림자 효과',
        },
        rounded: {
            control: { type: 'boolean' },
            description: '둥근 모서리',
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 액션 데이터
const sampleActions = [
    {
        text: '자세히 보기',
        href: '#',
        variant: 'primary' as const,
        size: 'sm' as const,
        onClick: fn(),
    }
];

const dismissAction = [
    {
        text: '닫기',
        onClick: fn(),
        variant: 'ghost' as const,
        size: 'sm' as const,
    }
];

export const Default: Story = {
    args: {
        title: '기본 배너',
        description: '이것은 기본 배너입니다. 중요한 정보나 알림을 표시하는 데 사용됩니다.',
        size: 'md',
        variant: 'default',
        style: 'solid',
        alignment: 'left',
        animated: true,
    },
};

export const Success: Story = {
    args: {
        title: '성공 메시지',
        description: '작업이 성공적으로 완료되었습니다!',
        icon: <CircleCheckFilledIcon size={20} />,
        actions: sampleActions,
        size: 'md',
        variant: 'success',
        style: 'solid',
        alignment: 'left',
        animated: true,
    },
};

export const Warning: Story = {
    args: {
        title: '경고 메시지',
        description: '주의가 필요한 상황입니다. 확인해주세요.',
        icon: <WarningIcon size={20} />,
        actions: sampleActions,
        size: 'md',
        variant: 'warning',
        style: 'solid',
        alignment: 'left',
        animated: true,
    },
};

export const Error: Story = {
    args: {
        title: '오류 메시지',
        description: '문제가 발생했습니다. 다시 시도해주세요.',
        icon: <ErrorIcon size={20} />,
        actions: [
            {
                text: '다시 시도',
                onClick: fn(),
                variant: 'primary' as const,
                size: 'sm' as const,
            },
            {
                text: '문의하기',
                href: '#',
                variant: 'outline' as const,
                size: 'sm' as const,
                onClick: fn(),
            }
        ],
        size: 'md',
        variant: 'error',
        style: 'solid',
        alignment: 'left',
        animated: true,
    },
};

export const Info: Story = {
    args: {
        title: '정보 메시지',
        description: '유용한 정보를 확인해보세요.',
        icon: <InfoIcon size={20} />,
        actions: sampleActions,
        size: 'md',
        variant: 'info',
        style: 'solid',
        alignment: 'left',
        animated: true,
    },
};

export const Promo: Story = {
    args: {
        title: '프로모션 알림',
        description: '특별한 할인 혜택을 놓치지 마세요! 50% 할인 이벤트가 진행 중입니다.',
        icon: <StarIcon size={20} />,
        actions: [
            {
                text: '지금 구매',
                href: '#',
                variant: 'primary' as const,
                size: 'sm' as const,
                icon: <ArrowRightIcon size={16} />,
                onClick: fn(),
            },
            {
                text: '자세히 보기',
                href: '#',
                variant: 'outline' as const,
                size: 'sm' as const,
                onClick: fn(),
            }
        ],
        size: 'md',
        variant: 'promo',
        style: 'gradient',
        alignment: 'center',
        animated: true,
        dismissible: true,
        onDismiss: fn(),
    },
};

export const Dismissible: Story = {
    args: {
        title: '닫기 가능한 배너',
        description: '이 배너는 닫기 버튼이 있어서 사용자가 직접 닫을 수 있습니다.',
        icon: <BellIcon size={20} />,
        actions: dismissAction,
        size: 'md',
        variant: 'info',
        style: 'soft',
        alignment: 'left',
        dismissible: true,
        onDismiss: fn(),
    },
};

export const AutoDismiss: Story = {
    args: {
        title: '자동 닫기 배너',
        description: '이 배너는 5초 후 자동으로 닫힙니다.',
        icon: <CircleCheckFilledIcon size={20} />,
        size: 'md',
        variant: 'success',
        style: 'outline',
        alignment: 'center',
        autoDismiss: 5000,
        onDismiss: fn(),
    },
};

export const WithImage: Story = {
    args: {
        title: '이미지가 있는 배너',
        description: '이미지와 함께 표시되는 배너입니다.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
        imageAlt: '제품 이미지',
        actions: sampleActions,
        size: 'md',
        variant: 'default',
        style: 'solid',
        alignment: 'left',
        animated: true,
    },
};

export const FixedPosition: Story = {
    args: {
        title: '고정 위치 배너',
        description: '화면 상단에 고정된 배너입니다.',
        icon: <InfoIcon size={20} />,
        actions: dismissAction,
        size: 'md',
        variant: 'info',
        style: 'solid',
        position: 'fixed',
        alignment: 'center',
        dismissible: true,
        onDismiss: fn(),
    },
};

export const StickyPosition: Story = {
    args: {
        title: '스티키 배너',
        description: '스크롤 시 상단에 고정되는 배너입니다.',
        icon: <WarningIcon size={20} />,
        actions: sampleActions,
        size: 'md',
        variant: 'warning',
        style: 'soft',
        position: 'sticky',
        alignment: 'left',
        animated: true,
    },
};

export const DifferentStyles: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Banner
                title="Solid Style"
                description="고체 스타일의 배너입니다."
                variant="success"
                style="solid"
                size="md"
            />
            <Banner
                title="Outline Style"
                description="아웃라인 스타일의 배너입니다."
                variant="info"
                style="outline"
                size="md"
            />
            <Banner
                title="Soft Style"
                description="부드러운 스타일의 배너입니다."
                variant="warning"
                style="soft"
                size="md"
            />
            <Banner
                title="Gradient Style"
                description="그라데이션 스타일의 배너입니다."
                variant="promo"
                style="gradient"
                size="md"
            />
        </div>
    ),
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Banner
                title="Small Size"
                description="작은 크기의 배너입니다."
                size="sm"
                variant="info"
            />
            <Banner
                title="Medium Size"
                description="중간 크기의 배너입니다."
                size="md"
                variant="info"
            />
            <Banner
                title="Large Size"
                description="큰 크기의 배너입니다."
                size="lg"
                variant="info"
            />
        </div>
    ),
};

export const DifferentAlignments: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Banner
                title="Left Alignment"
                description="왼쪽 정렬된 배너입니다."
                alignment="left"
                variant="default"
            />
            <Banner
                title="Center Alignment"
                description="중앙 정렬된 배너입니다."
                alignment="center"
                variant="default"
            />
            <Banner
                title="Right Alignment"
                description="오른쪽 정렬된 배너입니다."
                alignment="right"
                variant="default"
            />
        </div>
    ),
};

export const WithBackgroundImage: Story = {
    args: {
        title: '배경 이미지 배너',
        description: '배경 이미지가 있는 배너입니다.',
        backgroundImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=200&fit=crop',
        overlayColor: 'rgba(0, 0, 0, 0.7)',
        overlayOpacity: 0.7,
        actions: sampleActions,
        size: 'lg',
        variant: 'default',
        style: 'solid',
        alignment: 'center',
        animated: true,
        shadow: true,
        rounded: true,
    },
};

export const Interactive: Story = {
    render: () => {
        const [currentVariant, setCurrentVariant] = React.useState<'default' | 'success' | 'warning' | 'error' | 'info' | 'promo'>('default');
        const [currentStyle, setCurrentStyle] = React.useState<'solid' | 'outline' | 'soft' | 'gradient'>('solid');
        const [isVisible, setIsVisible] = React.useState(true);

        return (
            <div>
                <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
                    <h3>컨트롤</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <label>
                            Variant:
                            <select value={currentVariant} onChange={(e) => setCurrentVariant(e.target.value as any)}>
                                <option value="default">Default</option>
                                <option value="success">Success</option>
                                <option value="warning">Warning</option>
                                <option value="error">Error</option>
                                <option value="info">Info</option>
                                <option value="promo">Promo</option>
                            </select>
                        </label>
                        <label>
                            Style:
                            <select value={currentStyle} onChange={(e) => setCurrentStyle(e.target.value as any)}>
                                <option value="solid">Solid</option>
                                <option value="outline">Outline</option>
                                <option value="soft">Soft</option>
                                <option value="gradient">Gradient</option>
                            </select>
                        </label>
                        <button onClick={() => setIsVisible(!isVisible)}>
                            {isVisible ? '숨기기' : '보이기'}
                        </button>
                    </div>
                </div>

                {isVisible && (
                    <Banner
                        title="인터랙티브 배너"
                        description="실시간으로 변형과 스타일을 변경할 수 있는 인터랙티브 데모입니다."
                        icon={<InfoIcon size={20} />}
                        actions={[
                            {
                                text: '테스트',
                                onClick: fn(),
                                variant: 'primary' as const,
                                size: 'sm' as const,
                            }
                        ]}
                        size="md"
                        variant={currentVariant}
                        style={currentStyle}
                        alignment="center"
                        animated={true}
                        dismissible={true}
                        onDismiss={() => setIsVisible(false)}
                    />
                )}
            </div>
        );
    },
};

export const MultipleBanners: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Banner
                title="시스템 업데이트"
                description="새로운 기능이 추가되었습니다. 확인해보세요!"
                icon={<InfoIcon size={20} />}
                variant="info"
                style="soft"
                dismissible={true}
            />
            <Banner
                title="프로모션 이벤트"
                description="한정 시간 특가! 30% 할인 혜택을 놓치지 마세요."
                icon={<StarIcon size={20} />}
                variant="promo"
                style="gradient"
                actions={[
                    {
                        text: '바로가기',
                        href: '#',
                        variant: 'primary' as const,
                        size: 'sm' as const,
                        icon: <ArrowRightIcon size={16} />,
                    }
                ]}
                dismissible={true}
            />
            <Banner
                title="다운로드 완료"
                description="파일 다운로드가 성공적으로 완료되었습니다."
                icon={<CircleCheckFilledIcon size={20} />}
                variant="success"
                style="outline"
                autoDismiss={3000}
            />
        </div>
    ),
};
