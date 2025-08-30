/**
 * CalendarCheckIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CalendarCheckIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CalendarCheckIcon: React.FC<CalendarCheckIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M16 8V2h1.5v6zM6 8V2h1.5v6zM20.75 11.75h-18v-1.5h18z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M3.75 5.75A.25.25 0 0 0 3.5 6v14c0 .138.112.25.25.25h16A.25.25 0 0 0 20 20V6a.25.25 0 0 0-.25-.25zM2 6c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75h-16A1.75 1.75 0 0 1 2 20z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m15.283 13.527-4.48 4.53-2.577-2.52 1.048-1.073 1.512 1.478 3.43-3.47z" clipRule="evenodd"/>
    </svg>
  );
};

CalendarCheckIcon.displayName = 'CalendarCheckIcon';
export default CalendarCheckIcon;
