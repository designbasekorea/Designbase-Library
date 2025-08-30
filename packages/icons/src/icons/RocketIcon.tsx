/**
 * RocketIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface RocketIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const RocketIcon: React.FC<RocketIconProps> = ({
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
      <path fill={getColorValue()} d="M22.449 1.75a.75.75 0 0 0-.65-.65c-4.41-.58-9.1 1.39-12.75 5.2-4.51-.92-7.04 2.3-7.89 3.38-.14.18-.19.41-.14.63s.2.41.4.51c1.19.58 2.37 1.26 3.78 2.1l.01.01c.85.52 1.76 1.1 2.67 1.72l-1.55 1.55c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.55-1.55c.63.95 1.18 1.8 1.68 2.62.02.04.07.06.09.09.82 1.38 1.49 2.53 2.05 3.7.1.21.28.35.5.41.06.01.11.02.17.02.17 0 .33-.05.46-.16 1.08-.85 4.3-3.37 3.39-7.89 3.78-3.65 5.73-8.35 5.16-12.75zm-14.59 5.9c-.21.26-.42.53-.62.8-.64.84-1.26 1.75-1.89 2.81-.83-.49-1.64-.96-2.41-1.36 1.09-1.21 2.67-2.39 4.93-2.25zm3.53 4.55a.754.754 0 0 0-1.06 0l-1.36 1.36c-.8-.54-1.58-1.06-2.34-1.53.61-1.02 1.19-1.88 1.81-2.69 3.34-4.57 8.12-7.15 12.58-6.81.33 4.49-2.25 9.28-6.82 12.62-.81.59-1.71 1.19-2.69 1.77-.45-.71-.94-1.47-1.49-2.29l1.37-1.37c.29-.29.29-.77 0-1.06m2.29 8.41c-.4-.77-.87-1.58-1.38-2.43.99-.6 1.94-1.2 2.77-1.81.29-.21.57-.44.85-.66.13 2.25-1.04 3.82-2.25 4.91z"/><path fill={getColorValue()} d="M14.849 11.4c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75 1.23 2.75 2.75 2.75m0-4a1.25 1.25 0 1 1-.001 2.5 1.25 1.25 0 0 1 0-2.5M7.979 18.42a.747.747 0 0 0-1.03.24c-.06.09-1.3 2-4.01 2h-.12c-.09-2.79 1.87-4.1 1.96-4.15.35-.22.46-.68.23-1.04a.74.74 0 0 0-1.03-.23c-.13.08-3.14 2.03-2.59 6.22.04.34.31.61.65.65.32.04.63.06.92.06 3.55 0 5.2-2.6 5.27-2.71.22-.35.11-.81-.24-1.03z"/>
    </svg>
  );
};

RocketIcon.displayName = 'RocketIcon';
export default RocketIcon;
