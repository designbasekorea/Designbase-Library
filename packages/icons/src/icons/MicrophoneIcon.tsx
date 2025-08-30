/**
 * MicrophoneIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MicrophoneIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MicrophoneIcon: React.FC<MicrophoneIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M11.75 3.5A2.25 2.25 0 0 0 9.5 5.75v5a2.25 2.25 0 0 0 4.5 0v-5a2.254 2.254 0 0 0-2.25-2.25m-2.651-.402A3.75 3.75 0 0 1 15.5 5.75v5a3.754 3.754 0 0 1-3.75 3.75A3.75 3.75 0 0 1 8 10.75v-5c0-.995.395-1.949 1.099-2.652" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M6.27 16.23A7.76 7.76 0 0 1 4 10.75h1.5c0 1.657.659 3.247 1.83 4.42m0 0A6.25 6.25 0 0 0 18 10.75h1.5a7.749 7.749 0 0 1-13.23 5.48M15.75 22.5h-8V21h8z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11 21.75v-4h1.5v4z" clipRule="evenodd"/>
    </svg>
  );
};

MicrophoneIcon.displayName = 'MicrophoneIcon';
export default MicrophoneIcon;
