/**
 * WorldFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WorldFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WorldFilledIcon: React.FC<WorldFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M10.272 17.5A15.7 15.7 0 0 0 12 20.396a15.7 15.7 0 0 0 1.728-2.896zM9.077 13q.099 1.258.448 2.5h4.952q.35-1.242.448-2.5zM15.898 6.5h4.445a10 10 0 0 0-6.984-4.397c1.092 1.401 1.949 2.875 2.54 4.397zM16.509 15.5h4.846a9.9 9.9 0 0 0 .594-2.5h-5.053a15 15 0 0 1-.387 2.5M14.476 8.5H9.524a13 13 0 0 0-.448 2.5h5.847a13 13 0 0 0-.447-2.5M16.509 8.5c.199.828.331 1.662.387 2.5h5.053a9.9 9.9 0 0 0-.594-2.5zM15.898 17.5c-.591 1.522-1.448 2.996-2.54 4.397a10 10 0 0 0 6.984-4.397zM13.728 6.5A15.7 15.7 0 0 0 12 3.604 15.7 15.7 0 0 0 10.272 6.5zM8.102 17.5H3.657a10 10 0 0 0 6.984 4.397c-1.092-1.401-1.949-2.875-2.539-4.397M2.644 8.5A10 10 0 0 0 2.05 11h5.053q.087-1.258.387-2.5zM8.102 6.5c.591-1.522 1.448-2.996 2.539-4.397A10 10 0 0 0 3.657 6.5zM7.104 13H2.051c.087.873.296 1.708.594 2.5h4.847a15 15 0 0 1-.388-2.5"/>
    </svg>
  );
};

WorldFilledIcon.displayName = 'WorldFilledIcon';
export default WorldFilledIcon;
