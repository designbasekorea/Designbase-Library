/**
 * CouponIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CouponIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CouponIcon: React.FC<CouponIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M15.25 8V5h1.5v3zM15.25 13v-3h1.5v3zM15.25 18v-3h1.5v3z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M1.25 7A2.75 2.75 0 0 1 4 4.25h16A2.75 2.75 0 0 1 22.75 7v1.149c0 .847-.597 1.464-1.284 1.683a1.751 1.751 0 0 0 0 3.336c.689.22 1.284.837 1.284 1.683V16A2.75 2.75 0 0 1 20 18.75H4A2.75 2.75 0 0 1 1.25 16v-1.149c0-.847.597-1.464 1.284-1.683a1.751 1.751 0 0 0 0-3.335M4 5.75c-.69 0-1.25.56-1.25 1.25v1.149q-.001.07.049.132c.037.046.1.094.19.122a3.252 3.252 0 0 1 .001 6.193.4.4 0 0 0-.19.123.2.2 0 0 0-.05.132V16c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25v-1.149a.2.2 0 0 0-.049-.132.4.4 0 0 0-.19-.122 3.252 3.252 0 0 1-.001-6.193.4.4 0 0 0 .19-.123.2.2 0 0 0 .05-.132V7c0-.69-.56-1.25-1.25-1.25zM1.25 8.149c0 .846.596 1.464 1.284 1.684z" clipRule="evenodd"/>
    </svg>
  );
};

CouponIcon.displayName = 'CouponIcon';
export default CouponIcon;
