/**
 * BookmarksIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface BookmarksIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const BookmarksIcon: React.FC<BookmarksIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M7 7.75c-.686 0-1.25.564-1.25 1.25v10.675l3.864-2.318a.75.75 0 0 1 .772 0l3.864 2.318V9c0-.686-.564-1.25-1.25-1.25zM4.25 9A2.756 2.756 0 0 1 7 6.25h6A2.756 2.756 0 0 1 15.75 9v12a.75.75 0 0 1-1.136.643L10 18.875l-4.614 2.768A.75.75 0 0 1 4.25 21z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M15 3.75h-4v-1.5h4A4.76 4.76 0 0 1 19.75 7v10h-1.5V7A3.26 3.26 0 0 0 15 3.75" clipRule="evenodd"/>
    </svg>
  );
};

BookmarksIcon.displayName = 'BookmarksIcon';
export default BookmarksIcon;
