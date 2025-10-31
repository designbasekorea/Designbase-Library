import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';
import Rating from './Rating';

const meta: Meta<typeof Rating> = {
    title: 'Components/Rating',
    component: Rating,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: '별점, 평점, 리뷰 수 등을 표시하는 Rating 컴포넌트입니다. 다양한 크기, 스타일, 타입을 지원하며 클릭 가능한 인터랙티브 기능도 제공합니다.',
            },
        },
    },
    argTypes: {
        value: {
            control: { type: 'number', min: 0, max: 5, step: 0.1 },
            description: '평점 값 (0-5 또는 0-100)',
        },
        maxValue: {
            control: { type: 'number', min: 1, max: 10, step: 1 },
            description: '최대 평점',
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Rating 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'minimal', 'card', 'inline', 'large'],
            description: 'Rating 스타일 변형',
        },
        type: {
            control: { type: 'select' },
            options: ['star', 'number', 'percentage', 'text'],
            description: 'Rating 타입',
        },
        display: {
            control: { type: 'select' },
            options: ['stars', 'number', 'both', 'reviews', 'detailed'],
            description: '표시 방식',
        },
        reviewCount: {
            control: { type: 'number', min: 0, max: 10000, step: 1 },
            description: '리뷰 수',
        },
        ratingText: {
            control: { type: 'text' },
            description: '평점 텍스트',
        },
        reviewText: {
            control: { type: 'text' },
            description: '리뷰 텍스트',
        },
        allowHalf: {
            control: { type: 'boolean' },
            description: '반올림 허용',
        },
        readonly: {
            control: { type: 'boolean' },
            description: '읽기 전용',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화',
        },
        clickable: {
            control: { type: 'boolean' },
            description: '클릭 가능',
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'custom'],
            description: '색상',
        },
        customColor: {
            control: { type: 'color' },
            description: '커스텀 색상',
        },
        animated: {
            control: { type: 'boolean' },
            description: '애니메이션',
        },
        hoverEffect: {
            control: { type: 'boolean' },
            description: '호버 효과',
        },
        onChange: {
            action: 'onChange',
            description: '평점 변경 핸들러',
        },
        onHover: {
            action: 'onHover',
            description: '호버 핸들러',
        },
        onClick: {
            action: 'onClick',
            description: '클릭 핸들러',
        },
    },
    args: {
        value: 4.5,
        maxValue: 5,
        size: 'm',
        variant: 'default',
        type: 'star',
        display: 'stars',
        reviewCount: 128,
        allowHalf: false,
        readonly: false,
        disabled: false,
        clickable: false,
        color: 'primary',
        animated: false,
        hoverEffect: true,
        onChange: fn(),
        onHover: fn(),
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
    args: {
        value: 4.5,
    },
};

// 다양한 크기
export const DifferentSizes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Extra Small</h3>
                    <Rating value={4.5} size="xs" />
                </div>
                <div>
                    <h3>Small</h3>
                    <Rating value={4.5} size="s" />
                </div>
                <div>
                    <h3>Medium</h3>
                    <Rating value={4.5} size="m" />
                </div>
                <div>
                    <h3>Large</h3>
                    <Rating value={4.5} size="l" />
                </div>
                <div>
                    <h3>Extra Large</h3>
                    <Rating value={4.5} size="xl" />
                </div>
            </div>
        );
    },
};

// 다양한 변형
export const DifferentVariants: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Default</h3>
                    <Rating value={4.5} variant="default" />
                </div>
                <div>
                    <h3>Minimal</h3>
                    <Rating value={4.5} variant="minimal" />
                </div>
                <div>
                    <h3>Card</h3>
                    <Rating value={4.5} variant="card" />
                </div>
                <div>
                    <h3>Inline</h3>
                    <Rating value={4.5} variant="inline" />
                </div>
                <div>
                    <h3>Large</h3>
                    <Rating value={4.5} variant="large" />
                </div>
            </div>
        );
    },
};

