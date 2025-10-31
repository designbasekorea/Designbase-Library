import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { BookIcon, HeartIcon, ShareAltIcon, UserIcon, CalendarIcon, CameraIcon, StarIcon } from '@designbasekorea/icons';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'elevated', 'outlined', 'filled', 'flat'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l', 'xl'], // ✅ 컴포넌트 타입과 일치
        },
        layout: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal', 'compact'],
        },
        imagePosition: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'left', 'right', 'background'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** 단일 기본 예제 */
export const Playground: Story = {
    args: {
        title: '콘텐츠 카드 타이틀',
        subtitle: '부제목 또는 보조 설명',
        description: '짧은 설명문이 들어갑니다. 카드의 주요 콘텐츠를 요약합니다.',
        icon: BookIcon,
        actions: [
            { label: '자세히 보기', variant: 'primary' },
            { label: '공유', variant: 'secondary', icon: ShareAltIcon },
        ],
        variant: 'default',
        size: 'm',
        layout: 'vertical',
        image: {
            src: 'https://picsum.photos/seed/card/640/360',
            alt: '무작위 이미지',
            ratio: '16:9',
        },
        imagePosition: 'top',
        hoverable: true,
        clickable: true,
    },
};

/** 모든 Variant를 한 화면에서 비교 */
export const AllVariants: Story = {
    render: () => {
        const variants: Array<'default' | 'elevated' | 'outlined' | 'filled' | 'flat'> = [
            'default', 'elevated', 'outlined', 'filled', 'flat',
        ];
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {variants.map((v) => (
                    <Card
                        key={v}
                        title={`Variant: ${v}`}
                        subtitle="부제목"
                        description="가벼운 설명 텍스트가 들어갑니다."
                        variant={v}
                        size="m"
                        image={{
                            src: `https://picsum.photos/seed/${v}/600/360`,
                            alt: v,
                            ratio: '16:9',
                        }}
                        hoverable
                    />
                ))}
            </div>
        );
    },
};

/** 모든 Size를 한 화면에서 비교 */
export const AllSizes: Story = {
    render: () => {
        const sizes: Array<'s' | 'm' | 'l' | 'xl'> = ['s', 'm', 'l', 'xl'];
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                {sizes.map((s) => (
                    <Card
                        key={s}
                        title={`Size: ${s.toUpperCase()}`}
                        description="컴포넌트의 크기에 따라 타이포/간격/이미지 높이가 조정됩니다."
                        size={s}
                        variant="default"
                        icon={StarIcon}
                    />
                ))}
            </div>
        );
    },
};

/** 주요 Layout 비교(수직/수평/컴팩트) */
export const AllLayouts: Story = {
    render: () => {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
                {/* vertical */}
                <div>
                    <h4>vertical</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
                        <Card
                            title="Vertical Card"
                            description="일반 콘텐츠 카드에 가장 적합한 레이아웃"
                            image={{ src: 'https://picsum.photos/seed/v1/640/360', alt: 'vertical', ratio: '16:9' }}
                            layout="vertical"
                            size="m"
                            hoverable
                        />
                    </div>
                </div>

                {/* horizontal */}
                <div>
                    <h4>horizontal</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 16 }}>
                        <Card
                            title="Horizontal Card"
                            subtitle="이미지가 왼쪽"
                            description="리스트형 카드나 프로필 카드에 적합"
                            image={{ src: 'https://picsum.photos/seed/h1/360/240', alt: 'horizontal', ratio: '4:3' }}
                            layout="horizontal"
                            imagePosition="left"
                            size="m"
                            hoverable
                        />
                    </div>
                </div>

                {/* compact */}
                <div>
                    <h4>compact</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                        <Card
                            title="Compact"
                            description="공간이 제한된 그리드/사이드바에 적합"
                            icon={CameraIcon}
                            layout="compact"
                            size="s"
                            variant="filled"
                        />
                    </div>
                </div>
            </div>
        );
    },
};

/** 콘텐츠형 예시(블로그/제품/프로필/이벤트) – 소수만 유지 */
export const ContentExamples: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
            <Card
                title="React 18의 새로운 기능들"
                subtitle="동시성, 자동 배치, Suspense"
                description="React 18에서 추가된 주요 기능들을 빠르게 훑어봅니다."
                image={{ src: 'https://picsum.photos/seed/r18/640/360', alt: 'React', ratio: '16:9' }}
                icon={BookIcon}
                tags={['React', 'Frontend']}
                meta={{ author: '개발자 김철수', date: '2024-01-15', views: 1234, likes: 89, comments: 23 }}
                actions={[
                    { label: '자세히 보기', variant: 'primary' },
                    { label: '공유', variant: 'secondary', icon: ShareAltIcon },
                ]}
                variant="elevated"
                size="l"
                hoverable
            />

            <Card
                title="프리미엄 무선 이어폰"
                subtitle="30시간 재생 · IPX4"
                description="노이즈 캔슬링과 선명한 음질의 플래그십 이어폰"
                image={{ src: 'https://picsum.photos/seed/ear/640/360', alt: 'earbuds', ratio: '4:3' }}
                tags={['전자제품', '블루투스']}
                meta={{ custom: { 가격: '₩299,000', 평점: '4.8/5' } }}
                actions={[
                    { label: '구매하기', variant: 'primary' },
                    { label: '장바구니', variant: 'secondary' },
                    { label: '찜', variant: 'outline', icon: HeartIcon },
                ]}
                variant="default"
                size="m"
                hoverable
                clickable
            />

            <Card
                title="김철수"
                subtitle="시니어 프론트엔드 개발자"
                description="React / TypeScript / Next.js"
                image={{ src: 'https://picsum.photos/seed/profile/360/360', alt: 'profile', ratio: '1:1' }}
                icon={UserIcon}
                meta={{ custom: { 경력: '5년', 프로젝트: '15개' } }}
                actions={[{ label: '프로필 보기', variant: 'primary' }]}
                layout="horizontal"
                imagePosition="left"
                variant="outlined"
                size="m"
            />

            <Card
                title="개발자 컨퍼런스"
                subtitle="AI · 클라우드 · 웹"
                description="최신 기술 트렌드와 네트워킹 기회"
                image={{ src: 'https://picsum.photos/seed/conf/640/360', alt: 'conference', ratio: '16:9' }}
                icon={CalendarIcon}
                tags={['컨퍼런스', '네트워킹']}
                meta={{ custom: { 장소: '서울 코엑스', 시간: '09:00 - 18:00' } }}
                actions={[{ label: '참가 신청', variant: 'primary' }]}
                variant="elevated"
                size="m"
                hoverable
            />
        </div>
    ),
};
