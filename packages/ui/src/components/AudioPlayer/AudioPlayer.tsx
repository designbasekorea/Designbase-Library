import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import {
    PlayIcon,
    PauseIcon,
    VolumeUpIcon,
    MuteFilledIcon,
    RepeatIcon,
    SettingsIcon,
    RefreshIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from '@designbasekorea/icons';
import './AudioPlayer.scss';

export type AudioPlayerSize = 's' | 'm' | 'l' | 'xl';
export type AudioPlayerVariant = 'default' | 'minimal' | 'compact' | 'full';
export type AudioPlayerTheme = 'light' | 'dark' | 'auto';

export interface AudioPlayerProps {
    /** 오디오 소스 URL */
    src: string;
    /** 오디오 제목 */
    title?: string;
    /** 아티스트명 */
    artist?: string;
    /** 앨범명 */
    album?: string;
    /** 앨범 아트 URL */
    albumArt?: string;
    /** 오디오 크기 */
    size?: AudioPlayerSize;
    /** 오디오 스타일 변형 */
    variant?: AudioPlayerVariant;
    /** 테마 */
    theme?: AudioPlayerTheme;
    /** 자동 재생 */
    autoPlay?: boolean;
    /** 루프 재생 */
    loop?: boolean;
    /** 음소거 */
    muted?: boolean;
    /** 컨트롤 표시 */
    showControls?: boolean;
    /** 키보드 단축키 지원 */
    enableKeyboard?: boolean;
    /** 진행률 표시 */
    showProgress?: boolean;
    /** 시간 표시 */
    showTime?: boolean;
    /** 볼륨 조절 */
    showVolume?: boolean;
    /** 설정 메뉴 */
    showSettings?: boolean;
    /** 플레이리스트 지원 */
    playlist?: Array<{
        src: string;
        title?: string;
        artist?: string;
        album?: string;
        albumArt?: string;
    }>;
    /** 현재 플레이리스트 인덱스 */
    currentIndex?: number;
    /** 자동 일시정지 (다른 오디오 재생 시) */
    autoPause?: boolean;
    /** 재생 속도 조절 */
    playbackRates?: number[];
    /** 기본 재생 속도 */
    defaultPlaybackRate?: number;
    /** 반복 모드 */
    repeatMode?: 'none' | 'one' | 'all';
    /** 셔플 모드 */
    shuffle?: boolean;
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
    /** 플레이리스트 변경 시 호출 */
    onPlaylistChange?: (index: number) => void;
    /** 재생 속도 변경 시 호출 */
    onPlaybackRateChange?: (rate: number) => void;
    /** 반복 모드 변경 시 호출 */
    onRepeatModeChange?: (mode: 'none' | 'one' | 'all') => void;
    /** 셔플 모드 변경 시 호출 */
    onShuffleChange?: (shuffle: boolean) => void;
    /** 에러 발생 시 호출 */
    onError?: (error: string) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
    src,
    title,
    artist,
    album,
    albumArt,
    size = 'm',
    variant = 'default',
    theme = 'auto',
    autoPlay = false,
    loop = false,
    muted = false,
    showControls = true,
    enableKeyboard = true,
    showProgress = true,
    showTime = true,
    showVolume = true,
    showSettings = false,
    playlist = [],
    currentIndex = 0,
    autoPause = true,
    playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2],
    defaultPlaybackRate = 1,
    repeatMode = 'none',
    shuffle = false,
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate,
    onVolumeChange,
    onPlaylistChange,
    onPlaybackRateChange,
    onRepeatModeChange,
    onShuffleChange,
    onError,
    className,
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const volumeRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(muted);
    const [volume, setVolume] = useState(muted ? 0 : 1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(defaultPlaybackRate);
    const [currentRepeatMode, setCurrentRepeatMode] = useState(repeatMode);
    const [isShuffle, setIsShuffle] = useState(shuffle);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [playlistIndex, setPlaylistIndex] = useState(currentIndex);
    const [shuffledPlaylist, setShuffledPlaylist] = useState<number[]>([]);

    // 아이콘 크기 계산 (m이 기본값)
    const iconSize = size === 's' ? 16 : size === 'm' ? 20 : size === 'l' ? 24 : 32; // xl은 32

    // 셔플된 플레이리스트 인덱스 생성
    useEffect(() => {
        if (playlist.length > 0 && isShuffle) {
            const indices = Array.from({ length: playlist.length }, (_, i) => i);
            const shuffled = [...indices].sort(() => Math.random() - 0.5);
            setShuffledPlaylist(shuffled);
        }
    }, [playlist.length, isShuffle]);

    // 현재 재생 중인 트랙 정보
    const currentTrack = playlist.length > 0
        ? playlist[isShuffle ? shuffledPlaylist[playlistIndex] || playlistIndex : playlistIndex]
        : { src, title, artist, album, albumArt };

    // 오디오 이벤트 핸들러
    const handlePlay = useCallback(() => {
        setIsPlaying(true);
        onPlay?.();
    }, [onPlay]);

    const handlePause = useCallback(() => {
        setIsPlaying(false);
        onPause?.();
    }, [onPause]);

    const handleTimeUpdate = useCallback(() => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const total = audioRef.current.duration;
            setCurrentTime(current);
            setDuration(total);
            onTimeUpdate?.(current, total);
        }
    }, [onTimeUpdate]);

    const handleVolumeChange = useCallback(() => {
        if (audioRef.current) {
            const newVolume = audioRef.current.volume;
            const newMuted = audioRef.current.muted;
            setVolume(newVolume);
            setIsMuted(newMuted);
            onVolumeChange?.(newVolume);
        }
    }, [onVolumeChange]);

    const handleEnded = useCallback(() => {
        setIsPlaying(false);
        onEnded?.();

        // 반복 모드에 따른 다음 트랙 처리
        if (playlist.length > 0) {
            if (currentRepeatMode === 'one') {
                // 현재 트랙 반복
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
            } else if (currentRepeatMode === 'all' || playlistIndex < playlist.length - 1) {
                // 다음 트랙으로 이동
                const nextIndex = playlistIndex + 1;
                if (nextIndex < playlist.length) {
                    setPlaylistIndex(nextIndex);
                } else if (currentRepeatMode === 'all') {
                    // 플레이리스트 처음으로 돌아가기
                    setPlaylistIndex(0);
                }
            }
        } else if (loop) {
            // 단일 트랙 루프
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        }
    }, [onEnded, playlist, playlistIndex, currentRepeatMode, loop]);

    const handleError = useCallback((e: Event) => {
        const errorMessage = '오디오를 재생할 수 없습니다.';
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
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    }, [isPlaying]);

    // 음소거 토글
    const toggleMute = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
        }
    }, [isMuted]);

    // 볼륨 슬라이더 조절
    const handleVolumeSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
            audioRef.current.muted = newVolume === 0;
        }
    }, []);

    // 진행률 조절
    const handleProgressChange = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (audioRef.current && progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            const newTime = percentage * duration;
            audioRef.current.currentTime = newTime;
        }
    }, [duration]);

    // 이전 트랙
    const handlePrevious = useCallback(() => {
        if (playlist.length > 0) {
            const prevIndex = playlistIndex - 1;
            if (prevIndex >= 0) {
                setPlaylistIndex(prevIndex);
            }
        } else if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    }, [playlist.length, playlistIndex]);

    // 다음 트랙
    const handleNext = useCallback(() => {
        if (playlist.length > 0) {
            const nextIndex = playlistIndex + 1;
            if (nextIndex < playlist.length) {
                setPlaylistIndex(nextIndex);
            }
        }
    }, [playlist.length, playlistIndex]);

    // 반복 모드 토글
    const toggleRepeatMode = useCallback(() => {
        const modes: Array<'none' | 'one' | 'all'> = ['none', 'one', 'all'];
        const currentIndex = modes.indexOf(currentRepeatMode);
        const nextIndex = (currentIndex + 1) % modes.length;
        const newMode = modes[nextIndex];
        setCurrentRepeatMode(newMode);
        onRepeatModeChange?.(newMode);
    }, [currentRepeatMode, onRepeatModeChange]);

    // 셔플 모드 토글
    const toggleShuffle = useCallback(() => {
        const newShuffle = !isShuffle;
        setIsShuffle(newShuffle);
        onShuffleChange?.(newShuffle);
    }, [isShuffle, onShuffleChange]);

    // 재생 속도 변경
    const handlePlaybackRateChange = useCallback((rate: number) => {
        if (audioRef.current) {
            audioRef.current.playbackRate = rate;
            setPlaybackRate(rate);
            onPlaybackRateChange?.(rate);
        }
    }, [onPlaybackRateChange]);

    // 플레이리스트 변경
    const handlePlaylistChange = useCallback((index: number) => {
        setPlaylistIndex(index);
        onPlaylistChange?.(index);
    }, [onPlaylistChange]);

    // 키보드 단축키
    useEffect(() => {
        if (!enableKeyboard) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!audioRef.current) return;

            switch (e.code) {
                case 'Space':
                    e.preventDefault();
                    togglePlay();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    audioRef.current.currentTime = Math.max(0, currentTime - 10);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    audioRef.current.currentTime = Math.min(duration, currentTime + 10);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    const newVolumeUp = Math.min(1, volume + 0.1);
                    if (audioRef.current) {
                        audioRef.current.volume = newVolumeUp;
                        audioRef.current.muted = false;
                    }
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    const newVolumeDown = Math.max(0, volume - 0.1);
                    if (audioRef.current) {
                        audioRef.current.volume = newVolumeDown;
                        audioRef.current.muted = newVolumeDown === 0;
                    }
                    break;
                case 'KeyM':
                    e.preventDefault();
                    toggleMute();
                    break;
                case 'KeyR':
                    e.preventDefault();
                    toggleRepeatMode();
                    break;
                case 'KeyS':
                    e.preventDefault();
                    toggleShuffle();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [enableKeyboard, togglePlay, toggleMute, toggleRepeatMode, toggleShuffle, currentTime, duration, volume]);

    // 오디오 이벤트 리스너
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('volumechange', handleVolumeChange);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);
        audio.addEventListener('loadstart', handleLoadStart);
        audio.addEventListener('canplay', handleCanPlay);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('volumechange', handleVolumeChange);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('error', handleError);
            audio.removeEventListener('loadstart', handleLoadStart);
            audio.removeEventListener('canplay', handleCanPlay);
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
        'designbase-audio-player',
        `designbase-audio-player--size-${size}`,
        `designbase-audio-player--variant-${variant}`,
        `designbase-audio-player--theme-${theme}`,
        {
            'designbase-audio-player--playing': isPlaying,
            'designbase-audio-player--paused': !isPlaying,
            'designbase-audio-player--muted': isMuted,
            'designbase-audio-player--loading': isLoading,
            'designbase-audio-player--error': error,
            'designbase-audio-player--shuffle': isShuffle,
            'designbase-audio-player--repeat-none': currentRepeatMode === 'none',
            'designbase-audio-player--repeat-one': currentRepeatMode === 'one',
            'designbase-audio-player--repeat-all': currentRepeatMode === 'all',
        },
        className
    );

    const currentSrc = currentTrack?.src || src;

    return (
        <div className={classes}>
            {/* 숨겨진 오디오 요소 */}
            <audio
                ref={audioRef}
                src={currentSrc}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                preload="metadata"
            />

            {/* 로딩 인디케이터 */}
            {isLoading && (
                <div className="designbase-audio-player__loading">
                    <div className="designbase-audio-player__spinner"></div>
                </div>
            )}

            {/* 에러 메시지 */}
            {error && (
                <div className="designbase-audio-player__error">
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>다시 시도</button>
                </div>
            )}

            {/* 앨범 아트 */}
            <div className="designbase-audio-player__album-art">
                {currentTrack?.albumArt ? (
                    <img
                        src={currentTrack.albumArt}
                        alt={currentTrack.title || 'Album Art'}
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('album-placeholder');
                        }}
                    />
                ) : null}
                <div className="album-placeholder">
                    🎵
                </div>
            </div>

            {/* 메인 컨트롤 */}
            <div className="designbase-audio-player__main">
                {/* 트랙 정보 */}
                <div className="designbase-audio-player__info">
                    <div className="designbase-audio-player__title">
                        {currentTrack?.title || 'Unknown Track'}
                    </div>
                    <div className="designbase-audio-player__artist">
                        {currentTrack?.artist || 'Unknown Artist'}
                    </div>
                    {currentTrack?.album && (
                        <div className="designbase-audio-player__album">
                            {currentTrack.album}
                        </div>
                    )}
                </div>

                {/* 진행률 바 */}
                {showProgress && (
                    <div
                        ref={progressRef}
                        className="designbase-audio-player__progress"
                        onClick={handleProgressChange}
                    >
                        <div
                            className="designbase-audio-player__progress-bar"
                            style={{ width: `${progressPercentage}%` }}
                        />
                        <div
                            className="designbase-audio-player__progress-handle"
                            style={{ left: `${progressPercentage}%` }}
                        />
                    </div>
                )}

                {/* 컨트롤 버튼들 */}
                {showControls && (
                    <div className="designbase-audio-player__controls">
                        <div className="designbase-audio-player__left-controls">
                            {/* 셔플 */}
                            {playlist.length > 0 && (
                                <button
                                    className="designbase-audio-player__control-button"
                                    onClick={toggleShuffle}
                                >
                                    <RefreshIcon size={iconSize} />
                                </button>
                            )}

                            {/* 이전 트랙 */}
                            <button
                                className="designbase-audio-player__control-button"
                                onClick={handlePrevious}
                                disabled={playlist.length > 0 && playlistIndex === 0}
                            >
                                <ChevronLeftIcon size={iconSize} />
                            </button>
                        </div>

                        <div className="designbase-audio-player__center-controls">
                            {/* 재생/일시정지 */}
                            <button
                                className="designbase-audio-player__play-button"
                                onClick={togglePlay}
                            >
                                {isPlaying ? <PauseIcon size={iconSize * 1.2} /> : <PlayIcon size={iconSize * 1.2} />}
                            </button>
                        </div>

                        <div className="designbase-audio-player__right-controls">
                            {/* 다음 트랙 */}
                            <button
                                className="designbase-audio-player__control-button"
                                onClick={handleNext}
                                disabled={playlist.length > 0 && playlistIndex === playlist.length - 1}
                            >
                                <ChevronRightIcon size={iconSize} />
                            </button>

                            {/* 반복 */}
                            {playlist.length > 0 && (
                                <button
                                    className="designbase-audio-player__control-button"
                                    onClick={toggleRepeatMode}
                                >
                                    <RepeatIcon size={iconSize} />
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* 하단 컨트롤 */}
                <div className="designbase-audio-player__bottom-controls">
                    <div className="designbase-audio-player__left-bottom">
                        {/* 시간 표시 */}
                        {showTime && (
                            <div className="designbase-audio-player__time">
                                <span>{formatTime(currentTime)}</span>
                                <span>/</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                        )}
                    </div>

                    <div className="designbase-audio-player__right-bottom">
                        {/* 볼륨 */}
                        {showVolume && (
                            <div className="designbase-audio-player__volume">
                                <button
                                    className="designbase-audio-player__control-button"
                                    onClick={toggleMute}
                                    title={isMuted || volume === 0 ? '음소거 해제' : '음소거'}
                                >
                                    {isMuted || volume === 0 ? <MuteFilledIcon size={iconSize} /> : <VolumeUpIcon size={iconSize} />}
                                </button>

                                <div
                                    ref={volumeRef}
                                    className="designbase-audio-player__volume-slider"
                                >
                                    <div className="volume-label">
                                        <span>🔊</span>
                                        <span>{Math.round(volume * 100)}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={volume}
                                        onChange={handleVolumeSliderChange}
                                    />
                                </div>
                            </div>
                        )}

                        {/* 설정 */}
                        {showSettings && (
                            <div className="designbase-audio-player__settings">
                                <button
                                    className="designbase-audio-player__control-button"
                                    onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                                >
                                    <SettingsIcon size={iconSize} />
                                </button>

                                {showSettingsMenu && (
                                    <div className="designbase-audio-player__settings-menu">
                                        <div className="designbase-audio-player__setting-group">
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
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 플레이리스트 표시 (full variant에서만) */}
            {variant === 'full' && playlist.length > 0 && (
                <div className="designbase-audio-player__playlist">
                    <h4>플레이리스트</h4>
                    <div className="designbase-audio-player__playlist-tracks">
                        {playlist.map((track, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    'designbase-audio-player__playlist-track',
                                    {
                                        'designbase-audio-player__playlist-track--active': index === playlistIndex
                                    }
                                )}
                                onClick={() => handlePlaylistChange(index)}
                            >
                                {track.albumArt && (
                                    <img src={track.albumArt} alt={track.title || 'Album Art'} />
                                )}
                                <div className="designbase-audio-player__playlist-track-info">
                                    <div className="designbase-audio-player__playlist-track-title">
                                        {track.title || 'Unknown Track'}
                                    </div>
                                    <div className="designbase-audio-player__playlist-track-artist">
                                        {track.artist || 'Unknown Artist'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AudioPlayer;
