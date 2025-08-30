/**
 * TranslateFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface TranslateFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const TranslateFilledIcon: React.FC<TranslateFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M20 1h-8c-1.654 0-3 1.346-3 3v4H4c-1.654 0-3 1.346-3 3v11a1.001 1.001 0 0 0 1.6.8L6.333 20H14a1 1 0 0 0 1-1v-5h2.667l3.733 2.8a1 1 0 0 0 1.047.095c.339-.17.553-.516.553-.895V4c0-1.654-1.346-3-3-3m-7 17H6a1 1 0 0 0-.6.2L3 20v-9c0-.551.449-1 1-1h8c.552 0 1 .449 1 1zm8-4-2.4-1.8a1 1 0 0 0-.6-.2h-3V8.85h2V11h2V7c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.184A3 3 0 0 0 12 8h-1V4c0-.551.449-1 1-1h8c.552 0 1 .449 1 1zm-5.97-7.15A.99.99 0 0 1 16 6a.99.99 0 0 1 .97.85z"/><path fill={getColorValue()} d="M9 11H7v1H5v2h1.868c-.287.576-1.023 1-1.868 1v2c1.2 0 2.266-.477 3-1.216.734.739 1.8 1.216 3 1.216v-2c-.845 0-1.581-.424-1.868-1H11v-2H9z"/>
    </svg>
  );
};

TranslateFilledIcon.displayName = 'TranslateFilledIcon';
export default TranslateFilledIcon;
