/**
 * HideFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface HideFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const HideFilledIcon: React.FC<HideFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M22.909 11.584C22.204 10.039 19.331 5 12 5c-.723 0-1.81.085-2.606.274l.463 1.945c.536-.127 1.438-.22 2.144-.22 5.576 0 8.043 3.42 8.884 4.999a9.5 9.5 0 0 1-2.499 2.969l1.23 1.578a11.3 11.3 0 0 0 3.294-4.129L23.1 12zM1.586 4.414l2.933 2.933a11.4 11.4 0 0 0-3.428 4.237L.901 12l.19.416C1.797 13.96 4.67 19 12.001 19c1.299 0 2.53-.172 3.679-.493l3.907 3.907L21.001 21 3 3zM12 17c-5.577 0-8.045-3.422-8.885-5 .439-.829 1.324-2.174 2.833-3.223l2.197 2.197A4.5 4.5 0 0 0 8 12.001c0 2.206 1.794 4 4 4a4.7 4.7 0 0 0 1.039-.133l.97.97q-.965.16-2.009.162"/>
    </svg>
  );
};

HideFilledIcon.displayName = 'HideFilledIcon';
export default HideFilledIcon;
