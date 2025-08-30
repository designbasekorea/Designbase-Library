/**
 * TrashEmptyIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface TrashEmptyIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const TrashEmptyIcon: React.FC<TrashEmptyIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M6.75 6v13c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V6h1.5v13A2.75 2.75 0 0 1 16 21.75H8A2.75 2.75 0 0 1 5.25 19V6z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M21 6.75H3v-1.5h18z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M7.25 4c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v2h-1.5V4a.25.25 0 0 0-.25-.25H9a.25.25 0 0 0-.25.25v2h-1.5z" clipRule="evenodd"/>
    </svg>
  );
};

TrashEmptyIcon.displayName = 'TrashEmptyIcon';
export default TrashEmptyIcon;
