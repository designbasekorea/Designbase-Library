/**
 * YouTubePlayer 컴포넌트 스토리
 * 
 * 목적: YouTube 플레이어 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: size, variant, theme, 설정 옵션 조합 예제
 */

import type { Meta, StoryObj } from '@storybook/react';
import { YouTubePlayer } from './YouTubePlayer';

const meta: Meta<typeof YouTubePlayer> = {
    title: 'Components/YouTubePlayer',
    component: YouTubePlayer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        videoId: {
            control: { type: 'text' },
            description: 'YouTube 동영상 ID 또는 URL',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'minimal', 'theater', 'picture-in-picture'],
        },
        theme: {
            control: { type: 'select' },
            options: ['light', 'dark', 'auto'],
        },
        autoPlay: {
            control: { type: 'boolean' },
        },
        loop: {
            control: { type: 'boolean' },
        },
        muted: {
            control: { type: 'boolean' },
        },
        showControls: {
            control: { type: 'boolean' },
        },
        enableFullscreen: {
            control: { type: 'boolean' },
        },
        showSubtitles: {
            control: { type: 'boolean' },
        },
        showRelatedVideos: {
            control: { type: 'boolean' },
        },
        showInfo: {
            control: { type: 'boolean' },
        },
        showComments: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 YouTube 플레이어
export const Default: Story = {
    args: {
        videoId: 'dQw4w9WgXcQ',
        title: 'Rick Astley - Never Gonna Give You Up',
        description: '공식 뮤직 비디오',
    },
};

// 다양한 크기별 플레이어
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div>
                <h3>Small (320px)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    size="sm"
                    title="Small Player"
                />
            </div>
            <div>
                <h3>Medium (640px)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    size="md"
                    title="Medium Player"
                />
            </div>
            <div>
                <h3>Large (960px)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    size="lg"
                    title="Large Player"
                />
            </div>
            <div>
                <h3>Extra Large (1280px)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    size="xl"
                    title="Extra Large Player"
                />
            </div>
        </div>
    ),
};

// Variant별 플레이어
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Default Variant</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    variant="default"
                    size="md"
                    title="Default Player"
                    description="기본 스타일의 YouTube 플레이어입니다."
                />
            </div>
            <div>
                <h3>Minimal Variant</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    variant="minimal"
                    size="md"
                    title="Minimal Player"
                />
            </div>
            <div>
                <h3>Theater Variant</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    variant="theater"
                    size="md"
                    title="Theater Player"
                />
            </div>
        </div>
    ),
};

// 자동재생 및 반복재생 설정
export const AutoPlayAndLoop: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>자동재생 (음소거)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    autoPlay={true}
                    muted={true}
                    size="md"
                    title="Auto Play Player"
                    description="자동재생이 활성화된 플레이어 (브라우저 정책상 음소거 필요)"
                />
            </div>
            <div>
                <h3>반복재생</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    loop={true}
                    size="md"
                    title="Loop Player"
                    description="반복재생이 활성화된 플레이어"
                />
            </div>
            <div>
                <h3>자동재생 + 반복재생</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    size="md"
                    title="Auto Play + Loop Player"
                    description="자동재생과 반복재생이 모두 활성화된 플레이어"
                />
            </div>
        </div>
    ),
};

// 컨트롤 설정
export const ControlSettings: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>컨트롤 숨김</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    showControls={false}
                    size="md"
                    title="No Controls Player"
                    description="컨트롤이 숨겨진 플레이어"
                />
            </div>
            <div>
                <h3>전체화면 비활성화</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    enableFullscreen={false}
                    size="md"
                    title="No Fullscreen Player"
                    description="전체화면 기능이 비활성화된 플레이어"
                />
            </div>
            <div>
                <h3>관련 동영상 숨김</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    showRelatedVideos={false}
                    size="md"
                    title="No Related Videos Player"
                    description="관련 동영상이 표시되지 않는 플레이어"
                />
            </div>
        </div>
    ),
};

// 자막 설정
export const SubtitleSettings: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>자막 활성화 (한국어)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    showSubtitles={true}
                    defaultSubtitleLang="ko"
                    size="md"
                    title="Korean Subtitles Player"
                    description="한국어 자막이 활성화된 플레이어"
                />
            </div>
            <div>
                <h3>자막 활성화 (영어)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    showSubtitles={true}
                    defaultSubtitleLang="en"
                    size="md"
                    title="English Subtitles Player"
                    description="영어 자막이 활성화된 플레이어"
                />
            </div>
        </div>
    ),
};

// 플레이리스트 기능
export const Playlist: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>플레이리스트</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    playlist={[
                        'dQw4w9WgXcQ',
                        'y6120QOlsfU',
                        'ZZ5LpwO-An4'
                    ]}
                    size="md"
                    title="Playlist Player"
                    description="여러 동영상이 포함된 플레이리스트"
                />
            </div>
        </div>
    ),
};

// 시작/종료 시간 설정
export const TimeSettings: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>시작 시간 설정 (30초부터)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    startTime={30}
                    size="md"
                    title="Start Time Player"
                    description="30초부터 재생되는 플레이어"
                />
            </div>
            <div>
                <h3>종료 시간 설정 (60초까지)</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    endTime={60}
                    size="md"
                    title="End Time Player"
                    description="60초까지만 재생되는 플레이어"
                />
            </div>
            <div>
                <h3>시작/종료 시간 모두 설정</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    startTime={30}
                    endTime={60}
                    size="md"
                    title="Time Range Player"
                    description="30초부터 60초까지만 재생되는 플레이어"
                />
            </div>
        </div>
    ),
};

