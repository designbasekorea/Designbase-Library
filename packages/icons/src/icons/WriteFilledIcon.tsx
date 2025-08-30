/**
 * WriteFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface WriteFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const WriteFilledIcon: React.FC<WriteFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M17 19a1.003 1.003 0 0 1-1 1H5a1.003 1.003 0 0 1-1-1V8c0-.263.107-.521.293-.707A1 1 0 0 1 5 7h3V5H5c-.79 0-1.562.32-2.121.879A3.02 3.02 0 0 0 2 8v11c0 .801.312 1.555.879 2.121A3.02 3.02 0 0 0 5 22h11c.801 0 1.555-.312 2.121-.879S19 19.801 19 19v-3h-2z"/><path fill={getColorValue()} d="M21.093 2.909c-1.173-1.173-3.217-1.169-4.384-.001L7 12.585V17h4.415l9.678-9.709A3.08 3.08 0 0 0 22 5.1c0-.828-.323-1.608-.907-2.191m-3.519 5.079-1.562-1.562 1.416-1.412 1.557 1.557-1.412 1.416z"/>
    </svg>
  );
};

WriteFilledIcon.displayName = 'WriteFilledIcon';
export default WriteFilledIcon;
