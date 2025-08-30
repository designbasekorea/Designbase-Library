/**
 * CreditScoreFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CreditScoreFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CreditScoreFilledIcon: React.FC<CreditScoreFilledIconProps> = ({
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
      <path fill={getColorValue()} d="m11 12.936-1.993-1.993-1.414 1.414L11 15.764l5.407-5.407-1.414-1.414zM4.8 7.599 3.201 6.398a10.9 10.9 0 0 0-2.202 6.603c0 2.896 1.119 5.63 3.15 7.7l1.428-1.4a8.95 8.95 0 0 1-2.578-6.3 8.93 8.93 0 0 1 1.8-5.401zM20.799 6.397l-1.6 1.201A8.9 8.9 0 0 1 21 12.999a8.94 8.94 0 0 1-2.578 6.3l1.428 1.4a10.93 10.93 0 0 0 3.15-7.7c0-2.403-.762-4.686-2.201-6.602M12 2a10.9 10.9 0 0 0-7.845 3.301l1.43 1.398A8.9 8.9 0 0 1 12 4c2.434 0 4.713.958 6.415 2.699l1.43-1.398A10.9 10.9 0 0 0 12 2"/>
    </svg>
  );
};

CreditScoreFilledIcon.displayName = 'CreditScoreFilledIcon';
export default CreditScoreFilledIcon;
