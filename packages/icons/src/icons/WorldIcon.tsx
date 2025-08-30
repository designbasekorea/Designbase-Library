/**
 * WorldIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WorldIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WorldIcon: React.FC<WorldIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M2.25 12A9.713 9.713 0 0 1 12 2.25 9.713 9.713 0 0 1 21.75 12 9.713 9.713 0 0 1 12 21.75 9.713 9.713 0 0 1 2.25 12M12 3.75A8.213 8.213 0 0 0 3.75 12 8.213 8.213 0 0 0 12 20.25 8.213 8.213 0 0 0 20.25 12 8.213 8.213 0 0 0 12 3.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M21 12.75H3v-1.5h18zM19.7 17.25H4.2v-1.5h15.5zM19.7 8.25H4.2v-1.5h15.5z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M7.275 12.05c0-3.326 1.424-6.606 4.185-9.47l1.08 1.04C10 6.256 8.775 9.176 8.775 12.05s1.226 5.794 3.765 8.43l-1.08 1.04c-2.76-2.864-4.185-6.144-4.185-9.47" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M15.225 12.05c0-2.874-1.226-5.794-3.765-8.43l1.08-1.04c2.76 2.864 4.185 6.144 4.185 9.47s-1.424 6.606-4.185 9.47l-1.08-1.04c2.54-2.636 3.765-5.556 3.765-8.43" clipRule="evenodd"/>
    </svg>
  );
};

WorldIcon.displayName = 'WorldIcon';
export default WorldIcon;
