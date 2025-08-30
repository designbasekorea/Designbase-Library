/**
 * TargetFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface TargetFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const TargetFilledIcon: React.FC<TargetFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M23.597 5.339a1 1 0 0 0-.682-.712l-1.919-.577a.99.99 0 0 0-.279-.79.98.98 0 0 0-.791-.273l-.584-1.915a1 1 0 0 0-.715-.68 1 1 0 0 0-.95.267l-3.816 3.837a1 1 0 0 0-.246 1l.822 2.66-3.133 3.15a.999.999 0 0 0 .709 1.705 1 1 0 0 0 .709-.294l3.134-3.15 2.665.81a1 1 0 0 0 1-.252l3.816-3.836a1 1 0 0 0 .261-.951zm-7.895.142 2.215-2.227.328 1.075-2.212 2.224zm2.823 2.808-1.074-.326 2.212-2.224 1.078.324z"/><path fill={getColorValue()} d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2a1 1 0 0 1 0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8a1 1 0 1 1 2 0c0 5.514-4.486 10-10 10"/><path fill={getColorValue()} d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6a1 1 0 0 1 0 2c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4a1 1 0 1 1 2 0c0 3.309-2.691 6-6 6"/>
    </svg>
  );
};

TargetFilledIcon.displayName = 'TargetFilledIcon';
export default TargetFilledIcon;
