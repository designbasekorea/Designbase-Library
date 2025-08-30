/**
 * CloudUpIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CloudUpIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CloudUpIcon: React.FC<CloudUpIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M5.23 9.323A7.75 7.75 0 0 1 12.5 4.25c3.782 0 6.923 2.71 7.606 6.291A4.74 4.74 0 0 1 23.25 15a4.75 4.75 0 0 1-4.75 4.75H6A5.25 5.25 0 0 1 .75 14.5c0-2.64 1.95-4.805 4.48-5.177M12.5 5.75a6.25 6.25 0 0 0-5.993 4.483l-.15.512-.534.025A3.74 3.74 0 0 0 2.25 14.5 3.75 3.75 0 0 0 6 18.25h12.5a3.243 3.243 0 0 0 .763-6.398l-.504-.122-.064-.514A6.25 6.25 0 0 0 12.5 5.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M12.75 8.929V16h-1.5V8.929z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m12 7.903 3.53 3.53-1.06 1.061-2.47-2.47-2.47 2.47-1.06-1.06z" clipRule="evenodd"/>
    </svg>
  );
};

CloudUpIcon.displayName = 'CloudUpIcon';
export default CloudUpIcon;
