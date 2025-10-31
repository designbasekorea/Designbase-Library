/**
 * AdBanner 컴포넌트 스토리
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AdBanner } from './AdBanner';
import { Button } from '../Button/Button';

const meta: Meta<typeof AdBanner> = {
    title: 'Components/AdBanner',
    component: AdBanner,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    '다양한 타입의 광고 배너 컴포넌트입니다. Hero, Topbar, Card, Floating 스타일을 지원합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['hero', 'topbar', 'card', 'floating'],
            description: '배너 타입',
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'error'],
            description: '배너 스타일',
        },
        title: {
            control: 'text',
            description: '제목',
        },
        subtitle: {
            control: 'text',
            description: '부제목',
        },
        ctaText: {
            control: 'text',
            description: 'CTA 버튼 텍스트',
        },
        autoClose: {
            control: 'boolean',
            description: '자동 닫기 여부',
        },
        closeDelay: {
            control: { type: 'number', min: 1000, max: 20000, step: 1000 },
            description: '자동 닫기 지연 시간 (ms)',
        },
        onCtaClick: {
            action: 'cta-clicked',
            description: 'CTA 버튼 클릭 핸들러',
        },
        onClose: {
            action: 'closed',
            description: '닫기 핸들러',
        },
        showCountdown: {
            control: 'boolean',
            description: '카운트다운 표시 여부',
        },
        countdownEndDate: {
            control: 'date',
            description: '카운트다운 종료 시간',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
    args: {
        type: 'hero',
        variant: 'primary',
        title: '여름 시즌 특별 세일',
        subtitle: '모든 상품 최대 70% 할인! 놓치지 마세요. 7월 31일까지만 진행됩니다.',
        ctaText: '지금 쇼핑하기',
    },
};

export const HeroWithCountdown: Story = {
    args: {
        type: 'hero',
        variant: 'primary',
        title: '타임세일 마감 임박!',
        subtitle: '지금부터 24시간 동안만 진행되는 특별 할인',
        ctaText: '지금 구매하기',
        showCountdown: true,
        countdownEndDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24시간 후
    },
};

export const Topbar: Story = {
    args: {
        type: 'topbar',
        variant: 'success',
        title: '🎉 신규 회원 전용 쿠폰팩 증정',
        subtitle: '첫 구매 시 무료 배송 + 추가 할인',
        ctaText: '쿠폰 받기',
    },
};

export const TopbarWithAutoClose: Story = {
    args: {
        type: 'topbar',
        variant: 'warning',
        title: '🚀 오늘 하루만! 타임세일 진행 중',
        subtitle: '인기 상품 최대 60% 할인',
        ctaText: '바로가기',
        autoClose: true,
        closeDelay: 8000,
    },
};

export const Card: Story = {
    args: {
        type: 'card',
        variant: 'secondary',
        title: 'VIP 멤버십 특별 혜택',
        subtitle: '프리미엄 기능을 무제한으로 이용하세요',
        ctaText: '멤버십 가입',
    },
};

export const CardError: Story = {
    args: {
        type: 'card',
        variant: 'error',
        title: '마감 임박! 특가 상품',
        subtitle: '재고가 얼마 남지 않았습니다. 서두르세요!',
        ctaText: '지금 구매',
    },
};

export const Floating: Story = {
    args: {
        type: 'floating',
        variant: 'warning',
        title: '깜짝 타임특가!',
        subtitle: '지금부터 1시간 동안만 진행되는 특별 할인',
        ctaText: '바로가기',
    },
};

export const FloatingWithAutoClose: Story = {
    args: {
        type: 'floating',
        variant: 'warning',
        title: '오늘만 특가!',
        subtitle: '장바구니에 담긴 상품 추가 20% 할인',
        ctaText: '할인받기',
        autoClose: true,
        closeDelay: 10000,
    },
};

export const WithRandomGradient: Story = {
    args: {
        type: 'hero',
        variant: 'primary',
        title: '랜덤 그라데이션 배경',
        subtitle: '매번 새로운 그라데이션이 생성됩니다. 페이지를 새로고침해보세요!',
        ctaText: '체험하기',
        useRandomGradient: true,
        gradientAnimated: true,
    },
};

export const LightToneGradient: Story = {
    args: {
        type: 'hero',
        variant: 'primary',
        title: '라이트 톤 그라데이션',
        subtitle: '밝은 배경에 어두운 텍스트가 적용됩니다',
        ctaText: '자세히 보기',
        useRandomGradient: true,
        gradientScheme: 'primary',
        gradientTone: 'light',
    },
};

export const RandomGradientCard: Story = {
    args: {
        type: 'card',
        variant: 'success',
        title: '특별 프로모션',
        subtitle: '랜덤 그라데이션으로 매력적인 배경을',
        ctaText: '확인하기',
        useRandomGradient: true,
        gradientScheme: 'ocean',
    },
};

export const TopbarWithCountdown: Story = {
    args: {
        type: 'topbar',
        variant: 'error',
        title: '🔥 타임세일 진행 중',
        subtitle: '지금 바로 확인하세요',
        ctaText: '바로가기',
        showCountdown: true,
        countdownEndDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2시간 후
        autoClose: true,
        closeDelay: 8000,
    },
};

export const GradientTones: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>밝은 톤 (Light)</h3>
                <AdBanner
                    type="hero"
                    variant="primary"
                    title="밝은 톤 그라데이션"
                    subtitle="부드럽고 밝은 색상으로 구성된 배경"
                    ctaText="자세히 보기"
                    useRandomGradient={true}
                    gradientScheme="primary"
                    gradientTone="light"
                />
            </div>
            <div>
                <h3>비비드 톤 (Vivid)</h3>
                <AdBanner
                    type="hero"
                    variant="primary"
                    title="비비드 톤 그라데이션"
                    subtitle="선명하고 생동감 있는 색상으로 구성된 배경"
                    ctaText="자세히 보기"
                    useRandomGradient={true}
                    gradientScheme="primary"
                    gradientTone="vivid"
                />
            </div>
            <div>
                <h3>어두운 톤 (Dark)</h3>
                <AdBanner
                    type="hero"
                    variant="primary"
                    title="어두운 톤 그라데이션"
                    subtitle="깊고 어두운 색상으로 구성된 배경"
                    ctaText="자세히 보기"
                    useRandomGradient={true}
                    gradientScheme="primary"
                    gradientTone="dark"
                />
            </div>
        </div>
    ),
};

export const AllGradientSchemes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {(['primary', 'secondary', 'success', 'warning', 'error', 'purple', 'ocean', 'sunset'] as const).map((scheme) => (
                <div key={scheme}>
                    <h3 style={{ textTransform: 'capitalize', marginBottom: '12px' }}>{scheme} Scheme</h3>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        {(['light', 'vivid', 'dark'] as const).map((tone) => (
                            <div key={tone} style={{ flex: '1', minWidth: '200px' }}>
                                <h4 style={{ fontSize: '14px', marginBottom: '8px', textTransform: 'capitalize' }}>
                                    {tone} tone
                                </h4>
                                <AdBanner
                                    type="card"
                                    variant="primary"
                                    title={`${scheme} ${tone}`}
                                    subtitle="그라데이션 배경"
                                    ctaText="보기"
                                    useRandomGradient={true}
                                    gradientScheme={scheme}
                                    gradientTone={tone}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => {
        const [visibleBanners, setVisibleBanners] = useState<Record<string, boolean>>({
            hero: true,
            topbar: true,
            card: true,
        });

        const resetBanner = (key: string) => {
            setVisibleBanners(prev => ({ ...prev, [key]: false }));
            setTimeout(() => {
                setVisibleBanners(prev => ({ ...prev, [key]: true }));
            }, 100);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Hero */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h3 style={{ margin: 0 }}>Hero 배너</h3>
                        <Button size="s" variant="secondary" onPress={() => resetBanner('hero')}>
                            리셋
                        </Button>
                    </div>
                    {visibleBanners.hero && (
                        <AdBanner
                            type="hero"
                            variant="primary"
                            title="여름 시즌 특별 세일"
                            subtitle="모든 상품 최대 70% 할인! 놓치지 마세요. 7월 31일까지만 진행됩니다."
                            ctaText="지금 쇼핑하기"
                            onClose={() => setVisibleBanners(prev => ({ ...prev, hero: false }))}
                        />
                    )}
                </div>

                {/* Topbar */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h3 style={{ margin: 0 }}>상단 바 배너</h3>
                        <Button size="s" variant="secondary" onPress={() => resetBanner('topbar')}>
                            리셋
                        </Button>
                    </div>
                    {visibleBanners.topbar && (
                        <AdBanner
                            type="topbar"
                            variant="primary"
                            title="🚀 신규 회원 전용 쿠폰팩 증정"
                            subtitle="첫 구매 시 무료 배송 + 추가 할인"
                            ctaText="쿠폰 받기"
                            autoClose={true}
                            closeDelay={8000}
                            onClose={() => setVisibleBanners(prev => ({ ...prev, topbar: false }))}
                        />
                    )}
                </div>

                {/* Card */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h3 style={{ margin: 0 }}>카드형 배너</h3>
                        <Button size="s" variant="secondary" onPress={() => resetBanner('card')}>
                            리셋
                        </Button>
                    </div>
                    {visibleBanners.card && (
                        <AdBanner
                            type="card"
                            variant="secondary"
                            title="VIP 멤버십 특별 혜택"
                            subtitle="프리미엄 기능을 무제한으로 이용하세요"
                            ctaText="멤버십 가입"
                            onClose={() => setVisibleBanners(prev => ({ ...prev, card: false }))}
                        />
                    )}
                </div>
            </div>
        );
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h4>Primary</h4>
                <AdBanner type="card" variant="primary" title="Primary 배너" subtitle="파란색 계열 그라데이션" ctaText="자세히 보기" />
            </div>
            <div>
                <h4>Secondary</h4>
                <AdBanner type="card" variant="secondary" title="Secondary 배너" subtitle="회색 계열 그라데이션" ctaText="자세히 보기" />
            </div>
            <div>
                <h4>Success</h4>
                <AdBanner type="card" variant="success" title="Success 배너" subtitle="초록색 계열 그라데이션" ctaText="자세히 보기" />
            </div>
            <div>
                <h4>Warning</h4>
                <AdBanner type="card" variant="warning" title="Warning 배너" subtitle="주황색 계열 그라데이션" ctaText="자세히 보기" />
            </div>
            <div>
                <h4>Error</h4>
                <AdBanner type="card" variant="error" title="Error 배너" subtitle="빨간색 계열 배경" ctaText="자세히 보기" />
            </div>
        </div>
    ),
};

