/**
 * BuildingAltFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface BuildingAltFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const BuildingAltFilledIcon: React.FC<BuildingAltFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M11 11H8v2h3zM11 7H8v2h3z"/><path fill={getColorValue()} d="M23 11c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .771.301 1.468.78 2a2.98 2.98 0 0 0-.78 2c0 1.302.839 2.402 2 2.816V20h-3V5c0-1.654-1.346-3-3-3H6C4.346 2 3 3.346 3 5v15H2v2h20v-2h-1v-2.184A3 3 0 0 0 23 15a2.98 2.98 0 0 0-.78-2c.48-.532.78-1.229.78-2m-10 9v-2c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v2H5V5c0-.551.449-1 1-1h7c.552 0 1 .449 1 1v15z"/>
    </svg>
  );
};

BuildingAltFilledIcon.displayName = 'BuildingAltFilledIcon';
export default BuildingAltFilledIcon;
