/**
 * MessagePlusFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MessagePlusFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MessagePlusFilledIcon: React.FC<MessagePlusFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M21.05 16.255a10.02 10.02 0 0 0-.152-8.818 9.94 9.94 0 0 0-5.832-4.954 9.94 9.94 0 0 0-7.628.622C2.532 5.621.588 11.658 3.104 16.563a9.93 9.93 0 0 0 5.833 4.954 9.954 9.954 0 0 0 7.326-.473l4.408.723a.98.98 0 0 0 .873-.283 1 1 0 0 0 .273-.877zM17 13h-4v3.999h-2V13H7.002v-2H11V7.002h2V11h4z"/>
    </svg>
  );
};

MessagePlusFilledIcon.displayName = 'MessagePlusFilledIcon';
export default MessagePlusFilledIcon;
