import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';
import Carousel, { CarouselItem } from './Carousel';

const meta: Meta<typeof Carousel> = {
    title: 'Components/Carousel',
    component: Carousel,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '이미지나 콘텐츠를 슬라이드 형태로 보여주는 고급 Carousel 컴포넌트입니다. 자동 재생, 터치/스와이프, 키보드 네비게이션, 좋아요, 북마크, 공유, 다운로드, 전체화면 등의 기능을 지원합니다.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
            description: 'Carousel 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'cards', 'gallery', 'hero', 'testimonial'],
            description: 'Carousel 스타일 변형',
        },
        theme: {
            control: { type: 'select' },
            options: ['light', 'dark'],
            description: '테마',
        },
        transition: {
            control: { type: 'select' },
            options: ['slide', 'fade', 'zoom', 'flip', 'cube'],
            description: '전환 효과',
        },
        indicatorStyle: {
            control: { type: 'select' },
            options: ['dots', 'lines', 'numbers', 'thumbnails'],
            description: '인디케이터 스타일',
        },
        autoPlay: {
            control: { type: 'boolean' },
            description: '자동 재생',
        },
        autoPlayInterval: {
            control: { type: 'number', min: 1000, max: 10000, step: 500 },
            description: '자동 재생 간격 (ms)',
        },
        infinite: {
            control: { type: 'boolean' },
            description: '무한 루프',
        },
        itemsPerView: {
            control: { type: 'number', min: 1, max: 5, step: 1 },
            description: '한 번에 보여줄 아이템 수',
        },
        gap: {
            control: { type: 'number', min: 0, max: 32, step: 4 },
            description: '간격',
        },
        showNavigation: {
            control: { type: 'boolean' },
            description: '네비게이션 버튼 표시',
        },
        showIndicators: {
            control: { type: 'boolean' },
            description: '인디케이터 표시',
        },
        showAutoPlayControl: {
            control: { type: 'boolean' },
            description: '자동 재생 컨트롤 표시',
        },
        showTitle: {
            control: { type: 'boolean' },
            description: '제목 표시',
        },
        showDescription: {
            control: { type: 'boolean' },
            description: '설명 표시',
        },
        enableTouch: {
            control: { type: 'boolean' },
            description: '터치/스와이프 활성화',
        },
        enableKeyboard: {
            control: { type: 'boolean' },
            description: '키보드 네비게이션 활성화',
        },
        enableWheel: {
            control: { type: 'boolean' },
            description: '마우스 휠 활성화',
        },
        enableFullscreen: {
            control: { type: 'boolean' },
            description: '전체화면 모드',
        },
        enableDownload: {
            control: { type: 'boolean' },
            description: '다운로드 기능',
        },
        enableShare: {
            control: { type: 'boolean' },
            description: '공유 기능',
        },
        enableLike: {
            control: { type: 'boolean' },
            description: '좋아요 기능',
        },
        enableBookmark: {
            control: { type: 'boolean' },
            description: '북마크 기능',
        },
        enablePaging: {
            control: { type: 'boolean' },
            description: '페이징 활성화',
        },
        swipeSensitivity: {
            control: { type: 'number', min: 10, max: 100, step: 5 },
            description: '스와이프 감도',
        },
        transitionDuration: {
            control: { type: 'number', min: 100, max: 1000, step: 50 },
            description: '전환 지속 시간 (ms)',
        },
        readonly: {
            control: { type: 'boolean' },
            description: '읽기 전용',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화',
        },
        onItemClick: {
            action: 'onItemClick',
            description: '아이템 클릭 핸들러',
        },
        onSlideChange: {
            action: 'onSlideChange',
            description: '슬라이드 변경 핸들러',
        },
        onLike: {
            action: 'onLike',
            description: '좋아요 핸들러',
        },
        onBookmark: {
            action: 'onBookmark',
            description: '북마크 핸들러',
        },
        onShare: {
            action: 'onShare',
            description: '공유 핸들러',
        },
        onDownload: {
            action: 'onDownload',
            description: '다운로드 핸들러',
        },
        onFullscreenChange: {
            action: 'onFullscreenChange',
            description: '전체화면 변경 핸들러',
        },
    },
    args: {
        size: 'md',
        variant: 'default',
        theme: 'light',
        transition: 'slide',
        indicatorStyle: 'dots',
        autoPlay: false,
        autoPlayInterval: 5000,
        infinite: true,
        itemsPerView: 1,
        gap: 16,
        showNavigation: true,
        showIndicators: true,
        showAutoPlayControl: true,
        showTitle: true,
        showDescription: true,
        enableTouch: true,
        enableKeyboard: true,
        enableWheel: false,
        enableFullscreen: false,
        enableDownload: false,
        enableShare: false,
        enableLike: false,
        enableBookmark: false,
        enablePaging: false,
        swipeSensitivity: 50,
        transitionDuration: 300,
        readonly: false,
        disabled: false,
        onItemClick: fn(),
        onSlideChange: fn(),
        onLike: fn(),
        onBookmark: fn(),
        onShare: fn(),
        onDownload: fn(),
        onFullscreenChange: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 아이템 데이터
const sampleItems: CarouselItem[] = [
    {
        id: '1',
        title: '아름다운 산 풍경',
        description: '푸른 하늘과 녹색 산들이 어우러진 아름다운 풍경입니다.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
        alt: '산 풍경',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=60&fit=crop',
        meta: {
            author: '자연사진작가',
            date: '2024.01.15',
            category: '풍경',
            rating: 4.8,
            views: 1234,
            likes: 89,
        },
    },
    {
        id: '2',
        title: '신비로운 숲',
        description: '햇살이 비치는 신비로운 숲의 모습입니다.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
        alt: '숲 풍경',
        thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=60&fit=crop',
        meta: {
            author: '숲사랑',
            date: '2024.01.14',
            category: '자연',
            rating: 4.9,
            views: 2156,
            likes: 156,
        },
    },
    {
        id: '3',
        title: '푸른 바다',
        description: '끝없이 펼쳐진 푸른 바다의 아름다운 모습입니다.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
        alt: '바다 풍경',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=60&fit=crop',
        meta: {
            author: '바다사랑',
            date: '2024.01.13',
            category: '바다',
            rating: 4.7,
            views: 1890,
            likes: 134,
        },
    },
    {
        id: '4',
        title: '현대적인 도시',
        description: '현대적인 건물들이 들어선 도시의 야경입니다.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
        alt: '도시 풍경',
        thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=60&fit=crop',
        meta: {
            author: '도시탐험가',
            date: '2024.01.12',
            category: '도시',
            rating: 4.6,
            views: 1678,
            likes: 98,
        },
    },
    {
        id: '5',
        title: '아름다운 꽃 정원',
        description: '다양한 색깔의 꽃들이 피어있는 아름다운 정원입니다.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
        alt: '꽃 정원',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=60&fit=crop',
        meta: {
            author: '꽃사랑',
            date: '2024.01.11',
            category: '정원',
            rating: 4.9,
            views: 2345,
            likes: 201,
        },
    },
];

// 커스텀 콘텐츠 아이템
const customContentItems: CarouselItem[] = [
    {
        id: '1',
        title: '통계 카드',
        content: (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h3 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>📊 통계</h3>
                <p style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#3b82f6' }}>1,234</p>
                <p style={{ margin: 0, color: '#6b7280' }}>총 사용자 수</p>
            </div>
        ),
        backgroundColor: '#f8fafc',
    },
    {
        id: '2',
        title: '알림 카드',
        content: (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h3 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>🔔 알림</h3>
                <p style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#ef4444' }}>5</p>
                <p style={{ margin: 0, color: '#6b7280' }}>새로운 메시지</p>
            </div>
        ),
        backgroundColor: '#fef2f2',
    },
    {
        id: '3',
        title: '성공 카드',
        content: (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h3 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>✅ 성공</h3>
                <p style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#10b981' }}>98%</p>
                <p style={{ margin: 0, color: '#6b7280' }}>성공률</p>
            </div>
        ),
        backgroundColor: '#f0fdf4',
    },
];

// 테스티모니얼 아이템
const testimonialItems: CarouselItem[] = [
    {
        id: '1',
        title: '김철수',
        description: '정말 훌륭한 서비스입니다! 사용하기 편리하고 기능도 많아서 만족스럽습니다.',
        meta: {
            author: '김철수',
            category: '개발자',
            rating: 5,
        },
    },
    {
        id: '2',
        title: '이영희',
        description: '디자인이 아름답고 사용자 경험이 정말 좋습니다. 추천합니다!',
        meta: {
            author: '이영희',
            category: '디자이너',
            rating: 5,
        },
    },
    {
        id: '3',
        title: '박민수',
        description: '빠른 속도와 안정적인 성능이 인상적입니다. 계속 사용할 예정입니다.',
        meta: {
            author: '박민수',
            category: '기획자',
            rating: 4,
        },
    },
];

// 기본 스토리
export const Default: Story = {
    args: {
        items: sampleItems,
    },
};

// 다양한 크기
export const DifferentSizes: Story = {
    render: () => {
        const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setSize('sm')}>Small</button>
                    <button onClick={() => setSize('md')}>Medium</button>
                    <button onClick={() => setSize('lg')}>Large</button>
                    <button onClick={() => setSize('xl')}>Extra Large</button>
                </div>

                <Carousel
                    items={sampleItems}
                    size={size}
                    onItemClick={(item, index) => console.log('클릭된 아이템:', item, index)}
                    onSlideChange={(index) => console.log('슬라이드 변경:', index)}
                />
            </div>
        );
    },
};

