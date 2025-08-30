/**
 * DataIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface DataIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const DataIcon: React.FC<DataIconProps> = ({
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
      <path fill={getColorValue()} fillRule="evenodd" d="M7.331 13.447c1.147.489 2.792.803 4.669.803s3.522-.314 4.669-.803c.574-.244.988-.517 1.248-.784.255-.262.333-.484.333-.663h1.5c0 .671-.31 1.25-.758 1.71-.443.454-1.048.825-1.736 1.118-1.378.586-3.233.922-5.256.922s-3.878-.336-5.256-.922c-.688-.293-1.293-.664-1.736-1.119-.448-.46-.758-1.038-.758-1.709h1.5c0 .179.077.4.333.663.26.267.674.54 1.248.784M7.331 19.447c1.147.489 2.792.803 4.669.803s3.522-.314 4.669-.803c.574-.244.988-.517 1.248-.784.255-.262.333-.484.333-.663h1.5c0 .671-.31 1.25-.758 1.71-.443.454-1.048.825-1.736 1.118-1.378.586-3.233.922-5.256.922s-3.878-.336-5.256-.922c-.688-.293-1.293-.664-1.736-1.119-.448-.46-.758-1.038-.758-1.709h1.5c0 .179.077.4.333.663.26.267.674.54 1.248.784M6.084 5.36c-.261.264-.334.48-.334.64s.073.376.334.64c.264.269.684.544 1.262.792 1.153.494 2.798.818 4.654.818s3.501-.324 4.654-.818c.578-.248.998-.523 1.262-.791.261-.265.334-.48.334-.641 0-.16-.073-.376-.334-.64-.264-.269-.684-.544-1.262-.792-1.153-.494-2.798-.818-4.654-.818s-3.501.324-4.654.818c-.578.248-.998.523-1.262.791m.67-2.17C8.136 2.597 9.99 2.25 12 2.25s3.865.348 5.245.94c.69.295 1.295.665 1.739 1.115.447.454.766 1.027.766 1.695s-.319 1.241-.766 1.695c-.444.45-1.05.82-1.739 1.116-1.38.591-3.235.939-5.245.939s-3.865-.348-5.245-.94c-.69-.295-1.295-.665-1.739-1.115C4.57 7.24 4.25 6.668 4.25 6s.319-1.241.766-1.695c.444-.45 1.05-.82 1.739-1.116" clipRule="evenodd"/><path fill={getColorValue()} fillRule="evenodd" d="M4.25 18V6h1.5v12zM18.25 18V6h1.5v12z" clipRule="evenodd"/>
    </svg>
  );
};

DataIcon.displayName = 'DataIcon';
export default DataIcon;
