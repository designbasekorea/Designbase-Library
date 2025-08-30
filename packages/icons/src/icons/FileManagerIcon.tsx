/**
 * FileManagerIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface FileManagerIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const FileManagerIcon: React.FC<FileManagerIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M5.75 8v8A4.25 4.25 0 0 0 10 20.25h5v1.5h-5A5.75 5.75 0 0 1 4.25 16V8z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11 3.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25V8.31l-4.56-4.56zM8.25 5A2.75 2.75 0 0 1 11 2.25h3.31l5.44 5.44V15A2.75 2.75 0 0 1 17 17.75h-6A2.75 2.75 0 0 1 8.25 15z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M13.25 6V3h1.5v3c0 .69.56 1.25 1.25 1.25h3v1.5h-3A2.75 2.75 0 0 1 13.25 6" clipRule="evenodd"/>
    </svg>
  );
};

FileManagerIcon.displayName = 'FileManagerIcon';
export default FileManagerIcon;