// 다양한 변형
export const DifferentVariants: Story = {
    render: () => {
        const [variant, setVariant] = useState<'default' | 'cards' | 'gallery' | 'hero' | 'testimonial'>('default');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setVariant('default')}>Default</button>
                    <button onClick={() => setVariant('cards')}>Cards</button>
                    <button onClick={() => setVariant('gallery')}>Gallery</button>
                    <button onClick={() => setVariant('hero')}>Hero</button>
                    <button onClick={() => setVariant('testimonial')}>Testimonial</button>
                </div>

                <Carousel
                    items={variant === 'testimonial' ? testimonialItems : sampleItems}
                    variant={variant}
                    onItemClick={(item, index) => console.log('클릭된 아이템:', item, index)}
                    onSlideChange={(index) => console.log('슬라이드 변경:', index)}
                />
            </div>
        );
    },
};

// 다양한 전환 효과
export const DifferentTransitions: Story = {
    render: () => {
        const [transition, setTransition] = useState<'slide' | 'fade' | 'zoom' | 'flip' | 'cube'>('slide');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setTransition('slide')}>Slide</button>
                    <button onClick={() => setTransition('fade')}>Fade</button>
                    <button onClick={() => setTransition('zoom')}>Zoom</button>
                    <button onClick={() => setTransition('flip')}>Flip</button>
                    <button onClick={() => setTransition('cube')}>Cube</button>
                </div>

                <Carousel
                    items={sampleItems}
                    transition={transition}
                    onItemClick={(item, index) => console.log('클릭된 아이템:', item, index)}
                    onSlideChange={(index) => console.log('슬라이드 변경:', index)}
                />
            </div>
        );
    },
};

