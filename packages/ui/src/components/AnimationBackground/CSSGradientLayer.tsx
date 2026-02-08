import React from 'react';
import type { AnimationType, DirectionType } from './types';

export interface CSSGradientLayerProps {
    type: AnimationType;
    direction: DirectionType;
    colors: string[];
    speed: number;
}

const CSSGradientLayer: React.FC<CSSGradientLayerProps> = ({
    type,
    direction,
    colors,
    speed,
}) => {
    const getBackgroundStyle = (): React.CSSProperties => {
        const safeColors = colors.length > 0 ? colors : ['#ccc'];
        const gradientStr = safeColors.join(', ');

        if (type === 'gradient') {
            let angle = '90deg';
            switch (direction) {
                case 'up':
                    angle = '0deg';
                    break;
                case 'down':
                    angle = '180deg';
                    break;
                case 'left':
                    angle = '270deg';
                    break;
                case 'right':
                    angle = '90deg';
                    break;
                case 'diagonal':
                    angle = '45deg';
                    break;
                case 'radial':
                    return {
                        backgroundImage: `radial-gradient(circle, ${gradientStr})`,
                        backgroundSize: '200% 200%',
                    };
                default:
                    break;
            }
            return {
                backgroundImage: `linear-gradient(${angle}, ${gradientStr})`,
                backgroundSize: '200% 200%',
            };
        }
        return {};
    };

    const duration = `${Math.max(2, speed / 1000)}s`;

    return (
        <div
            className="designbase-animation-background__css-layer"
            style={{
                ...getBackgroundStyle(),
                animation: `designbase-gradient-move ${duration} ease infinite`,
            }}
        >
            <style>{`
                @keyframes designbase-gradient-move {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    );
};

export default CSSGradientLayer;
