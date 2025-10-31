import React from 'react';
import type { IconProps } from '../types';

const ChairAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 13v-1.18c1.16-.41 2-1.51 2-2.82V5c0-1.65-1.35-3-3-3H9C7.35 2 6 3.35 6 5v4c0 1.3.84 2.4 2 2.82V13c-1.65 0-3 1.35-3 3v6h2v-6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6h2v-6c0-1.65-1.35-3-3-3m-6-1h4v1h-4z"/></svg>
);

export default ChairAltFilledIcon;
