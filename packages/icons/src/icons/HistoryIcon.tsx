/**
 * HistoryIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface HistoryIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const HistoryIcon: React.FC<HistoryIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M2 14h5.75v1.5H3.5v5.25H2z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 3.5a8.25 8.25 0 0 0-8.25 8.25H2A9.75 9.75 0 0 1 11.75 2a9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-8.628-5.205l-.094-.107-.325-.361-.01-.011-.462-.517a3 3 0 0 1-.098-.123 1 1 0 0 1-.054-.09l1.342-.671a.746.746 0 0 0-.068-.11l-.009-.012.021.025q.037.043.107.12c.091.103.212.237.335.373l.012.014.449.502.095.118c.007.009.029.04.051.084l.002.004A8.25 8.25 0 0 0 11.75 20 8.25 8.25 0 0 0 20 11.75a8.25 8.25 0 0 0-8.25-8.25" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11 6.75h1.5v4.69l2.78 2.78-1.06 1.06L11 12.06z" clipRule="evenodd"/>
    </svg>
  );
};

HistoryIcon.displayName = 'HistoryIcon';
export default HistoryIcon;
