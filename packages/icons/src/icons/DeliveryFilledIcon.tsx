/**
 * DeliveryFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DeliveryFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DeliveryFilledIcon: React.FC<DeliveryFilledIconProps> = ({
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
      <path fill={getColorValue()} d="m22.684 11.131-1.236-2.472A2.99 2.99 0 0 0 18.764 7H18c0-1.654-1.346-3-3-3H4C2.346 4 1 5.346 1 7v9c0 .868.388 1.671 1.023 2.232A2.995 2.995 0 0 0 5 21a3 3 0 0 0 2.816-2h6.369a3 3 0 0 0 2.816 2c1.654 0 3-1.346 3-3h1c1.103 0 2-.897 2-2v-3.528c0-.462-.11-.926-.317-1.341M5 19a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m12 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-3h-1.78a3 3 0 0 0-1.22-.816V9h.764c.381 0 .724.212.895.553l1.236 2.472c.069.138.105.293.105.447z"/>
    </svg>
  );
};

DeliveryFilledIcon.displayName = 'DeliveryFilledIcon';
export default DeliveryFilledIcon;
