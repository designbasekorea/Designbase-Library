/**
 * CreditScoreIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CreditScoreIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CreditScoreIcon: React.FC<CreditScoreIconProps> = ({
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
      <path fill={getColorValue()} d="M16.23 10.18 11 15.41l-3.23-3.23 1.06-1.06L11 13.29l4.17-4.17zM1.25 13c0-2.42.801-4.655 2.151-6.452l1.2.9A9.2 9.2 0 0 0 2.75 13a9.21 9.21 0 0 0 2.65 6.475l-1.07 1.05A10.71 10.71 0 0 1 1.25 13M21.25 13a9.2 9.2 0 0 0-1.85-5.552l1.199-.9A10.7 10.7 0 0 1 22.75 13c0 2.932-1.177 5.587-3.079 7.525l-1.07-1.05A9.21 9.21 0 0 0 21.25 13M12 2.25c3 0 5.72 1.237 7.666 3.226l-1.072 1.048A9.2 9.2 0 0 0 12 3.75a9.2 9.2 0 0 0-6.594 2.774L4.334 5.476A10.7 10.7 0 0 1 12 2.25"/>
    </svg>
  );
};

CreditScoreIcon.displayName = 'CreditScoreIcon';
export default CreditScoreIcon;
