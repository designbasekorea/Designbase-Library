/**
 * DocumentationIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DocumentationIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DocumentationIcon: React.FC<DocumentationIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M2.25 4.25H9A3.75 3.75 0 0 1 12.75 8v13h-1.5A2.25 2.25 0 0 0 9 18.75H2.25zm9 13.75V8A2.25 2.25 0 0 0 9 5.75H3.75v11.5H9c.844 0 1.623.279 2.25.75" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M11.25 8A3.75 3.75 0 0 1 15 4.25h6.75v14.5H15A2.25 2.25 0 0 0 12.75 21h-1.5zm1.5 10a3.73 3.73 0 0 1 2.25-.75h5.25V5.75H15A2.25 2.25 0 0 0 12.75 8z" clipRule="evenodd"/>
    </svg>
  );
};

DocumentationIcon.displayName = 'DocumentationIcon';
export default DocumentationIcon;