// 다양한 인디케이터 스타일
export const DifferentIndicators: Story = {
    render: () => {
        const [indicatorStyle, setIndicatorStyle] = useState<'dots' | 'lines' | 'numbers' | 'thumbnails'>('dots');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setIndicatorStyle('dots')}>Dots</button>
                    <button onClick={() => setIndicatorStyle('lines')}>Lines</button>
                    <button onClick={() => setIndicatorStyle('numbers')}>Numbers</button>
                    <button onClick={() => setIndicatorStyle('thumbnails')}>Thumbnails</button>
                </div>

                <Carousel
                    items={sampleItems}
                    indicatorStyle={indicatorStyle}
                    onItemClick={(item, index) => console.log('클릭된 아이템:', item, index)}
                    onSlideChange={(index) => console.log('슬라이드 변경:', index)}
                />
            </div>
        );
    },
};

// 자동 재생
export const AutoPlay: Story = {
    args: {
        items: sampleItems,
        autoPlay: true,
        autoPlayInterval: 3000,
    },
};

// 다중 아이템 뷰
export const MultipleItems: Story = {
    args: {
        items: sampleItems,
        itemsPerView: 3,
        gap: 20,
        showNavigation: true,
        showIndicators: true,
    },
};

// 커스텀 콘텐츠
export const CustomContent: Story = {
    args: {
        items: customContentItems,
        variant: 'cards',
        itemsPerView: 3,
        gap: 20,
        showTitle: false,
        showDescription: false,
    },
};

