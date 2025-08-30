/**
 * ShareAndroidFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ShareAndroidFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ShareAndroidFilledIcon: React.FC<ShareAndroidFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M17.4 15.1c-.9 0-1.8.4-2.4.9l-6.2-3.6c0-.3.1-.6.1-.9v-.8l6-2.8c.6.7 1.5 1.1 2.6 1.1 2 0 3.5-1.5 3.5-3.5S19.5 2 17.5 2 14 3.5 14 5.5v.6L7.9 9c-.6-.6-1.5-1-2.4-1C3.5 8 2 9.5 2 11.5S3.5 15 5.5 15s1.7-.3 2.4-.9l6.3 3.6c0 .3-.1.5-.1.8 0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5-1.5-3.5-3.5-3.5z"/>
    </svg>
  );
};

ShareAndroidFilledIcon.displayName = 'ShareAndroidFilledIcon';
export default ShareAndroidFilledIcon;
