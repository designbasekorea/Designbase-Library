/**
 * CustomerSupportIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CustomerSupportIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CustomerSupportIcon: React.FC<CustomerSupportIconProps> = ({
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
      <path fill={getColorValue()} d="M12 1.25c4.787 0 8.75 3.963 8.75 8.75v.357c1.2.355 2 1.542 2 2.865v3.556c0 1.582-1.143 2.972-2.75 2.972-.494 0-.944-.132-1.33-.36l-2.14 2.14a.75.75 0 0 1-.53.22h-1.42c-.282.59-.882 1-1.58 1h-2a1.75 1.75 0 1 1 0-3.5h2c.698 0 1.298.41 1.58 1h1.11l1.946-1.947a3.2 3.2 0 0 1-.386-1.525v-3.556c0-1.323.8-2.51 2-2.865V10c0-3.959-3.291-7.25-7.25-7.25S4.75 6.041 4.75 10v.356c1.154.327 2 1.386 2 2.644v4a2.75 2.75 0 1 1-5.5 0v-4c0-1.258.846-2.317 2-2.644V10c0-4.787 3.963-8.75 8.75-8.75m-1 19.5a.25.25 0 1 0 0 .5h2a.25.25 0 1 0 0-.5zm-7-9c-.69 0-1.25.56-1.25 1.25v4a1.25 1.25 0 1 0 2.5 0v-4c0-.69-.56-1.25-1.25-1.25m16 0c-.633 0-1.25.566-1.25 1.472v3.556c0 .452.154.819.386 1.074l.007.005.007.01c.232.246.539.383.85.383.633 0 1.25-.566 1.25-1.472v-3.556c0-.906-.617-1.472-1.25-1.472M9.55 13.9a.75.75 0 0 1 1.05.15l.01.01q.019.026.068.078c.065.068.166.162.295.256.26.19.609.356 1.027.356s.766-.167 1.027-.356c.13-.094.23-.188.295-.256q.049-.053.069-.078l.01-.01.048-.059a.75.75 0 0 1 1.194.896l-.043.063-.003.004-.005.007-.013.016-.039.048q-.049.06-.136.15c-.114.119-.28.275-.494.431a3.24 3.24 0 0 1-1.91.644 3.24 3.24 0 0 1-1.91-.644 3.7 3.7 0 0 1-.63-.58l-.04-.05-.012-.015-.005-.007-.003-.003-.043-.064a.75.75 0 0 1 .193-.987M9 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
    </svg>
  );
};

CustomerSupportIcon.displayName = 'CustomerSupportIcon';
export default CustomerSupportIcon;
