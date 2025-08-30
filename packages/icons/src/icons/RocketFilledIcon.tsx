/**
 * RocketFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface RocketFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const RocketFilledIcon: React.FC<RocketFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M8.321 18.436a1.005 1.005 0 0 0-1.376.312c-.052.082-1.197 1.827-3.672 1.887.034-2.476 1.767-3.639 1.842-3.688a1 1 0 1 0-1.067-1.69c-.134.084-3.275 2.12-2.709 6.46.059.454.418.81.873.864q.496.059.951.058c3.689 0 5.404-2.709 5.481-2.834a.995.995 0 0 0-.322-1.368z"/><path fill={getColorValue()} d="M22.897 1.944a1 1 0 0 0-.861-.863C17.595.502 12.861 2.457 9.171 6.253c-4.581-.862-7.142 2.4-8.005 3.503a1.002 1.002 0 0 0 .353 1.516c1.183.571 2.351 1.253 3.753 2.085q.006.007.014.013c.771.474 1.587.995 2.409 1.543l-1.34 1.34a.999.999 0 1 0 1.414 1.414l1.33-1.33a81 81 0 0 1 1.51 2.357 1 1 0 0 0 .152.186c.785 1.324 1.437 2.45 1.981 3.577a.998.998 0 0 0 1.516.353c1.104-.863 4.36-3.42 3.505-7.999 3.775-3.695 5.713-8.42 5.135-12.868zM5.461 11.15a60 60 0 0 0-1.918-1.088C4.797 8.761 6.1 8.13 7.572 8.103c-.109.142-.222.278-.328.423a29 29 0 0 0-1.783 2.623m8.493 9.285a60 60 0 0 0-1.102-1.942c.92-.56 1.799-1.127 2.581-1.699.164-.12.318-.246.477-.37-.031 1.465-.662 2.763-1.956 4.011m1.103-8.55c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3"/>
    </svg>
  );
};

RocketFilledIcon.displayName = 'RocketFilledIcon';
export default RocketFilledIcon;
