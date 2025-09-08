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
                component: '이미지 클릭 시 확대되는 모달 기반의 Lightbox 컴포넌트입니다. 줌, 회전, 다운로드, 전체화면 등의 기능을 제공합니다.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
            description: 'Lightbox 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'minimal', 'fullscreen'],
            description: 'Lightbox 스타일 변형',
        },
        theme: {
            control: { type: 'select' },
            options: ['light', 'dark'],
            description: '테마',
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
        readonly: {
            control: { type: 'boolean' },
            description: '읽기 전용',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화',
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
        size: 'lg',
        variant: 'default',
        theme: 'light',
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
        readonly: false,
        disabled: false,
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
export const DifferentSizes: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');

        return (
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setSize('sm')}>Small</button>
                    <button onClick={() => setSize('md')}>Medium</button>
                    <button onClick={() => setSize('lg')}>Large</button>
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

// 다양한 변형
export const DifferentVariants: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [variant, setVariant] = useState<'default' | 'minimal' | 'fullscreen'>('default');

        return (
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setVariant('default')}>Default</button>
                    <button onClick={() => setVariant('minimal')}>Minimal</button>
                    <button onClick={() => setVariant('fullscreen')}>Fullscreen</button>
                    <button onClick={() => setIsOpen(true)}>Lightbox 열기</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {sampleImages.slice(0, 3).map((image) => (
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
                    variant={variant}
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                />
            </div>
        );
    },
};

// 기능별 설정
export const FeatureConfiguration: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [config, setConfig] = useState({
            enableZoom: true,
            enableRotate: true,
            enableDownload: true,
            enableFullscreen: true,
            showThumbnails: true,
            showToolbar: true,
        });

        return (
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableZoom}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableZoom: e.target.checked }))}
                        />
                        줌 기능
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableRotate}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableRotate: e.target.checked }))}
                        />
                        회전 기능
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableDownload}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableDownload: e.target.checked }))}
                        />
                        다운로드 기능
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.enableFullscreen}
                            onChange={(e) => setConfig(prev => ({ ...prev, enableFullscreen: e.target.checked }))}
                        />
                        전체화면 기능
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.showThumbnails}
                            onChange={(e) => setConfig(prev => ({ ...prev, showThumbnails: e.target.checked }))}
                        />
                        썸네일 표시
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={config.showToolbar}
                            onChange={(e) => setConfig(prev => ({ ...prev, showToolbar: e.target.checked }))}
                        />
                        툴바 표시
                    </label>
                    <button onClick={() => setIsOpen(true)}>Lightbox 열기</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {sampleImages.slice(0, 3).map((image) => (
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
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    {...config}
                />
            </div>
        );
    },
};

// 다크 테마
export const DarkTheme: Story = {
    args: {
        images: sampleImages,
        isOpen: true,
        theme: 'dark',
    },
};

// 미니멀 스타일
export const MinimalStyle: Story = {
    args: {
        images: sampleImages,
        isOpen: true,
        variant: 'minimal',
        showToolbar: false,
        showThumbnails: false,
    },
};

// 전체화면 모드
export const FullscreenMode: Story = {
    args: {
        images: sampleImages,
        isOpen: true,
        variant: 'fullscreen',
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

// 읽기 전용
export const Readonly: Story = {
    args: {
        images: sampleImages,
        isOpen: true,
        readonly: true,
    },
};

// 비활성화
export const Disabled: Story = {
    args: {
        images: sampleImages,
        isOpen: true,
        disabled: true,
    },
};

// 인터랙티브 예제
export const Interactive: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [currentIndex, setCurrentIndex] = useState(0);

        return (
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button onClick={() => setIsOpen(true)}>Lightbox 열기</button>
                    <button onClick={() => setCurrentIndex(0)}>첫 번째 이미지</button>
                    <button onClick={() => setCurrentIndex(2)}>세 번째 이미지</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {sampleImages.map((image, index) => (
                        <div
                            key={image.id}
                            style={{
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.2s ease',
                            }}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsOpen(true);
                            }}
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
                    currentIndex={currentIndex}
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    onImageChange={setCurrentIndex}
                />
            </div>
        );
    },
};

// 키보드 단축키 안내
export const KeyboardShortcuts: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3>키보드 단축키</h3>
                    <ul style={{ lineHeight: '1.6' }}>
                        <li><strong>ESC</strong>: Lightbox 닫기</li>
                        <li><strong>← →</strong>: 이전/다음 이미지</li>
                        <li><strong>+ / -</strong>: 줌 인/아웃</li>
                        <li><strong>0</strong>: 줌 리셋</li>
                        <li><strong>R</strong>: 이미지 회전</li>
                        <li><strong>F</strong>: 전체화면 토글</li>
                        <li><strong>D</strong>: 이미지 다운로드</li>
                    </ul>
                </div>

                <button onClick={() => setIsOpen(true)}>Lightbox 열기 (키보드 단축키 테스트)</button>

                <Lightbox
                    images={sampleImages}
                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                />
            </div>
        );
    },
};
