/**
 * PhoneIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PhoneIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PhoneIcon: React.FC<PhoneIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M6.366 3.506c-.314-.037-.877.089-1.76.925-.759.72-1.07 1.7-1.103 2.803-.034 1.11.216 2.27.506 3.237.573 1.91 1.619 3.992 3.312 5.685l.008.008.008.008c1.471 1.563 2.727 2.115 5.3 3.005 1.226.425 2.585.657 3.782.622 1.223-.035 2.14-.342 2.642-.843 1.126-1.126.748-2.342.127-2.737l-.009-.006-2.78-1.886c-.635-.34-1.344-.239-1.772.184l-1.244 1.309-.424-.106c-.948-.237-2.303-1.011-3.266-1.867-.553-.491-.954-1.137-1.238-1.72a9.6 9.6 0 0 1-.585-1.535l-.121-.424 1.33-1.33.018-.016c.503-.44.56-1.197.194-1.686l-.01-.014-1.914-2.82c-.352-.527-.686-.759-1.001-.796m2.247-.038C8.165 2.796 7.5 2.129 6.541 2.016c-.961-.113-1.949.362-2.966 1.326-1.14 1.08-1.53 2.499-1.571 3.846-.041 1.341.258 2.68.569 3.714.626 2.087 1.778 4.402 3.68 6.307 1.725 1.83 3.269 2.478 5.893 3.386 1.373.476 2.914.744 4.317.704 1.377-.04 2.76-.383 3.658-1.282 1.67-1.67 1.453-4.048-.117-5.057l-2.82-1.913-.029-.016c-1.154-.642-2.628-.542-3.594.425l-.007.007-.63.663c-.659-.262-1.55-.791-2.235-1.4-.348-.31-.646-.763-.887-1.256a8 8 0 0 1-.36-.875l.663-.662c1.074-.958 1.213-2.577.397-3.681z" clipRule="evenodd"/>
    </svg>
  );
};

PhoneIcon.displayName = 'PhoneIcon';
export default PhoneIcon;
