import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AudioPlayer from './AudioPlayer';

const meta: Meta<typeof AudioPlayer> = {
    title: 'Components/AudioPlayer',
    component: AudioPlayer,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '오디오 재생을 위한 완전한 기능의 오디오 플레이어 컴포넌트입니다. 재생/일시정지, 볼륨 조절, 진행률 표시, 플레이리스트, 셔플, 반복 모드 등을 지원합니다.',
            },
        },
    },
    argTypes: {
        src: {
            description: '오디오 소스 URL',
            control: 'text',
        },
        title: {
            description: '오디오 제목',
            control: 'text',
        },
        artist: {
            description: '아티스트명',
            control: 'text',
        },
        album: {
            description: '앨범명',
            control: 'text',
        },
        size: {
            description: '오디오 크기',
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
        variant: {
            description: '오디오 스타일 변형',
            control: 'select',
            options: ['default', 'minimal', 'compact', 'full'],
        },
        theme: {
            description: '테마',
            control: 'select',
            options: ['light', 'dark', 'auto'],
        },
        showControls: {
            description: '컨트롤 표시',
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
        repeatMode: {
            description: '반복 모드',
            control: 'select',
            options: ['none', 'one', 'all'],
        },
        shuffle: {
            description: '셔플 모드',
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
        onError: {
            description: '에러 발생 시 호출',
            action: 'error',
        },
    },
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        title: 'SoundHelix Song 1',
        artist: 'SoundHelix',
        album: 'SoundHelix Examples',
        size: 'md',
        variant: 'default',
        theme: 'light',
        showControls: true,
        showProgress: true,
        showTime: true,
        showVolume: true,
        showSettings: true,
        repeatMode: 'none',
        shuffle: false,
        onPlay: fn(),
        onPause: fn(),
        onEnded: fn(),
        onTimeUpdate: fn(),
        onVolumeChange: fn(),
        onError: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

// 기본 오디오 플레이어
export const Default: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        title: 'SoundHelix Song 1',
        artist: 'SoundHelix',
        album: 'SoundHelix Examples',
    },
};

// 모든 크기
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Small Size</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Small Audio Player"
                    artist="SoundHelix"
                    size="sm"
                />
            </div>
            <div>
                <h3>Medium Size (Default)</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Medium Audio Player"
                    artist="SoundHelix"
                    size="md"
                />
            </div>
            <div>
                <h3>Large Size</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Large Audio Player"
                    artist="SoundHelix"
                    size="lg"
                />
            </div>
            <div>
                <h3>Extra Large Size</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Extra Large Audio Player"
                    artist="SoundHelix"
                    size="xl"
                />
            </div>
        </div>
    ),
};

// 모든 테마
export const AllThemes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Light Theme</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Light Theme Audio"
                    artist="SoundHelix"
                    theme="light"
                />
            </div>
            <div>
                <h3>Dark Theme</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Dark Theme Audio"
                    artist="SoundHelix"
                    theme="dark"
                />
            </div>
            <div>
                <h3>Auto Theme (System Preference)</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Auto Theme Audio"
                    artist="SoundHelix"
                    theme="auto"
                />
            </div>
        </div>
    ),
};

// 모든 타입 (기본, 컴팩트, 전체)
export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Default Variant</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Default Audio Player"
                    artist="SoundHelix"
                    variant="default"
                />
            </div>
            <div>
                <h3>Compact Variant</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Compact Audio Player"
                    artist="SoundHelix"
                    variant="compact"
                />
            </div>
            <div>
                <h3>Full Variant (with Playlist)</h3>
                <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Full Audio Player"
                    artist="SoundHelix"
                    variant="full"
                    playlist={[
                        {
                            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                            title: 'SoundHelix Song 1',
                            artist: 'SoundHelix',
                            album: 'SoundHelix Examples',
                        },
                        {
                            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                            title: 'SoundHelix Song 2',
                            artist: 'SoundHelix',
                            album: 'SoundHelix Examples',
                        },
                        {
                            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
                            title: 'SoundHelix Song 3',
                            artist: 'SoundHelix',
                            album: 'SoundHelix Examples',
                        },
                    ]}
                    currentIndex={0}
                />
            </div>
        </div>
    ),
};
