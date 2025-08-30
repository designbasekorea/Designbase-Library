/**
 * PhoneFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PhoneFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PhoneFilledIcon: React.FC<PhoneFilledIconProps> = ({
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
      <path fill={getColorValue()} d="m20.515 14.915-2.8-1.9c-1.2-.8-2.9-.7-4 .4l-.6.6c-.6-.2-1.5-.6-2-1.2-.4-.4-.8-1.1-1.1-2l.6-.6c1.1-1.1 1.2-2.7.4-4l-1.9-2.8c-.5-.8-1.4-1.3-2.3-1.4-1.1-.1-2.2.3-3.2 1.3-1.7 1.7-2.1 4.3-1 7.8.5 1.7 1.6 4.2 3.8 6.4 1.8 1.8 4.3 2.8 6 3.4 1.3.4 2.7.7 4.1.7s3.2-.4 4.1-1.3 1.4-2 1.2-3.2c0-.9-.6-1.8-1.4-2.3z"/>
    </svg>
  );
};

PhoneFilledIcon.displayName = 'PhoneFilledIcon';
export default PhoneFilledIcon;
