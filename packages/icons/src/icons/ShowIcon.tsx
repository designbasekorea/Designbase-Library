/**
 * ShowIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ShowIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ShowIcon: React.FC<ShowIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M8.25 12c0-2.055 1.695-3.75 3.75-3.75s3.75 1.694 3.75 3.75-1.694 3.75-3.75 3.75S8.25 14.056 8.25 12M12 9.75A2.27 2.27 0 0 0 9.75 12 2.27 2.27 0 0 0 12 14.25 2.27 2.27 0 0 0 14.25 12 2.27 2.27 0 0 0 12 9.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M2.833 12c.791 1.543 3.297 5.25 9.167 5.25 5.872 0 8.374-3.704 9.167-5.25-.791-1.543-3.297-5.25-9.167-5.25-5.871 0-8.374 3.704-9.167 5.25m-1.515-.312C2.006 10.183 4.823 5.25 12 5.25s9.997 4.938 10.682 6.438l.143.312-.143.312C21.994 13.817 19.177 18.75 12 18.75s-9.997-4.938-10.682-6.438L1.175 12z" clipRule="evenodd"/>
    </svg>
  );
};

ShowIcon.displayName = 'ShowIcon';
export default ShowIcon;
