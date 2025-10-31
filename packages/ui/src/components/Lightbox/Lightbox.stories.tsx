import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';
import Lightbox, { LightboxImage } from './Lightbox';

const meta: Meta<typeof Lightbox> = {
    title: 'Components/Lightbox',
    component: Lightbox,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: '이미지 클릭 시 확대되는 모달 기반의 Lightbox 컴포넌트입니다. 줌, 회전, 다운로드, 전체화면, 스와이프 네비게이션 등의 기능을 제공합니다.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l', 'xl'],
            description: 'Lightbox 크기',
        },
        isOpen: {
            control: { type: 'boolean' },
            description: '열림 상태',
        },
        currentIndex: {
            control: { type: 'number', min: 0 },
            description: '현재 활성 이미지 인덱스',
        },
        enableZoom: {
            control: { type: 'boolean' },
            description: '줌 기능 활성화',
        },
        enableRotate: {
            control: { type: 'boolean' },
            description: '회전 기능 활성화',
        },
        enableDownload: {
            control: { type: 'boolean' },
            description: '다운로드 기능 활성화',
        },
        enableFullscreen: {
            control: { type: 'boolean' },
            description: '전체화면 기능 활성화',
        },
        enableKeyboard: {
            control: { type: 'boolean' },
            description: '키보드 네비게이션 활성화',
        },
        enableWheelZoom: {
            control: { type: 'boolean' },
            description: '마우스 휠 줌 활성화',
        },
        showThumbnails: {
            control: { type: 'boolean' },
            description: '썸네일 표시',
        },
        showCounter: {
            control: { type: 'boolean' },
            description: '카운터 표시',
        },
        showCloseButton: {
            control: { type: 'boolean' },
            description: '닫기 버튼 표시',
        },
        showNavigationButtons: {
            control: { type: 'boolean' },
            description: '네비게이션 버튼 표시',
        },
        showToolbar: {
            control: { type: 'boolean' },
            description: '툴바 표시',
        },
        closeOnBackdropClick: {
            control: { type: 'boolean' },
            description: '배경 클릭 시 닫기',
        },
        closeOnEscape: {
            control: { type: 'boolean' },
            description: 'ESC 키로 닫기',
        },
        onOpenChange: {
            action: 'onOpenChange',
            description: '열림 상태 변경 핸들러',
        },
        onImageChange: {
            action: 'onImageChange',
            description: '이미지 변경 핸들러',
        },
    },
    args: {
        size: 'l',
        isOpen: false,
        currentIndex: 0,
        enableZoom: true,
        enableRotate: true,
        enableDownload: true,
        enableFullscreen: true,
        enableKeyboard: true,
        enableWheelZoom: true,
        showThumbnails: true,
        showCounter: true,
        showCloseButton: true,
        showNavigationButtons: true,
        showToolbar: true,
        closeOnBackdropClick: true,
        closeOnEscape: true,
        onOpenChange: fn(),
        onImageChange: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 이미지 데이터
const sampleImages: LightboxImage[] = [
    {
        id: '1',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: '산 풍경',
        title: '아름다운 산 풍경',
        description: '푸른 하늘과 녹색 산들이 어우러진 아름다운 풍경입니다.',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop',
    },
    {
        id: '2',
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
        alt: '숲 풍경',
        title: '신비로운 숲',
        description: '햇살이 비치는 신비로운 숲의 모습입니다.',
        thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop',
    },
    {
        id: '3',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: '바다 풍경',
        title: '푸른 바다',
        description: '끝없이 펼쳐진 푸른 바다의 아름다운 모습입니다.',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop',
    },
    {
        id: '4',
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
        alt: '도시 풍경',
        title: '현대적인 도시',
        description: '현대적인 건물들이 들어선 도시의 야경입니다.',
        thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop',
    },
    {
        id: '5',
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        alt: '꽃 정원',
        title: '아름다운 꽃 정원',
        description: '다양한 색깔의 꽃들이 피어있는 아름다운 정원입니다.',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop',
    },
];

// 기본 스토리
export const Default: Story = {
    args: {
        images: sampleImages,
        isOpen: true,
    },
};

// 다양한 크기
export const AllSizes: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [size, setSize] = useState<'s' | 'm' | 'l' | 'xl'>('l');

        return (
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setSize('s')}>Small</button>
                    <button onClick={() => setSize('m')}>Medium</button>
                    <button onClick={() => setSize('l')}>Large</button>
                    <button onClick={() => setSize('xl')}>Extra Large</button>
                    <button onClick={() => setIsOpen(true)}>Lightbox 열기</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {sampleImages.slice(0, 4).map((image, index) => (
                        <div
                            key={image.id}
                            style={{
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                            }}
                            onClick={() => setIsOpen(true)}
                        >
                            <img
                                src={image.thumbnail || image.src}
                                alt={image.alt}
                                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '12px' }}>
                                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>{image.title}</h4>
                                <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    images={sampleImages}
                    size={size}
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    onImageChange={(index) => console.log('이미지 변경:', index)}
                />
            </div>
        );
    },
};

// 단일 이미지
export const SingleImage: Story = {
    args: {
        images: [sampleImages[0]],
        isOpen: true,
        showNavigationButtons: false,
        showThumbnails: false,
    },
};

// 스와이프 제스처 (기본 활성화)
export const SwipeGesture: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3>스와이프 제스처 (기본 활성화)</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '16px' }}>
                        모바일에서 이미지 영역을 좌우로 스와이프하여 이미지를 변경할 수 있습니다.
                    </p>
                    <ul style={{ lineHeight: '1.6' }}>
                        <li><strong>좌측 스와이프</strong>: 다음 이미지로 이동</li>
                        <li><strong>우측 스와이프</strong>: 이전 이미지로 이동</li>
                        <li><strong>최소 스와이프 거리</strong>: 50px 이상</li>
                    </ul>
                </div>

                <button onClick={() => setIsOpen(true)}>Lightbox 열기 (스와이프 테스트)</button>

                <Lightbox
                    images={sampleImages}
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                />
            </div>
        );
    },
};
