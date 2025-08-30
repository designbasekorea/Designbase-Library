/**
 * ShowFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ShowFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ShowFilledIcon: React.FC<ShowFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path fill={getColorValue()} d="M22.909 11.584C22.204 10.039 19.331 5 12 5S1.797 10.04 1.091 11.584L.901 12l.19.416C1.797 13.96 4.67 19 12.001 19s10.203-5.039 10.909-6.584L23.1 12zM12 17c-5.577 0-8.044-3.421-8.884-5C3.957 10.421 6.427 7 12 7s8.044 3.421 8.885 5c-.842 1.579-3.311 5-8.885 5"/>
    </svg>
  );
};

ShowFilledIcon.displayName = 'ShowFilledIcon';
export default ShowFilledIcon;
