/**
 * UserCircleIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface UserCircleIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const UserCircleIcon: React.FC<UserCircleIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M9.096 7.643C9.77 6.854 10.791 6.5 11.75 6.5c1.001 0 1.88.38 2.607 1.096.789.674 1.143 1.695 1.143 2.654 0 1.001-.38 1.88-1.096 2.607C13.73 13.646 12.709 14 11.75 14c-1.001 0-1.88-.38-2.607-1.096C8.354 12.23 8 11.209 8 10.25c0-1.001.38-1.88 1.096-2.607M11.75 8c-.63 0-1.197.238-1.524.63l-.022.026-.024.024c-.468.47-.68.982-.68 1.57 0 .63.238 1.197.63 1.524l.026.022.024.024c.47.469.982.68 1.57.68.63 0 1.197-.238 1.524-.63l.022-.026.024-.024c.469-.47.68-.982.68-1.57 0-.63-.238-1.197-.63-1.524l-.026-.022-.024-.024c-.47-.468-.982-.68-1.57-.68M8.393 17.178c-.426.18-.769.421-.974.66-.522.61-.843 1.273-.924 1.995l-1.49-.166c.12-1.078.598-2.015 1.276-2.805.395-.461.952-.82 1.526-1.065A4.8 4.8 0 0 1 9.65 15.4h4c1.285 0 2.503.471 3.364 1.456.795.908 1.163 1.75 1.281 2.811l-1.49.166c-.082-.738-.314-1.297-.92-1.99-.538-.614-1.32-.943-2.235-.943h-4a3.3 3.3 0 0 0-1.257.278" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.75 2.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1 11.75C1 5.813 5.813 1 11.75 1S22.5 5.813 22.5 11.75 17.687 22.5 11.75 22.5 1 17.687 1 11.75" clipRule="evenodd"/>
    </svg>
  );
};

UserCircleIcon.displayName = 'UserCircleIcon';
export default UserCircleIcon;
