/**
 * UsersFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface UsersFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const UsersFilledIcon: React.FC<UsersFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M9 12c1.4 0 2.7-.6 3.5-1.5 1-1 1.5-2.2 1.5-3.5s-.6-2.7-1.5-3.5C11.5 2.5 10.3 2 9 2s-2.7.6-3.5 1.5C4.5 4.5 4 5.7 4 7s.5 2.7 1.5 3.5c1 1 2.2 1.5 3.5 1.5M14.6 15.5Q13.25 14 11 14H7c-1.3 0-2.5.5-3.5 1.4Q2 16.75 2 19v3h14v-3c0-1.3-.5-2.5-1.4-3.5M20.6 15.5Q19.25 14 17 14h-1.2l.2.2c1.3 1.3 2 3 2 4.8v3h4v-3c0-1.3-.5-2.5-1.4-3.5M18.5 3.5c-1-1-2.2-1.5-3.5-1.5s-.7 0-1 .1c1.3 1.2 2 3 2 4.9s-.7 3.5-2 4.9c.3 0 .7.1 1 .1 1.4 0 2.7-.6 3.5-1.5 1-1 1.5-2.2 1.5-3.5s-.6-2.7-1.5-3.5"/>
    </svg>
  );
};

UsersFilledIcon.displayName = 'UsersFilledIcon';
export default UsersFilledIcon;
