/**
 * RepeatIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface RepeatIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const RepeatIcon: React.FC<RepeatIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="m19 5.53-3.47-3.47L16.591 1l4.53 4.53-4.53 4.53L15.531 9z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M5.592 6.963c.587-.488 1.301-.783 1.969-.783h12.4v-1.5H7.56c-1.116 0-2.183.49-2.988 1.18l-.044.038-.038.044c-.673.785-1.18 1.752-1.18 2.888v1.7h1.5v-1.7c0-.648.278-1.266.781-1.867M5.121 17.53l3.47-3.47L7.531 13 3 17.53l4.53 4.53L8.591 21z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M19.31 14.23v-1.7h1.5v1.7c0 1.136-.507 2.103-1.18 2.888l-.037.044-.044.038c-.805.69-1.872 1.18-2.988 1.18H4.06v-1.5h12.5c.667 0 1.381-.294 1.968-.782.503-.601.782-1.22.782-1.868" clipRule="evenodd"/>
    </svg>
  );
};

RepeatIcon.displayName = 'RepeatIcon';
export default RepeatIcon;
