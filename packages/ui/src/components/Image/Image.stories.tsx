import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Image from './Image';

const meta: Meta<typeof Image> = {
    title: 'Components/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        ratio: {
            control: { type: 'select' },
            options: ['1:1', '16:9', '4:3', '3:2', '3:4', '2:1', 'auto'],
        },
        fit: {
            control: { type: 'select' },
            options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
        },
        loading: {
            control: { type: 'select' },
            options: ['lazy', 'eager'],
        },
        placeholder: {
            control: { type: 'select' },
            options: ['skeleton', 'blur', 'none'],
        },
        rounded: {
            control: { type: 'select' },
            options: [true, false, 'sm', 'md', 'lg', 'full'],
        },
        shadow: {
            control: { type: 'select' },
            options: [true, false, 'sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 이미지 URL들 (Unsplash)
const sampleImages = {
    landscape: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center',
    square: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=center',
    wide: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop&crop=center',
    invalid: 'https://invalid-url-that-will-fail.com/image.jpg',
};

export const Default: Story = {
    args: {
        src: sampleImages.landscape,
        alt: '풍경 이미지',
        width: 300,
        height: 200,
        loading: 'lazy',
    },
};

export const AllAspectRatios: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '800px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>1:1 (Square)</h3>
                <Image
                    src={sampleImages.square}
                    alt="정사각형 이미지"
                    ratio="1:1"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>16:9 (Landscape)</h3>
                <Image
                    src={sampleImages.landscape}
                    alt="가로형 이미지"
                    ratio="16:9"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>4:3 (Classic)</h3>
                <Image
                    src={sampleImages.landscape}
                    alt="클래식 비율 이미지"
                    ratio="4:3"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>3:2 (Photo)</h3>
                <Image
                    src={sampleImages.landscape}
                    alt="사진 비율 이미지"
                    ratio="3:2"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>3:4 (Portrait)</h3>
                <Image
                    src={sampleImages.portrait}
                    alt="세로형 이미지"
                    ratio="3:4"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>2:1 (Wide)</h3>
                <Image
                    src={sampleImages.wide}
                    alt="와이드 이미지"
                    ratio="2:1"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Auto</h3>
                <Image
                    src={sampleImages.portrait}
                    alt="자동 비율 이미지"
                    ratio="auto"
                    width={200}
                    loading="lazy"
                />
            </div>
        </div>
    ),
};

export const ObjectFitOptions: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '800px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Cover</h3>
                <Image
                    src={sampleImages.portrait}
                    alt="Cover fit 이미지"
                    ratio="1:1"
                    fit="cover"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Contain</h3>
                <Image
                    src={sampleImages.portrait}
                    alt="Contain fit 이미지"
                    ratio="1:1"
                    fit="contain"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Fill</h3>
                <Image
                    src={sampleImages.portrait}
                    alt="Fill fit 이미지"
                    ratio="1:1"
                    fit="fill"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>None</h3>
                <Image
                    src={sampleImages.portrait}
                    alt="None fit 이미지"
                    ratio="1:1"
                    fit="none"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Scale Down</h3>
                <Image
                    src={sampleImages.portrait}
                    alt="Scale down fit 이미지"
                    ratio="1:1"
                    fit="scale-down"
                    width={200}
                    loading="lazy"
                />
            </div>
        </div>
    ),
};

export const Placeholders: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Skeleton</h3>
                <Image
                    src={sampleImages.landscape}
                    alt="스켈레톤 플레이스홀더"
                    ratio="16:9"
                    placeholder="skeleton"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Blur</h3>
                <Image
                    src={sampleImages.landscape}
                    alt="블러 플레이스홀더"
                    ratio="16:9"
                    placeholder="blur"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>None</h3>
                <Image
                    src={sampleImages.landscape}
                    alt="플레이스홀더 없음"
                    ratio="16:9"
                    placeholder="none"
                    width={200}
                    loading="lazy"
                />
            </div>
        </div>
    ),
};

export const RoundedCorners: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Small</h3>
                <Image
                    src={sampleImages.square}
                    alt="작은 둥근 모서리"
                    ratio="1:1"
                    rounded="s"
                    width={150}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Medium</h3>
                <Image
                    src={sampleImages.square}
                    alt="중간 둥근 모서리"
                    ratio="1:1"
                    rounded="m"
                    width={150}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Large</h3>
                <Image
                    src={sampleImages.square}
                    alt="큰 둥근 모서리"
                    ratio="1:1"
                    rounded="l"
                    width={150}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Full</h3>
                <Image
                    src={sampleImages.square}
                    alt="완전 둥근 모서리"
                    ratio="1:1"
                    rounded="full"
                    width={150}
                    loading="lazy"
                />
            </div>
        </div>
    ),
};

export const Shadows: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Small Shadow</h3>
                <Image
                    src={sampleImages.square}
                    alt="작은 그림자"
                    ratio="1:1"
                    shadow="s"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Medium Shadow</h3>
                <Image
                    src={sampleImages.square}
                    alt="중간 그림자"
                    ratio="1:1"
                    shadow="m"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Large Shadow</h3>
                <Image
                    src={sampleImages.square}
                    alt="큰 그림자"
                    ratio="1:1"
                    shadow="l"
                    width={200}
                    loading="lazy"
                />
            </div>
        </div>
    ),
};

export const HoverEffects: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Hover Effect</h3>
                <Image
                    src={sampleImages.square}
                    alt="호버 효과 이미지"
                    ratio="1:1"
                    hover={true}
                    shadow="m"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Clickable</h3>
                <Image
                    src={sampleImages.square}
                    alt="클릭 가능한 이미지"
                    ratio="1:1"
                    hover={true}
                    shadow="m"
                    onClick={fn()}
                    width={200}
                    loading="lazy"
                />
            </div>
        </div>
    ),
};

export const ErrorHandling: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>Error State</h3>
                <Image
                    src={sampleImages.invalid}
                    alt="에러 상태 이미지"
                    ratio="16:9"
                    width={200}
                    loading="lazy"
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0' }}>With Fallback</h3>
                <Image
                    src={sampleImages.invalid}
                    alt="대체 이미지가 있는 에러"
                    ratio="16:9"
                    fallbackSrc={sampleImages.landscape}
                    width={200}
                    loading="lazy"
                />
            </div>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '800px' }}>
            <Image
                src={sampleImages.wide}
                alt="전체 너비 이미지"
                ratio="2:1"
                fullWidth={true}
                shadow="m"
                loading="lazy"
            />
        </div>
    ),
};

export const Responsive: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', maxWidth: '600px' }}>
            <Image
                src={sampleImages.square}
                alt="반응형 이미지 1"
                ratio="1:1"
                rounded="m"
                shadow="s"
                loading="lazy"
            />
            <Image
                src={sampleImages.landscape}
                alt="반응형 이미지 2"
                ratio="16:9"
                rounded="m"
                shadow="s"
                loading="lazy"
            />
            <Image
                src={sampleImages.portrait}
                alt="반응형 이미지 3"
                ratio="3:4"
                rounded="m"
                shadow="s"
                loading="lazy"
            />
        </div>
    ),
};


