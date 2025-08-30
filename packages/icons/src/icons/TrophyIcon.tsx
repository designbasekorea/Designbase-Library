/**
 * TrophyIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface TrophyIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const TrophyIcon: React.FC<TrophyIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M15.75 21.5h-8V20h8z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 16a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M5 3.75A.75.75 0 0 1 5.75 3h12a.75.75 0 0 1 .75.75v6.7c0 1.86-.654 3.666-2.02 4.93-1.256 1.357-3.054 2.02-4.73 2.02-1.714 0-3.5-.79-4.73-2.02l-.023-.023C5.788 14.037 5 12.262 5 10.45zm1.5.75v5.95c0 1.382.607 2.802 1.592 3.881.97.964 2.377 1.569 3.658 1.569 1.315 0 2.705-.53 3.647-1.557l.046-.046C16.462 13.363 17 11.978 17 10.45V4.5z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M1.82 5.82A2.72 2.72 0 0 1 3.75 5h2a.75.75 0 0 1 0 1.5h-2c-.295 0-.606.116-.87.38s-.38.575-.38.87.116.606.38.87.575.38.87.38h2a.75.75 0 0 1 0 1.5h-2a2.72 2.72 0 0 1-1.93-.82A2.72 2.72 0 0 1 1 7.75c0-.705.284-1.394.82-1.93M17 5.75a.75.75 0 0 1 .75-.75h2c.705 0 1.394.284 1.93.82.537.536.82 1.225.82 1.93s-.284 1.394-.82 1.93a2.72 2.72 0 0 1-1.93.82h-2a.75.75 0 0 1 0-1.5h2c.295 0 .606-.116.87-.38s.38-.575.38-.87-.116-.606-.38-.87a1.23 1.23 0 0 0-.87-.38h-2a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
    </svg>
  );
};

TrophyIcon.displayName = 'TrophyIcon';
export default TrophyIcon;
