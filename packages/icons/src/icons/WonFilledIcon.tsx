/**
 * WonFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WonFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WonFilledIcon: React.FC<WonFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m5.372 11h-1.304l-.882 2.352a1 1 0 0 1-.934.648h-.003c-.415 0-.786-.256-.935-.644l-1.338-3.508-1.289 3.498a1 1 0 0 1-.936.654h-.003c-.417 0-.79-.259-.937-.648L7.929 13H6.608a1 1 0 1 1 0-2h.571l-.618-1.649a1.001 1.001 0 0 1 1.873-.703L9.74 12.13l1.281-3.477a1 1 0 0 1 .933-.654h.005c.415 0 .786.256.935.644l1.346 3.529.206-.549.008-.021 1.108-2.954a1 1 0 0 1 1.873.703L16.817 11h.554a1 1 0 0 1 .001 2"/>
    </svg>
  );
};

WonFilledIcon.displayName = 'WonFilledIcon';
export default WonFilledIcon;
