/**
 * VerifiedBadgeAltFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface VerifiedBadgeAltFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const VerifiedBadgeAltFilledIcon: React.FC<VerifiedBadgeAltFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M23 12c0-.27-.11-.52-.29-.71L21 9.59l.63-2.33a1.007 1.007 0 0 0-.71-1.23l-2.33-.62-.62-2.33a1 1 0 0 0-.47-.61c-.23-.13-.51-.17-.76-.1L14.41 3l-1.7-1.71A1 1 0 0 0 12 1c-.27 0-.52.11-.71.29L9.59 3l-2.33-.63a1.007 1.007 0 0 0-1.23.71l-.62 2.33-2.33.62a1.007 1.007 0 0 0-.71 1.23L3 9.59l-1.71 1.7A1 1 0 0 0 1 12c0 .27.11.52.29.71L3 14.41l-.63 2.33a1.007 1.007 0 0 0 .71 1.23l2.33.62.62 2.33c.07.26.24.48.47.61s.51.17.76.1L9.59 21l1.7 1.71c.19.19.44.29.71.29s.52-.11.71-.29l1.7-1.71 2.33.63a1.007 1.007 0 0 0 1.23-.71l.62-2.33 2.33-.62a1.007 1.007 0 0 0 .71-1.23L21 14.41l1.71-1.7A1 1 0 0 0 23 12m-12.08 4.43L6.8 12.4l1.4-1.43 2.66 2.6 4.91-5.25 1.46 1.37-6.31 6.75z"/>
    </svg>
  );
};

VerifiedBadgeAltFilledIcon.displayName = 'VerifiedBadgeAltFilledIcon';
export default VerifiedBadgeAltFilledIcon;
