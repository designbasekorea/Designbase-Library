/**
 * LangaugeIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface LangaugeIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const LangaugeIcon: React.FC<LangaugeIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M13 4.75H3v-1.5h10z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M10.25 6V4h1.5v2c0 1.822-1.193 3.514-2.65 4.706-1.467 1.2-3.38 2.044-5.1 2.044v-1.5c1.28 0 2.867-.656 4.15-1.705 1.293-1.059 2.1-2.367 2.1-3.545" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M6.9 10.706C5.443 9.514 4.25 7.822 4.25 6h1.5c0 1.178.807 2.486 2.1 3.545 1.283 1.05 2.87 1.705 4.15 1.705v1.5c-1.72 0-3.633-.844-5.1-2.044M17 9.188l5.683 12.502-1.366.62L17 12.813l-4.317 9.497-1.366-.62z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M13.8 17.25h6.4v1.5h-6.4zM7.25 4.2V2h1.5v2.2z" clipRule="evenodd"/>
    </svg>
  );
};

LangaugeIcon.displayName = 'LangaugeIcon';
export default LangaugeIcon;
