/**
 * CommentCheckIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface CommentCheckIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const CommentCheckIcon: React.FC<CommentCheckIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="m10.25 11.69 5.47-5.47 1.06 1.06-6.53 6.53-3.53-3.53 1.06-1.06z" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M3.75 3.5c-.686 0-1.25.564-1.25 1.25v14.44l3.781-3.026A.75.75 0 0 1 6.75 16h13c.686 0 1.25-.564 1.25-1.25v-10c0-.686-.564-1.25-1.25-1.25zM1 4.75A2.756 2.756 0 0 1 3.75 2h16a2.756 2.756 0 0 1 2.75 2.75v10a2.756 2.756 0 0 1-2.75 2.75H7.013L2.22 21.336A.75.75 0 0 1 1 20.75z" clipRule="evenodd"/>
    </svg>
  );
};

CommentCheckIcon.displayName = 'CommentCheckIcon';
export default CommentCheckIcon;
