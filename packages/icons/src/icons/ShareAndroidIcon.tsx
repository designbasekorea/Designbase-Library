/**
 * ShareAndroidIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ShareAndroidIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ShareAndroidIcon: React.FC<ShareAndroidIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M3 11.25A3.226 3.226 0 0 1 6.25 8a3.226 3.226 0 0 1 3.25 3.25 3.226 3.226 0 0 1-3.25 3.25A3.226 3.226 0 0 1 3 11.25M6.25 9.5c-.986 0-1.75.764-1.75 1.75S5.264 13 6.25 13 8 12.236 8 11.25 7.236 9.5 6.25 9.5M15 5.25A3.226 3.226 0 0 1 18.25 2a3.226 3.226 0 0 1 3.25 3.25 3.226 3.226 0 0 1-3.25 3.25A3.226 3.226 0 0 1 15 5.25m3.25-1.75c-.986 0-1.75.764-1.75 1.75S17.264 7 18.25 7 20 6.236 20 5.25s-.764-1.75-1.75-1.75M15 18.25A3.226 3.226 0 0 1 18.25 15a3.226 3.226 0 0 1 3.25 3.25 3.226 3.226 0 0 1-3.25 3.25A3.226 3.226 0 0 1 15 18.25m3.25-1.75c-.986 0-1.75.764-1.75 1.75S17.264 20 18.25 20 20 19.236 20 18.25s-.764-1.75-1.75-1.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M16.73 6.032a.75.75 0 0 1-.362.997l-7.7 3.6a.75.75 0 0 1-.636-1.358l7.7-3.6a.75.75 0 0 1 .997.361M7.699 12.178a.75.75 0 0 1 1.023-.28l7.7 4.4a.75.75 0 0 1-.744 1.303l-7.7-4.4a.75.75 0 0 1-.28-1.023" clipRule="evenodd"/>
    </svg>
  );
};

ShareAndroidIcon.displayName = 'ShareAndroidIcon';
export default ShareAndroidIcon;
