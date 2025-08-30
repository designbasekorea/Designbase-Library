/**
 * UserIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface UserIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const UserIcon: React.FC<UserIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M8.402 3.437C9.27 2.458 10.583 2 11.75 2c1.198 0 2.38.478 3.313 1.402.979.868 1.437 2.181 1.437 3.348 0 1.198-.477 2.38-1.402 3.313-.868.979-2.181 1.437-3.348 1.437-1.198 0-2.38-.477-3.313-1.402C7.465 9.238 7 8.027 7 6.75c0-1.198.478-2.38 1.402-3.313m3.348.063c-.826 0-1.703.336-2.236.944l-.016.019-.018.017c-.664.664-.98 1.475-.98 2.27 0 .915.329 1.697.944 2.236l.019.016.017.018c.664.664 1.475.98 2.27.98.826 0 1.703-.336 2.236-.944l.016-.019.018-.017c.664-.664.98-1.475.98-2.27 0-.826-.336-1.703-.944-2.236l-.019-.016-.017-.018c-.664-.664-1.475-.98-2.27-.98M7.75 15.5c-.795 0-1.606.316-2.27.98l-.017.018-.02.016c-.614.539-.943 1.321-.943 2.236v3H3v-3c0-1.277.465-2.487 1.437-3.348C5.371 14.477 6.552 14 7.75 14h8c1.277 0 2.487.465 3.348 1.437.925.934 1.402 2.115 1.402 3.313v3H19v-3c0-.795-.317-1.606-.98-2.27l-.018-.017-.016-.02c-.539-.614-1.321-.943-2.236-.943z" clipRule="evenodd"/>
    </svg>
  );
};

UserIcon.displayName = 'UserIcon';
export default UserIcon;
