/**
 * Gradient 컴포넌트
 * 
 * 여러 색상으로 아름다운 그라데이션 배경을 생성하는 컴포넌트입니다.
 * 다양한 방향, 색상 조합, 애니메이션을 지원합니다.
 */

import React from 'react';
import clsx from 'clsx';
import './Gradient.scss';

export type GradientDirection = 
    | 'to-right' 
    | 'to-left' 
    | 'to-bottom' 
    | 'to-top' 
    | 'to-bottom-right' 
    | 'to-bottom-left' 
    | 'to-top-right' 
    | 'to-top-left'
    | 'radial';

export type GradientSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type GradientVariant = 'default' | 'animated' | 'mesh';

export interface GradientColor {
    /** 색상 값 */
    color: string;
    /** 색상 위치 (0-100) */
    position?: number;
}

export interface GradientProps {
    /** 그라데이션 색상들 */
    colors: GradientColor[];
    /** 그라데이션 방향 */
    direction?: GradientDirection;
    /** 그라데이션 크기 */
    size?: GradientSize;
    /** 그라데이션 변형 */
    variant?: GradientVariant;
    /** 애니메이션 속도 (초) */
    animationDuration?: number;
    /** 애니메이션 지연 (초) */
    animationDelay?: number;
    /** 전체 너비 사용 */
    fullWidth?: boolean;
    /** 전체 높이 사용 */
    fullHeight?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 자식 요소 */
    children?: React.ReactNode;
}

export const Gradient: React.FC<GradientProps> = ({
    colors,
    direction = 'to-right',
    size = 'md',
    variant = 'default',
    animationDuration = 3,
    animationDelay = 0,
    fullWidth = false,
    fullHeight = false,
    className,
    children,
}) => {
    const generateGradientStyle = () => {
        if (colors.length === 0) return {};

        const colorStops = colors
            .map(color => {
                const position = color.position !== undefined ? `${color.position}%` : '';
                return position ? `${color.color} ${position}` : color.color;
            })
            .join(', ');

        if (direction === 'radial') {
            return {
                background: `radial-gradient(circle, ${colorStops})`,
            };
        }

        const directionMap: Record<GradientDirection, string> = {
            'to-right': 'to right',
            'to-left': 'to left',
            'to-bottom': 'to bottom',
            'to-top': 'to top',
            'to-bottom-right': 'to bottom right',
            'to-bottom-left': 'to bottom left',
            'to-top-right': 'to top right',
            'to-top-left': 'to top left',
            'radial': 'circle',
        };

        return {
            background: `linear-gradient(${directionMap[direction]}, ${colorStops})`,
        };
    };

    const generateAnimatedStyle = () => {
        if (variant !== 'animated') return {};

        const baseStyle = generateGradientStyle();
        const animatedColors = colors.map(color => ({
            ...color,
            position: color.position !== undefined ? color.position : 0,
        }));

        // 애니메이션을 위한 색상 변형
        const animatedStops = animatedColors
            .map((color, index) => {
                const animatedPosition = (color.position + index * 20) % 100;
                return `${color.color} ${animatedPosition}%`;
            })
            .join(', ');

        const directionMap: Record<GradientDirection, string> = {
            'to-right': 'to right',
            'to-left': 'to left',
            'to-bottom': 'to bottom',
            'to-top': 'to top',
            'to-bottom-right': 'to bottom right',
            'to-bottom-left': 'to bottom left',
            'to-top-right': 'to top right',
            'to-top-left': 'to top left',
            'radial': 'circle',
        };

        return {
            ...baseStyle,
            background: `linear-gradient(${directionMap[direction]}, ${animatedStops})`,
            animation: `gradient-shift ${animationDuration}s ease-in-out ${animationDelay}s infinite`,
        };
    };

    const generateMeshStyle = () => {
        if (variant !== 'mesh') return {};

        const meshColors = colors.slice(0, 4); // 메시는 최대 4개 색상 사용
        const colorStops = meshColors
            .map((color, index) => {
                const position = color.position !== undefined ? color.position : (index * 33.33);
                return `${color.color} ${position}%`;
            })
            .join(', ');

        return {
            background: `conic-gradient(from 0deg, ${colorStops})`,
        };
    };

    const getStyle = () => {
        switch (variant) {
            case 'animated':
                return generateAnimatedStyle();
            case 'mesh':
                return generateMeshStyle();
            default:
                return generateGradientStyle();
        }
    };

    const classes = clsx(
        'designbase-gradient',
        `designbase-gradient--size-${size}`,
        `designbase-gradient--variant-${variant}`,
        `designbase-gradient--direction-${direction}`,
        {
            'designbase-gradient--full-width': fullWidth,
            'designbase-gradient--full-height': fullHeight,
        },
        className
    );

    return (
        <div className={classes} style={getStyle()}>
            {children}
        </div>
    );
};

export default Gradient;