export const InteractiveDemo: Story = {
    render: () => {
        const [banners, setBanners] = useState({
            hero: true,
            topbar: true,
            card: true,
            floating: true,
        });

        const resetBanner = (key: string) => {
            setBanners(prev => ({ ...prev, [key]: false }));
            setTimeout(() => {
                setBanners(prev => ({ ...prev, [key]: true }));
            }, 100);
        };

        return (
            <div style={{ minHeight: '100vh', padding: '32px', backgroundColor: 'var(--db-surface-subtle)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <h1 style={{ fontSize: 'var(--db-text-4xl)', fontWeight: 'var(--db-weight-bold)', marginBottom: '12px' }}>
                            광고 배너 컴포넌트
                        </h1>
                        <p style={{ color: 'var(--db-text-secondary)', fontSize: 'var(--db-text-base)' }}>
                            다양한 스타일의 광고 배너를 확인하고 테스트해보세요
                        </p>
                    </div>

                    {/* Hero */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h2 style={{ fontSize: 'var(--db-text-2xl)', fontWeight: 'var(--db-weight-bold)', margin: 0 }}>
                                Hero 배너
                            </h2>
                            <Button variant="primary" size="s" onPress={() => resetBanner('hero')}>
                                리셋
                            </Button>
                        </div>
                        {banners.hero && (
                            <AdBanner
                                type="hero"
                                variant="primary"
                                title="여름 시즌 특별 세일"
                                subtitle="모든 상품 최대 70% 할인! 놓치지 마세요. 7월 31일까지만 진행됩니다."
                                ctaText="지금 쇼핑하기"
                                onClose={() => setBanners(prev => ({ ...prev, hero: false }))}
                                onCtaClick={() => alert('Hero CTA 클릭!')}
                            />
                        )}
                    </div>

                    {/* Topbar */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h2 style={{ fontSize: 'var(--db-text-2xl)', fontWeight: 'var(--db-weight-bold)', margin: 0 }}>
                                상단 바 배너
                            </h2>
                            <Button variant="primary" size="s" onPress={() => resetBanner('topbar')}>
                                리셋
                            </Button>
                        </div>
                        {banners.topbar && (
                            <AdBanner
                                type="topbar"
                                variant="primary"
                                title="🚀 신규 회원 전용 쿠폰팩 증정"
                                subtitle="첫 구매 시 무료 배송 + 추가 할인"
                                ctaText="쿠폰 받기"
                                autoClose={true}
                                closeDelay={8000}
                                onClose={() => setBanners(prev => ({ ...prev, topbar: false }))}
                                onCtaClick={() => alert('Topbar CTA 클릭!')}
                            />
                        )}
                    </div>

                    {/* Card */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h2 style={{ fontSize: 'var(--db-text-2xl)', fontWeight: 'var(--db-weight-bold)', margin: 0 }}>
                                카드형 배너
                            </h2>
                            <Button variant="primary" size="s" onPress={() => resetBanner('card')}>
                                리셋
                            </Button>
                        </div>
                        {banners.card && (
                            <AdBanner
                                type="card"
                                variant="secondary"
                                title="VIP 멤버십 특별 혜택"
                                subtitle="프리미엄 기능을 무제한으로 이용하세요"
                                ctaText="멤버십 가입"
                                onClose={() => setBanners(prev => ({ ...prev, card: false }))}
                                onCtaClick={() => alert('Card CTA 클릭!')}
                            />
                        )}
                    </div>

                    {/* Floating */}
                    {banners.floating && (
                        <AdBanner
                            type="floating"
                            variant="warning"
                            title="깜짝 타임특가!"
                            subtitle="지금부터 1시간 동안만 진행되는 특별 할인"
                            ctaText="바로가기"
                            autoClose={true}
                            closeDelay={10000}
                            onClose={() => setBanners(prev => ({ ...prev, floating: false }))}
                            onCtaClick={() => alert('Floating CTA 클릭!')}
                        />
                    )}
                </div>
            </div>
        );
    },
};

