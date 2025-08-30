/**
 * VolumeDownIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface VolumeDownIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const VolumeDownIcon: React.FC<VolumeDownIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M14.075 4.074a.75.75 0 0 1 .425.676v14a.75.75 0 0 1-1.219.586L8.488 15.5H4.75a.75.75 0 0 1-.75-.75v-6A.75.75 0 0 1 4.75 8h3.737l4.794-3.836a.75.75 0 0 1 .794-.09M13 6.31 9.219 9.336a.75.75 0 0 1-.469.164H5.5V14h3.25a.75.75 0 0 1 .469.164L13 17.19zM17.72 7.72a.75.75 0 0 1 1.06 0c1.025 1.025 1.72 2.51 1.72 4.03 0 1.485-.571 2.998-1.748 4.057a.75.75 0 1 1-1.004-1.114C18.571 13.952 19 12.865 19 11.75c0-1.08-.506-2.195-1.28-2.97a.75.75 0 0 1 0-1.06" clipRule="evenodd"/>
    </svg>
  );
};

VolumeDownIcon.displayName = 'VolumeDownIcon';
export default VolumeDownIcon;
