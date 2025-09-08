import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Masonry } from './Masonry';

const meta: Meta<typeof Masonry> = {
    title: 'Components/Masonry',
    component: Masonry,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        columns: {
            control: { type: 'select' },
            options: [1, 2, 3, 4, 5, 6],
        },
        spacing: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        ratio: {
            control: { type: 'select' },
            options: ['16:9', '4:3', '1:1', '3:4', '9:16', 'auto'],
        },
        fit: {
            control: { type: 'select' },
            options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
        },
        animation: {
            control: { type: 'select' },
            options: ['fade', 'slide', 'zoom', 'none'],
        },
        onImageClick: { action: 'image clicked' },
        onImageLoad: { action: 'image loaded' },
        onImageError: { action: 'image error' },
        onLoadMore: { action: 'load more' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 이미지 데이터 (다양한 높이를 가진 이미지들)
const sampleImages = [
    {
        id: '1',
        src: 'https://picsum.photos/400/600?random=1',
        alt: '세로 이미지 1',
        title: '세로 풍경',
        description: '세로로 긴 자연 풍경 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/300?random=1',
        width: 400,
        height: 600,
        metadata: {
            width: 400,
            height: 600,
            size: '3.2MB',
            date: '2024-01-15',
            tags: ['풍경', '자연', '세로'],
        },
    },
    {
        id: '2',
        src: 'https://picsum.photos/400/300?random=2',
        alt: '가로 이미지 1',
        title: '가로 풍경',
        description: '가로로 긴 도시 풍경 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/150?random=2',
        width: 400,
        height: 300,
        metadata: {
            width: 400,
            height: 300,
            size: '2.1MB',
            date: '2024-01-16',
            tags: ['도시', '풍경', '가로'],
        },
    },
    {
        id: '3',
        src: 'https://picsum.photos/400/500?random=3',
        alt: '중간 세로 이미지',
        title: '중간 세로 풍경',
        description: '중간 높이의 자연 풍경 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/250?random=3',
        width: 400,
        height: 500,
        metadata: {
            width: 400,
            height: 500,
            size: '2.8MB',
            date: '2024-01-17',
            tags: ['자연', '풍경', '중간'],
        },
    },
    {
        id: '4',
        src: 'https://picsum.photos/400/400?random=4',
        alt: '정사각형 이미지',
        title: '정사각형 풍경',
        description: '정사각형 형태의 자연 풍경 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/200?random=4',
        width: 400,
        height: 400,
        metadata: {
            width: 400,
            height: 400,
            size: '2.5MB',
            date: '2024-01-18',
            tags: ['자연', '풍경', '정사각형'],
        },
    },
    {
        id: '5',
        src: 'https://picsum.photos/400/700?random=5',
        alt: '긴 세로 이미지',
        title: '긴 세로 풍경',
        description: '매우 긴 세로 형태의 자연 풍경 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/350?random=5',
        width: 400,
        height: 700,
        metadata: {
            width: 400,
            height: 700,
            size: '3.8MB',
            date: '2024-01-19',
            tags: ['자연', '풍경', '긴 세로'],
        },
    },
    {
        id: '6',
        src: 'https://picsum.photos/400/250?random=6',
        alt: '짧은 가로 이미지',
        title: '짧은 가로 풍경',
        description: '짧은 가로 형태의 자연 풍경 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/125?random=6',
        width: 400,
        height: 250,
        metadata: {
            width: 400,
            height: 250,
            size: '1.9MB',
            date: '2024-01-20',
            tags: ['자연', '풍경', '짧은 가로'],
        },
    },
    {
        id: '7',
        src: 'https://picsum.photos/400/450?random=7',
        alt: '중간 세로 이미지 2',
        title: '중간 세로 풍경 2',
        description: '또 다른 중간 높이의 자연 풍경 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/225?random=7',
        width: 400,
        height: 450,
        metadata: {
            width: 400,
            height: 450,
            size: '2.6MB',
            date: '2024-01-21',
            tags: ['자연', '풍경', '중간'],
        },
    },
    {
        id: '8',
        src: 'https://picsum.photos/400/350?random=8',
        alt: '중간 가로 이미지',
        title: '중간 가로 풍경',
        description: '중간 길이의 가로 형태 자연 풍경 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/175?random=8',
        width: 400,
        height: 350,
        metadata: {
            width: 400,
            height: 350,
            size: '2.3MB',
            date: '2024-01-22',
            tags: ['자연', '풍경', '중간 가로'],
        },
    },
];

export const Default: Story = {
    args: {
        images: sampleImages,
        columns: 3,
        spacing: 'md',
        ratio: 'auto',
        fit: 'cover',
        rounded: false,
        shadow: false,
        hover: true,
        clickable: true,
        lightbox: true,
        animation: 'fade',
        animationDelay: 100,
        loading: 'lazy',
        responsive: true,
        infiniteScroll: false,
        infiniteScrollThreshold: 100,
    },
};

export const TwoColumns: Story = {
    args: {
        ...Default.args,
        columns: 2,
        spacing: 'lg',
    },
};

export const FourColumns: Story = {
    args: {
        ...Default.args,
        columns: 4,
        spacing: 'sm',
    },
};

export const SixColumns: Story = {
    args: {
        ...Default.args,
        columns: 6,
        spacing: 'xs',
    },
};

export const WithRoundedCorners: Story = {
    args: {
        ...Default.args,
        rounded: true,
        shadow: true,
    },
};

export const WithoutLightbox: Story = {
    args: {
        ...Default.args,
        lightbox: false,
    },
};

export const WithoutHover: Story = {
    args: {
        ...Default.args,
        hover: false,
    },
};

export const FadeAnimation: Story = {
    args: {
        ...Default.args,
        animation: 'fade',
        animationDelay: 150,
    },
};

export const SlideAnimation: Story = {
    args: {
        ...Default.args,
        animation: 'slide',
        animationDelay: 100,
    },
};

export const ZoomAnimation: Story = {
    args: {
        ...Default.args,
        animation: 'zoom',
        animationDelay: 200,
    },
};

export const NoAnimation: Story = {
    args: {
        ...Default.args,
        animation: 'none',
    },
};

export const CustomRatio: Story = {
    args: {
        ...Default.args,
        ratio: '16:9',
        columns: 3,
    },
};

export const CoverFit: Story = {
    args: {
        ...Default.args,
        fit: 'cover',
        ratio: '4:3',
    },
};

export const ContainFit: Story = {
    args: {
        ...Default.args,
        fit: 'contain',
        ratio: '4:3',
    },
};

export const ResponsiveMasonry: Story = {
    args: {
        ...Default.args,
        responsive: true,
        columns: 3,
        spacing: 'md',
    },
};

export const LoadingEager: Story = {
    args: {
        ...Default.args,
        loading: 'eager',
    },
};

export const WithInfiniteScroll: Story = {
    args: {
        ...Default.args,
        infiniteScroll: true,
        infiniteScrollThreshold: 200,
    },
};

export const WithCustomStyling: Story = {
    args: {
        ...Default.args,
        className: 'custom-masonry',
        style: {
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
        },
    },
};

export const SingleColumn: Story = {
    args: {
        ...Default.args,
        columns: 1,
        spacing: 'lg',
    },
};

export const DenseSpacing: Story = {
    args: {
        ...Default.args,
        spacing: 'xs',
        columns: 4,
    },
};

export const LooseSpacing: Story = {
    args: {
        ...Default.args,
        spacing: 'xl',
        columns: 2,
    },
};
