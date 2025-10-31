import React from 'react';
import type { IconProps } from '../types';

const AbTestFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5 7c-2.21 0-4 1.6-4 3.57V17h2v-4h4v4h2v-6.43C9 8.6 7.21 7 5 7m-2 4v-.43C3 9.7 3.9 9 5 9s2 .7 2 1.57V11zM13 4h-2v16h2zM21.6 11.47c.25-.44.4-.93.4-1.47 0-1.65-1.35-3-3-3h-4v10h5c1.65 0 3-1.35 3-3 0-1.07-.56-2-1.4-2.53M17 9h2c.55 0 1 .45 1 1s-.45 1-1 1h-2zm3 6h-3v-2h3c.55 0 1 .45 1 1s-.45 1-1 1"/></svg>
);

export default AbTestFilledIcon;
