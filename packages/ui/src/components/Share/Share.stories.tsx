/**
 * Share 컴포넌트 스토리
 * 
 * 목적: Share 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 소셜 미디어 공유, 링크 복사, QR 코드, 다양한 변형
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Share, SharePlatform } from './Share';

const meta: Meta<typeof Share> = {
    title: 'Components/Share',
    component: Share,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['button', 'dropdown', 'modal', 'inline'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        position: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'left', 'right'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 공유 버튼
export const Default: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'button',
        size: 'md',
    },
};

// 드롭다운 변형
export const Dropdown: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'dropdown',
        position: 'bottom',
        platforms: ['facebook', 'twitter', 'linkedin', 'whatsapp', 'email', 'link'],
    },
};

// 모달 변형
export const Modal: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'modal',
        modalTitle: '이 페이지 공유하기',
        showQrCode: true,
        platforms: ['facebook', 'twitter', 'linkedin', 'whatsapp', 'telegram', 'email', 'link', 'qr'],
    },
};

// 인라인 변형
export const Inline: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'inline',
        platforms: ['facebook', 'twitter', 'linkedin', 'whatsapp', 'email', 'link'],
    },
};

// 모든 플랫폼
export const AllPlatforms: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'modal',
        platforms: [
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'pinterest',
            'whatsapp',
            'telegram',
            'email',
            'link',
            'qr'
        ],
        showQrCode: true,
    },
};

// 커스텀 플랫폼 설정
export const CustomPlatforms: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'dropdown',
        platforms: ['facebook', 'twitter', 'linkedin', 'email', 'link'],
        customPlatforms: {
            facebook: {
                name: '페이스북',
                color: '#1877f2',
            },
            twitter: {
                name: '트위터',
                color: '#1da1f2',
            },
            linkedin: {
                name: '링크드인',
                color: '#0077b5',
            },
            email: {
                name: '이메일 공유',
                color: '#ea4335',
            },
            link: {
                name: '링크 복사',
                color: '#6c757d',
            },
        },
    },
};

// 해시태그 포함
export const WithHashtags: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        hashtags: ['웹사이트', '디자인', '개발', '프로그래밍'],
        variant: 'modal',
        platforms: ['twitter', 'facebook', 'linkedin', 'whatsapp', 'email', 'link'],
    },
};

// 이미지 포함
export const WithImage: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        imageUrl: 'https://via.placeholder.com/1200x630/007bff/ffffff?text=Example+Website',
        variant: 'modal',
        platforms: ['facebook', 'twitter', 'pinterest', 'linkedin', 'whatsapp', 'email', 'link'],
    },
};

// 크기별 비교
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Small 크기</h3>
                <Share
                    url="https://example.com"
                    title="멋진 웹사이트"
                    variant="dropdown"
                    size="sm"
                    platforms={['facebook', 'twitter', 'linkedin', 'email', 'link']}
                />
            </div>

            <div>
                <h3>Medium 크기 (기본)</h3>
                <Share
                    url="https://example.com"
                    title="멋진 웹사이트"
                    variant="dropdown"
                    size="md"
                    platforms={['facebook', 'twitter', 'linkedin', 'email', 'link']}
                />
            </div>

            <div>
                <h3>Large 크기</h3>
                <Share
                    url="https://example.com"
                    title="멋진 웹사이트"
                    variant="dropdown"
                    size="lg"
                    platforms={['facebook', 'twitter', 'linkedin', 'email', 'link']}
                />
            </div>
        </div>
    ),
};

// 드롭다운 위치별 비교
export const DropdownPositions: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', padding: '60px' }}>
            <div style={{ textAlign: 'center' }}>
                <h3>Top</h3>
                <Share
                    url="https://example.com"
                    title="멋진 웹사이트"
                    variant="dropdown"
                    position="top"
                    platforms={['facebook', 'twitter', 'linkedin']}
                />
            </div>

            <div style={{ textAlign: 'center' }}>
                <h3>Bottom</h3>
                <Share
                    url="https://example.com"
                    title="멋진 웹사이트"
                    variant="dropdown"
                    position="bottom"
                    platforms={['facebook', 'twitter', 'linkedin']}
                />
            </div>

            <div style={{ textAlign: 'center' }}>
                <h3>Left</h3>
                <Share
                    url="https://example.com"
                    title="멋진 웹사이트"
                    variant="dropdown"
                    position="left"
                    platforms={['facebook', 'twitter', 'linkedin']}
                />
            </div>

            <div style={{ textAlign: 'center' }}>
                <h3>Right</h3>
                <Share
                    url="https://example.com"
                    title="멋진 웹사이트"
                    variant="dropdown"
                    position="right"
                    platforms={['facebook', 'twitter', 'linkedin']}
                />
            </div>
        </div>
    ),
};

// 인터랙티브 예제
export const Interactive: Story = {
    render: () => {
        const [shareCount, setShareCount] = useState(0);

        const handleShare = (platform: SharePlatform, url: string) => {
            console.log(`${platform}에 공유됨:`, url);
            setShareCount(prev => prev + 1);
        };

        const handleCopySuccess = (url: string) => {
            console.log('링크 복사됨:', url);
            setShareCount(prev => prev + 1);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                    <h3>공유 통계</h3>
                    <p>총 공유 횟수: {shareCount}회</p>
                </div>

                <Share
                    url="https://example.com"
                    title="멋진 웹사이트를 발견했습니다!"
                    description="이 웹사이트를 꼭 확인해보세요."
                    variant="modal"
                    platforms={['facebook', 'twitter', 'linkedin', 'whatsapp', 'email', 'link']}
                    onShare={handleShare}
                    onCopySuccess={handleCopySuccess}
                />
            </div>
        );
    },
};

// 실제 사용 예제
export const RealWorldExample: Story = {
    render: () => (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <article style={{
                padding: '40px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '20px'
            }}>
                <h1 style={{ marginBottom: '16px', color: '#333' }}>
                    멋진 블로그 포스트 제목
                </h1>
                <p style={{
                    color: '#666',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                    fontSize: '16px'
                }}>
                    이 글은 정말 흥미로운 내용을 담고 있습니다. 여러분도 꼭 읽어보시기 바랍니다.
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '20px',
                    borderTop: '1px solid #eee'
                }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <img
                            src="https://via.placeholder.com/40x40/007bff/ffffff?text=U"
                            alt="Author"
                            style={{ borderRadius: '50%' }}
                        />
                        <div>
                            <div style={{ fontWeight: '600', color: '#333' }}>작성자</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>2024년 1월 15일</div>
                        </div>
                    </div>

                    <Share
                        url="https://example.com/blog/amazing-post"
                        title="멋진 블로그 포스트 제목"
                        description="이 글은 정말 흥미로운 내용을 담고 있습니다. 여러분도 꼭 읽어보시기 바랍니다."
                        variant="dropdown"
                        position="top"
                        platforms={['facebook', 'twitter', 'linkedin', 'whatsapp', 'email', 'link']}
                        buttonText="공유하기"
                    />
                </div>
            </article>
        </div>
    ),
};

// 모바일 최적화
export const MobileOptimized: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'modal',
        platforms: ['whatsapp', 'telegram', 'email', 'link', 'qr'],
        showQrCode: true,
        qrCodeSize: 150,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

// 접근성 예제
export const Accessibility: Story = {
    args: {
        url: 'https://example.com',
        title: '멋진 웹사이트를 발견했습니다!',
        description: '이 웹사이트를 꼭 확인해보세요.',
        variant: 'inline',
        platforms: ['facebook', 'twitter', 'linkedin', 'email', 'link'],
        buttonText: '이 페이지 공유하기',
        modalTitle: '공유 옵션',
    },
};
