/**
 * PromotionIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PromotionIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PromotionIcon: React.FC<PromotionIconProps> = ({
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
      <path fill={getColorValue()} d="M17 12.65a.75.75 0 0 1 .676.426l1.026 2.138 2.404.344a.751.751 0 0 1 .424 1.273l-1.723 1.723.431 2.415a.751.751 0 0 1-1.084.797L17 20.646l-2.154 1.12a.75.75 0 0 1-1.084-.797l.43-2.415-1.722-1.723a.751.751 0 0 1 .424-1.273l2.403-.344 1.027-2.138.053-.094A.75.75 0 0 1 17 12.65m-9.25-8.4h8.5V2h1.5v2.25H20c.964 0 1.75.786 1.75 1.75v7h-1.5v-1.25H3.75V20c0 .136.114.25.25.25h8v1.5H4c-.964 0-1.75-.786-1.75-1.75V6c0-.964.786-1.75 1.75-1.75h2.25V2h1.5zm8.727 11.975a.75.75 0 0 1-.57.418l-1.317.187.94.94c.173.174.251.421.208.663l-.232 1.298 1.148-.596.083-.037a.75.75 0 0 1 .609.037l1.147.596-.231-1.298a.75.75 0 0 1 .208-.663l.94-.94-1.316-.187a.75.75 0 0 1-.57-.418L17 15.133zM4 5.75a.253.253 0 0 0-.25.25v4.25h16.5V6a.253.253 0 0 0-.25-.25h-2.25V8h-1.5V5.75h-8.5V8h-1.5V5.75z"/>
    </svg>
  );
};

PromotionIcon.displayName = 'PromotionIcon';
export default PromotionIcon;
