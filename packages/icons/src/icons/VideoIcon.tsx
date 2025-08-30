/**
 * VideoIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface VideoIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const VideoIcon: React.FC<VideoIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M21.12 6.097a.75.75 0 0 1 .38.653v10a.75.75 0 0 1-1.136.643l-5-3a.75.75 0 1 1 .772-1.286L20 15.425v-7.35l-3.864 2.318a.75.75 0 1 1-.772-1.286l5-3a.75.75 0 0 1 .755-.01" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M2 5.75A.75.75 0 0 1 2.75 5h13a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75zm1.5.75V17H15V6.5z" clipRule="evenodd"/>
    </svg>
  );
};

VideoIcon.displayName = 'VideoIcon';
export default VideoIcon;
