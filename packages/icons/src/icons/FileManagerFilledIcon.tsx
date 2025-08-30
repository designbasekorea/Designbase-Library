/**
 * FileManagerFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface FileManagerFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const FileManagerFilledIcon: React.FC<FileManagerFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M6 16V8H4v8c0 3.309 2.691 6 6 6h5v-2h-5c-2.206 0-4-1.794-4-4"/><path fill={getColorValue()} d="M14.414 2H11C9.346 2 8 3.346 8 5v10c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V7.586zM17 16h-6c-.551 0-1-.448-1-1V5c0-.551.449-1 1-1h2v2c0 1.654 1.346 3 3 3h2v6a1 1 0 0 1-1 1"/>
    </svg>
  );
};

FileManagerFilledIcon.displayName = 'FileManagerFilledIcon';
export default FileManagerFilledIcon;
