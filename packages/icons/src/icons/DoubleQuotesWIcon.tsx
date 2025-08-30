/**
 * DoubleQuotesWIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DoubleQuotesWIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DoubleQuotesWIcon: React.FC<DoubleQuotesWIconProps> = ({
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
      <path d="M315.5 239c-2.4 0-4.4.9-6.2 2.6-1.8 1.8-2.7 3.9-2.7 6.5 0 2.2.8 4.2 2.4 6.2s4.1 2.9 7.4 2.9c0 2.9-.4 5.3-1.2 7.3s-1.9 3.7-3.3 5q-2.1 1.95-6 3v6.9c4.3-.6 8-2.2 11-4.7 3-2.6 5.4-5.6 7.1-9.2s2.6-7.4 2.6-11.5c0-4.7-1.1-8.3-3.3-11-2.1-2.7-4.7-4-7.8-4m27.3 0c-2.4 0-4.4.9-6.2 2.6-1.8 1.8-2.7 3.9-2.7 6.5 0 2.2.8 4.2 2.4 6.2 1.6 1.9 4.1 2.9 7.5 2.9 0 2.9-.4 5.3-1.2 7.3s-1.9 3.7-3.3 5-3.4 2.3-6 3v6.9c4.3-.6 8-2.2 11-4.7 3-2.6 5.4-5.6 7.1-9.2s2.6-7.4 2.6-11.5c0-4.7-1.1-8.3-3.3-11s-4.9-4-7.9-4" transform="translate(-306 -239)" fillRule="evenodd" clipRule="evenodd" fill={getColorValue()}/>
    </svg>
  );
};

DoubleQuotesWIcon.displayName = 'DoubleQuotesWIcon';
export default DoubleQuotesWIcon;
