/**
 * MedalIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MedalIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MedalIcon: React.FC<MedalIconProps> = ({
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
      <path fill={getColorValue()} d="m22.843 8.088-4.267 6.396a6.75 6.75 0 1 1-13.154.001L1.157 8.088 3.492 2.25h17.016zM12 10.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 2.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M2.843 7.911l3.233 4.85a6.8 6.8 0 0 1 2.722-2.705L4.224 4.459zM15.2 10.056a6.8 6.8 0 0 1 2.722 2.705l3.233-4.85-1.38-3.452zm-4.94-.58a6.76 6.76 0 0 1 3.476 0l1.411-1.726H8.851zM7.626 6.25h8.75l2.043-2.5H5.582z"/>
    </svg>
  );
};

MedalIcon.displayName = 'MedalIcon';
export default MedalIcon;
