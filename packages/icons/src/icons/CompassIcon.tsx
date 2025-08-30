/**
 * CompassIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CompassIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CompassIcon: React.FC<CompassIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M2 11.75A9.713 9.713 0 0 1 11.75 2a9.713 9.713 0 0 1 9.75 9.75 9.713 9.713 0 0 1-9.75 9.75A9.713 9.713 0 0 1 2 11.75m9.75-8.25a8.213 8.213 0 0 0-8.25 8.25A8.213 8.213 0 0 0 11.75 20 8.213 8.213 0 0 0 20 11.75a8.213 8.213 0 0 0-8.25-8.25" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M16.28 7.22c.201.2.271.498.181.767l-2 6a.75.75 0 0 1-.474.474l-6 2a.75.75 0 0 1-.949-.948l2-6a.75.75 0 0 1 .475-.475l6-2a.75.75 0 0 1 .767.182m-5.937 3.123-1.407 4.221 4.221-1.407 1.407-4.221z" clipRule="evenodd"/>
    </svg>
  );
};

CompassIcon.displayName = 'CompassIcon';
export default CompassIcon;
