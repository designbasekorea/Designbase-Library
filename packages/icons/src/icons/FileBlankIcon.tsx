/**
 * FileBlankIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface FileBlankIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const FileBlankIcon: React.FC<FileBlankIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M4 3.75C4 2.784 4.784 2 5.75 2h7.31l6.44 6.44v11.31a1.75 1.75 0 0 1-1.75 1.75h-12A1.75 1.75 0 0 1 4 19.75zm1.75-.25a.25.25 0 0 0-.25.25v16c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25V9.06L12.44 3.5z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M13.5 8V2.75H12V9.5h6.75V8z" clipRule="evenodd"/>
    </svg>
  );
};

FileBlankIcon.displayName = 'FileBlankIcon';
export default FileBlankIcon;
