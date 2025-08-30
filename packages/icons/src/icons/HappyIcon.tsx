/**
 * HappyIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface HappyIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const HappyIcon: React.FC<HappyIconProps> = ({
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
      <path fill={getColorValue()} d="M8.75 11.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15.75 11.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path fill={getColorValue()} fillRule="evenodd" d="M12.25 3.5a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5M2 12.25C2 6.59 6.59 2 12.25 2S22.5 6.59 22.5 12.25 17.91 22.5 12.25 22.5 2 17.91 2 12.25" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M8.78 14.42c1.907 1.907 5.033 1.907 6.94 0l1.06 1.06c-2.493 2.493-6.567 2.493-9.06 0z" clipRule="evenodd"/>
    </svg>
  );
};

HappyIcon.displayName = 'HappyIcon';
export default HappyIcon;
