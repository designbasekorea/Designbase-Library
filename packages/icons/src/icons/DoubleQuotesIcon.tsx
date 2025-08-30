/**
 * DoubleQuotesIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DoubleQuotesIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DoubleQuotesIcon: React.FC<DoubleQuotesIconProps> = ({
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
      <title>double-quotes</title><path fill={getColorValue()} fillRule="evenodd" d="M9.481 0Q5.94 0 3.27 2.633T.6 9.147q0 3.272 2.425 6.182t7.438 2.91q0 4.325-1.226 7.346t-3.27 4.962Q3.924 32.487 0 33.541v6.93q6.485-.888 10.98-4.713t7.11-9.203q2.616-5.377 2.616-11.531 0-6.985-3.297-11.005Q14.113 0 9.481 0m27.294 0q-3.542 0-6.212 2.633t-2.67 6.514q0 3.272 2.398 6.182t7.465 2.91q0 4.325-1.226 7.346t-3.27 4.962q-2.043 1.94-5.966 2.994v6.93q6.484-.888 10.98-4.713t7.11-9.203Q48 21.178 48 15.024q0-6.985-3.324-11.005Q41.351 0 36.776 0"/>
    </svg>
  );
};

DoubleQuotesIcon.displayName = 'DoubleQuotesIcon';
export default DoubleQuotesIcon;
