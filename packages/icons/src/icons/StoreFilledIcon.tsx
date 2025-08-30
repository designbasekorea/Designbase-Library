/**
 * StoreFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface StoreFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const StoreFilledIcon: React.FC<StoreFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M19 2H5C3.346 2 2 3.346 2 5v2.6c0 .966.379 1.82 1 2.44V22h18V10.116c.634-.603 1-1.467 1-2.516V5c0-1.654-1.346-3-3-3M5 20v-9.006c.808.086 1.645-.174 2.323-.749q.099-.084.19-.174a3.4 3.4 0 0 0 1.822.915c.858.144 1.764-.127 2.488-.741q.099-.084.19-.174a3.4 3.4 0 0 0 1.822.915c.857.144 1.763-.127 2.487-.741q.073-.062.142-.126.072.072.149.139a3.1 3.1 0 0 0 2.053.766c.11 0 .221-.013.333-.024v9z"/><path fill={getColorValue()} d="M14 12c-1.654 0-3 1.346-3 3v3h6v-3c0-1.654-1.346-3-3-3m1 4h-2v-1a1 1 0 0 1 2 0z"/>
    </svg>
  );
};

StoreFilledIcon.displayName = 'StoreFilledIcon';
export default StoreFilledIcon;
