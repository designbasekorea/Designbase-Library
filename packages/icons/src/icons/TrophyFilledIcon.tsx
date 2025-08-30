/**
 * TrophyFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface TrophyFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const TrophyFilledIcon: React.FC<TrophyFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M22.107 5.893A2.97 2.97 0 0 0 20 5h-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4a2.97 2.97 0 0 0-2.107.893A2.97 2.97 0 0 0 1 8c0 .783.317 1.531.893 2.107A2.97 2.97 0 0 0 4 11h1.016c.078 1.701.811 3.427 2.077 4.807a7.34 7.34 0 0 0 3.907 2V20H8v2h8v-2h-3v-2.183c1.51-.226 2.925-.938 3.876-1.98 1.302-1.193 2.04-2.903 2.11-4.837H20c.782 0 1.531-.317 2.108-.894A2.97 2.97 0 0 0 23 8c0-.782-.316-1.531-.893-2.107M5 9H4a.97.97 0 0 1-.693-.307A.97.97 0 0 1 3 8c0-.253.106-.492.307-.693A.97.97 0 0 1 4 7h1zm15.693-.308A.98.98 0 0 1 20 9h-1V7h1a.97.97 0 0 1 .692.307A.98.98 0 0 1 21 8a.97.97 0 0 1-.307.692"/>
    </svg>
  );
};

TrophyFilledIcon.displayName = 'TrophyFilledIcon';
export default TrophyFilledIcon;