// 다양한 표시 방식
export const DifferentDisplays: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Stars Only</h3>
                    <Rating value={4.5} display="stars" />
                </div>
                <div>
                    <h3>Number Only</h3>
                    <Rating value={4.5} display="number" />
                </div>
                <div>
                    <h3>Both Stars and Number</h3>
                    <Rating value={4.5} display="both" />
                </div>
                <div>
                    <h3>Reviews Only</h3>
                    <Rating value={4.5} reviewCount={128} display="reviews" />
                </div>
                <div>
                    <h3>Detailed</h3>
                    <Rating value={4.5} reviewCount={128} display="detailed" />
                </div>
            </div>
        );
    },
};

// 반별 평점
export const HalfStars: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Half Stars Enabled</h3>
                    <Rating value={3.5} allowHalf={true} />
                </div>
                <div>
                    <h3>Half Stars Disabled</h3>
                    <Rating value={3.5} allowHalf={false} />
                </div>
                <div>
                    <h3>Various Half Star Values</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Rating value={0.5} allowHalf={true} />
                        <Rating value={1.5} allowHalf={true} />
                        <Rating value={2.5} allowHalf={true} />
                        <Rating value={3.5} allowHalf={true} />
                        <Rating value={4.5} allowHalf={true} />
                    </div>
                </div>
            </div>
        );
    },
};

// 다양한 색상
export const DifferentColors: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Primary</h3>
                    <Rating value={4.5} color="primary" />
                </div>
                <div>
                    <h3>Secondary</h3>
                    <Rating value={4.5} color="secondary" />
                </div>
                <div>
                    <h3>Success</h3>
                    <Rating value={4.5} color="success" />
                </div>
                <div>
                    <h3>Warning</h3>
                    <Rating value={4.5} color="warning" />
                </div>
                <div>
                    <h3>Error</h3>
                    <Rating value={4.5} color="error" />
                </div>
                <div>
                    <h3>Custom Color</h3>
                    <Rating value={4.5} color="custom" customColor="#8b5cf6" />
                </div>
            </div>
        );
    },
};

// 인터랙티브 Rating
export const Interactive: Story = {
    render: () => {
        const [rating, setRating] = useState(3.5);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Clickable Rating</h3>
                    <Rating
                        value={rating}
                        clickable={true}
                        allowHalf={true}
                        onChange={setRating}
                        onHover={(value) => console.log('Hover:', value)}
                        onClick={(value) => console.log('Click:', value)}
                    />
                    <p>현재 평점: {rating}</p>
                </div>
                <div>
                    <h3>Readonly Rating</h3>
                    <Rating value={4.2} readonly={true} />
                </div>
                <div>
                    <h3>Disabled Rating</h3>
                    <Rating value={3.8} disabled={true} />
                </div>
            </div>
        );
    },
};

// 다양한 평점 값
export const DifferentValues: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Perfect Score</h3>
                    <Rating value={5.0} />
                </div>
                <div>
                    <h3>High Rating</h3>
                    <Rating value={4.5} />
                </div>
                <div>
                    <h3>Good Rating</h3>
                    <Rating value={4.0} />
                </div>
                <div>
                    <h3>Average Rating</h3>
                    <Rating value={3.0} />
                </div>
                <div>
                    <h3>Low Rating</h3>
                    <Rating value={2.0} />
                </div>
                <div>
                    <h3>Poor Rating</h3>
                    <Rating value={1.0} />
                </div>
                <div>
                    <h3>No Rating</h3>
                    <Rating value={0.0} />
                </div>
            </div>
        );
    },
};

// 리뷰 수가 있는 Rating
export const WithReviewCount: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Many Reviews</h3>
                    <Rating value={4.5} reviewCount={1234} display="detailed" />
                </div>
                <div>
                    <h3>Some Reviews</h3>
                    <Rating value={4.2} reviewCount={128} display="detailed" />
                </div>
                <div>
                    <h3>Few Reviews</h3>
                    <Rating value={3.8} reviewCount={12} display="detailed" />
                </div>
                <div>
                    <h3>One Review</h3>
                    <Rating value={4.0} reviewCount={1} display="detailed" />
                </div>
                <div>
                    <h3>No Reviews</h3>
                    <Rating value={4.5} reviewCount={0} display="detailed" />
                </div>
            </div>
        );
    },
};

