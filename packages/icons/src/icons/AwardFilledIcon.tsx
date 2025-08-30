/**
 * AwardFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface AwardFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const AwardFilledIcon: React.FC<AwardFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M16.954 4.05A6.95 6.95 0 0 0 12.005 2a6.96 6.96 0 0 0-4.95 2.05A6.96 6.96 0 0 0 5.005 9c0 1.869.728 3.627 2.05 4.949A6.96 6.96 0 0 0 12.005 16c1.87 0 3.628-.729 4.949-2.051A6.95 6.95 0 0 0 19.005 9c0-1.87-.729-3.628-2.051-4.95M5.641 15.363a9 9 0 0 1-.678-.766l-.034-.045a9 9 0 0 1-.563-.805L2.142 17.48c-.19.32-.19.72.01 1.04.19.32.55.5.92.47l3.11-.22 1.37 2.69c.17.32.5.53.86.54h.03c.35 0 .68-.18.86-.49l2.117-3.539a8.93 8.93 0 0 1-5.778-2.608M21.862 17.49l-2.215-3.748q-.258.418-.565.808l-.034.046a9 9 0 0 1-.68.768q-.026.024-.054.049a8.92 8.92 0 0 1-5.712 2.558l2.109 3.539c.18.31.5.49.85.49h.04c.36-.01.69-.22.85-.54l1.38-2.69 3.1.22c.37.03.72-.15.92-.47.19-.31.201-.71.011-1.03"/>
    </svg>
  );
};

AwardFilledIcon.displayName = 'AwardFilledIcon';
export default AwardFilledIcon;
