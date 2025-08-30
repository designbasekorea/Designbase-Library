/**
 * GamepadAltIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface GamepadAltIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const GamepadAltIcon: React.FC<GamepadAltIconProps> = ({
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
      <path fill={getColorValue()} d="M14.454 10.95a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17.454 12.95a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill={getColorValue()} fillRule="evenodd" d="M4.893 6.6c-.534.202-.89.688-.89 1.25v.023l-.5 8.319a1.442 1.442 0 0 0 2.3 1.258l2.25-1.738.065-.033.038-.019c.38-.19.919-.46 1.598-.46h4.4c.622 0 1.191.131 1.75.55l.008.007 2.192 1.693a1.442 1.442 0 0 0 2.3-1.258v-.003l-.498-8.181c-.074-.75-.782-1.408-1.453-1.408zm1.31-1.5V5h-.75c-1.56 0-2.936 1.18-2.95 2.826l-.498 8.279v.006c-.134 2.54 2.689 4.013 4.692 2.544l.008-.006 2.149-1.66c.378-.188.617-.289.9-.289h4.4c.375 0 .605.068.846.247l2.202 1.702.008.006c2.003 1.469 4.826-.005 4.692-2.544l-.5-8.218-.002-.01C21.27 6.435 19.98 5.1 18.454 5.1z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M7.704 13.45v-5h1.5v5z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M5.954 10.2h5v1.5h-5z" clipRule="evenodd"/>
    </svg>
  );
};

GamepadAltIcon.displayName = 'GamepadAltIcon';
export default GamepadAltIcon;
