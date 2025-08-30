/**
 * LightningIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface LightningIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const LightningIcon: React.FC<LightningIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M9.727 1.67a.75.75 0 0 1 .673-.42h6.4a.75.75 0 0 1 .66 1.108l-3.2 5.892H20a.75.75 0 0 1 .514 1.296l-13.8 13a.75.75 0 0 1-1.194-.863l3.702-7.933H5a.75.75 0 0 1-.673-1.08zm1.14 1.08-4.663 9.5H10.4a.75.75 0 0 1 .68 1.067L8.535 18.77l9.575-9.02H13a.75.75 0 0 1-.66-1.108l3.2-5.892z" clipRule="evenodd"/>
    </svg>
  );
};

LightningIcon.displayName = 'LightningIcon';
export default LightningIcon;
