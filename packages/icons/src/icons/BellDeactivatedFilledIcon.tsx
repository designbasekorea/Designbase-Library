/**
 * BellDeactivatedFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface BellDeactivatedFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const BellDeactivatedFilledIcon: React.FC<BellDeactivatedFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M20.996 21.004 17.992 18h.015L6.245 6.237l-.005.009-3.243-3.243-1.414 1.414 3.755 3.755a7.2 7.2 0 0 0-.337 1.827v3c0 1.586-.753 2.339-1.707 3.293a1 1 0 0 0 .707 1.707h4c0 2.206 1.794 4 4 4a4 4 0 0 0 3.923-3.241l3.659 3.659 1.414-1.414zM12 20c-1.103 0-2-.897-2-2h4c0 1.103-.897 2-2 2M20.924 17.383a1 1 0 0 0-.217-1.09C19.753 15.339 19 14.586 19 13V9.953c-.144-3.064-2.445-6.343-6-6.871V2a1 1 0 0 0-2 0v1.082a6.65 6.65 0 0 0-3.452 1.631l13.066 13.066a1 1 0 0 0 .31-.396"/>
    </svg>
  );
};

BellDeactivatedFilledIcon.displayName = 'BellDeactivatedFilledIcon';
export default BellDeactivatedFilledIcon;
