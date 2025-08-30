/**
 * MedalFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MedalFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MedalFilledIcon: React.FC<MedalFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M23.124 8.117 20.677 2H3.323L.876 8.117l4.28 6.42A7 7 0 0 0 5 16c0 3.859 3.14 7 7 7s7-3.141 7-7a7 7 0 0 0-.157-1.464zM17.931 12.3a7.05 7.05 0 0 0-2.355-2.306l4.125-5.048 1.175 2.937zM10.36 9.202 9.378 8h5.245l-.982 1.202A7 7 0 0 0 12.001 9c-.566 0-1.113.075-1.64.202zM3.124 7.883l1.175-2.937 4.125 5.047A7.04 7.04 0 0 0 6.069 12.3zM12 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5"/><path fill={getColorValue()} d="M12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3"/>
    </svg>
  );
};

MedalFilledIcon.displayName = 'MedalFilledIcon';
export default MedalFilledIcon;
