/**
 * DesktopIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DesktopIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M4.75 4.5c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-9c0-.69-.56-1.25-1.25-1.25zM2 5.75A2.75 2.75 0 0 1 4.75 3h14a2.75 2.75 0 0 1 2.75 2.75v9a2.75 2.75 0 0 1-2.75 2.75h-14A2.75 2.75 0 0 1 2 14.75zM15.75 20.5h-8V19h8z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11 19.75v-3h1.5v3z" clipRule="evenodd"/>
    </svg>
  );
};

DesktopIcon.displayName = 'DesktopIcon';
export default DesktopIcon;
