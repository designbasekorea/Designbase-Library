/**
 * Refresh2Icon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface Refresh2IconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const Refresh2Icon: React.FC<Refresh2IconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M20.25 8.25V3h1.5v6.75H16v-1.5z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M12 3.75A8.25 8.25 0 0 0 3.75 12h-1.5A9.75 9.75 0 0 1 12 2.25a9.75 9.75 0 0 1 8.628 5.205l.094.106.324.361.011.012.462.517a3 3 0 0 1 .098.123c.007.01.03.044.054.09l-1.342.671a1 1 0 0 0 .068.11l.009.012-.021-.025q-.037-.043-.107-.12l-.335-.373-.013-.015-.494-.554-.05-.065a1 1 0 0 1-.05-.084l-.002-.004A8.25 8.25 0 0 0 12 3.75M12 20.25A8.25 8.25 0 0 0 20.25 12h1.5A9.75 9.75 0 0 1 12 21.75a9.75 9.75 0 0 1-9.195-6.5l1.414-.5A8.25 8.25 0 0 0 12 20.25" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M2.25 14.25H8v1.5H3.75V21h-1.5z" clipRule="evenodd"/>
    </svg>
  );
};

Refresh2Icon.displayName = 'Refresh2Icon';
export default Refresh2Icon;
