/**
 * StarFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface StarFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const StarFilledIcon: React.FC<StarFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M23.038 8.925c-.1-.4-.4-.6-.8-.7l-6.4-.9-2.9-5.8c-.3-.7-1.5-.7-1.8 0l-2.9 5.8-6.4.9c-.4 0-.7.3-.8.7s0 .8.3 1l4.6 4.5-1.1 6.4c0 .4 0 .8.4 1 .3.2.7.3 1.1 0l5.7-3 5.7 3c.1 0 .3.1.5.1s.4 0 .6-.2c.3-.2.5-.6.4-1l-1.1-6.4 4.6-4.5c.3-.3.4-.7.3-1z"/>
    </svg>
  );
};

StarFilledIcon.displayName = 'StarFilledIcon';
export default StarFilledIcon;
