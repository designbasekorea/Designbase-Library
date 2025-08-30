/**
 * WindowTerminalIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WindowTerminalIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WindowTerminalIcon: React.FC<WindowTerminalIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M5 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM2.25 6A2.75 2.75 0 0 1 5 3.25h14A2.75 2.75 0 0 1 21.75 6v12A2.75 2.75 0 0 1 19 20.75H5A2.75 2.75 0 0 1 2.25 18z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M8.94 12 6.47 9.53l1.06-1.06L11.06 12l-3.53 3.53-1.06-1.06zM18 15.75h-5v-1.5h5z" clipRule="evenodd"/>
    </svg>
  );
};

WindowTerminalIcon.displayName = 'WindowTerminalIcon';
export default WindowTerminalIcon;
