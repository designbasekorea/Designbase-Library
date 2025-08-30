/**
 * HelpIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface HelpIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const HelpIcon: React.FC<HelpIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M11 17.75v-2h1.5v2z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 3.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2 11.75C2 6.365 6.365 2 11.75 2s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2 17.135 2 11.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 7.5c-1.286 0-2.25.964-2.25 2.25H8C8 7.636 9.636 6 11.75 6c2.005 0 3.75 1.334 3.75 3.35 0 1.925-1.327 2.72-1.855 3.038l-.01.005c-.225.135-.53.343-.772.604q-.364.396-.363.753v1H11v-1c0-.762.381-1.36.762-1.772a5 5 0 0 1 1.102-.871C13.342 10.82 14 10.414 14 9.35c0-.984-.854-1.85-2.25-1.85" clipRule="evenodd"/>
    </svg>
  );
};

HelpIcon.displayName = 'HelpIcon';
export default HelpIcon;
