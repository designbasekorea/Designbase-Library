/**
 * MessageQuestionFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MessageQuestionFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MessageQuestionFilledIcon: React.FC<MessageQuestionFilledIconProps> = ({
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
      <path fill={getColorValue()} d="M21.05 16.255a10.02 10.02 0 0 0-.152-8.818 9.94 9.94 0 0 0-5.832-4.954 9.94 9.94 0 0 0-7.628.622C2.532 5.621.588 11.658 3.104 16.563a9.93 9.93 0 0 0 5.833 4.954 9.954 9.954 0 0 0 7.326-.473l4.408.723a.98.98 0 0 0 .873-.283 1 1 0 0 0 .273-.877zM13 18h-2v-2h2zm1.015-5.143C13.38 13.238 13 13.665 13 14v1h-2v-1c0-1.091.687-2.079 1.985-2.857.556-.333 1.015-.679 1.015-1.542 0-.927-.84-1.6-2-1.6-1.14 0-2 .86-2 2H8c0-2.243 1.757-4 4-4 2.28 0 4 1.548 4 3.6 0 2.067-1.442 2.931-1.985 3.256"/>
    </svg>
  );
};

MessageQuestionFilledIcon.displayName = 'MessageQuestionFilledIcon';
export default MessageQuestionFilledIcon;
