/**
 * FolderOpenFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface FolderOpenFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const FolderOpenFilledIcon: React.FC<FolderOpenFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M22.084 11.949A1.99 1.99 0 0 0 20.382 11H20V8c0-1.654-1.346-3-3-3h-5.586l-1.121-1.121A2.98 2.98 0 0 0 8.172 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h11.763a2.98 2.98 0 0 0 2.684-1.659l2.725-5.446a1.99 1.99 0 0 0-.087-1.945zm-4.427 6.498a1 1 0 0 1-.895.553H5a1 1 0 0 1-.98-.803L6.619 13h13.764l-2.725 5.447z"/>
    </svg>
  );
};

FolderOpenFilledIcon.displayName = 'FolderOpenFilledIcon';
export default FolderOpenFilledIcon;
