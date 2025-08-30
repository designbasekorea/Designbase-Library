/**
 * AdobeLogoIcon 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface AdobeLogoIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const AdobeLogoIcon: React.FC<AdobeLogoIconProps> = ({
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
      <g clip-path="url(#a)"><path fill={getColorValue()} fillRule="evenodd" d="M0 0h6.69L0 16zm18.079 0h-6.682l6.682 16zM9.044 5.897 13.302 16h-2.794l-1.272-3.217H6.119zm20.739 6.54-.79-2.262h-3.238l-.745 2.236c-.03.083-.07.109-.152.109h-1.356c-.078 0-.109-.04-.096-.135L26.2 4.439c.056-.135.096-.274.122-.732 0-.057.03-.096.083-.096h1.883c.07 0 .082.013.096.083l3.133 8.704c.013.082 0 .122-.083.122h-1.516c-.07 0-.11-.026-.135-.083m-3.427-4.25-.17.51h2.376c-.085-.265-.2-.616-.328-1.004-.304-.924-.676-2.057-.866-2.727h-.013c-.189.786-.62 2.083-.999 3.221m9.19 4.468c.815 0 1.682-.148 2.563-.527.07-.027.082-.057.082-.123a9 9 0 0 1-.056-.867V2.944c0-.052 0-.078-.066-.078h-1.477c-.057 0-.083.026-.083.096v2.776a5 5 0 0 0-.584-.04c-2.384 0-3.848 1.574-3.848 3.54 0 2.28 1.503 3.417 3.469 3.417m.963-1.517a2.6 2.6 0 0 1-.789.11c-1.08 0-1.965-.611-1.965-2.093 0-1.312.91-2.088 2.118-2.088.244 0 .457.026.636.096zm3.101-1.952c0-1.927 1.26-3.487 3.295-3.487 2.088 0 3.225 1.586 3.225 3.443 0 2.105-1.342 3.513-3.255 3.513-2.262 0-3.265-1.748-3.265-3.47m4.851 0c0-1.13-.488-2.119-1.639-2.119-.91 0-1.56.802-1.56 2.088 0 1.25.61 2.118 1.643 2.118.837 0 1.556-.693 1.556-2.087m3.197-6.32c-.057 0-.096.026-.096.096v9.274c0 .04.04.11.096.122.65.201 1.33.297 2.03.297 2.01 0 3.963-1.247 3.963-3.757 0-1.818-1.247-3.2-3.2-3.2-.448 0-.867.07-1.233.192l-.017-2.915c0-.096-.026-.11-.122-.11zm4.323 6.197c0 1.504-1.028 2.21-2.14 2.21-.23 0-.435-.013-.623-.07V7.247c.214-.083.47-.153.946-.153 1.072 0 1.817.68 1.817 1.97m8.579.432c-.188.044-.732.057-1.395.057h-2.754c.039.945.666 1.708 2.048 1.708q.913 0 1.682-.327c.04-.026.079-.013.079.053v1.128c0 .079-.026.122-.079.149-.514.244-1.111.392-2.035.392-2.467 0-3.347-1.735-3.347-3.404 0-1.883 1.137-3.552 3.186-3.552 2.005 0 2.78 1.573 2.78 2.863 0 .38-.017.689-.056.837-.013.057-.04.083-.11.096m-2.685-2.493c-.937 0-1.355.72-1.465 1.382h2.023c.514 0 .688 0 .745-.014v-.108c0-.393-.27-1.26-1.303-1.26" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill={getColorValue()} d="M0 0h61v16H0z"/></clipPath></defs>
    </svg>
  );
};

AdobeLogoIcon.displayName = 'AdobeLogoIcon';
export default AdobeLogoIcon;
