/**
 * NoticeFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface NoticeFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const NoticeFilledIcon: React.FC<NoticeFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M19 7.136V3a1 1 0 0 0-1.496-.868L10.734 6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2v4c0 1.159.841 2 2 2h2c1.159 0 2-.841 2-2v-3.848l6.504 3.716a1 1 0 0 0 .998-.003A1 1 0 0 0 19 19v-4.136A3.94 3.94 0 0 0 22 11a3.94 3.94 0 0 0-3-3.864M9 20H7v-4h2zm10-7.261V9.262c.604.336 1 .97 1 1.739s-.396 1.401-1 1.738"/>
    </svg>
  );
};

NoticeFilledIcon.displayName = 'NoticeFilledIcon';
export default NoticeFilledIcon;
