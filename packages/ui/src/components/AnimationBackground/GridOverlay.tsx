import React from 'react';

export interface GridOverlayProps {
    size?: number;
    color?: string;
    opacity?: number;
}

const GridOverlay: React.FC<GridOverlayProps> = ({
    size = 40,
    color = '#ffffff',
    opacity = 0.1,
}) => {
    const style: React.CSSProperties = {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        opacity,
        // 은은하게 전체에 라인 유지, 맨 아래만 살짝 페이드
        maskImage: 'linear-gradient(to bottom, black 0%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 92%, transparent 100%)',
    };

    return <div className="designbase-animation-background__grid-overlay" style={style} />;
};

export default GridOverlay;
