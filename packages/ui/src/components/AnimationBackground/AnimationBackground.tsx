import React, { useMemo } from 'react';
import classNames from 'classnames';
import type { AnimationBackgroundProps } from './types';
import CanvasLayer from './CanvasLayer';
import CSSGradientLayer from './CSSGradientLayer';
import MeshAuroraLayer from './MeshAuroraLayer';
import GridOverlay from './GridOverlay';
import './AnimationBackground.scss';

const AnimationBackground: React.FC<AnimationBackgroundProps> = ({
    type = 'gradient',
    theme = 'dark',
    intensity = 'subtle',
    blur = 80,
    speed = 3000,
    repeat = 0,
    direction = 'left',
    colors = ['#667eea', '#764ba2', '#f093fb'],
    width = '100%',
    height = '100%',
    borderRadius = 0,
    opacity = 1,
    blendMode = 'normal',
    particleCount = 50,
    particleSize = 2,
    starCount = 100,
    starSize = 1.5,
    clickable = false,
    disabled = false,
    className = '',
    onClick,
    children,
    showGrid = false,
    gridSize = 40,
    gridColor,
    gridOpacity = 0.1,
}) => {
    const backgroundColor =
        theme === 'dark' ? 'var(--db-surface-base, #0f172a)' : 'var(--db-surface-base, #ffffff)';
    const effectiveGridColor =
        gridColor ?? (theme === 'dark' ? '#ffffff' : '#000000');

    const containerStyle: React.CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
        opacity,
        mixBlendMode: blendMode,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: type !== 'gradient' ? backgroundColor : undefined,
    };

    const content = useMemo(() => {
        if (disabled) return null;

        switch (type) {
            case 'particles':
            case 'stars':
            case 'wave':
            case 'pulse':
                return (
                    <CanvasLayer
                        type={type}
                        colors={colors}
                        speed={speed}
                        particleCount={particleCount}
                        particleSize={particleSize}
                        starCount={starCount}
                        starSize={starSize}
                        intensity={intensity}
                        clickable={clickable}
                    />
                );
            case 'aurora':
                return (
                    <MeshAuroraLayer
                        colors={colors}
                        speed={speed}
                        blur={blur}
                        intensity={intensity}
                        theme={theme}
                    />
                );
            case 'gradient':
                return (
                    <CSSGradientLayer
                        type={type}
                        direction={direction}
                        colors={colors}
                        speed={speed}
                    />
                );
            default:
                return null;
        }
    }, [
        type,
        disabled,
        colors,
        speed,
        intensity,
        blur,
        theme,
        particleCount,
        particleSize,
        starCount,
        starSize,
        clickable,
        direction,
    ]);

    const classes = classNames(
        'designbase-animation-background',
        `designbase-animation-background--${type}`,
        {
            'designbase-animation-background--clickable': clickable,
            'designbase-animation-background--disabled': disabled,
        },
        className
    );

    return (
        <div
            className={classes}
            style={containerStyle}
            onClick={clickable && !disabled ? onClick : undefined}
        >
            <div
                className="designbase-animation-background__layers"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            >
                {content}
            </div>

            {showGrid && (
                <GridOverlay
                    size={gridSize}
                    color={effectiveGridColor}
                    opacity={gridOpacity}
                />
            )}

            {children && (
                <div
                    className="designbase-animation-background__content"
                    style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default AnimationBackground;
