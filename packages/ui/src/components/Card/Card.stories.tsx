/**
 * Card 컴포넌트 스토리
 * 
 * 목적: Card 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 이미지, 아이콘, 버튼, 다양한 레이아웃과 스타일
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Card, CardAction } from './Card';
import {
    BookIcon,
    CameraIcon,
    HeartIcon,
    ShareAltIcon,
    StarIcon,
    UserIcon,
    CalendarIcon,

} from '@designbase/icons';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'elevated', 'outlined', 'filled', 'flat'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
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

// 기본 카드
export const Default: Story = {
    args: {
        title: '기본 카드',
        description: '이것은 기본적인 카드 컴포넌트입니다.',
        variant: 'default',
        size: 'md',
    },
};

// 이미지가 있는 카드
export const WithImage: Story = {
    args: {
        title: '이미지가 있는 카드',
        subtitle: '아름다운 풍경',
        description: '자연의 아름다움을 담은 이미지 카드입니다.',
        image: {
            src: 'https://via.placeholder.com/400x300/4CAF50/ffffff?text=Beautiful+Landscape',
            alt: '아름다운 풍경',
            ratio: 'video',
        },
        variant: 'elevated',
        size: 'md',
    },
};

// 아이콘이 있는 카드
export const WithIcon: Story = {
    args: {
        title: '아이콘이 있는 카드',
        description: '아이콘과 함께 표시되는 카드입니다.',
        icon: BookIcon,
        variant: 'outlined',
        size: 'md',
    },
};

// 액션이 있는 카드
export const WithActions: Story = {
    args: {
        title: '액션이 있는 카드',
        description: '버튼 액션이 포함된 카드입니다.',
        actions: [
            {
                label: '자세히 보기',
                variant: 'primary',
                onClick: () => console.log('자세히 보기 클릭'),
            },
            {
                label: '공유하기',
                variant: 'secondary',
                icon: ShareAltIcon,
                onClick: () => console.log('공유하기 클릭'),
            },
        ],
        variant: 'default',
        size: 'md',
    },
};

// 태그가 있는 카드
export const WithTags: Story = {
    args: {
        title: '태그가 있는 카드',
        description: '태그들이 포함된 카드입니다.',
        tags: ['디자인', 'UI/UX', '프론트엔드', 'React'],
        variant: 'filled',
        size: 'md',
    },
};

// 메타 정보가 있는 카드
export const WithMeta: Story = {
    args: {
        title: '메타 정보가 있는 카드',
        description: '작성자, 날짜, 조회수 등의 메타 정보가 포함된 카드입니다.',
        meta: {
            author: '김철수',
            date: '2024년 1월 15일',
            views: 1234,
            likes: 56,
            comments: 23,
        },
        variant: 'default',
        size: 'md',
    },
};

// 수평 레이아웃 카드
export const HorizontalLayout: Story = {
    args: {
        title: '수평 레이아웃 카드',
        subtitle: '이미지가 왼쪽에 있는 카드',
        description: '이미지가 왼쪽에 위치한 수평 레이아웃 카드입니다.',
        image: {
            src: 'https://via.placeholder.com/200x150/2196F3/ffffff?text=Image',
            alt: '카드 이미지',
            ratio: 'video',
        },
        layout: 'horizontal',
        imagePosition: 'left',
        variant: 'elevated',
        size: 'md',
    },
};

// 배경 이미지 카드
export const BackgroundImage: Story = {
    args: {
        title: '배경 이미지 카드',
        subtitle: '이미지가 배경으로 사용된 카드',
        description: '이미지가 배경으로 사용되어 텍스트가 오버레이로 표시되는 카드입니다.',
        image: {
            src: 'https://via.placeholder.com/600x400/FF5722/ffffff?text=Background+Image',
            alt: '배경 이미지',
            ratio: 'banner',
        },
        imagePosition: 'background',
        variant: 'flat',
        size: 'lg',
    },
};

// 클릭 가능한 카드
export const Clickable: Story = {
    args: {
        title: '클릭 가능한 카드',
        description: '클릭할 수 있는 카드입니다. 호버 효과도 포함되어 있습니다.',
        image: {
            src: 'https://via.placeholder.com/400x250/9C27B0/ffffff?text=Clickable+Card',
            alt: '클릭 가능한 카드',
            ratio: 'video',
        },
        clickable: true,
        hoverable: true,
        onClick: () => console.log('카드 클릭됨!'),
        variant: 'elevated',
        size: 'md',
    },
};

// 선택 가능한 카드
export const Selectable: Story = {
    render: () => {
        const [selected, setSelected] = useState(false);

        return (
            <Card
                title="선택 가능한 카드"
                description="체크박스로 선택할 수 있는 카드입니다."
                image={{
                    src: 'https://via.placeholder.com/400x250/607D8B/ffffff?text=Selectable+Card',
                    alt: '선택 가능한 카드',
                    ratio: '16:9',
                }}
                selectable={true}
                selected={selected}
                onSelect={setSelected}
                variant="outlined"
                size="md"
            />
        );
    },
};

// 로딩 상태 카드
export const Loading: Story = {
    args: {
        title: '로딩 상태 카드',
        description: '로딩 스피너가 표시되는 카드입니다.',
        image: {
            src: 'https://via.placeholder.com/400x250/795548/ffffff?text=Loading+Card',
            alt: '로딩 카드',
            ratio: '16:9',
        },
        loading: true,
        variant: 'default',
        size: 'md',
    },
};

// 크기별 비교
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Small 크기</h3>
                <Card
                    title="Small 카드"
                    description="작은 크기의 카드입니다."
                    size="sm"
                    variant="default"
                />
            </div>

            <div>
                <h3>Medium 크기 (기본)</h3>
                <Card
                    title="Medium 카드"
                    description="중간 크기의 카드입니다."
                    size="md"
                    variant="default"
                />
            </div>

            <div>
                <h3>Large 크기</h3>
                <Card
                    title="Large 카드"
                    description="큰 크기의 카드입니다."
                    size="lg"
                    variant="default"
                />
            </div>

            <div>
                <h3>Extra Large 크기</h3>
                <Card
                    title="Extra Large 카드"
                    description="매우 큰 크기의 카드입니다."
                    size="xl"
                    variant="default"
                />
            </div>
        </div>
    ),
};

// 변형별 비교
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div>
                <h3>Default</h3>
                <Card
                    title="Default 카드"
                    description="기본 스타일의 카드입니다."
                    variant="default"
                />
            </div>

            <div>
                <h3>Elevated</h3>
                <Card
                    title="Elevated 카드"
                    description="그림자가 있는 카드입니다."
                    variant="elevated"
                />
            </div>

            <div>
                <h3>Outlined</h3>
                <Card
                    title="Outlined 카드"
                    description="테두리가 있는 카드입니다."
                    variant="outlined"
                />
            </div>

            <div>
                <h3>Filled</h3>
                <Card
                    title="Filled 카드"
                    description="배경이 채워진 카드입니다."
                    variant="filled"
                />
            </div>

            <div>
                <h3>Flat</h3>
                <Card
                    title="Flat 카드"
                    description="평면적인 카드입니다."
                    variant="flat"
                />
            </div>
        </div>
    ),
};

// 블로그 포스트 카드
export const BlogPost: Story = {
    args: {
        title: 'React 18의 새로운 기능들',
        subtitle: '최신 React 버전에서 추가된 기능들을 살펴봅니다',
        description: 'React 18에서는 동시성 기능, 자동 배치, Suspense 개선 등 많은 새로운 기능들이 추가되었습니다. 이 글에서는 이러한 기능들을 자세히 살펴보겠습니다.',
        image: {
            src: 'https://via.placeholder.com/400x250/3F51B5/ffffff?text=React+18',
            alt: 'React 18',
            ratio: 'photo',
        },
        icon: BookIcon,
        tags: ['React', 'JavaScript', '프론트엔드', '개발'],
        meta: {
            author: '개발자 김철수',
            date: '2024년 1월 15일',
            views: 1234,
            likes: 89,
            comments: 23,
        },
        actions: [
            {
                label: '자세히 보기',
                variant: 'primary',
                onClick: () => console.log('블로그 포스트 자세히 보기'),
            },
            {
                label: '좋아요',
                variant: 'secondary',
                icon: HeartIcon,
                onClick: () => console.log('좋아요 클릭'),
            },
            {
                label: '공유하기',
                variant: 'outline',
                icon: ShareAltIcon,
                onClick: () => console.log('공유하기 클릭'),
            },
        ],
        variant: 'elevated',
        size: 'lg',
        hoverable: true,
    },
};

// 제품 카드
export const ProductCard: Story = {
    args: {
        title: '프리미엄 무선 이어폰',
        subtitle: '고음질 블루투스 이어폰',
        description: '노이즈 캔슬링 기능이 탑재된 프리미엄 무선 이어폰입니다. 30시간 연속 재생이 가능하며, IPX4 방수 기능을 제공합니다.',
        image: {
            src: 'https://via.placeholder.com/400x300/FF9800/ffffff?text=Wireless+Earbuds',
            alt: '무선 이어폰',
            ratio: 'video',
        },
        icon: CameraIcon,
        tags: ['전자제품', '이어폰', '블루투스', '노이즈캔슬링'],
        meta: {
            author: '전자제품 스토어',
            date: '2024년 1월 10일',
            views: 5678,
            likes: 234,
            comments: 45,
            custom: {
                '가격': '₩299,000',
                '평점': '4.8/5',
            },
        },
        actions: [
            {
                label: '구매하기',
                variant: 'primary',
                onClick: () => console.log('구매하기 클릭'),
            },
            {
                label: '장바구니',
                variant: 'secondary',
                onClick: () => console.log('장바구니 추가'),
            },
            {
                label: '찜하기',
                variant: 'outline',
                icon: HeartIcon,
                onClick: () => console.log('찜하기 클릭'),
            },
        ],
        variant: 'elevated',
        size: 'md',
        hoverable: true,
        clickable: true,
        onClick: () => console.log('제품 상세 페이지로 이동'),
    },
};

// 사용자 프로필 카드
export const UserProfile: Story = {
    args: {
        title: '김철수',
        subtitle: '시니어 프론트엔드 개발자',
        description: 'React, TypeScript, Next.js를 주로 사용하는 프론트엔드 개발자입니다. 5년간의 개발 경험을 바탕으로 사용자 친화적인 웹 애플리케이션을 개발하고 있습니다.',
        image: {
            src: 'https://via.placeholder.com/200x200/4CAF50/ffffff?text=김철수',
            alt: '김철수 프로필',
            ratio: 'square',
        },
        icon: UserIcon,
        tags: ['React', 'TypeScript', 'Next.js', 'UI/UX'],
        meta: {
            author: '개발팀',
            date: '2023년 12월 1일 입사',
            views: 890,
            likes: 67,
            comments: 12,
            custom: {
                '경력': '5년',
                '프로젝트': '15개',
                '기술스택': 'React, TypeScript, Next.js',
            },
        },
        actions: [
            {
                label: '프로필 보기',
                variant: 'primary',
                onClick: () => console.log('프로필 상세 보기'),
            },
            {
                label: '메시지',
                variant: 'secondary',
                onClick: () => console.log('메시지 보내기'),
            },
            {
                label: '팔로우',
                variant: 'outline',
                onClick: () => console.log('팔로우하기'),
            },
        ],
        layout: 'horizontal',
        imagePosition: 'left',
        variant: 'outlined',
        size: 'lg',
    },
};

// 이벤트 카드
export const EventCard: Story = {
    args: {
        title: '2024 개발자 컨퍼런스',
        subtitle: '최신 기술 트렌드와 개발자 네트워킹',
        description: 'AI, 클라우드, 웹 개발의 최신 트렌드를 다루는 개발자 컨퍼런스입니다. 다양한 세션과 네트워킹 기회를 제공합니다.',
        image: {
            src: 'https://via.placeholder.com/400x250/673AB7/ffffff?text=Developer+Conference',
            alt: '개발자 컨퍼런스',
            ratio: 'banner',
        },
        icon: CalendarIcon,
        tags: ['컨퍼런스', '개발자', 'AI', '클라우드', '네트워킹'],
        meta: {
            author: '개발자 커뮤니티',
            date: '2024년 3월 15일',
            views: 2345,
            likes: 156,
            comments: 34,
            custom: {
                '장소': '서울 코엑스',
                '시간': '09:00 - 18:00',
                '참가비': '₩50,000',
            },
        },
        actions: [
            {
                label: '참가 신청',
                variant: 'primary',
                onClick: () => console.log('참가 신청하기'),
            },
            {
                label: '일정 추가',
                variant: 'secondary',
                onClick: () => console.log('일정에 추가'),
            },
            {
                label: '공유하기',
                variant: 'outline',
                icon: ShareAltIcon,
                onClick: () => console.log('이벤트 공유하기'),
            },
        ],
        variant: 'elevated',
        size: 'lg',
        hoverable: true,
    },
};

// 컴팩트 카드
export const CompactCard: Story = {
    args: {
        title: '컴팩트 카드',
        description: '공간을 절약하는 컴팩트한 레이아웃의 카드입니다.',
        icon: StarIcon,
        layout: 'compact',
        variant: 'filled',
        size: 'sm',
    },
};

// 전체 너비 카드
export const FullWidth: Story = {
    args: {
        title: '전체 너비 카드',
        description: '컨테이너의 전체 너비를 사용하는 카드입니다.',
        image: {
            src: 'https://via.placeholder.com/800x200/00BCD4/ffffff?text=Full+Width+Card',
            alt: '전체 너비 카드',
            ratio: 'banner',
        },
        fullWidth: true,
        variant: 'elevated',
        size: 'md',
    },
};
