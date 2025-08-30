/**
 * CameraIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CameraIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CameraIcon: React.FC<CameraIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M7.997 4.472A1.75 1.75 0 0 1 9.203 4l5.022.033a1.75 1.75 0 0 1 1.444.779l1.482 2.224h2.599a2.75 2.75 0 0 1 2.75 2.75v7a2.75 2.75 0 0 1-2.75 2.75h-16A2.75 2.75 0 0 1 1 16.786v-7a2.75 2.75 0 0 1 2.75-2.75h2.583l1.592-2.564zM9.194 5.5a.25.25 0 0 0-.215.119l-.22.353-1.592 2.564H3.75c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25v-7c0-.69-.56-1.25-1.25-1.25h-3.401L14.42 5.644a.25.25 0 0 0-.205-.111z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 10.036a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8 12.286a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clipRule="evenodd"/>
    </svg>
  );
};

CameraIcon.displayName = 'CameraIcon';
export default CameraIcon;
