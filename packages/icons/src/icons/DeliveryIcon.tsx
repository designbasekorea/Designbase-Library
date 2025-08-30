/**
 * DeliveryIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DeliveryIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DeliveryIcon: React.FC<DeliveryIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M6.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M4 5.75c-.686 0-1.25.564-1.25 1.25v9c0 .46.256.874.635 1.085a.75.75 0 1 1-.73 1.31A2.75 2.75 0 0 1 1.25 16V7A2.756 2.756 0 0 1 4 4.25h11A2.756 2.756 0 0 1 17.75 7v9a.75.75 0 0 1-1.5 0V7c0-.686-.564-1.25-1.25-1.25z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M16.25 8a.75.75 0 0 1 .75-.75h1.764a2.75 2.75 0 0 1 2.46 1.52l1.236 2.473c.191.382.29.803.29 1.229V16c0 .964-.786 1.75-1.75 1.75h-2.27a.75.75 0 0 1 0-1.5H21c.136 0 .25-.114.25-.25v-3.528a1.25 1.25 0 0 0-.132-.559l-1.236-2.472a1.25 1.25 0 0 0-1.118-.691H17.75V16a.75.75 0 0 1-1.5 0zM5 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M2.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M17 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M14.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clipRule="evenodd"/>
    </svg>
  );
};

DeliveryIcon.displayName = 'DeliveryIcon';
export default DeliveryIcon;
