/**
 * MessageQuestionIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MessageQuestionIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MessageQuestionIcon: React.FC<MessageQuestionIconProps> = ({
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
      <path fill={getColorValue()} d="M7.552 3.326C12.342.87 18.218 2.76 20.675 7.551l.13.263a9.74 9.74 0 0 1-.017 8.404l.784 4.433a.75.75 0 0 1-.86.87l-4.493-.737c-4.747 2.282-10.474.38-12.892-4.335C.87 11.66 2.762 5.783 7.552 3.326m11.788 4.91A8.25 8.25 0 0 0 8.237 4.66a8.248 8.248 0 1 0 7.529 14.678l.11-.046a.75.75 0 0 1 .354-.027l3.68.603-.64-3.631a.75.75 0 0 1 .071-.473 8.25 8.25 0 0 0 0-7.53"/><path fill={getColorValue()} d="M12.75 16v2h-1.5v-2zM11.25 14c0-.762.381-1.361.762-1.772a5 5 0 0 1 1.102-.871c.478-.287 1.136-.694 1.136-1.757 0-.984-.855-1.85-2.25-1.85-1.286 0-2.25.964-2.25 2.25h-1.5c0-2.114 1.636-3.75 3.75-3.75 2.004 0 3.75 1.334 3.75 3.35 0 1.936-1.342 2.73-1.864 3.044-.226.135-.53.342-.773.603q-.365.396-.363.753v1h-1.5z"/>
    </svg>
  );
};

MessageQuestionIcon.displayName = 'MessageQuestionIcon';
export default MessageQuestionIcon;