// 다양한 URL 형식 지원
export const URLFormats: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>비디오 ID만</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    size="md"
                    title="Video ID Only"
                />
            </div>
            <div>
                <h3>YouTube URL</h3>
                <YouTubePlayer
                    videoId="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    size="md"
                    title="YouTube URL"
                />
            </div>
            <div>
                <h3>Short URL</h3>
                <YouTubePlayer
                    videoId="https://youtu.be/dQw4w9WgXcQ"
                    size="md"
                    title="Short URL"
                />
            </div>
            <div>
                <h3>Embed URL</h3>
                <YouTubePlayer
                    videoId="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    size="md"
                    title="Embed URL"
                />
            </div>
        </div>
    ),
};

// 테마별 플레이어
export const Themes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>Light Theme</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    theme="light"
                    size="md"
                    title="Light Theme Player"
                    description="라이트 테마가 적용된 플레이어"
                />
            </div>
            <div>
                <h3>Dark Theme</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    theme="dark"
                    size="md"
                    title="Dark Theme Player"
                    description="다크 테마가 적용된 플레이어"
                />
            </div>
            <div>
                <h3>Auto Theme</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    theme="auto"
                    size="md"
                    title="Auto Theme Player"
                    description="시스템 테마에 따라 자동 적용되는 플레이어"
                />
            </div>
        </div>
    ),
};

// 실제 사용 예제
export const UsageExamples: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
            {/* 블로그 포스트 예제 */}
            <div>
                <h3>블로그 포스트 임베드</h3>
                <div style={{ 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '8px', 
                    padding: '24px',
                    backgroundColor: '#fafafa'
                }}>
                    <h2>React 컴포넌트 개발 가이드</h2>
                    <p>이번 포스트에서는 React 컴포넌트를 효율적으로 개발하는 방법에 대해 알아보겠습니다.</p>
                    
                    <YouTubePlayer
                        videoId="dQw4w9WgXcQ"
                        size="full"
                        title="React 컴포넌트 개발 튜토리얼"
                        description="React 컴포넌트 개발에 대한 상세한 가이드 영상입니다."
                        showRelatedVideos={false}
                        showInfo={false}
                    />
                    
                    <p>위 영상을 통해 React 컴포넌트 개발의 핵심 개념들을 배워보세요.</p>
                </div>
            </div>

            {/* 제품 소개 예제 */}
            <div>
                <h3>제품 소개 페이지</h3>
                <div style={{ 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '8px', 
                    padding: '24px',
                    backgroundColor: '#fafafa'
                }}>
                    <h2>신제품 소개</h2>
                    <p>새로운 제품의 사용법과 특징을 영상으로 확인해보세요.</p>
                    
                    <YouTubePlayer
                        videoId="dQw4w9WgXcQ"
                        variant="theater"
                        size="lg"
                        title="제품 소개 영상"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        showControls={false}
                    />
                    
                    <div style={{ marginTop: '16px', textAlign: 'center' }}>
                        <button style={{
                            padding: '12px 24px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}>
                            제품 구매하기
                        </button>
                    </div>
                </div>
            </div>

            {/* 교육 콘텐츠 예제 */}
            <div>
                <h3>교육 콘텐츠</h3>
                <div style={{ 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '8px', 
                    padding: '24px',
                    backgroundColor: '#fafafa'
                }}>
                    <h2>프로그래밍 기초 강의</h2>
                    <p>프로그래밍의 기초를 배우는 강의 시리즈입니다.</p>
                    
                    <YouTubePlayer
                        videoId="dQw4w9WgXcQ"
                        size="md"
                        title="프로그래밍 기초 강의 1편"
                        description="프로그래밍의 기본 개념과 개발 환경 설정에 대해 알아봅니다."
                        showSubtitles={true}
                        defaultSubtitleLang="ko"
                        startTime={0}
                        showRelatedVideos={true}
                    />
                    
                    <div style={{ marginTop: '16px' }}>
                        <h4>강의 목록</h4>
                        <ul>
                            <li>1편: 프로그래밍 기초 개념</li>
                            <li>2편: 개발 환경 설정</li>
                            <li>3편: 첫 번째 프로그램 작성</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ),
};

// 접근성 예제
export const Accessibility: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h3>접근성 고려 플레이어</h3>
                <YouTubePlayer
                    videoId="dQw4w9WgXcQ"
                    size="md"
                    title="접근성을 고려한 YouTube 플레이어"
                    description="스크린 리더와 키보드 네비게이션을 지원하는 플레이어입니다."
                    showSubtitles={true}
                    defaultSubtitleLang="ko"
                    enableKeyboard={true}
                    showControls={true}
                    enableFullscreen={true}
                />
            </div>
            <div>
                <h3>키보드 단축키 안내</h3>
                <div style={{ 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '8px', 
                    padding: '16px',
                    backgroundColor: '#f8f9fa'
                }}>
                    <h4>지원되는 키보드 단축키:</h4>
                    <ul>
                        <li><strong>스페이스바</strong>: 재생/일시정지</li>
                        <li><strong>M</strong>: 음소거/음소거 해제</li>
                        <li><strong>F</strong>: 전체화면/전체화면 해제</li>
                        <li><strong>←/→</strong>: 10초 뒤로/앞으로</li>
                        <li><strong>↑/↓</strong>: 볼륨 조절</li>
                    </ul>
                </div>
            </div>
        </div>
    ),
};
