/**
 * LinkFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface LinkFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const LinkFilledIcon: React.FC<LinkFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M14.109 8.46 8.45 14.119l1.414 1.414 5.658-5.657z"/><path fill={getColorValue()} d="M19.056 4.926a5.96 5.96 0 0 0-4.241-1.757c-1.602 0-3.11.624-4.244 1.757L9.157 6.34l1.414 1.414 1.414-1.414a3.97 3.97 0 0 1 2.83-1.172c1.07 0 2.072.416 2.827 1.17a4.004 4.004 0 0 1 0 5.658l-1.415 1.415 1.414 1.414 1.415-1.414a6.007 6.007 0 0 0 0-8.485M11.99 17.649c-1.565 1.55-4.043 1.523-5.642-.057a3.9 3.9 0 0 1-1.167-2.788 3.96 3.96 0 0 1 1.153-2.813l1.41-1.41L6.33 9.167l-1.418 1.418a5.94 5.94 0 0 0-1.73 4.226 5.9 5.9 0 0 0 1.761 4.203c1.203 1.19 2.744 1.787 4.278 1.787 1.51 0 3.011-.577 4.18-1.734l1.415-1.414-1.414-1.414-1.41 1.41z"/>
    </svg>
  );
};

LinkFilledIcon.displayName = 'LinkFilledIcon';
export default LinkFilledIcon;
