import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ImageList } from './ImageList';

const meta: Meta<typeof ImageList> = {
    title: 'Components/ImageList',
    component: ImageList,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        layout: {
            control: { type: 'select' },
            options: ['grid', 'list', 'gallery', 'carousel'],
        },
        columns: {
            control: { type: 'select' },
            options: [1, 2, 3, 4, 5, 6],
        },
        spacing: {
            control: { type: 'select' },
            options: ['xs', 's', 'm', 'l', 'xl'],
        },
        ratio: {
            control: { type: 'select' },
            options: ['16:9', '4:3', '1:1', '3:4', '9:16', 'auto'],
        },
        fit: {
            control: { type: 'select' },
            options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
        },
        onImageClick: { action: 'image clicked' },
        onImageLoad: { action: 'image loaded' },
        onImageError: { action: 'image error' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 이미지 데이터
const sampleImages = [
    {
        id: '1',
        src: 'https://picsum.photos/400/300?random=1',
        alt: '랜덤 이미지 1',
        title: '아름다운 풍경',
        description: '자연의 아름다움을 담은 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/150?random=1',
        metadata: {
            width: 400,
            height: 300,
            size: '2.3MB',
            date: '2024-01-15',
            tags: ['풍경', '자연', '아름다움'],
        },
    },
    {
        id: '2',
        src: 'https://picsum.photos/400/300?random=2',
        alt: '랜덤 이미지 2',
        title: '도시의 밤',
        description: '도시의 밤을 담은 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/150?random=2',
        metadata: {
            width: 400,
            height: 300,
            size: '1.8MB',
            date: '2024-01-16',
            tags: ['도시', '밤', '네온'],
        },
    },
    {
        id: '3',
        src: 'https://picsum.photos/400/300?random=3',
        alt: '랜덤 이미지 3',
        title: '꽃의 향기',
        description: '아름다운 꽃을 담은 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/150?random=3',
        metadata: {
            width: 400,
            height: 300,
            size: '2.1MB',
            date: '2024-01-17',
            tags: ['꽃', '자연', '향기'],
        },
    },
    {
        id: '4',
        src: 'https://picsum.photos/400/300?random=4',
        alt: '랜덤 이미지 4',
        title: '바다의 파도',
        description: '바다의 파도를 담은 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/150?random=4',
        metadata: {
            width: 400,
            height: 300,
            size: '2.5MB',
            date: '2024-01-18',
            tags: ['바다', '파도', '자연'],
        },
    },
    {
        id: '5',
        src: 'https://picsum.photos/400/300?random=5',
        alt: '랜덤 이미지 5',
        title: '산의 정상',
        description: '산의 정상을 담은 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/150?random=5',
        metadata: {
            width: 400,
            height: 300,
            size: '2.0MB',
            date: '2024-01-19',
            tags: ['산', '정상', '자연'],
        },
    },
    {
        id: '6',
        src: 'https://picsum.photos/400/300?random=6',
        alt: '랜덤 이미지 6',
        title: '숲의 신비',
        description: '숲의 신비를 담은 이미지입니다.',
        thumbnail: 'https://picsum.photos/200/150?random=6',
        metadata: {
            width: 400,
            height: 300,
            size: '1.9MB',
            date: '2024-01-20',
            tags: ['숲', '신비', '자연'],
        },
    },
];

export const Default: Story = {
    args: {
        images: sampleImages,
        layout: 'grid',
        columns: 3,
        spacing: 'm',
        ratio: '16:9',
        fit: 'cover',
        rounded: false,
        shadow: false,
        hover: true,
        clickable: true,
        lightbox: true,
        loading: 'lazy',
        responsive: true,
    },
};

export const AllLayouts: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3>Grid</h3>
                <ImageList images={sampleImages.slice(0, 6)} layout="grid" columns={3} spacing="m" />
            </div>
            <div>
                <h3>List</h3>
                <ImageList images={sampleImages.slice(0, 3)} layout="list" spacing="m" />
            </div>
            <div>
                <h3>Gallery</h3>
                <ImageList images={sampleImages.slice(0, 4)} layout="gallery" spacing="s" />
            </div>
            <div>
                <h3>Carousel</h3>
                <ImageList images={sampleImages.slice(0, 6)} layout="carousel" spacing="m" />
            </div>
        </div>
    ),
};

export const WithRoundedCorners: Story = {
    args: {
        ...Default.args,
        rounded: true,
        shadow: true,
    },
};
