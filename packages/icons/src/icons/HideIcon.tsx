/**
 * HideIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface HideIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const HideIcon: React.FC<HideIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M8.343 11.2c.056-.27.147-.581.284-.842l1.328.696c-.047.09-.102.252-.145.454-.042.199-.06.381-.06.492A2.27 2.27 0 0 0 12 14.25c.284 0 .685-.056.982-.2l.651 1.352c-.57.274-1.217.348-1.633.348-2.056 0-3.75-1.694-3.75-3.75 0-.238.035-.527.093-.8" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M2.833 12c.477-.936 1.58-2.68 3.626-3.843l-.742-1.304c-2.695 1.534-3.975 3.906-4.4 4.835L1.176 12l.143.312c.685 1.5 3.5 6.438 10.682 6.438 1.62 0 3.026-.253 4.242-.667l-.484-1.42c-1.054.36-2.297.587-3.758.587-5.875 0-8.377-3.707-9.167-5.25M12 6.75c-.673 0-1.6.084-2.202.227l-.346-1.46c.746-.177 1.797-.267 2.548-.267 7.182 0 9.997 4.939 10.682 6.438l.143.312-.143.312a11.1 11.1 0 0 1-3.22 4.037l-.923-1.184A9.7 9.7 0 0 0 21.166 12c-.79-1.544-3.293-5.25-9.166-5.25" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="m19.763 22.237-18-18 1.06-1.06 18 18z" clipRule="evenodd"/>
    </svg>
  );
};

HideIcon.displayName = 'HideIcon';
export default HideIcon;