// 커스텀 텍스트
export const CustomText: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Custom Rating Text</h3>
                    <Rating value={4.5} ratingText="매우 좋음" display="detailed" />
                </div>
                <div>
                    <h3>Custom Review Text</h3>
                    <Rating value={4.2} reviewText="명이 평가함" display="detailed" />
                </div>
                <div>
                    <h3>Both Custom Texts</h3>
                    <Rating
                        value={3.8}
                        ratingText="보통"
                        reviewText="명이 구매함"
                        display="detailed"
                    />
                </div>
            </div>
        );
    },
};

// 애니메이션 효과
export const Animated: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Animated Rating</h3>
                    <Rating value={4.5} animated={true} />
                </div>
                <div>
                    <h3>Hover Effect</h3>
                    <Rating value={4.2} hoverEffect={true} />
                </div>
                <div>
                    <h3>Both Effects</h3>
                    <Rating value={3.8} animated={true} hoverEffect={true} />
                </div>
            </div>
        );
    },
};

// 다양한 타입
export const DifferentTypes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Star Type (Default)</h3>
                    <Rating value={4.5} type="star" display="both" />
                </div>
                <div>
                    <h3>Number Type</h3>
                    <Rating value={4.5} type="number" display="number" />
                </div>
                <div>
                    <h3>Percentage Type</h3>
                    <Rating value={90} maxValue={100} type="percentage" display="number" />
                </div>
                <div>
                    <h3>Text Type</h3>
                    <Rating value={4.5} type="text" display="number" />
                </div>
            </div>
        );
    },
};

// 카드 스타일 예제
export const CardStyle: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Product Rating Card</h3>
                    <Rating
                        value={4.5}
                        variant="card"
                        display="detailed"
                        reviewCount={128}
                        size="l"
                    />
                </div>
                <div>
                    <h3>Service Rating Card</h3>
                    <Rating
                        value={4.8}
                        variant="card"
                        display="detailed"
                        reviewCount={256}
                        color="success"
                        size="l"
                    />
                </div>
            </div>
        );
    },
};

// 큰 스타일 예제
export const LargeStyle: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Hero Rating</h3>
                    <Rating
                        value={4.7}
                        variant="large"
                        display="detailed"
                        reviewCount={512}
                        size="xl"
                        color="warning"
                    />
                </div>
                <div>
                    <h3>Featured Rating</h3>
                    <Rating
                        value={4.9}
                        variant="large"
                        display="detailed"
                        reviewCount={1024}
                        size="xl"
                        color="success"
                    />
                </div>
            </div>
        );
    },
};

// 인라인 스타일 예제
export const InlineStyle: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Inline in Text</h3>
                    <p>
                        이 제품은 <Rating value={4.5} variant="inline" size="s" />
                        평점을 받았습니다.
                    </p>
                </div>
                <div>
                    <h3>Inline with Reviews</h3>
                    <p>
                        사용자 평점: <Rating value={4.2} variant="inline" size="s" display="both" />
                        (<Rating value={4.2} variant="inline" size="s" display="reviews" reviewCount={128} />)
                    </p>
                </div>
            </div>
        );
    },
};

// 미니멀 스타일 예제
export const MinimalStyle: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Minimal Rating</h3>
                    <Rating value={4.5} variant="minimal" />
                </div>
                <div>
                    <h3>Minimal with Number</h3>
                    <Rating value={4.2} variant="minimal" display="both" />
                </div>
                <div>
                    <h3>Minimal Small</h3>
                    <Rating value={3.8} variant="minimal" size="s" />
                </div>
            </div>
        );
    },
};
