import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './AnimationBackground.scss';

export interface AnimationBackgroundProps {
    /** 애니메이션 타입 */
    type?: 'gradient' | 'rainbow' | 'pulse' | 'wave' | 'particles' | 'stars' | 'aurora' | 'fire' | 'ocean' | 'sunset';
    /** 애니메이션 속도 (ms) */
    speed?: number;
    /** 애니메이션 반복 횟수 (0은 무한 반복) */
    repeat?: number;
    /** 애니메이션 지연 시간 (ms) */
    delay?: number;
    /** 애니메이션 방향 */
    direction?: 'left' | 'right' | 'up' | 'down' | 'diagonal' | 'radial';
    /** 배경 색상들 */
    colors?: string[];
    /** 컴포넌트 너비 */
    width?: string | number;
    /** 컴포넌트 높이 */
    height?: string | number;
    /** 테두리 반경 */
    borderRadius?: string | number;
    /** 투명도 */
    opacity?: number;
    /** 블렌드 모드 */
    blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'soft-light' | 'hard-light' | 'color-dodge' | 'color-burn' | 'darken' | 'lighten' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    /** 파티클 개수 (particles 타입용) */
    particleCount?: number;
    /** 파티클 크기 (particles 타입용) */
    particleSize?: number;
    /** 별 개수 (stars 타입용) */
    starCount?: number;
    /** 별 크기 (stars 타입용) */
    starSize?: number;
    /** 클릭 가능 여부 */
    clickable?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 클래스명 */
    className?: string;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 자식 요소 */
    children?: React.ReactNode;
}

const AnimationBackground: React.FC<AnimationBackgroundProps> = ({
    type = 'gradient',
    speed = 3000,
    repeat = 0,
    delay = 0,
    direction = 'left',
    colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
    width = '100%',
    height = '200px',
    borderRadius = 0,
    opacity = 1,
    blendMode = 'normal',
    particleCount = 50,
    particleSize = 2,
    starCount = 100,
    starSize = 2,
    clickable = false,
    disabled = false,
    className,
    onClick,
    children,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // 반복 애니메이션
    useEffect(() => {
        if (repeat > 0) {
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
    }, [repeat, speed, isVisible]);

    // Canvas 애니메이션 (particles, stars 타입용)
    useEffect(() => {
        if ((type === 'particles' || type === 'stars') && canvasRef.current && isVisible) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const resizeCanvas = () => {
                const rect = containerRef.current?.getBoundingClientRect();
                if (rect) {
                    canvas.width = rect.width;
                    canvas.height = rect.height;
                }
            };

            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            const particles: Array<{
                x: number;
                y: number;
                vx: number;
                vy: number;
                size: number;
                color: string;
            }> = [];

            // 파티클 초기화
            const initParticles = () => {
                particles.length = 0;
                const count = type === 'particles' ? particleCount : starCount;
                const size = type === 'particles' ? particleSize : starSize;

                for (let i = 0; i < count; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        size: Math.random() * size + 1,
                        color: colors[Math.floor(Math.random() * colors.length)],
                    });
                }
            };

            initParticles();

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach(particle => {
                    // 위치 업데이트
                    particle.x += particle.vx;
                    particle.y += particle.vy;

                    // 경계 처리
                    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                    // 그리기
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = particle.color;
                    ctx.fill();
                });

                requestAnimationFrame(animate);
            };

            animate();

            return () => {
                window.removeEventListener('resize', resizeCanvas);
            };
        }
    }, [type, isVisible, colors, particleCount, particleSize, starCount, starSize]);

    const handleClick = () => {
        if (clickable && !disabled && onClick) {
            onClick();
        }
    };

    const getGradientStyle = () => {
        if (type === 'gradient' || type === 'rainbow') {
            const gradientColors = type === 'rainbow'
                ? ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080']
                : colors;

            if (direction === 'radial') {
                return {
                    background: `radial-gradient(circle, ${gradientColors.join(', ')})`,
                    backgroundSize: '400% 400%',
                };
            } else {
                const angle = direction === 'left' ? '90deg' :
                    direction === 'right' ? '270deg' :
                        direction === 'up' ? '0deg' :
                            direction === 'down' ? '180deg' :
                                direction === 'diagonal' ? '45deg' : '90deg';

                return {
                    background: `linear-gradient(${angle}, ${gradientColors.join(', ')})`,
                    backgroundSize: '400% 400%',
                };
            }
        }
        return {};
    };

    const getWaveStyle = () => {
        if (type === 'wave') {
            return {
                '--wave-colors': colors.join(', '),
            } as React.CSSProperties;
        }
        return {};
    };

    const getAuroraStyle = () => {
        if (type === 'aurora') {
            return {
                '--aurora-colors': colors.join(', '),
            } as React.CSSProperties;
        }
        return {};
    };

    const getFireStyle = () => {
        if (type === 'fire') {
            return {
                '--fire-colors': colors.join(', '),
            } as React.CSSProperties;
        }
        return {};
    };

    const getOceanStyle = () => {
        if (type === 'ocean') {
            return {
                '--ocean-colors': colors.join(', '),
            } as React.CSSProperties;
        }
        return {};
    };

    const getSunsetStyle = () => {
        if (type === 'sunset') {
            return {
                '--sunset-colors': colors.join(', '),
            } as React.CSSProperties;
        }
        return {};
    };

    const classes = classNames(
        'designbase-animation-background',
        `designbase-animation-background--${type}`,
        `designbase-animation-background--${direction}`,
        {
            'designbase-animation-background--visible': isVisible,
            'designbase-animation-background--animating': isAnimating,
            'designbase-animation-background--clickable': clickable,
            'designbase-animation-background--disabled': disabled,
        },
        className
    );

    const style = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
        opacity,
        mixBlendMode: blendMode,
        ...getGradientStyle(),
        ...getWaveStyle(),
        ...getAuroraStyle(),
        ...getFireStyle(),
        ...getOceanStyle(),
        ...getSunsetStyle(),
        '--db-animation-speed': `${speed}ms`,
    } as React.CSSProperties & { '--db-animation-speed': string };

    const renderContent = () => {
        if (type === 'particles' || type === 'stars') {
            return (
                <canvas
                    ref={canvasRef}
                    className="designbase-animation-background__canvas"
                    style={{ width: '100%', height: '100%' }}
                />
            );
        }
        return children;
    };

    return (
        <div
            ref={containerRef}
            className={classes}
            style={style}
            onClick={handleClick}
        >
            {renderContent()}
        </div>
    );
};

export default AnimationBackground;
