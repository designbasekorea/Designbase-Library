/**
 * SortAscendingFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface SortAscendingFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const SortAscendingFilledIcon: React.FC<SortAscendingFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M8.8 3H5.2A2.2 2.2 0 0 0 3 5.2v3.6A2.2 2.2 0 0 0 5.2 11h3.6A2.2 2.2 0 0 0 11 8.8V5.2A2.2 2.2 0 0 0 8.8 3M8.8 13H5.2A2.2 2.2 0 0 0 3 15.2v3.6A2.2 2.2 0 0 0 5.2 21h3.6a2.2 2.2 0 0 0 2.2-2.2v-3.6A2.2 2.2 0 0 0 8.8 13M21.707 8.293 17 3.586l-4.707 4.707 1.414 1.414L16 7.414V21h2V7.414l2.293 2.293z"/>
    </svg>
  );
};

SortAscendingFilledIcon.displayName = 'SortAscendingFilledIcon';
export default SortAscendingFilledIcon;
