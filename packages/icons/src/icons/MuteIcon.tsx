/**
 * MuteIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MuteIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MuteIcon: React.FC<MuteIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M12.075 4.074a.75.75 0 0 1 .425.676v14a.75.75 0 0 1-1.219.586L6.488 15.5H2.75a.75.75 0 0 1-.75-.75v-6A.75.75 0 0 1 2.75 8h3.737l4.794-3.836a.75.75 0 0 1 .794-.09M11 6.31 7.219 9.336a.75.75 0 0 1-.469.164H3.5V14h3.25a.75.75 0 0 1 .469.164L11 17.19zM14.42 14.22l6-6 1.06 1.06-6 6z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m20.42 15.28-6-6 1.06-1.06 6 6z" clipRule="evenodd"/>
    </svg>
  );
};

MuteIcon.displayName = 'MuteIcon';
export default MuteIcon;
