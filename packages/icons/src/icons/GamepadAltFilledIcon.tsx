/**
 * GamepadAltFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface GamepadAltFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const GamepadAltFilledIcon: React.FC<GamepadAltFilledIconProps> = ({
  size = 16,
  className,
  color,
  style,
  variant = 'primary',
  ...props
}) => {
  const styleSafe = (style && typeof style === 'object') ? style : undefined;
  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  // 디자인 토큰 기반 색상 결정
  const getColorValue = () => {
    if (color) return color;
    
    const colorMap = {
      primary: 'var(--color-semantic-component-icon-primary)',
      secondary: 'var(--color-semantic-component-icon-secondary)',
      success: 'var(--color-semantic-component-icon-success)',
      warning: 'var(--color-semantic-component-icon-warning)',
      danger: 'var(--color-semantic-component-icon-danger)',
      info: 'var(--color-semantic-component-icon-info)',
      muted: 'var(--color-semantic-component-icon-muted)',
      inverse: 'var(--color-semantic-component-icon-inverse)'
    };
    
    return colorMap[variant] || colorMap.primary;
  };

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      className={className}
      style={styleSafe}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill={getColorValue()} d="M21.696 7.975c-.149-1.63-1.61-3.072-3.192-3.075H5.5c-1.794 0-3.2 1.396-3.198 3.075l-.5 8.272c-.066 1.262.572 2.413 1.667 3.004 1.098.594 2.41.499 3.443-.26l2.123-1.64c.317-.157.536-.252.766-.252h4.4c.361 0 .53.073.688.19l2.221 1.717a3.2 3.2 0 0 0 1.904.63c.519 0 1.039-.127 1.519-.386 1.094-.591 1.732-1.742 1.666-3.012l-.502-8.265zM11 12H9.5v1.5h-2V12H6v-2h1.5V8.5h2V10H11zm3.5-.9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
    </svg>
  );
};

GamepadAltFilledIcon.displayName = 'GamepadAltFilledIcon';
export default GamepadAltFilledIcon;
