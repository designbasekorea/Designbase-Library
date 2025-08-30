/**
 * LinkIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface LinkIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const LinkIcon: React.FC<LinkIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="m14.914 9.28-5.657 5.657-1.061-1.06 5.657-5.658z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M17.388 5.745a4.25 4.25 0 0 0-6.01 0L9.964 7.16 8.904 6.1l1.413-1.415a5.75 5.75 0 0 1 8.132 8.132l-1.416 1.414-1.06-1.06 1.415-1.415a4.25 4.25 0 0 0 0-6.01M5.723 11.4l1.412-1.413-1.06-1.06L4.66 10.34l-.003.003c-2.22 2.245-2.21 5.861.029 8.076 2.245 2.22 5.825 2.31 8.103.056l.003-.003 1.414-1.414-1.061-1.06-1.411 1.41-.002.002c-1.67 1.65-4.307 1.608-5.991-.058-1.646-1.627-1.66-4.293-.019-5.953" clipRule="evenodd"/>
    </svg>
  );
};

LinkIcon.displayName = 'LinkIcon';
export default LinkIcon;
