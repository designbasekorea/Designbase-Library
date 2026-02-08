import type React from 'react';

export type AuroraIntensity = 'subtle' | 'medium' | 'vivid';

export type AnimationType =
    | 'gradient'
    | 'pulse'
    | 'wave'
    | 'particles'
    | 'stars'
    | 'aurora';

export type DirectionType = 'left' | 'right' | 'up' | 'down' | 'diagonal' | 'radial';

export interface AnimationBackgroundProps {
    /** 애니메이션 타입 */
    type?: AnimationType;
    /** 테마 (다크/라이트, 오로라·배경 톤 조절) */
    theme?: 'light' | 'dark';
    /** 오로라/배경 강도 */
    intensity?: AuroraIntensity;
    /** 오로라 블러 강도 (px) */
    blur?: number;
    /** 애니메이션 속도 (ms) */
    speed?: number;
    /** 반복 횟수 (0 = 무한) */
    repeat?: number;
    /** 지연 (ms) */
    delay?: number;
    /** 방향 */
    direction?: DirectionType;
    /** 배경 색상 */
    colors?: string[];
    /** 너비 */
    width?: string | number;
    /** 높이 */
    height?: string | number;
    /** 테두리 반경 */
    borderRadius?: string | number;
    /** 투명도 */
    opacity?: number;
    /** 블렌드 모드 */
    blendMode?: React.CSSProperties['mixBlendMode'];
    /** 파티클 개수 */
    particleCount?: number;
    /** 파티클 크기 */
    particleSize?: number;
    /** 별 개수 */
    starCount?: number;
    /** 별 크기 */
    starSize?: number;
    /** 클릭 가능 */
    clickable?: boolean;
    /** 비활성화 */
    disabled?: boolean;
    /** 클래스명 */
    className?: string;
    /** 클릭 핸들러 */
    onClick?: () => void;
    /** 자식 */
    children?: React.ReactNode;
    /** 그리드 오버레이 표시 */
    showGrid?: boolean;
    /** 그리드 칸 크기 (px) */
    gridSize?: number;
    /** 그리드 색상 */
    gridColor?: string;
    /** 그리드 투명도 */
    gridOpacity?: number;
}
