/**
 * MailOpenIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MailOpenIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MailOpenIcon: React.FC<MailOpenIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M11.364 2.107a.75.75 0 0 1 .772 0l10 6a.75.75 0 0 1 0 1.286l-10 6a.75.75 0 0 1-.772 0l-10-6a.75.75 0 0 1 0-1.286zM3.208 8.75l8.542 5.125 8.542-5.125-8.542-5.125z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M1.75 8a.75.75 0 0 1 .75.75v10c0 .618.593 1.25 1.45 1.25h15.6c.857 0 1.45-.632 1.45-1.25v-10a.75.75 0 0 1 1.5 0v10c0 1.582-1.407 2.75-2.95 2.75H3.95C2.407 21.5 1 20.332 1 18.75v-10A.75.75 0 0 1 1.75 8" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M10.386 13.353a.75.75 0 0 1-.238 1.033l-8 5a.75.75 0 0 1-.795-1.272l8-5a.75.75 0 0 1 1.033.238M13.114 13.353a.75.75 0 0 1 1.034-.239l8 5a.75.75 0 1 1-.795 1.272l-8-5a.75.75 0 0 1-.239-1.033" clipRule="evenodd"/>
    </svg>
  );
};

MailOpenIcon.displayName = 'MailOpenIcon';
export default MailOpenIcon;
