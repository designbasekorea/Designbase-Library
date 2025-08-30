/**
 * VerifiedBadgeAltIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface VerifiedBadgeAltIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const VerifiedBadgeAltIcon: React.FC<VerifiedBadgeAltIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="m10.866 13.928 5.086-5.44 1.096 1.024-6.134 6.56-3.938-3.845 1.048-1.074z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M12 1.25c.2 0 .39.08.532.22l1.803 1.813 2.47-.667a.75.75 0 0 1 .92.53l.658 2.471 2.47.658a.75.75 0 0 1 .531.92l-.666 2.47 1.811 1.803a.75.75 0 0 1 0 1.064l-1.811 1.803.666 2.47a.75.75 0 0 1-.53.92l-2.471.658-.658 2.47a.75.75 0 0 1-.92.531l-2.47-.666-1.803 1.811a.75.75 0 0 1-1.064 0l-1.803-1.811-2.47.666a.75.75 0 0 1-.92-.53l-.658-2.471-2.47-.658a.75.75 0 0 1-.531-.92l.667-2.47-1.812-1.803a.75.75 0 0 1 0-1.064l1.812-1.803-.667-2.47a.75.75 0 0 1 .53-.92l2.471-.658.658-2.47a.75.75 0 0 1 .92-.531l2.47.667 1.803-1.812A.75.75 0 0 1 12 1.25m0 1.813L10.422 4.65a.75.75 0 0 1-.727.195L7.53 4.26l-.576 2.163a.75.75 0 0 1-.532.532L4.26 7.53l.584 2.164a.75.75 0 0 1-.195.727L3.063 12l1.586 1.578a.75.75 0 0 1 .195.727L4.26 16.47l2.163.576a.75.75 0 0 1 .532.532l.576 2.163 2.164-.584a.75.75 0 0 1 .727.195L12 20.937l1.578-1.586a.75.75 0 0 1 .727-.195l2.164.584.576-2.163a.75.75 0 0 1 .532-.532l2.163-.576-.584-2.164a.75.75 0 0 1 .195-.727L20.937 12l-1.586-1.578a.75.75 0 0 1-.195-.727l.584-2.164-2.163-.576a.75.75 0 0 1-.532-.532L16.47 4.26l-2.164.584a.75.75 0 0 1-.727-.195z" clipRule="evenodd"/>
    </svg>
  );
};

VerifiedBadgeAltIcon.displayName = 'VerifiedBadgeAltIcon';
export default VerifiedBadgeAltIcon;
