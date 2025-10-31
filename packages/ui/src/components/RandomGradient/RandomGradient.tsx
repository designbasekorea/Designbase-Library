/**
 * RandomGradient 컴포넌트
 * 
 * 랜덤하게 생성되는 그라데이션 배경 컴포넌트
 * 타임세일, 히어로 섹션, 카드 배경 등에 활용
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import clsx from 'clsx';
import './RandomGradient.scss';

export type GradientScheme = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'purple' | 'ocean' | 'sunset';
export type GradientTone = 'light' | 'vivid' | 'dark';

// 톤별 색상 팔레트 (Light Tone은 더 밝은 색상만 사용)
const colorPalettes = {
    primary: {
        light: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd'], // blue-50 ~ blue-300 (더 밝게, blue-400 제거)
        vivid: ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'], // blue-500 ~ blue-900
        dark: ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b'], // slate-900 ~ slate-600 (더 어둡게)
    },
    secondary: {
        light: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1'], // slate-50 ~ slate-300 (더 밝게, slate-400 제거)
        vivid: ['#6b7280', '#4b5563', '#374151', '#1f2937', '#111827'], // gray-500 ~ gray-900
        dark: ['#0f0f0f', '#1a1a1a', '#262626', '#404040', '#525252'], // neutral-950 ~ neutral-600 (더 어둡게)
    },
    success: {
        light: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac'], // green-50 ~ green-300 (더 밝게, green-400 제거)
        vivid: ['#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'], // green-500 ~ green-900
        dark: ['#052e16', '#14532d', '#166534', '#15803d', '#16a34a'], // green-950 ~ green-600 (더 어둡게)
    },
    warning: {
        light: ['#fffbeb', '#fef3c7', '#fde68a'], // amber-50 ~ amber-200 (더 밝게, amber-300 이상 제거)
        vivid: ['#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f'], // amber-600 ~ amber-900
        dark: ['#451a03', '#78350f', '#92400e', '#b45309', '#d97706'], // amber-950 ~ amber-600 (더 어둡게)
    },
    error: {
        light: ['#fef2f2', '#fecaca', '#fca5a5'], // red-50 ~ red-200 (더 밝게, red-300 이상 제거)
        vivid: ['#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d'], // red-500 ~ red-900
        dark: ['#450a0a', '#7f1d1d', '#991b1b', '#b91c1c', '#dc2626'], // red-950 ~ red-600 (더 어둡게)
    },
    info: {
        light: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd'], // blue-50 ~ blue-300 (더 밝게, blue-400 제거)
        vivid: ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'], // blue-500 ~ blue-900
        dark: ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b'], // slate-900 ~ slate-600 (더 어둡게)
    },
    purple: {
        light: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe'], // purple-50 ~ purple-300 (더 밝게, purple-400 제거)
        vivid: ['#a855f7', '#9333ea', '#7c3aed', '#6d28d9', '#5b21b6'], // purple-600 ~ purple-900
        dark: ['#3b0764', '#581c87', '#6b21a8', '#7c3aed', '#9333ea'], // purple-950 ~ purple-600 (더 어둡게)
    },
    ocean: {
        light: ['#f0fdfa', '#ccfbf1', '#99f6e4'], // teal-50 ~ teal-200 (더 밝게, teal-300 이상 제거)
        vivid: ['#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a'], // teal-500 ~ teal-900
        dark: ['#042f2e', '#134e4a', '#115e59', '#0f766e', '#0d9488'], // teal-950 ~ teal-600 (더 어둡게)
    },
    sunset: {
        light: ['#fff7ed', '#fed7aa', '#fdba74'], // orange-50 ~ orange-200 (더 밝게, orange-300 이상 제거)
        vivid: ['#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12'], // orange-600 ~ orange-900
        dark: ['#431407', '#7c2d12', '#9a3412', '#c2410c', '#ea580c'], // orange-950 ~ orange-600 (더 어둡게)
    },
};

export interface RandomGradientProps {
    /** 그라데이션 색상 계열 */
    scheme?: GradientScheme;
    /** 그라데이션 톤 */
    tone?: GradientTone;
    /** 너비 */
    width?: string | number;
    /** 높이 */
    height?: string | number;
    /** 블러 강도 (px) */
    blur?: number;
    /** 색상 개수 (3-6개) */
    colorCount?: number;
    /** 애니메이션 활성화 */
    animated?: boolean;
    /** 애니메이션 주기 (초) */
    animationDuration?: number;
    /** 오버레이 활성화 */
    overlay?: boolean;
    /** 오버레이 투명도 (0-1) */
    overlayOpacity?: number;
    /** 자식 요소 */
    children?: React.ReactNode;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const RandomGradient: React.FC<RandomGradientProps> = ({
    scheme = 'primary',
    tone = 'vivid',
    width = '100%',
    height = '600px',
    blur = 80,
    colorCount = 4,
    animated = false,
    animationDuration = 10,
    overlay = true,
    overlayOpacity = 0.2,
    children,
    className,
}) => {
    // 블러 최소값 80으로 제한 (더 부드러운 그라데이션을 위해)
    const minBlur = Math.max(80, blur);

    // 그라데이션 생성 함수
    const generateGradient = useMemo(() => {
        return () => {
            const schemeColors = colorPalettes[scheme][tone];
            const numColors = Math.min(6, Math.max(3, colorCount));

            const colors: string[] = [];
            for (let i = 0; i < numColors; i++) {
                const randomColor = schemeColors[Math.floor(Math.random() * schemeColors.length)];
                colors.push(randomColor);
            }

            const positions = Array.from({ length: numColors }, () => Math.random() * 100).sort((a, b) => a - b);

            const gradientStops = colors.map((color, i) => `${color} ${positions[i]}%`).join(', ');

            const centerX = Math.random() * 100;
            const centerY = Math.random() * 100;

            return {
                background: `radial-gradient(circle at ${centerX}% ${centerY}%, ${gradientStops})`,
                filter: `blur(${minBlur}px)`,
                transition: animated ? `background ${animationDuration}s ease-in-out` : 'none', // 블러는 transition 적용 안 함
            };
        };
    }, [scheme, tone, colorCount, minBlur, animationDuration, animated]);

    // 초기 그라데이션 생성 함수
    const createInitialGradient = useCallback(() => {
        const schemeColors = colorPalettes[scheme][tone];
        const numColors = Math.min(6, Math.max(3, colorCount));

        const colors: string[] = [];
        for (let i = 0; i < numColors; i++) {
            const randomColor = schemeColors[Math.floor(Math.random() * schemeColors.length)];
            colors.push(randomColor);
        }

        const positions = Array.from({ length: numColors }, () => Math.random() * 100).sort((a, b) => a - b);
        const gradientStops = colors.map((color, i) => `${color} ${positions[i]}%`).join(', ');
        const centerX = Math.random() * 100;
        const centerY = Math.random() * 100;

        return {
            background: `radial-gradient(circle at ${centerX}% ${centerY}%, ${gradientStops})`,
            filter: `blur(${minBlur}px)`,
            transition: animated ? `background ${animationDuration}s ease-in-out` : 'none',
        };
    }, [scheme, tone, colorCount, minBlur, animated, animationDuration]);

    // 초기 그라데이션을 즉시 계산하여 설정 (useState 초기값 함수 사용)
    const [gradientStyle, setGradientStyle] = useState<React.CSSProperties>(() => {
        const schemeColors = colorPalettes[scheme][tone];
        const numColors = Math.min(6, Math.max(3, colorCount));

        const colors: string[] = [];
        for (let i = 0; i < numColors; i++) {
            const randomColor = schemeColors[Math.floor(Math.random() * schemeColors.length)];
            colors.push(randomColor);
        }

        const positions = Array.from({ length: numColors }, () => Math.random() * 100).sort((a, b) => a - b);
        const gradientStops = colors.map((color, i) => `${color} ${positions[i]}%`).join(', ');
        const centerX = Math.random() * 100;
        const centerY = Math.random() * 100;

        return {
            background: `radial-gradient(circle at ${centerX}% ${centerY}%, ${gradientStops})`,
            filter: `blur(${minBlur}px)`,
            transition: animated ? `background ${animationDuration}s ease-in-out` : 'none',
        };
    });

    // props 변경 시 그라데이션 업데이트
    useEffect(() => {
        setGradientStyle(createInitialGradient());
    }, [createInitialGradient]);

    // 애니메이션 업데이트
    useEffect(() => {
        if (animated) {
            const interval = setInterval(() => {
                setGradientStyle(generateGradient());
            }, animationDuration * 1000);

            return () => clearInterval(interval);
        }
    }, [animated, animationDuration, generateGradient]);

    const classes = clsx(
        'designbase-random-gradient',
        {
            'designbase-random-gradient--animated': animated,
            'designbase-random-gradient--with-overlay': overlay,
        },
        className
    );

    const containerStyle: React.CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };

    const overlayStyle: React.CSSProperties = overlay
        ? {
            background: `linear-gradient(45deg, ${colorPalettes[scheme][tone][0]}, ${colorPalettes[scheme][tone][1]})`,
            opacity: overlayOpacity,
        }
        : {};

    return (
        <div className={classes} style={containerStyle}>
            {/* 그라데이션 배경 레이어 */}
            <div className="designbase-random-gradient__background" style={gradientStyle} />

            {/* 오버레이 레이어 */}
            {overlay && (
                <div className="designbase-random-gradient__overlay" style={overlayStyle} />
            )}

            {/* 컨텐츠 레이어 */}
            {children && (
                <div className="designbase-random-gradient__content">
                    {children}
                </div>
            )}
        </div>
    );
};

RandomGradient.displayName = 'RandomGradient';

export default RandomGradient;
