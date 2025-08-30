/**
 * PaperclipIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface PaperclipIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const PaperclipIcon: React.FC<PaperclipIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M10.405 3.434C11.28 2.451 12.595 2 13.85 2c1.295 0 2.487.476 3.43 1.42a4.75 4.75 0 0 1 1.42 3.43 4.75 4.75 0 0 1-1.42 3.43l-.004.005-6.398 6.298c-.55.548-1.244.817-2.028.817-.786 0-1.48-.27-2.03-.82S6 15.336 6 14.55s.27-1.48.82-2.03l6.4-6.4 1.06 1.06-6.4 6.4c-.25.25-.38.556-.38.97s.13.72.38.97.556.38.97.38.72-.13.97-.38l.004-.005 6.398-6.297A3.26 3.26 0 0 0 17.2 6.85c0-.905-.324-1.713-.98-2.37a3.26 3.26 0 0 0-2.37-.98c-.936 0-1.81.342-2.336.944l-.018.02-6.418 6.318C4.025 11.836 3.5 13.142 3.5 14.65c0 1.476.603 2.797 1.592 3.881A5.46 5.46 0 0 0 8.95 20.1c1.415 0 2.82-.53 3.87-1.58l.003-.004 7.6-7.5 1.054 1.068-7.597 7.496q0 .001-.002.002A6.96 6.96 0 0 1 8.95 21.6c-1.786 0-3.58-.67-4.93-2.02l-.012-.011-.01-.012C2.792 18.243 2 16.568 2 14.65c0-1.892.674-3.585 2.02-4.93l.004-.005z" clipRule="evenodd"/>
    </svg>
  );
};

PaperclipIcon.displayName = 'PaperclipIcon';
export default PaperclipIcon;
