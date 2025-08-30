/**
 * VolumeUpFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface VolumeUpFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const VolumeUpFilledIcon: React.FC<VolumeUpFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M12.4 4.2c-.3-.2-.8-.1-1.1.1L6.6 8.1H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h3.6l4.7 3.8c.2.1.4.2.6.2h.4c.3-.2.6-.5.6-.9V5.1q0-.6-.6-.9zM18.8 4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4c1.7 1.7 2.6 3.9 2.6 6.4s-.9 4.6-2.6 6.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3c2-2.2 3.2-4.9 3.2-7.8s-1.1-5.7-3.2-7.8"/><path fill={getColorValue()} d="M16.2 7.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4c.7.7 1.2 1.8 1.2 2.8s-.4 2.1-1.2 2.8c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5 0 .7-.3c1.2-1 1.8-2.6 1.8-4.2s-.7-3.1-1.8-4.2"/>
    </svg>
  );
};

VolumeUpFilledIcon.displayName = 'VolumeUpFilledIcon';
export default VolumeUpFilledIcon;
