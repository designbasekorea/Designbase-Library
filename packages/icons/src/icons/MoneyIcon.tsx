/**
 * MoneyIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MoneyIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MoneyIcon: React.FC<MoneyIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M1.25 8A2.756 2.756 0 0 1 4 5.25h16A2.756 2.756 0 0 1 22.75 8v8A2.756 2.756 0 0 1 20 18.75H4A2.756 2.756 0 0 1 1.25 16zM4 6.75c-.686 0-1.25.564-1.25 1.25v8c0 .686.564 1.25 1.25 1.25h16c.686 0 1.25-.564 1.25-1.25V8c0-.686-.564-1.25-1.25-1.25z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M8.25 12c0-2.114 1.636-3.75 3.75-3.75s3.75 1.636 3.75 3.75-1.636 3.75-3.75 3.75S8.25 14.114 8.25 12M12 9.75c-1.286 0-2.25.964-2.25 2.25s.964 2.25 2.25 2.25 2.25-.964 2.25-2.25-.964-2.25-2.25-2.25M7 12.75H5v-1.5h2zM19 12.75h-2v-1.5h2z" clipRule="evenodd"/>
    </svg>
  );
};

MoneyIcon.displayName = 'MoneyIcon';
export default MoneyIcon;
