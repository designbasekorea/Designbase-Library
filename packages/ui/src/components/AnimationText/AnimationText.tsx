import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './AnimationText.scss';

export interface AnimationTextProps {
    /** 애니메이션할 텍스트 */
    children: string;
    /** 애니메이션 타입 */
    type?: 'typing' | 'fade' | 'slide' | 'bounce' | 'shake' | 'glow' | 'gradient' | 'wave' | 'flip' | 'scale';
    /** 애니메이션 속도 (ms) */
    speed?: number;
    /** 애니메이션 반복 횟수 (0은 무한 반복) */
    repeat?: number;
    /** 애니메이션 지연 시간 (ms) */
    delay?: number;
    /** 애니메이션 방향 */
    direction?: 'left' | 'right' | 'up' | 'down' | 'alternate';
    /** 텍스트 크기 */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
    /** 텍스트 색상 */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'custom';
    /** 커스텀 색상 */
    customColor?: string;
    /** 텍스트 굵기 */
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
    /** 텍스트 정렬 */
    align?: 'left' | 'center' | 'right' | 'justify';
    /** 그라디언트 색상 (gradient 타입용) */
    gradientColors?: string[];
    /** 파도 효과 색상 (wave 타입용) */
    waveColors?: string[];
    /** 글로우 효과 색상 (glow 타입용) */
    glowColor?: string;
    /** 클릭 가능 여부 */
    clickable?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 클래스명 */
    className?: string;
    /** 클릭 핸들러 */
    onClick?: () => void;
}

const AnimationText: React.FC<AnimationTextProps> = ({
    children,
    type = 'fade',
    speed = 1000,
    repeat = 0,
    delay = 0,
    direction = 'left',
    size = 'm',
    color = 'primary',
    customColor,
    weight = 'normal',
    align = 'left',
    gradientColors = ['#667eea', '#764ba2'],
    waveColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
    glowColor = '#667eea',
    clickable = false,
    disabled = false,
    className,
    onClick,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // 타이핑 애니메이션을 위한 상태
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (delay > 0) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delay);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(true);
        }
    }, [delay]);

    // 타이핑 애니메이션
    useEffect(() => {
        if (type === 'typing' && isVisible) {
            setDisplayText('');
            setCurrentIndex(0);

            const typeInterval = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev >= children.length) {
                        clearInterval(typeInterval);
                        return prev;
                    }
                    setDisplayText(children.slice(0, prev + 1));
                    return prev + 1;
                });
            }, speed / children.length);

            return () => clearInterval(typeInterval);
        }
    }, [type, isVisible, children, speed]);

    // 반복 애니메이션
    useEffect(() => {
        if (repeat > 0 && type !== 'typing') {
            let repeatCount = 0;

            const repeatAnimation = () => {
                setIsAnimating(true);
                setTimeout(() => {
                    setIsAnimating(false);
                    repeatCount++;

                    if (repeatCount < repeat) {
                        setTimeout(repeatAnimation, speed);
                    }
                }, speed);
            };

            if (isVisible) {
                setTimeout(repeatAnimation, speed);
            }
        }
    }, [repeat, type, speed, isVisible]);

    const handleClick = () => {
        if (clickable && !disabled && onClick) {
            onClick();
        }
    };

    const getGradientStyle = () => {
        if (type === 'gradient' && gradientColors.length >= 2) {
            return {
                background: `linear-gradient(45deg, ${gradientColors.join(', ')})`,
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            };
        }
        return {};
    };

    const getWaveStyle = () => {
        if (type === 'wave') {
            return {
                '--wave-colors': waveColors.join(', '),
            } as React.CSSProperties;
        }
        return {};
    };

    const getGlowStyle = () => {
        if (type === 'glow') {
            return {
                '--db-glow-color': glowColor,
            } as React.CSSProperties;
        }
        return {};
    };

    const classes = classNames(
        'designbase-animation-text',
        `designbase-animation-text--${type}`,
        `designbase-animation-text--${size}`,
        `designbase-animation-text--${color}`,
        `designbase-animation-text--${weight}`,
        `designbase-animation-text--${align}`,
        `designbase-animation-text--${direction}`,
        {
            'designbase-animation-text--visible': isVisible,
            'designbase-animation-text--animating': isAnimating,
            'designbase-animation-text--clickable': clickable,
            'designbase-animation-text--disabled': disabled,
        },
        className
    );

    const style = {
        ...getGradientStyle(),
        ...getWaveStyle(),
        ...getGlowStyle(),
        '--db-animation-speed': `${speed}ms`,
        '--db-text-custom': customColor,
    } as React.CSSProperties & {
        '--db-animation-speed': string;
        '--db-text-custom'?: string;
    };

    const renderText = () => {
        if (type === 'typing') {
            return displayText;
        }
        return children;
    };

    return (
        <div
            ref={textRef}
            className={classes}
            style={style}
            onClick={handleClick}
        >
            {renderText()}
        </div>
    );
};

export default AnimationText;
