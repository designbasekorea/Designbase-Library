/**
 * LangaugeFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface LangaugeFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const LangaugeFilledIcon: React.FC<LangaugeFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M4 13c1.288 0 2.713-.464 4-1.227C9.287 12.536 10.712 13 12 13v-2c-.697 0-1.475-.21-2.235-.557C11.085 9.197 12 7.621 12 6V5h1V3H9V2H7v1H3v2h7v1c0 1.182-.847 2.404-2 3.345C6.847 8.404 6 7.183 6 6H4c0 1.621.915 3.197 2.235 4.443C5.475 10.79 4.696 11 4 11zM21.09 22.414l1.82-.828L17 8.584l-5.91 13.002 1.82.828L14.462 19h5.076zM15.371 17 17 13.417 18.629 17z"/>
    </svg>
  );
};

LangaugeFilledIcon.displayName = 'LangaugeFilledIcon';
export default LangaugeFilledIcon;
