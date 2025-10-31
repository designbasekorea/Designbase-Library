import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import VideoPlayer from './VideoPlayer';

const meta: Meta<typeof VideoPlayer> = {
    title: 'Components/VideoPlayer',
    component: VideoPlayer,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '비디오 재생을 위한 완전한 기능의 비디오 플레이어 컴포넌트입니다. 재생/일시정지, 볼륨 조절, 전체화면, 진행률 표시, 키보드 단축키 등을 지원합니다.',
            },
        },
    },
    argTypes: {
        src: {
            description: '비디오 소스 URL',
            control: 'text',
        },
        poster: {
            description: '비디오 포스터 이미지 URL',
            control: 'text',
        },
        title: {
            description: '비디오 제목',
            control: 'text',
        },
        description: {
            description: '비디오 설명',
            control: 'text',
        },
        size: {
            description: '비디오 크기',
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
        variant: {
            description: '비디오 스타일 변형',
            control: 'select',
            options: ['default', 'minimal', 'theater', 'picture-in-picture'],
        },
        theme: {
            description: '테마',
            control: 'select',
            options: ['light', 'dark', 'auto'],
        },
        autoPlay: {
            description: '자동 재생',
            control: 'boolean',
        },
        loop: {
            description: '루프 재생',
            control: 'boolean',
        },
        muted: {
            description: '음소거',
            control: 'boolean',
        },
        showControls: {
            description: '컨트롤 표시',
            control: 'boolean',
        },
        enableFullscreen: {
            description: '전체화면 지원',
            control: 'boolean',
        },
        enableKeyboard: {
            description: '키보드 단축키 지원',
            control: 'boolean',
        },
        enableTouch: {
            description: '터치 제스처 지원',
            control: 'boolean',
        },
        showProgress: {
            description: '진행률 표시',
            control: 'boolean',
        },
        showTime: {
            description: '시간 표시',
            control: 'boolean',
        },
        showVolume: {
            description: '볼륨 조절',
            control: 'boolean',
        },
        showSettings: {
            description: '설정 메뉴',
            control: 'boolean',
        },
        onPlay: {
            description: '재생 시작 시 호출',
            action: 'played',
        },
        onPause: {
            description: '일시정지 시 호출',
            action: 'paused',
        },
        onEnded: {
            description: '재생 종료 시 호출',
            action: 'ended',
        },
        onTimeUpdate: {
            description: '시간 업데이트 시 호출',
            action: 'timeUpdated',
        },
        onVolumeChange: {
            description: '볼륨 변경 시 호출',
            action: 'volumeChanged',
        },
        onFullscreenChange: {
            description: '전체화면 변경 시 호출',
            action: 'fullscreenChanged',
        },
        onError: {
            description: '에러 발생 시 호출',
            action: 'error',
        },
    },
    args: {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        title: 'Big Buck Bunny',
        description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.',
        size: 'm',
        variant: 'default',
        theme: 'auto',
        autoPlay: false,
        loop: false,
        muted: false,
        showControls: true,
        enableFullscreen: true,
        enableKeyboard: true,
        enableTouch: true,
        showProgress: true,
        showTime: true,
        showVolume: true,
        showSettings: false,
        onPlay: fn(),
        onPause: fn(),
        onEnded: fn(),
        onTimeUpdate: fn(),
        onVolumeChange: fn(),
        onFullscreenChange: fn(),
        onError: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

// 기본 스토리
export const Default: Story = {
    args: {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        title: 'Big Buck Bunny',
        description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.',
    },
};

// 다양한 크기
export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Small Size</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    size="s"
                    title="Small Video"
                />
            </div>
            <div>
                <h3>Medium Size (Default)</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    size="m"
                    title="Medium Video"
                />
            </div>
            <div>
                <h3>Large Size</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    size="l"
                    title="Large Video"
                />
            </div>
            <div>
                <h3>Extra Large Size</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    size="xl"
                    title="Extra Large Video"
                />
            </div>
        </div>
    ),
};

// 다양한 테마
export const DifferentThemes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Light Theme</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    theme="light"
                    title="Light Theme Video"
                />
            </div>
            <div>
                <h3>Dark Theme</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    theme="dark"
                    title="Dark Theme Video"
                />
            </div>
            <div>
                <h3>Auto Theme (System Preference)</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    theme="auto"
                    title="Auto Theme Video"
                />
            </div>
        </div>
    ),
};

