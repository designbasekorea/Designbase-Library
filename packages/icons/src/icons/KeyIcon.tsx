/**
 * KeyIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface KeyIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const KeyIcon: React.FC<KeyIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M10.228 3.226a6.75 6.75 0 0 1 9.545 9.546c-1.91 1.911-4.672 2.42-7.05 1.565l-.973.973v3.44H8.757l.028 3H3.25v-6.06l5.413-5.414c-.853-2.378-.346-5.138 1.565-7.05m8.485 1.061a5.25 5.25 0 0 0-7.425 0c-1.582 1.583-1.93 3.924-1.06 5.861l.212.472-5.69 5.69v3.94h2.521l-.028-3h3.007v-2.56l2.13-2.13.472.212c1.935.87 4.278.522 5.86-1.06a5.25 5.25 0 0 0 0-7.425" clipRule="evenodd"/>
    </svg>
  );
};

KeyIcon.displayName = 'KeyIcon';
export default KeyIcon;
