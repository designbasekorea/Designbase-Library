/**
 * ExternalLinkIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ExternalLinkIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M3.25 7A2.756 2.756 0 0 1 6 4.25h6v1.5H6c-.686 0-1.25.564-1.25 1.25v11c0 .686.564 1.25 1.25 1.25h11c.686 0 1.25-.564 1.25-1.25v-6h1.5v6A2.756 2.756 0 0 1 17 20.75H6A2.756 2.756 0 0 1 3.25 18z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m21.53 3.53-10 10-1.06-1.06 10-10z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M20.25 3.75H15v-1.5h6.75V9h-1.5z" clipRule="evenodd"/>
    </svg>
  );
};

ExternalLinkIcon.displayName = 'ExternalLinkIcon';
export default ExternalLinkIcon;
