import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import {
    PlayIcon,
    PauseIcon,
    VolumeUpIcon,
    MuteFilledIcon,
    ExpandIcon,
    ShrinkIcon,
    SettingsIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from '@designbase/icons';
import './VideoPlayer.scss';

export type VideoPlayerSize = 'sm' | 'md' | 'lg' | 'xl';
export type VideoPlayerVariant = 'default' | 'minimal' | 'theater' | 'picture-in-picture';
export type VideoPlayerTheme = 'light' | 'dark' | 'auto';

export interface VideoPlayerProps {
    /** 비디오 소스 URL */
    src: string;
    /** 비디오 포스터 이미지 URL */
    poster?: string;
    /** 비디오 제목 */
    title?: string;
    /** 비디오 설명 */
    description?: string;
    /** 비디오 크기 */
    size?: VideoPlayerSize;
    /** 비디오 스타일 변형 */
    variant?: VideoPlayerVariant;
    /** 테마 */
    theme?: VideoPlayerTheme;
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
    /** 진행률 표시 */
    showProgress?: boolean;
    /** 시간 표시 */
    showTime?: boolean;
    /** 볼륨 조절 */
    showVolume?: boolean;
    /** 설정 메뉴 */
    showSettings?: boolean;
    /** 플레이리스트 지원 */
    playlist?: string[];
    /** 현재 플레이리스트 인덱스 */
    currentIndex?: number;
    /** 자동 일시정지 (다른 비디오 재생 시) */
    autoPause?: boolean;
    /** 재생 속도 조절 */
    playbackRates?: number[];
    /** 기본 재생 속도 */
    defaultPlaybackRate?: number;
    /** 품질 선택 */
    qualities?: { label: string; value: string }[];
    /** 기본 품질 */
    defaultQuality?: string;
    /** 자막 지원 */
    subtitles?: { label: string; src: string; lang: string }[];
    /** 기본 자막 */
    defaultSubtitle?: string;
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
    /** 품질 변경 시 호출 */
    onQualityChange?: (quality: string) => void;
    /** 자막 변경 시 호출 */
    onSubtitleChange?: (subtitle: string) => void;
    /** 에러 발생 시 호출 */
    onError?: (error: string) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    poster,
    title,
    description,
    size = 'md',
    variant = 'default',
    theme = 'auto',
    autoPlay = false,
    loop = false,
    muted = false,
    showControls = true,
    enableFullscreen = true,
    enableKeyboard = true,
    enableTouch = true,
    showProgress = true,
    showTime = true,
    showVolume = true,
    showSettings = false,
    playlist = [],
    currentIndex = 0,
    autoPause = true,
    playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2],
    defaultPlaybackRate = 1,
    qualities = [],
    defaultQuality = '',
    subtitles = [],
    defaultSubtitle = '',
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate,
    onVolumeChange,
    onFullscreenChange,
    onPlaylistChange,
    onPlaybackRateChange,
    onQualityChange,
    onSubtitleChange,
    onError,
    className,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const volumeRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(muted);
    const [volume, setVolume] = useState(muted ? 0 : 1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControlsOverlay, setShowControlsOverlay] = useState(false);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(defaultPlaybackRate);
    const [currentQuality, setCurrentQuality] = useState(defaultQuality);
    const [currentSubtitle, setCurrentSubtitle] = useState(defaultSubtitle);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [playlistIndex, setPlaylistIndex] = useState(currentIndex);

    // 비디오 이벤트 핸들러
    const handlePlay = useCallback(() => {
        setIsPlaying(true);
        onPlay?.();
    }, [onPlay]);

    const handlePause = useCallback(() => {
        setIsPlaying(false);
        onPause?.();
    }, [onPause]);

    const handleTimeUpdate = useCallback(() => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setCurrentTime(current);
            setDuration(total);
            onTimeUpdate?.(current, total);
        }
    }, [onTimeUpdate]);

    const handleVolumeChange = useCallback(() => {
        if (videoRef.current) {
            const newVolume = videoRef.current.volume;
            const newMuted = videoRef.current.muted;
            setVolume(newVolume);
            setIsMuted(newMuted);
            onVolumeChange?.(newVolume);
        }
    }, [onVolumeChange]);

    const handleEnded = useCallback(() => {
        setIsPlaying(false);
        onEnded?.();

        // 플레이리스트가 있으면 다음 비디오 재생
        if (playlist.length > 0 && playlistIndex < playlist.length - 1) {
            setPlaylistIndex(prev => prev + 1);
        }
    }, [onEnded, playlist, playlistIndex]);

    const handleError = useCallback((e: Event) => {
        const errorMessage = '비디오를 재생할 수 없습니다.';
        setError(errorMessage);
        onError?.(errorMessage);
    }, [onError]);

    const handleLoadStart = useCallback(() => {
        setIsLoading(true);
        setError(null);
    }, []);

    const handleCanPlay = useCallback(() => {
        setIsLoading(false);
    }, []);

    // 재생/일시정지 토글
    const togglePlay = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    }, [isPlaying]);

    // 음소거 토글
    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
    }, [isMuted]);

    // 볼륨 슬라이더 조절
    const handleVolumeSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            videoRef.current.muted = newVolume === 0;
        }
    }, []);

    // 진행률 조절
    const handleProgressChange = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current && progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            const newTime = percentage * duration;
            videoRef.current.currentTime = newTime;
        }
    }, [duration]);

    // 전체화면 토글
    const toggleFullscreen = useCallback(() => {
        if (!enableFullscreen) return;

        if (!isFullscreen) {
            if (containerRef.current?.requestFullscreen) {
                containerRef.current.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }, [isFullscreen, enableFullscreen]);

    // 재생 속도 변경
    const handlePlaybackRateChange = useCallback((rate: number) => {
        if (videoRef.current) {
            videoRef.current.playbackRate = rate;
            setPlaybackRate(rate);
            onPlaybackRateChange?.(rate);
        }
    }, [onPlaybackRateChange]);

    // 품질 변경
    const handleQualityChange = useCallback((quality: string) => {
        setCurrentQuality(quality);
        onQualityChange?.(quality);
    }, [onQualityChange]);

    // 자막 변경
    const handleSubtitleChange = useCallback((subtitle: string) => {
        setCurrentSubtitle(subtitle);
        onSubtitleChange?.(subtitle);
    }, [onSubtitleChange]);

    // 플레이리스트 변경
    const handlePlaylistChange = useCallback((index: number) => {
        setPlaylistIndex(index);
        onPlaylistChange?.(index);
    }, [onPlaylistChange]);

    // 키보드 단축키
    useEffect(() => {
        if (!enableKeyboard) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!videoRef.current) return;

            switch (e.code) {
                case 'Space':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    videoRef.current.currentTime = Math.max(0, currentTime - 10);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    videoRef.current.currentTime = Math.min(duration, currentTime + 10);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    const newVolumeUp = Math.min(1, volume + 0.1);
                    if (videoRef.current) {
                        videoRef.current.volume = newVolumeUp;
                        videoRef.current.muted = false;
                    }
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    const newVolumeDown = Math.max(0, volume - 0.1);
                    if (videoRef.current) {
                        videoRef.current.volume = newVolumeDown;
                        videoRef.current.muted = newVolumeDown === 0;
                    }
                    break;
                case 'KeyM':
                    e.preventDefault();
                    toggleMute();
                    break;
                case 'KeyF':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [enableKeyboard, togglePlay, toggleMute, toggleFullscreen, currentTime, duration, volume]);

    // 전체화면 상태 감지
    useEffect(() => {
        const handleFullscreenChange = () => {
            const newIsFullscreen = !!document.fullscreenElement;
            setIsFullscreen(newIsFullscreen);
            onFullscreenChange?.(newIsFullscreen);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, [onFullscreenChange]);

    // 비디오 이벤트 리스너
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('volumechange', handleVolumeChange);
        video.addEventListener('ended', handleEnded);
        video.addEventListener('error', handleError);
        video.addEventListener('loadstart', handleLoadStart);
        video.addEventListener('canplay', handleCanPlay);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('volumechange', handleVolumeChange);
            video.removeEventListener('ended', handleEnded);
            video.removeEventListener('error', handleError);
            video.removeEventListener('loadstart', handleLoadStart);
            video.removeEventListener('canplay', handleCanPlay);
        };
    }, [handlePlay, handlePause, handleTimeUpdate, handleVolumeChange, handleEnded, handleError, handleLoadStart, handleCanPlay]);

    // 시간 포맷팅
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // 진행률 계산
    const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

    const classes = clsx(
        'designbase-video-player',
        `designbase-video-player--size-${size}`,
        `designbase-video-player--variant-${variant}`,
        `designbase-video-player--theme-${theme}`,
        {
            'designbase-video-player--playing': isPlaying,
            'designbase-video-player--paused': !isPlaying,
            'designbase-video-player--muted': isMuted,
            'designbase-video-player--fullscreen': isFullscreen,
            'designbase-video-player--loading': isLoading,
            'designbase-video-player--error': error,
            'designbase-video-player--show-controls': showControlsOverlay,
        },
        className
    );

    const currentSrc = playlist.length > 0 ? playlist[playlistIndex] : src;

    return (
        <div
            ref={containerRef}
            className={classes}
            onMouseEnter={() => setShowControlsOverlay(true)}
            onMouseLeave={() => setShowControlsOverlay(false)}
        >
            {/* 비디오 요소 */}
            <video
                ref={videoRef}
                src={currentSrc}
                poster={poster}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                playsInline
                className="designbase-video-player__video"
            >
                {subtitles.map((subtitle, index) => (
                    <track
                        key={index}
                        kind="subtitles"
                        src={subtitle.src}
                        srcLang={subtitle.lang}
                        label={subtitle.label}
                        default={subtitle.label === currentSubtitle}
                    />
                ))}
                비디오를 지원하지 않는 브라우저입니다.
            </video>

            {/* 로딩 인디케이터 */}
            {isLoading && (
                <div className="designbase-video-player__loading">
                    <div className="designbase-video-player__spinner"></div>
                </div>
            )}

            {/* 에러 메시지 */}
            {error && (
                <div className="designbase-video-player__error">
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>다시 시도</button>
                </div>
            )}

            {/* 오버레이 컨트롤 */}
            {showControls && (
                <div className="designbase-video-player__overlay">
                    {/* 상단 컨트롤 */}
                    <div className="designbase-video-player__top-controls">
                        {title && (
                            <div className="designbase-video-player__title">
                                <h3>{title}</h3>
                                {description && <p>{description}</p>}
                            </div>
                        )}

                        {showSettings && (
                            <div className="designbase-video-player__settings">
                                <button
                                    className="designbase-video-player__settings-button"
                                    onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                                >
                                    <SettingsIcon size={20} />
                                </button>

                                {showSettingsMenu && (
                                    <div className="designbase-video-player__settings-menu">
                                        {/* 재생 속도 */}
                                        <div className="designbase-video-player__setting-group">
                                            <label>재생 속도</label>
                                            <select
                                                value={playbackRate}
                                                onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
                                            >
                                                {playbackRates.map(rate => (
                                                    <option key={rate} value={rate}>
                                                        {rate}x
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* 품질 */}
                                        {qualities.length > 0 && (
                                            <div className="designbase-video-player__setting-group">
                                                <label>품질</label>
                                                <select
                                                    value={currentQuality}
                                                    onChange={(e) => handleQualityChange(e.target.value)}
                                                >
                                                    {qualities.map(quality => (
                                                        <option key={quality.value} value={quality.value}>
                                                            {quality.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}

                                        {/* 자막 */}
                                        {subtitles.length > 0 && (
                                            <div className="designbase-video-player__setting-group">
                                                <label>자막</label>
                                                <select
                                                    value={currentSubtitle}
                                                    onChange={(e) => handleSubtitleChange(e.target.value)}
                                                >
                                                    <option value="">자막 없음</option>
                                                    {subtitles.map(subtitle => (
                                                        <option key={subtitle.label} value={subtitle.label}>
                                                            {subtitle.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* 중앙 재생 버튼 */}
                    <div className="designbase-video-player__center-controls">
                        <button
                            className="designbase-video-player__play-button"
                            onClick={togglePlay}
                        >
                            {isPlaying ? <PauseIcon size={48} /> : <PlayIcon size={48} />}
                        </button>
                    </div>

                    {/* 하단 컨트롤 */}
                    <div className="designbase-video-player__bottom-controls">
                        {/* 진행률 바 */}
                        {showProgress && (
                            <div
                                ref={progressRef}
                                className="designbase-video-player__progress"
                                onClick={handleProgressChange}
                            >
                                <div
                                    className="designbase-video-player__progress-bar"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                                <div
                                    className="designbase-video-player__progress-handle"
                                    style={{ left: `${progressPercentage}%` }}
                                />
                            </div>
                        )}

                        {/* 컨트롤 버튼들 */}
                        <div className="designbase-video-player__controls">
                            <div className="designbase-video-player__left-controls">
                                {/* 재생/일시정지 */}
                                <button
                                    className="designbase-video-player__control-button"
                                    onClick={togglePlay}
                                >
                                    {isPlaying ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
                                </button>

                                {/* 볼륨 */}
                                {showVolume && (
                                    <div className="designbase-video-player__volume">
                                        <button
                                            className="designbase-video-player__control-button"
                                            onClick={toggleMute}
                                            onMouseEnter={() => setShowVolumeSlider(true)}
                                            onMouseLeave={() => setShowVolumeSlider(false)}
                                        >
                                            {isMuted || volume === 0 ? <MuteFilledIcon size={20} /> : <VolumeUpIcon size={20} />}
                                        </button>

                                        {showVolumeSlider && (
                                            <div
                                                ref={volumeRef}
                                                className="designbase-video-player__volume-slider"
                                            >
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="1"
                                                    step="0.1"
                                                    value={volume}
                                                    onChange={handleVolumeSliderChange}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* 시간 표시 */}
                                {showTime && (
                                    <div className="designbase-video-player__time">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>/</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                )}
                            </div>

                            <div className="designbase-video-player__right-controls">
                                {/* 플레이리스트 네비게이션 */}
                                {playlist.length > 1 && (
                                    <div className="designbase-video-player__playlist-controls">
                                        <button
                                            className="designbase-video-player__control-button"
                                            disabled={playlistIndex === 0}
                                            onClick={() => handlePlaylistChange(playlistIndex - 1)}
                                        >
                                            <ChevronLeftIcon size={16} />
                                        </button>
                                        <span>{playlistIndex + 1} / {playlist.length}</span>
                                        <button
                                            className="designbase-video-player__control-button"
                                            disabled={playlistIndex === playlist.length - 1}
                                            onClick={() => handlePlaylistChange(playlistIndex + 1)}
                                        >
                                            <ChevronRightIcon size={16} />
                                        </button>
                                    </div>
                                )}

                                {/* 전체화면 */}
                                {enableFullscreen && (
                                    <button
                                        className="designbase-video-player__control-button"
                                        onClick={toggleFullscreen}
                                    >
                                        {isFullscreen ? <ShrinkIcon size={20} /> : <ExpandIcon size={20} />}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