// 다크 테마
export const DarkTheme: Story = {
    args: {
        items: sampleItems,
        theme: 'dark',
    },
};

// 카드 스타일
export const CardsStyle: Story = {
    args: {
        items: sampleItems,
        variant: 'cards',
        itemsPerView: 2,
        gap: 24,
    },
};

// 갤러리 스타일
export const GalleryStyle: Story = {
    args: {
        items: sampleItems,
        variant: 'gallery',
        itemsPerView: 4,
        gap: 16,
        showTitle: false,
        showDescription: false,
    },
};

// 히어로 스타일
export const HeroStyle: Story = {
    args: {
        items: sampleItems,
        variant: 'hero',
        size: 'xl',
    },
};

// 테스티모니얼 스타일
export const TestimonialStyle: Story = {
    args: {
        items: testimonialItems,
        variant: 'testimonial',
        itemsPerView: 1,
    },
};

// 고급 기능들
export const AdvancedFeatures: Story = {
    args: {
        items: sampleItems,
        enableFullscreen: true,
        enableDownload: true,
        enableShare: true,
        enableLike: true,
        enableBookmark: true,
        enablePaging: true,
        showAutoPlayControl: true,
        autoPlay: true,
        autoPlayInterval: 4000,
    },
};

// 기능별 설정
export const FeatureConfiguration: Story = {
    render: () => {
        const [config, setConfig] = useState({
            autoPlay: false,
            infinite: true,
            showNavigation: true,
            showIndicators: true,
            showAutoPlayControl: true,
            enableTouch: true,
            enableKeyboard: true,
            enableWheel: false,
            enableFullscreen: false,
            enableDownload: false,
            enableShare: false,
            enableLike: false,
            enableBookmark: false,
            enablePaging: false,
        });

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.autoPlay}
                            onChange={(e) => setConfig(prev => ({ ...prev, autoPlay: e.target.checked }))}
                        />
                        자동 재생
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.infinite}
                            onChange={(e) => setConfig(prev => ({ ...prev, infinite: e.target.checked }))}
                        />
                        무한 루프
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.showNavigation}
                            onChange={(e) => setConfig(prev => ({ ...prev, showNavigation: e.target.checked }))}
                        />
                        네비게이션 버튼
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.showIndicators}
                            onChange={(e) => setConfig(prev => ({ ...prev, showIndicators: e.target.checked }))}
                        />
                        인디케이터
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.showAutoPlayControl}
                            onChange={(e) => setConfig(prev => ({ ...prev, showAutoPlayControl: e.target.checked }))}
                        />
                        자동 재생 컨트롤
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableTouch}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableTouch: e.target.checked }))}
                        />
                        터치/스와이프
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableKeyboard}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableKeyboard: e.target.checked }))}
                        />
                        키보드 네비게이션
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableWheel}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableWheel: e.target.checked }))}
                        />
                        마우스 휠
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableFullscreen}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableFullscreen: e.target.checked }))}
                        />
                        전체화면
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableDownload}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableDownload: e.target.checked }))}
                        />
                        다운로드
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableShare}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableShare: e.target.checked }))}
                        />
                        공유
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableLike}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableLike: e.target.checked }))}
                        />
                        좋아요
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableBookmark}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableBookmark: e.target.checked }))}
                        />
                        북마크
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enablePaging}
                            onChange={(e) => setConfig(prev => ({ ...prev, enablePaging: e.target.checked }))}
                        />
                        페이징
                    </label>
                </div>

                <Carousel
                    items={sampleItems}
                    {...config}
                    onItemClick={(item, index) => console.log('클릭된 아이템:', item, index)}
                    onSlideChange={(index) => console.log('슬라이드 변경:', index)}
                    onLike={(item, index, liked) => console.log('좋아요:', item.title, liked)}
                    onBookmark={(item, index, bookmarked) => console.log('북마크:', item.title, bookmarked)}
                    onShare={(item, index) => console.log('공유:', item.title)}
                    onDownload={(item, index) => console.log('다운로드:', item.title)}
                    onFullscreenChange={(isFullscreen) => console.log('전체화면:', isFullscreen)}
                />
            </div>
        );
    },
};

