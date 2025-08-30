/**
 * MailOpenFilledIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface MailOpenFilledIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const MailOpenFilledIcon: React.FC<MailOpenFilledIconProps> = ({
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
      <path fill={getColorValue()} d="m22.93 8.655-.032-.079a1 1 0 0 0-.187-.278q-.012-.01-.024-.019a1 1 0 0 0-.172-.136l-10-6a1 1 0 0 0-1.029 0l-10.001 6a1 1 0 0 0-.174.138q-.011.008-.022.017c-.08.081-.14.177-.189.28q-.017.037-.031.077a1 1 0 0 0-.07.346v10c0 .043.012.082.013.125q.001.025.006.052c.099 1.571 1.481 2.824 3.181 2.824h15.6c1.701 0 3.083-1.253 3.181-2.825q.003-.024.005-.048c.002-.043.014-.083.014-.127v-10a1 1 0 0 0-.07-.345zM3 10.766l5.249 3.149L3 17.196zM19.8 20H4.2c-.451 0-.841-.227-1.045-.543l7.019-4.387 1.312.787a1 1 0 0 0 1.03 0l1.312-.787 7.019 4.387a1.25 1.25 0 0 1-1.045.543zm1.2-2.804-5.249-3.28L21 10.767z"/>
    </svg>
  );
};

MailOpenFilledIcon.displayName = 'MailOpenFilledIcon';
export default MailOpenFilledIcon;
