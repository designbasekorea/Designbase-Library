/**
 * CouponFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CouponFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CouponFilledIcon: React.FC<CouponFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M21.543 11.07C22.414 10.791 23 10.019 23 9.149V8c0-1.654-1.346-3-3-3h-3v4h-2V5H4C2.346 5 1 6.346 1 8v1.149c0 .871.585 1.643 1.458 1.921A1.49 1.49 0 0 1 3.5 12.499c0 .656-.419 1.23-1.042 1.429C1.586 14.206 1 14.978 1 15.849v1.149c0 1.654 1.346 3 3 3h11v-4h2v4h3c1.654 0 3-1.346 3-3v-1.149c0-.871-.586-1.644-1.457-1.921a1.495 1.495 0 0 1-1.043-1.429c0-.655.419-1.23 1.043-1.429M17 13.999h-2v-3h2z"/>
    </svg>
  );
};

CouponFilledIcon.displayName = 'CouponFilledIcon';
export default CouponFilledIcon;
