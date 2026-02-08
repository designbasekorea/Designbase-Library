import React, { useRef, useEffect, useCallback } from 'react';
import type { AnimationType, AuroraIntensity } from './types';
import { drawParticles, drawStars, drawWaves, drawPulse } from './renderers';
import type { Particle, Star } from './renderers';

export interface CanvasLayerProps {
    type: AnimationType;
    colors: string[];
    speed: number;
    particleCount: number;
    particleSize: number;
    starCount: number;
    starSize: number;
    intensity: AuroraIntensity;
    clickable: boolean;
}

const CanvasLayer: React.FC<CanvasLayerProps> = ({
    type,
    colors,
    speed,
    particleCount,
    particleSize,
    starCount,
    starSize,
    intensity,
    clickable,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number | undefined>(undefined);
    const frameCountRef = useRef<number>(0);
    const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

    const particlesRef = useRef<Particle[]>([]);
    const starsRef = useRef<Star[]>([]);
    const waveOffsetRef = useRef<number>(0);

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = container.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        ctx.clearRect(0, 0, width, height);

        const time = frameCountRef.current * (3000 / (speed || 3000));
        frameCountRef.current += 1;

        switch (type) {
            case 'particles':
                drawParticles(ctx, width, height, particlesRef, {
                    count: particleCount,
                    colors,
                    size: particleSize,
                    mouse: mouseRef.current,
                    clickable,
                });
                break;
            case 'stars':
                drawStars(ctx, width, height, starsRef, {
                    count: starCount,
                    colors,
                    size: starSize,
                    time,
                });
                break;
            case 'wave':
                drawWaves(ctx, width, height, {
                    colors,
                    offset: waveOffsetRef,
                    speedFactor: 10000 / (speed || 5000),
                });
                break;
            case 'pulse':
                drawPulse(ctx, width, height, {
                    colors,
                    time,
                    intensity,
                });
                break;
            default:
                break;
        }

        requestRef.current = requestAnimationFrame(animate);
    }, [
        type,
        colors,
        speed,
        particleCount,
        particleSize,
        starCount,
        starSize,
        intensity,
        clickable,
    ]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        particlesRef.current = [];
        starsRef.current = [];
        waveOffsetRef.current = 0;
        frameCountRef.current = 0;

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [animate, handleResize]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    const handleMouseLeave = () => {
        mouseRef.current = { x: -9999, y: -9999 };
    };

    return (
        <div
            ref={containerRef}
            className="designbase-animation-background__canvas-layer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <canvas ref={canvasRef} className="designbase-animation-background__canvas" />
        </div>
    );
};

export default CanvasLayer;
