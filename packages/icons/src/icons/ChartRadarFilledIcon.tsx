/**
 * ChartRadarFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ChartRadarFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ChartRadarFilledIcon: React.FC<ChartRadarFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M12 .78.863 8.574 4.219 22h15.562l3.355-13.425zm5.537 8.515L13 6.448V3.921l6.735 4.715zM11 10.656l-1.904-.57L11 8.843zm-.686 1.882-1.508 1.938-.657-2.588zM12 13.63l1.621 2.084h-3.242zm1.686-1.09 2.325-.698-.767 2.701zM13 10.655V8.81l1.991 1.25zm-2-4.199L6.588 9.333l-2.323-.697L11 3.921zm-5.083 4.762 1.334 5.257-1.779 2.288-2.075-8.3zm2.907 6.494h6.353L16.956 20H7.045zm7.943-1.213 1.517-5.34 2.32-.697-2.076 8.301z"/>
    </svg>
  );
};

ChartRadarFilledIcon.displayName = 'ChartRadarFilledIcon';
export default ChartRadarFilledIcon;
