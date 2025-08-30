/**
 * LocationIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface LocationIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const LocationIcon: React.FC<LocationIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M3 9.85C3 5.366 6.906 1 11.75 1c2.439 0 4.627 1.135 6.194 2.783C19.507 5.427 20.5 7.631 20.5 9.85c0 2.261-1.134 4.23-2.663 6.154-.768.967-1.66 1.951-2.596 2.973l-.282.307c-.856.933-1.747 1.905-2.638 2.952a.75.75 0 0 1-1.142 0 98 98 0 0 0-2.702-3.01l-.216-.233c-.935-1.013-1.828-1.988-2.597-2.95C4.132 14.129 3 12.16 3 9.85m8.75-7.35C7.794 2.5 4.5 6.134 4.5 9.85c0 1.79.868 3.422 2.336 5.257.73.913 1.588 1.85 2.528 2.869l.217.235c.695.752 1.428 1.546 2.169 2.392a132 132 0 0 1 2.103-2.332l.281-.307c.94-1.025 1.797-1.973 2.529-2.893C18.133 13.22 19 11.589 19 9.85c0-1.781-.807-3.627-2.143-5.033C15.523 3.415 13.71 2.5 11.75 2.5" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M8 9.75C8 7.636 9.636 6 11.75 6s3.75 1.636 3.75 3.75-1.636 3.75-3.75 3.75S8 11.864 8 9.75m3.75-2.25c-1.286 0-2.25.964-2.25 2.25S10.464 12 11.75 12 14 11.036 14 9.75s-.964-2.25-2.25-2.25" clipRule="evenodd"/>
    </svg>
  );
};

LocationIcon.displayName = 'LocationIcon';
export default LocationIcon;
