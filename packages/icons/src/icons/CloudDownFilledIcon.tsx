/**
 * CloudDownFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CloudDownFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CloudDownFilledIcon: React.FC<CloudDownFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M20.324 10.354A8.01 8.01 0 0 0 12.5 4C9.205 4 6.232 6.065 5.048 9.099A5.48 5.48 0 0 0 .5 14.5C.5 17.532 2.967 20 6 20h12.5c2.757 0 5-2.243 5-5a4.98 4.98 0 0 0-3.176-4.646M12 16.378l-3.707-3.707 1.414-1.414L11 12.55V7.929h2v4.621l1.293-1.293 1.414 1.414z"/>
    </svg>
  );
};

CloudDownFilledIcon.displayName = 'CloudDownFilledIcon';
export default CloudDownFilledIcon;
