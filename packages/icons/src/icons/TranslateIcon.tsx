/**
 * TranslateIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface TranslateIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const TranslateIcon: React.FC<TranslateIconProps> = ({
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
      <path fill={getColorValue()} d="M13.25 11c0-.69-.56-1.25-1.25-1.25H4c-.69 0-1.25.56-1.25 1.25v9.5l2.8-2.1.102-.064A.75.75 0 0 1 6 18.25h7.25zm1.5 8a.75.75 0 0 1-.75.75H6.25l-3.8 2.85a.75.75 0 0 1-1.2-.6V11A2.75 2.75 0 0 1 4 8.25h8A2.75 2.75 0 0 1 14.75 11z"/><path fill={getColorValue()} d="M11 12.25v1.5H5v-1.5zM18 7.1v1.5h-4V7.1z"/><path fill={getColorValue()} d="M21.25 4c0-.69-.56-1.25-1.25-1.25h-8c-.69 0-1.25.56-1.25 1.25v5.15h-1.5V4A2.75 2.75 0 0 1 12 1.25h8A2.75 2.75 0 0 1 22.75 4v12a.75.75 0 0 1-1.2.6l-3.8-2.85H14v-1.5h4a.75.75 0 0 1 .45.15l2.8 2.1z"/><path fill={getColorValue()} d="M17.25 7a1.25 1.25 0 1 0-2.5 0v4h-1.5V7a2.75 2.75 0 1 1 5.5 0v4h-1.5zM7.25 13.482V11h1.5v2.482c0 1.923-1.807 3.268-3.75 3.268v-1.5c1.371 0 2.25-.909 2.25-1.768"/><path fill={getColorValue()} d="M8.75 13.482c0 .86.879 1.768 2.25 1.768v1.5c-1.943 0-3.75-1.345-3.75-3.268z"/>
    </svg>
  );
};

TranslateIcon.displayName = 'TranslateIcon';
export default TranslateIcon;
