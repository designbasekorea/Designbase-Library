/**
 * RefreshIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface RefreshIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const RefreshIcon: React.FC<RefreshIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M20 8V2.75h1.5V9.5h-5.75V8z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 3.5a8.25 8.25 0 0 0-8.25 8.25A8.25 8.25 0 0 0 11.75 20 8.25 8.25 0 0 0 20 11.75h1.5a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2 11.75 9.75 9.75 0 0 1 11.75 2a9.75 9.75 0 0 1 8.628 5.205l.094.106.324.361.011.012.462.517a3 3 0 0 1 .098.123c.007.01.03.044.054.09l-1.342.671a1 1 0 0 0 .068.11l.009.012-.021-.025q-.037-.043-.107-.12l-.335-.373-.013-.015-.494-.554-.05-.065a1 1 0 0 1-.05-.084l-.002-.004A8.25 8.25 0 0 0 11.75 3.5" clipRule="evenodd"/>
    </svg>
  );
};

RefreshIcon.displayName = 'RefreshIcon';
export default RefreshIcon;
