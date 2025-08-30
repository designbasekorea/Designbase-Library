/**
 * UserFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface UserFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const UserFilledIcon: React.FC<UserFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M12 12c1.4 0 2.7-.6 3.5-1.5 1-1 1.5-2.2 1.5-3.5s-.6-2.7-1.5-3.5c-1-1-2.2-1.5-3.5-1.5s-2.7.6-3.5 1.5C7.5 4.5 7 5.7 7 7s.5 2.7 1.5 3.5c1 1 2.2 1.5 3.5 1.5M19.6 15.5Q18.25 14 16 14H8c-1.3 0-2.5.5-3.5 1.4Q3 16.75 3 19v3h18v-3c0-1.3-.5-2.5-1.4-3.5"/>
    </svg>
  );
};

UserFilledIcon.displayName = 'UserFilledIcon';
export default UserFilledIcon;
