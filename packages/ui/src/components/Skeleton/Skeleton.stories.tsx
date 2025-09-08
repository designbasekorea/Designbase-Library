/**
 * Skeleton 컴포넌트 스토리
 * 
 * 목적: 스켈레톤 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: variant, size, animation, lines 조합 예제
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['text', 'circular', 'rectangular', 'rounded'],
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        animation: {
            control: { type: 'select' },
            options: ['pulse', 'wave', 'none'],
        },
        lines: {
            control: { type: 'number', min: 1, max: 10 },
        },
        width: {
            control: { type: 'text' },
        },
        height: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스켈레톤
export const Default: Story = {
    args: {
        variant: 'text',
        size: 'md',
        animation: 'pulse',
    },
};

// Variant별 스켈레톤
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Text</span>
                <Skeleton variant="text" width="200px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Circular</span>
                <Skeleton variant="circular" size="lg" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Rectangular</span>
                <Skeleton variant="rectangular" width="120px" height="80px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Rounded</span>
                <Skeleton variant="rounded" width="120px" height="80px" />
            </div>
        </div>
    ),
};

// 크기별 스켈레톤
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>Text Variant</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Skeleton variant="text" size="xs" width="100px" />
                    <Skeleton variant="text" size="sm" width="120px" />
                    <Skeleton variant="text" size="md" width="140px" />
                    <Skeleton variant="text" size="lg" width="160px" />
                    <Skeleton variant="text" size="xl" width="180px" />
                </div>
            </div>
            <div>
                <h3>Circular Variant</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Skeleton variant="circular" size="xs" />
                    <Skeleton variant="circular" size="sm" />
                    <Skeleton variant="circular" size="md" />
                    <Skeleton variant="circular" size="lg" />
                    <Skeleton variant="circular" size="xl" />
                </div>
            </div>
        </div>
    ),
};

// 애니메이션별 스켈레톤
export const Animations: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Pulse Animation</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Skeleton variant="text" animation="pulse" width="200px" />
                    <Skeleton variant="circular" animation="pulse" size="lg" />
                    <Skeleton variant="rounded" animation="pulse" width="120px" height="80px" />
                </div>
            </div>
            <div>
                <h3>Wave Animation</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Skeleton variant="text" animation="wave" width="200px" />
                    <Skeleton variant="circular" animation="wave" size="lg" />
                    <Skeleton variant="rounded" animation="wave" width="120px" height="80px" />
                </div>
            </div>
            <div>
                <h3>No Animation</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Skeleton variant="text" animation="none" width="200px" />
                    <Skeleton variant="circular" animation="none" size="lg" />
                    <Skeleton variant="rounded" animation="none" width="120px" height="80px" />
                </div>
            </div>
        </div>
    ),
};

// 텍스트 라인 스켈레톤
export const TextLines: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>단일 라인</h3>
                <Skeleton variant="text" width="300px" />
            </div>
            <div>
                <h3>2줄 텍스트</h3>
                <Skeleton variant="text" width="300px" lines={2} />
            </div>
            <div>
                <h3>3줄 텍스트</h3>
                <Skeleton variant="text" width="300px" lines={3} />
            </div>
            <div>
                <h3>4줄 텍스트 (마지막 줄 짧게)</h3>
                <Skeleton variant="text" width="300px" lines={4} lastLineWidth="60%" />
            </div>
            <div>
                <h3>5줄 텍스트 (줄 간격 조정)</h3>
                <Skeleton variant="text" width="300px" lines={5} lineSpacing="12px" />
            </div>
        </div>
    ),
};

// 실제 사용 예제
export const UsageExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
            {/* 카드 스켈레톤 */}
            <div>
                <h3>카드 스켈레톤</h3>
                <div style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '16px',
                    width: '300px'
                }}>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                        <Skeleton variant="circular" size="lg" />
                        <div style={{ flex: 1 }}>
                            <Skeleton variant="text" width="60%" style={{ marginBottom: '8px' }} />
                            <Skeleton variant="text" width="40%" />
                        </div>
                    </div>
                    <Skeleton variant="text" width="100%" style={{ marginBottom: '8px' }} />
                    <Skeleton variant="text" width="90%" style={{ marginBottom: '8px' }} />
                    <Skeleton variant="text" width="70%" />
                </div>
            </div>

            {/* 리스트 스켈레톤 */}
            <div>
                <h3>리스트 스켈레톤</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} style={{
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center',
                            padding: '8px 0'
                        }}>
                            <Skeleton variant="circular" size="md" />
                            <div style={{ flex: 1 }}>
                                <Skeleton variant="text" width="80%" style={{ marginBottom: '4px' }} />
                                <Skeleton variant="text" width="60%" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 아바타 스켈레톤 */}
            <div>
                <h3>아바타 스켈레톤</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Skeleton variant="circular" size="xs" />
                    <Skeleton variant="circular" size="sm" />
                    <Skeleton variant="circular" size="md" />
                    <Skeleton variant="circular" size="lg" />
                    <Skeleton variant="circular" size="xl" />
                </div>
            </div>

            {/* 버튼 스켈레톤 */}
            <div>
                <h3>버튼 스켈레톤</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Skeleton variant="rounded" width="80px" height="32px" />
                    <Skeleton variant="rounded" width="100px" height="32px" />
                    <Skeleton variant="rounded" width="120px" height="32px" />
                </div>
            </div>
        </div>
    ),
};

// 커스텀 크기 예제
export const CustomSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>커스텀 크기</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Skeleton width="50px" height="50px" />
                    <Skeleton width="100px" height="30px" />
                    <Skeleton width="150px" height="20px" />
                    <Skeleton width="200px" height="40px" />
                    <Skeleton width="80px" height="80px" />
                </div>
            </div>
            <div>
                <h3>반응형 크기</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Skeleton width="25%" height="20px" />
                    <Skeleton width="50%" height="20px" />
                    <Skeleton width="25%" height="20px" />
                </div>
            </div>
        </div>
    ),
};

// 접근성 예제
export const Accessibility: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>스크린 리더 지원</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Skeleton
                        variant="text"
                        width="200px"
                        aria-label="사용자 프로필 정보 로딩 중"
                    />
                    <Skeleton
                        variant="circular"
                        size="lg"
                        aria-label="프로필 이미지 로딩 중"
                    />
                </div>
            </div>
            <div>
                <h3>컨텍스트별 라벨</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Skeleton
                        variant="text"
                        width="100%"
                        lines={3}
                        aria-label="게시글 내용 로딩 중"
                    />
                    <Skeleton
                        variant="rounded"
                        width="120px"
                        height="32px"
                        aria-label="좋아요 버튼 로딩 중"
                    />
                </div>
            </div>
        </div>
    ),
};
