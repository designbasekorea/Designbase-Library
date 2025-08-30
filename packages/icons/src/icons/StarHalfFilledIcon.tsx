/**
 * StarHalfFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface StarHalfFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const StarHalfFilledIcon: React.FC<StarHalfFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M22.95 8.989a1 1 0 0 0-.807-.679l-6.38-.924-2.866-5.827a1 1 0 0 0-1.794 0L8.236 7.386l-6.38.924a1.001 1.001 0 0 0-.556 1.704l4.625 4.533-1.11 6.382a1.001 1.001 0 0 0 1.444 1.06L12 19.026l5.74 2.963a1.01 1.01 0 0 0 1.052-.083c.306-.225.458-.603.394-.977l-1.11-6.382 4.625-4.533c.27-.266.368-.664.25-1.025zm-6.65 4.497a1 1 0 0 0-.285.885l.855 4.917-4.412-2.276a1 1 0 0 0-.458-.111V4.265l2.202 4.476a1 1 0 0 0 .754.548l4.9.71z"/>
    </svg>
  );
};

StarHalfFilledIcon.displayName = 'StarHalfFilledIcon';
export default StarHalfFilledIcon;
