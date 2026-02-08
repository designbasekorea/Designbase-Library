import React from 'react';
import type { AuroraIntensity } from './types';

export interface MeshAuroraLayerProps {
    colors: string[];
    speed: number;
    blur: number;
    intensity: AuroraIntensity;
    theme: 'light' | 'dark';
}

const MeshAuroraLayer: React.FC<MeshAuroraLayerProps> = ({
    colors,
    speed,
    blur,
    intensity,
    theme,
}) => {
    const baseOpacity =
        intensity === 'subtle' ? 0.3 : intensity === 'medium' ? 0.6 : 0.8;
    const duration = Math.max(5, speed / 1000);

    const palette =
        colors.length >= 3
            ? colors
            : ['#4f46e5', '#ec4899', '#06b6d4', '#8b5cf6'];

    const blendMode =
        theme === 'dark' ? 'screen' : 'multiply';
    const filterStyle = `blur(${blur}px)`;

    const blobBaseClass = 'designbase-animation-background__aurora-blob';

    return (
        <div className="designbase-animation-background__aurora-mesh">
            <div
                className={blobBaseClass}
                style={{
                    backgroundColor: palette[0],
                    filter: filterStyle,
                    opacity: baseOpacity,
                    animationDuration: `${duration}s`,
                    top: '-10%',
                    left: '-10%',
                    animationDelay: '0s',
                    mixBlendMode: blendMode,
                }}
            />
            <div
                className={blobBaseClass}
                style={{
                    backgroundColor: palette[1],
                    filter: filterStyle,
                    opacity: baseOpacity,
                    animationDuration: `${duration * 1.2}s`,
                    top: '-10%',
                    right: '-10%',
                    animationDelay: '2s',
                    mixBlendMode: blendMode,
                }}
            />
            <div
                className={blobBaseClass}
                style={{
                    backgroundColor: palette[2],
                    filter: filterStyle,
                    opacity: baseOpacity,
                    animationDuration: `${duration * 1.5}s`,
                    bottom: '-20%',
                    left: '20%',
                    animationDelay: '4s',
                    mixBlendMode: blendMode,
                }}
            />
            {palette[3] && (
                <div
                    className={blobBaseClass}
                    style={{
                        backgroundColor: palette[3],
                        filter: filterStyle,
                        opacity: baseOpacity,
                        animationDuration: `${duration * 1.1}s`,
                        bottom: '-10%',
                        right: '-10%',
                        animationDelay: '1s',
                        mixBlendMode: blendMode,
                    }}
                />
            )}
            <div
                className="designbase-animation-background__aurora-noise"
                style={{
                    opacity: theme === 'dark' ? 0.03 : 0.05,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default MeshAuroraLayer;
