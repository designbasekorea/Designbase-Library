import React from 'react';
import type { IconProps } from '../types';

const CartFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22.12 6H5.17L5 4c0-1.1-.9-2-2-2H1v2l2 .08L4.08 17h1.7c-.48.53-.78 1.23-.78 2 0 1.65 1.35 3 3 3s3-1.35 3-3c0-.77-.3-1.47-.78-2h4.56c-.48.53-.78 1.23-.78 2 0 1.65 1.35 3 3 3s3-1.35 3-3c0-.77-.3-1.47-.78-2h1.68zM8 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m9 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/></svg>
);

export default CartFilledIcon;
