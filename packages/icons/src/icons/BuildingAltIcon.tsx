/**
 * BuildingAltIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface BuildingAltIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const BuildingAltIcon: React.FC<BuildingAltIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M22 21.75H2v-1.5h20z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M6 3.75c-.69 0-1.25.56-1.25 1.25v15.25h9.5V5c0-.69-.56-1.25-1.25-1.25zM3.25 5A2.75 2.75 0 0 1 6 2.25h7A2.75 2.75 0 0 1 15.75 5v16.75H3.25z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M8 11.25h3v1.5H8zM8 17.75a.25.25 0 0 0-.25.25v2.25h3.5V18a.25.25 0 0 0-.25-.25zM6.25 18c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3.75h-6.5zM8 7.25h3v1.5H8zM20.75 17v4h-1.5v-4z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M20 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M17.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M20 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M17.25 11a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clipRule="evenodd"/>
    </svg>
  );
};

BuildingAltIcon.displayName = 'BuildingAltIcon';
export default BuildingAltIcon;
