/**
 * BellActiveFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface BellActiveFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const BellActiveFilledIcon: React.FC<BellActiveFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M19 14v-3.047c-.144-3.064-2.445-6.343-6-6.871V3a1 1 0 0 0-2 0v1.082C7.445 4.611 5.145 7.893 5 11v3c0 1.586-.753 2.339-1.707 3.293A1 1 0 0 0 4 19h4c0 2.206 1.794 4 4 4s4-1.794 4-4h4a.999.999 0 0 0 .707-1.707C19.753 16.339 19 15.586 19 14m-7 7c-1.103 0-2-.897-2-2h4c0 1.103-.897 2-2 2M21.908 7.582c-.714-1.553-1.96-3.215-3.252-4.337a1.001 1.001 0 0 0-1.312 1.51c1.075.934 2.153 2.372 2.748 3.663a1 1 0 1 0 1.816-.836M3.91 8.417c.59-1.289 1.67-2.726 2.746-3.662a1 1 0 0 0-1.312-1.51C4.05 4.37 2.802 6.033 2.091 7.583a1 1 0 0 0 1.818.834"/>
    </svg>
  );
};

BellActiveFilledIcon.displayName = 'BellActiveFilledIcon';
export default BellActiveFilledIcon;
