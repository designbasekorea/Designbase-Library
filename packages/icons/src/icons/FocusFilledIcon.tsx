import React from 'react';
import type { IconProps } from '../types';

const FocusFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5m0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3M4 4h3V2H4c-1.103 0-2 .897-2 2v3h2zM20 2h-3v2h3v3h2V4c0-1.103-.897-2-2-2M20 20h-3v2h3c1.103 0 2-.897 2-2v-3h-2zM4 17H2v3c0 1.103.897 2 2 2h3v-2H4z"/></svg>
);

export default FocusFilledIcon;
