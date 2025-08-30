/**
 * HeartFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface HeartFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const HeartFilledIcon: React.FC<HeartFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M16.61 2c-1.742 0-3.414.674-4.61 1.813C10.804 2.674 9.131 2 7.389 2 3.866 2 1 4.72 1 8.062c0 4.642 3.439 7.778 9.683 13.472l.224.205a.997.997 0 0 0 1.348 0c.902-.823 1.763-1.591 2.576-2.315 4.92-4.387 8.17-7.285 8.17-11.361 0-3.343-2.866-6.062-6.39-6.062z"/>
    </svg>
  );
};

HeartFilledIcon.displayName = 'HeartFilledIcon';
export default HeartFilledIcon;