// 읽기 전용
export const Readonly: Story = {
    args: {
        items: sampleItems,
        readonly: true,
    },
};

// 비활성화
export const Disabled: Story = {
    args: {
        items: sampleItems,
        disabled: true,
    },
};

// 인터랙티브 예제
export const Interactive: Story = {
    render: () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setCurrentIndex(0)}>첫 번째 슬라이드</button>
                    <button onClick={() => setCurrentIndex(2)}>세 번째 슬라이드</button>
                    <button onClick={() => setCurrentIndex(4)}>마지막 슬라이드</button>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <p>현재 슬라이드: {currentIndex + 1} / {sampleItems.length}</p>
                </div>

                <Carousel
                    items={sampleItems}
                    enableLike={true}
                    enableBookmark={true}
                    enableShare={true}
                    enableDownload={true}
                    enableFullscreen={true}
                    enablePaging={true}
                    onItemClick={(item, index) => {
                        console.log('클릭된 아이템:', item.title, '인덱스:', index);
                        alert(`클릭된 아이템: ${item.title}`);
                    }}
                    onSlideChange={(index) => {
                        console.log('슬라이드 변경:', index);
                        setCurrentIndex(index);
                    }}
                    onLike={(item, index, liked) => {
                        console.log('좋아요:', item.title, liked);
                        alert(`${item.title} ${liked ? '좋아요' : '좋아요 취소'}`);
                    }}
                    onBookmark={(item, index, bookmarked) => {
                        console.log('북마크:', item.title, bookmarked);
                        alert(`${item.title} ${bookmarked ? '북마크' : '북마크 해제'}`);
                    }}
                    onShare={(item, index) => {
                        console.log('공유:', item.title);
                        alert(`${item.title} 공유하기`);
                    }}
                    onDownload={(item, index) => {
                        console.log('다운로드:', item.title);
                        alert(`${item.title} 다운로드`);
                    }}
                    onFullscreenChange={(isFullscreen) => {
                        console.log('전체화면:', isFullscreen);
                        alert(`전체화면 ${isFullscreen ? '진입' : '해제'}`);
                    }}
                />
            </div>
        );
    },
};

// 키보드 단축키 안내
export const KeyboardShortcuts: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3>키보드 단축키</h3>
                    <ul style={{ lineHeight: '1.6' }}>
                        <li><strong>← →</strong>: 이전/다음 슬라이드</li>
                        <li><strong>Home</strong>: 첫 번째 슬라이드</li>
                        <li><strong>End</strong>: 마지막 슬라이드</li>
                        <li><strong>Space</strong>: 자동 재생 토글</li>
                        <li><strong>F</strong>: 전체화면 토글 (전체화면 모드 활성화 시)</li>
                    </ul>
                </div>

                <Carousel
                    items={sampleItems}
                    enableKeyboard={true}
                    enableFullscreen={true}
                    onItemClick={(item, index) => console.log('클릭된 아이템:', item, index)}
                    onSlideChange={(index) => console.log('슬라이드 변경:', index)}
                />
            </div>
        );
    },
};

// 스와이프 제스처 데모
export const SwipeGestureDemo: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3>스와이프 제스처 데모</h3>
                    <p>모바일에서 좌우로 스와이프하거나 데스크탑에서 마우스로 드래그해보세요!</p>
                    <ul style={{ lineHeight: '1.6' }}>
                        <li><strong>좌우 스와이프</strong>: 이전/다음 슬라이드</li>
                        <li><strong>빠른 스와이프</strong>: 속도 기반 슬라이드 변경</li>
                        <li><strong>수직 스크롤</strong>: 방지되어 페이지 스크롤에 영향 없음</li>
                    </ul>
                </div>

                <Carousel
                    items={sampleItems}
                    enableTouch={true}
                    swipeSensitivity={30}
                    onItemClick={(item, index) => console.log('클릭된 아이템:', item, index)}
                    onSlideChange={(index) => console.log('슬라이드 변경:', index)}
                />
            </div>
        );
    },
};
