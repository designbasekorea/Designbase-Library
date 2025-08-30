/**
 * PaperclipFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PaperclipFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PaperclipFilledIcon: React.FC<PaperclipFilledIconProps> = ({
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
      <path fill={getColorValue()} d="m20.698 11.188-7.605 7.505c-.972.972-2.284 1.507-3.693 1.507s-2.72-.535-3.663-1.476C4.73 17.627 4.2 16.34 4.2 15c0-1.45.507-2.693 1.5-3.688l6.452-6.354c.471-.538 1.273-.858 2.147-.858.854 0 1.592.305 2.193.907.602.603.907 1.34.907 2.193a3 3 0 0 1-.901 2.187l-6.406 6.305a1.145 1.145 0 0 1-1.586 0c-.212-.212-.307-.457-.307-.793s.094-.58.307-.793l6.4-6.4-1.414-1.414-6.4 6.4c-.584.583-.893 1.347-.893 2.208s.309 1.622.894 2.208c.584.583 1.348.892 2.206.892s1.623-.309 2.202-.887l6.406-6.306A5 5 0 0 0 19.4 7.2c0-1.382-.517-2.63-1.493-3.607A5 5 0 0 0 14.3 2.1c-1.464 0-2.795.562-3.602 1.487L4.293 9.892C2.924 11.26 2.2 13.026 2.2 15c0 1.85.713 3.604 2.093 5.107C5.644 21.456 7.457 22.2 9.4 22.2s3.757-.743 5.102-2.088l7.601-7.5z"/>
    </svg>
  );
};

PaperclipFilledIcon.displayName = 'PaperclipFilledIcon';
export default PaperclipFilledIcon;
