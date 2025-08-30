/**
 * UserCircleFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface UserCircleFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const UserCircleFilledIcon: React.FC<UserCircleFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M14.8 7.7c-.8-.8-1.7-1.2-2.8-1.2S9.8 7 9.2 7.7C8.4 8.5 8 9.4 8 10.5s.5 2.2 1.2 2.8c.8.8 1.7 1.2 2.8 1.2s2.2-.5 2.8-1.2c.8-.8 1.2-1.7 1.2-2.8s-.5-2.2-1.2-2.8"/><path fill={getColorValue()} d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m6.4 17.3c-.2-.5-.5-.9-.9-1.4-.9-1-2.1-1.5-3.5-1.5h-4c-1.3 0-2.8.6-3.6 1.5-.4.4-.6.8-.8 1.3-1.5-1.6-2.5-3.8-2.5-6.2C3 7 7 3 12 3s9 4 9 9c0 4.5-2 5.5-2.6 6.3"/>
    </svg>
  );
};

UserCircleFilledIcon.displayName = 'UserCircleFilledIcon';
export default UserCircleFilledIcon;
