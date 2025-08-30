/**
 * ThumbDownFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ThumbDownFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ThumbDownFilledIcon: React.FC<ThumbDownFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M2.975 15.023A3 3 0 0 0 5.191 16h2.81v3c0 1.332.67 2.61 1.791 3.418 1.236.891 2.827 1.084 4.484.544.424-.138.725-.519.725-.965V16h1.002l-.002-11a2 2 0 0 0-2-2H6.742a4 4 0 0 0-3.985 3.639l-.554 6.09a3 3 0 0 0 .772 2.294M18 16h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1"/>
    </svg>
  );
};

ThumbDownFilledIcon.displayName = 'ThumbDownFilledIcon';
export default ThumbDownFilledIcon;
