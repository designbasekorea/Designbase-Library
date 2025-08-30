/**
 * SettingsFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface SettingsFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const SettingsFilledIcon: React.FC<SettingsFilledIconProps> = ({
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
      <path fill={getColorValue()} d="m22.152 9.512-2.69-.404a6 6 0 0 0-.139-.337l1.616-2.187a1 1 0 0 0-.098-1.301L18.72 3.162a1 1 0 0 0-1.302-.097l-2.186 1.616a8 8 0 0 0-.338-.138l-.403-2.691A1 1 0 0 0 13.502 1h-3a1 1 0 0 0-.989.852l-.404 2.69q-.171.065-.338.139L6.584 3.065a1 1 0 0 0-1.301.097L3.162 5.283a1 1 0 0 0-.097 1.301l1.616 2.187a9 9 0 0 0-.139.337l-2.69.404a1 1 0 0 0-.852.989v3a1 1 0 0 0 .852.989l2.69.403q.066.171.139.338l-1.615 2.186a1 1 0 0 0 .097 1.302l2.121 2.121c.349.349.902.391 1.301.098l2.187-1.616q.166.073.337.139l.404 2.69a1 1 0 0 0 .989.852h3a1 1 0 0 0 .989-.852l.403-2.69q.171-.065.338-.139l2.186 1.616c.397.293.953.252 1.302-.098l2.121-2.121c.35-.35.392-.903.098-1.302l-1.616-2.187q.073-.166.139-.337l2.69-.403c.489-.074.852-.494.852-.989v-3a1 1 0 0 0-.852-.989m-10.148 6.489c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4"/>
    </svg>
  );
};

SettingsFilledIcon.displayName = 'SettingsFilledIcon';
export default SettingsFilledIcon;
