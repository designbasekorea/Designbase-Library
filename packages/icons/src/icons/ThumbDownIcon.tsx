/**
 * ThumbDownIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ThumbDownIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ThumbDownIcon: React.FC<ThumbDownIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M6.74 4.75a2.25 2.25 0 0 0-2.241 2.046l-.554 6.09A1.25 1.25 0 0 0 5.19 14.25H9a.75.75 0 0 1 .75.75v4c0 1.339 1.297 2.892 3.5 2.428V15a.75.75 0 0 1 .75-.75h1.25V7c0-.77-.235-1.314-.586-1.664-.35-.35-.895-.586-1.664-.586zm8.518-.861C14.632 3.46 13.855 3.25 13 3.25H6.74a3.75 3.75 0 0 0-3.735 3.41l-.554 6.091A2.75 2.75 0 0 0 5.19 15.75h3.06V19c0 2.462 2.501 4.874 5.987 3.712A.75.75 0 0 0 14.75 22v-6.25H21a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.742.639m1.492.861v9.5h3.5v-9.5z" clipRule="evenodd"/>
    </svg>
  );
};

ThumbDownIcon.displayName = 'ThumbDownIcon';
export default ThumbDownIcon;
