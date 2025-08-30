/**
 * AdjustmentsHorizontalIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface AdjustmentsHorizontalIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const AdjustmentsHorizontalIcon: React.FC<AdjustmentsHorizontalIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M11.25 5.75a2.75 2.75 0 1 1 5.499-.001 2.75 2.75 0 0 1-5.499.001M14 4.5a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 14 4.5M18 5h3v1.5h-3z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M3 5h9v1.5H3zM5.25 11.75a2.75 2.75 0 1 1 5.499-.001 2.75 2.75 0 0 1-5.499.001M8 10.5a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 8 10.5M12 11h9v1.5h-9z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M3 11h3v1.5H3zM14.25 17.75a2.75 2.75 0 1 1 5.499-.001 2.75 2.75 0 0 1-5.499.001M17 16.5a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 17 16.5" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M19 17h2v1.5h-2zM3 17h10v1.5H3z" clipRule="evenodd"/>
    </svg>
  );
};

AdjustmentsHorizontalIcon.displayName = 'AdjustmentsHorizontalIcon';
export default AdjustmentsHorizontalIcon;
