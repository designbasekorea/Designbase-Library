/**
 * VerifiedBadgeFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface VerifiedBadgeFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const VerifiedBadgeFilledIcon: React.FC<VerifiedBadgeFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M22.229 9.519a4.7 4.7 0 0 0-1.208-1.255 4.7 4.7 0 0 0-.029-1.743 4.7 4.7 0 0 0-1.23-2.32 4.73 4.73 0 0 0-2.282-1.193 4.7 4.7 0 0 0-1.74-.029 4.7 4.7 0 0 0-1.257-1.211A4.74 4.74 0 0 0 11.975 1a4.69 4.69 0 0 0-3.704 1.979 4.7 4.7 0 0 0-1.744.029 4.73 4.73 0 0 0-2.325 1.231 4.699 4.699 0 0 0-1.214 4.025 4.7 4.7 0 0 0-1.211 1.252 4.74 4.74 0 0 0-.775 2.515 4.72 4.72 0 0 0 1.986 3.707c-.1.575-.091 1.165.027 1.74a4.7 4.7 0 0 0 1.227 2.323 4.7 4.7 0 0 0 2.277 1.185 4.7 4.7 0 0 0 1.744.033c.339.477.764.888 1.256 1.21a4.75 4.75 0 0 0 2.506.771 4.7 4.7 0 0 0 2.458-.768 4.7 4.7 0 0 0 1.245-1.197 4.543 4.543 0 0 0 5.29-3.549 4.6 4.6 0 0 0 .017-1.76 4.7 4.7 0 0 0 1.966-3.695v-.058a4.7 4.7 0 0 0-.771-2.455zm-11.31 6.911-4.118-4.029 1.398-1.43 2.656 2.599 4.914-5.253 1.461 1.366z"/>
    </svg>
  );
};

VerifiedBadgeFilledIcon.displayName = 'VerifiedBadgeFilledIcon';
export default VerifiedBadgeFilledIcon;
