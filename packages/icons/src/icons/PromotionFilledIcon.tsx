/**
 * PromotionFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PromotionFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PromotionFilledIcon: React.FC<PromotionFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M20 4h-2V2h-2v2H8V2H6v2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4v-8h16v1h2V6c0-1.1-.9-2-2-2M4 10V6h2v2h2V6h8v2h2V6h2v4z"/><path fill={getColorValue()} d="m21.14 15.31-2.27-.32-.97-2.02c-.17-.35-.52-.57-.9-.57s-.74.22-.9.57l-.97 2.02-2.27.32c-.38.05-.69.31-.81.67s-.03.76.24 1.02l1.63 1.63-.41 2.29c-.07.38.08.76.39.98.31.23.72.26 1.05.08l2.04-1.06 2.04 1.06c.14.08.3.11.46.11.21 0 .42-.07.59-.19.31-.23.46-.61.39-.98l-.41-2.29L21.69 17a.99.99 0 0 0 .24-1.02.99.99 0 0 0-.81-.67z"/>
    </svg>
  );
};

PromotionFilledIcon.displayName = 'PromotionFilledIcon';
export default PromotionFilledIcon;