// 설정 메뉴가 있는 비디오
export const WithSettings: Story = {
    args: {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        title: 'Video with Settings',
        description: 'This video player includes settings menu for playback rate, quality, and subtitles.',
        showSettings: true,
        playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
        qualities: [
            { label: '1080p', value: '1080p' },
            { label: '720p', value: '720p' },
            { label: '480p', value: '480p' },
            { label: '360p', value: '360p' },
        ],
        defaultQuality: '720p',
        subtitles: [
            { label: 'English', src: '/subtitles/en.vtt', lang: 'en' },
            { label: 'Spanish', src: '/subtitles/es.vtt', lang: 'es' },
            { label: 'French', src: '/subtitles/fr.vtt', lang: 'fr' },
        ],
        defaultSubtitle: 'English',
    },
};

// 플레이리스트가 있는 비디오
export const WithPlaylist: Story = {
    args: {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        title: 'Video Playlist',
        description: 'This video player includes a playlist with multiple videos.',
        playlist: [
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        ],
        currentIndex: 0,
    },
};

// 자동 재생 비디오
export const AutoPlay: Story = {
    args: {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        title: 'Auto Play Video',
        description: 'This video starts playing automatically.',
        autoPlay: true,
        muted: true, // 브라우저 정책상 자동재생은 음소거 필요
    },
};

// 루프 재생 비디오
export const Loop: Story = {
    args: {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        title: 'Loop Video',
        description: 'This video loops continuously.',
        loop: true,
    },
};

// 최소 컨트롤 비디오
export const MinimalControls: Story = {
    args: {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        title: 'Minimal Controls',
        description: 'This video player has minimal controls.',
        showProgress: false,
        showTime: false,
        showVolume: false,
        showSettings: false,
    },
};

// 인터랙티브 비디오
export const Interactive: Story = {
    render: () => {
        const [playCount, setPlayCount] = useState(0);
        const [pauseCount, setPauseCount] = useState(0);
        const [volume, setVolume] = useState(1);
        const [isFullscreen, setIsFullscreen] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h3>Interactive Video Player</h3>
                    <VideoPlayer
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                        title="Interactive Video"
                        description="This video player tracks user interactions."
                        onPlay={() => setPlayCount(prev => prev + 1)}
                        onPause={() => setPauseCount(prev => prev + 1)}
                        onVolumeChange={(newVolume) => setVolume(newVolume)}
                        onFullscreenChange={(fullscreen) => setIsFullscreen(fullscreen)}
                    />
                </div>

                <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
                    <h4>Interaction Stats:</h4>
                    <p>Play count: {playCount}</p>
                    <p>Pause count: {pauseCount}</p>
                    <p>Current volume: {Math.round(volume * 100)}%</p>
                    <p>Fullscreen: {isFullscreen ? 'Yes' : 'No'}</p>
                </div>
            </div>
        );
    },
};

// 키보드 단축키 안내
export const KeyboardShortcuts: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Video Player with Keyboard Shortcuts</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    title="Keyboard Shortcuts Demo"
                    description="Try using keyboard shortcuts while the video is focused."
                    enableKeyboard={true}
                />
            </div>

            <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
                <h4>Available Keyboard Shortcuts:</h4>
                <ul>
                    <li><strong>Space</strong> - Play/Pause</li>
                    <li><strong>←</strong> - Rewind 10 seconds</li>
                    <li><strong>→</strong> - Forward 10 seconds</li>
                    <li><strong>↑</strong> - Increase volume</li>
                    <li><strong>↓</strong> - Decrease volume</li>
                    <li><strong>M</strong> - Mute/Unmute</li>
                    <li><strong>F</strong> - Toggle fullscreen</li>
                </ul>
            </div>
        </div>
    ),
};

// 에러 상태 시뮬레이션
export const ErrorState: Story = {
    args: {
        src: 'https://invalid-video-url.com/video.mp4', // 잘못된 URL로 에러 상태 시뮬레이션
        poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        title: 'Error Video',
        description: 'This video will show an error state.',
    },
};

// 다양한 비디오 소스
export const DifferentVideoSources: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Big Buck Bunny</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    title="Big Buck Bunny"
                    description="Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself."
                    size="m"
                />
            </div>

            <div>
                <h3>Elephants Dream</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
                    title="Elephants Dream"
                    description="The first Blender Open Movie from 2006."
                    size="m"
                />
            </div>

            <div>
                <h3>For Bigger Blazes</h3>
                <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg"
                    title="For Bigger Blazes"
                    description="A sample video for testing video players."
                    size="m"
                />
            </div>
        </div>
    ),
};
