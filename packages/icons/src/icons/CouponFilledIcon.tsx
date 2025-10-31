import React from 'react';
import type { IconProps } from '../types';

const CouponFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.543 10.071C22.414 9.792 23 9.02 23 8.15V7.001c0-1.654-1.346-3-3-3h-3v4h-2v-4H4c-1.654 0-3 1.346-3 3V8.15c0 .871.585 1.643 1.458 1.921A1.49 1.49 0 0 1 3.5 11.5c0 .656-.419 1.23-1.042 1.429C1.586 13.207 1 13.979 1 14.85v1.149c0 1.654 1.346 3 3 3h11v-4h2v4h3c1.654 0 3-1.346 3-3V14.85c0-.871-.586-1.644-1.457-1.921A1.495 1.495 0 0 1 20.5 11.5c0-.655.419-1.23 1.043-1.429M17 13h-2v-3h2z"/></svg>
);

export default CouponFilledIcon;
