/**
 * MessageIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MessageIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MessageIcon: React.FC<MessageIconProps> = ({
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
      <path fill={getColorValue()} d="M7.552 3.326C12.342.87 18.218 2.76 20.675 7.551l.13.263a9.74 9.74 0 0 1-.017 8.404l.784 4.433a.75.75 0 0 1-.86.87l-4.493-.737c-4.747 2.282-10.474.38-12.892-4.335C.87 11.66 2.762 5.783 7.552 3.326m11.788 4.91A8.25 8.25 0 0 0 8.237 4.66a8.248 8.248 0 1 0 7.529 14.678l.11-.046a.75.75 0 0 1 .354-.027l3.68.603-.64-3.631a.75.75 0 0 1 .071-.473 8.25 8.25 0 0 0 0-7.53"/><path fill={getColorValue()} d="M17 9.25v1.5H7v-1.5zM12 13.25v1.5H7v-1.5z"/>
    </svg>
  );
};

MessageIcon.displayName = 'MessageIcon';
export default MessageIcon;
