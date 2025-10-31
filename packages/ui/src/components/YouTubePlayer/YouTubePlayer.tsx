/**
 * YouTubePlayer 컴포넌트
 * 
 * 목적: YouTube 동영상을 반응형으로 임베드하는 컴포넌트
 * 기능: 자동재생, 반복재생, 음소거, 컨트롤 표시/숨김 등 다양한 설정 지원
 * 접근성: 스크린 리더 지원, 키보드 네비게이션
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';
import './YouTubePlayer.scss';

export type YouTubePlayerSize = 's' | 'm' | 'l' | 'xl' | 'full';
export type YouTubePlayerVariant = 'default' | 'minimal' | 'theater' | 'picture-in-picture';
export type YouTubePlayerTheme = 'light' | 'dark' | 'auto';

export interface YouTubePlayerProps {
    /** YouTube 동영상 ID 또는 URL */
    videoId: string;
    /** 플레이어 제목 */
    title?: string;
    /** 플레이어 설명 */
    description?: string;
    /** 플레이어 크기 */
    size?: YouTubePlayerSize;
    /** 플레이어 스타일 변형 */
    variant?: YouTubePlayerVariant;
    /** 테마 */
    theme?: YouTubePlayerTheme;
    /** 자동 재생 */
    autoPlay?: boolean;
    /** 루프 재생 */
    loop?: boolean;
    /** 음소거 */
    muted?: boolean;
    /** 컨트롤 표시 */
    showControls?: boolean;
    /** 전체화면 지원 */
    enableFullscreen?: boolean;
    /** 키보드 단축키 지원 */
    enableKeyboard?: boolean;
    /** 터치 제스처 지원 */
    enableTouch?: boolean;
    /** 자막 표시 */
    showSubtitles?: boolean;
    /** 기본 자막 언어 */
    defaultSubtitleLang?: string;
    /** 재생 속도 */
    playbackRate?: number;
    /** 시작 시간 (초) */
    startTime?: number;
    /** 종료 시간 (초) */
    endTime?: number;
    /** 관련 동영상 표시 */
    showRelatedVideos?: boolean;
    /** 정보 표시 */
    showInfo?: boolean;
    /** 채널 정보 표시 */
    showChannelInfo?: boolean;
    /** 좋아요/싫어요 버튼 표시 */
    showLikeButtons?: boolean;
    /** 댓글 표시 */
    showComments?: boolean;
    /** 플레이리스트 지원 */
    playlist?: string[];
    /** 현재 플레이리스트 인덱스 */
    currentIndex?: number;
    /** 자동 일시정지 (다른 동영상 재생 시) */
    autoPause?: boolean;
    /** 재생 시작 시 호출 */
    onPlay?: () => void;
    /** 일시정지 시 호출 */
    onPause?: () => void;
    /** 재생 종료 시 호출 */
    onEnded?: () => void;
    /** 시간 업데이트 시 호출 */
    onTimeUpdate?: (currentTime: number, duration: number) => void;
    /** 볼륨 변경 시 호출 */
    onVolumeChange?: (volume: number) => void;
    /** 전체화면 변경 시 호출 */
    onFullscreenChange?: (isFullscreen: boolean) => void;
    /** 플레이리스트 변경 시 호출 */
    onPlaylistChange?: (index: number) => void;
    /** 재생 속도 변경 시 호출 */
    onPlaybackRateChange?: (rate: number) => void;
    /** 에러 발생 시 호출 */
    onError?: (error: string) => void;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 스타일 객체 */
    style?: React.CSSProperties;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
    videoId,
    title,
    description,
    size = 'm',
    variant = 'default',
    theme = 'auto',
    autoPlay = false,
    loop = false,
    muted = false,
    showControls = true,
    enableFullscreen = true,
    enableKeyboard = true,
    enableTouch = true,
    showSubtitles = false,
    defaultSubtitleLang = 'ko',
    playbackRate = 1,
    startTime = 0,
    endTime,
    showRelatedVideos = true,
    showInfo = true,
    showChannelInfo = true,
    showLikeButtons = true,
    showComments = false,
    playlist = [],
    currentIndex = 0,
    autoPause = false,
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate,
    onVolumeChange,
    onFullscreenChange,
    onPlaylistChange,
    onPlaybackRateChange,
    onError,
    className,
    style,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(muted);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [playlistIndex, setPlaylistIndex] = useState(currentIndex);
    const [currentVideoId, setCurrentVideoId] = useState(videoId);
    const [error, setError] = useState<string | null>(null);

    const playerRef = useRef<HTMLIFrameElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const volumeRef = useRef<HTMLDivElement>(null);

    // YouTube URL에서 비디오 ID 추출
    const extractVideoId = useCallback((url: string): string => {
        if (!url) return '';

        // 이미 비디오 ID인 경우
        if (url.length === 11 && /^[a-zA-Z0-9_-]{11}$/.test(url)) {
            return url;
        }

        // YouTube URL 패턴들
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/watch\?.*&v=)([^&\n?#]+)/,
            /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) {
                return match[1];
            }
        }

        return url;
    }, []);

    // YouTube 임베드 URL 생성
    const generateEmbedUrl = useCallback((videoId: string): string => {
        const baseUrl = 'https://www.youtube.com/embed/';
        const params = new URLSearchParams();

        // 기본 설정
        if (autoPlay) params.append('autoplay', '1');
        if (loop) params.append('loop', '1');
        if (isMuted) params.append('mute', '1');
        if (!showControls) params.append('controls', '0');
        if (!enableFullscreen) params.append('fs', '0');
        if (!enableKeyboard) params.append('disablekb', '1');
        if (!enableTouch) params.append('modestbranding', '1');
        if (showSubtitles) params.append('cc_load_policy', '1');
        if (defaultSubtitleLang) params.append('cc_lang_pref', defaultSubtitleLang);
        if (playbackRate !== 1) params.append('vq', playbackRate.toString());
        if (startTime > 0) params.append('start', startTime.toString());
        if (endTime) params.append('end', endTime.toString());
        if (!showRelatedVideos) params.append('rel', '0');
        if (!showInfo) params.append('showinfo', '0');
        if (!showChannelInfo) params.append('modestbranding', '1');
        if (!showLikeButtons) params.append('modestbranding', '1');
        if (!showComments) params.append('modestbranding', '1');

        // 플레이리스트가 있는 경우
        if (playlist.length > 0) {
            params.append('playlist', playlist.join(','));
        }

        const queryString = params.toString();
        return `${baseUrl}${videoId}${queryString ? `?${queryString}` : ''}`;
    }, [
        autoPlay, loop, isMuted, showControls, enableFullscreen, enableKeyboard,
        enableTouch, showSubtitles, defaultSubtitleLang, playbackRate, startTime,
        endTime, showRelatedVideos, showInfo, showChannelInfo, showLikeButtons,
        showComments, playlist
    ]);

    // 비디오 ID 업데이트
    useEffect(() => {
        const extractedId = extractVideoId(videoId);
        setCurrentVideoId(extractedId);
        setError(null);
    }, [videoId, extractVideoId]);

    // 플레이리스트 인덱스 업데이트
    useEffect(() => {
        setPlaylistIndex(currentIndex);
    }, [currentIndex]);

    // 플레이리스트에서 현재 비디오 ID 가져오기
    useEffect(() => {
        if (playlist.length > 0 && playlistIndex < playlist.length) {
            const extractedId = extractVideoId(playlist[playlistIndex]);
            setCurrentVideoId(extractedId);
        }
    }, [playlist, playlistIndex, extractVideoId]);

    // 재생/일시정지 토글
    const togglePlay = useCallback(() => {
        if (isPlaying) {
            setIsPlaying(false);
            onPause?.();
        } else {
            setIsPlaying(true);
            onPlay?.();
        }
    }, [isPlaying, onPlay, onPause]);

    // 음소거 토글
    const toggleMute = useCallback(() => {
        const newMuted = !isMuted;
        setIsMuted(newMuted);
        onVolumeChange?.(newMuted ? 0 : volume);
    }, [isMuted, volume, onVolumeChange]);

    // 볼륨 슬라이더 변경
    const handleVolumeSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
        onVolumeChange?.(newVolume);
    }, [onVolumeChange]);

    // 전체화면 토글
    const toggleFullscreen = useCallback(() => {
        if (!containerRef.current) return;

        if (!isFullscreen) {
            if (containerRef.current.requestFullscreen) {
                containerRef.current.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }, [isFullscreen]);

    // 전체화면 상태 변경 감지
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
            onFullscreenChange?.(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, [onFullscreenChange]);

    // 플레이리스트 네비게이션
    const handlePlaylistChange = useCallback((index: number) => {
        if (index >= 0 && index < playlist.length) {
            setPlaylistIndex(index);
            onPlaylistChange?.(index);
        }
    }, [playlist.length, onPlaylistChange]);

    // 시간 포맷팅
    const formatTime = useCallback((seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }, []);

    // 진행률 계산
    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    // 키보드 단축키
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!enableKeyboard) return;

            switch (e.key) {
                case ' ':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'm':
                    toggleMute();
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case 'ArrowLeft':
                    // 10초 뒤로
                    break;
                case 'ArrowRight':
                    // 10초 앞으로
                    break;
                case 'ArrowUp':
                    // 볼륨 업
                    break;
                case 'ArrowDown':
                    // 볼륨 다운
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [enableKeyboard, togglePlay, toggleMute, toggleFullscreen]);

    // 클릭 외부 감지 (볼륨 슬라이더)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (volumeRef.current && !volumeRef.current.contains(event.target as Node)) {
                setShowVolumeSlider(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const classes = clsx(
        'designbase-youtube-player',
        `designbase-youtube-player--${size}`,
        `designbase-youtube-player--${variant}`,
        `designbase-youtube-player--${theme}`,
        {
            'designbase-youtube-player--playing': isPlaying,
            'designbase-youtube-player--muted': isMuted,
            'designbase-youtube-player--fullscreen': isFullscreen,
            'designbase-youtube-player--error': error,
        },
        className
    );

    if (error) {
        return (
            <div className={classes} style={style}>
                <div className="designbase-youtube-player__error">
                    <p>동영상을 불러올 수 없습니다: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className={classes} style={style}>
            {/* YouTube 임베드 */}
            <div className="designbase-youtube-player__container">
                <iframe
                    ref={playerRef}
                    src={generateEmbedUrl(currentVideoId)}
                    title={title || `YouTube 동영상: ${currentVideoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="designbase-youtube-player__iframe"
                />
            </div>

            {/* 오버레이 컨트롤은 제거 - YouTube 자체 컨트롤 사용 */}

            {/* 설명 */}
            {description && variant !== 'minimal' && (
                <div className="designbase-youtube-player__description">
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

YouTubePlayer.displayName = 'YouTubePlayer';

// Named export 추가
export { YouTubePlayer };
export default YouTubePlayer;
