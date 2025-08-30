/**
 * StoreIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface StoreIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const StoreIcon: React.FC<StoreIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M2 5.75A2.756 2.756 0 0 1 4.75 3h14a2.756 2.756 0 0 1 2.75 2.75v2.6c0 .72-.18 1.443-.63 2.03-.458.6-1.145.988-2.014 1.112a2.87 2.87 0 0 1-2.637-.986q-.131.146-.277.273c-.608.527-1.451.855-2.315.71a3.1 3.1 0 0 1-1.862-1.035q-.152.176-.323.325c-.608.527-1.451.855-2.315.71a3.1 3.1 0 0 1-1.862-1.035q-.152.176-.323.325c-.608.527-1.451.855-2.315.71C3.047 11.228 2 9.9 2 8.35zm6 2.6c0 .852.553 1.523 1.373 1.66.336.056.743-.066 1.085-.364.34-.295.542-.699.542-1.096v-.2a.75.75 0 0 1 1.5 0c0 .852.553 1.523 1.373 1.66.336.056.743-.066 1.085-.364.34-.295.542-.699.542-1.096a.75.75 0 0 1 1.5 0c0 .886.737 1.587 1.644 1.457.53-.075.844-.288 1.035-.538.2-.262.321-.639.321-1.119v-2.6c0-.686-.564-1.25-1.25-1.25h-14c-.686 0-1.25.564-1.25 1.25v2.6c0 .852.553 1.523 1.373 1.66.336.056.743-.066 1.085-.364.34-.295.542-.699.542-1.096v-.2a.75.75 0 0 1 1.5 0" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M4.5 20v-9.35H3V21.5h17.5V10.65H19V20z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M13.75 14.5c-.686 0-1.25.564-1.25 1.25V17H15v-1.25c0-.686-.564-1.25-1.25-1.25M11 15.75A2.756 2.756 0 0 1 13.75 13a2.756 2.756 0 0 1 2.75 2.75v2.75H11z" clipRule="evenodd"/>
    </svg>
  );
};

StoreIcon.displayName = 'StoreIcon';
export default StoreIcon;
