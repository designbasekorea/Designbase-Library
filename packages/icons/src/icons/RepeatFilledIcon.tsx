/**
 * RepeatFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface RepeatFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const RepeatFilledIcon: React.FC<RepeatFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M5.4 9c0-.6.2-1.1.7-1.7.6-.5 1.2-.7 1.8-.7h10.2L15.7 9l1.4 1.4 4.7-4.7L17.1 1l-1.4 1.4 2.2 2.2h-10c-1.1 0-2.2.4-3.2 1.2h-.1C3.8 6.9 3.4 7.9 3.4 9v1.7h2zM19.4 14.4c0 .6-.2 1.1-.7 1.7-.5.5-1.2.7-1.8.7H6.7l2.4-2.4L7.7 13 3 17.7l4.7 4.7L9.1 21l-2.2-2.2h10c1.1 0 2.2-.4 3.2-1.2h.1c.8-1.1 1.2-2.1 1.2-3.2v-1.7h-2z"/>
    </svg>
  );
};

RepeatFilledIcon.displayName = 'RepeatFilledIcon';
export default RepeatFilledIcon;
