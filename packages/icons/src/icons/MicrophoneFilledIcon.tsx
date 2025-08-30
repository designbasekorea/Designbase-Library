/**
 * MicrophoneFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MicrophoneFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MicrophoneFilledIcon: React.FC<MicrophoneFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M12 15c1.066 0 2.07-.416 2.828-1.171A3.97 3.97 0 0 0 16 11V6a4.03 4.03 0 0 0-1.172-2.828A4.02 4.02 0 0 0 12 2a3.97 3.97 0 0 0-2.828 1.171A3.97 3.97 0 0 0 8 6v5c0 1.068.416 2.073 1.171 2.828A4.02 4.02 0 0 0 12 15"/><path fill={getColorValue()} d="M17.657 16.657A7.95 7.95 0 0 0 20 11h-2a5.96 5.96 0 0 1-1.757 4.243A5.97 5.97 0 0 1 12 17a5.96 5.96 0 0 1-4.243-1.757A5.97 5.97 0 0 1 6 11H4c0 2.136.832 4.145 2.343 5.657A7.94 7.94 0 0 0 11 18.931V21H8v2h8v-2h-3v-2.069a7.94 7.94 0 0 0 4.657-2.274"/>
    </svg>
  );
};

MicrophoneFilledIcon.displayName = 'MicrophoneFilledIcon';
export default MicrophoneFilledIcon;
