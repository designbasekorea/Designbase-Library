/**
 * SunFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface SunFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const SunFilledIcon: React.FC<SunFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12M13 2h-2v3h2zM13 19h-2v3h2zM18.324 4.247l-2.121 2.121 1.414 1.414 2.121-2.12zM6.324 16.218l-2.121 2.12 1.414 1.415 2.121-2.121zM22 11h-3v2h3zM5 11H2v2h3zM17.602 16.232l-1.414 1.415 2.121 2.12 1.415-1.413zM5.632 4.232 4.218 5.646l2.12 2.122 1.415-1.414z"/>
    </svg>
  );
};

SunFilledIcon.displayName = 'SunFilledIcon';
export default SunFilledIcon;
