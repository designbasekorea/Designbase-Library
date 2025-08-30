/**
 * ShareAltIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ShareAltIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ShareAltIcon: React.FC<ShareAltIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M13.44 4.067a.75.75 0 0 1 .804.119l8 7a.75.75 0 0 1 0 1.128l-8 7A.75.75 0 0 1 13 18.75v-3.24c-1.925.051-3.579.315-5.062.932-1.659.692-3.157 1.85-4.588 3.758A.75.75 0 0 1 2 19.75c0-4.145 1.147-6.888 3.291-8.698C7.251 9.397 9.946 8.615 13 8.109V4.75a.75.75 0 0 1 .44-.683m1.06 2.336V8.75a.75.75 0 0 1-.638.742c-3.283.497-5.85 1.225-7.603 2.706-1.359 1.147-2.303 2.812-2.631 5.39 1.153-1.15 2.386-1.969 3.734-2.53C9.29 14.254 11.402 14 13.75 14a.75.75 0 0 1 .75.75v2.347l6.111-5.347z" clipRule="evenodd"/>
    </svg>
  );
};

ShareAltIcon.displayName = 'ShareAltIcon';
export default ShareAltIcon;
