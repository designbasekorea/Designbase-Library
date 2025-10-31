import React from 'react';
import type { IconProps } from '../types';

const AppsFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.8 3h-3.6c-1.21 0-2.2.99-2.2 2.2v3.6c0 1.21.99 2.2 2.2 2.2h3.6c1.21 0 2.2-.99 2.2-2.2V5.2c0-1.21-.99-2.2-2.2-2.2M8.8 13H5.2c-1.21 0-2.2.99-2.2 2.2v3.6c0 1.21.99 2.2 2.2 2.2h3.6c1.21 0 2.2-.99 2.2-2.2v-3.6c0-1.21-.99-2.2-2.2-2.2M18.8 13h-3.6c-1.21 0-2.2.99-2.2 2.2v3.6c0 1.21.99 2.2 2.2 2.2h3.6c1.21 0 2.2-.99 2.2-2.2v-3.6c0-1.21-.99-2.2-2.2-2.2M10 6H8V4c0-.55-.45-1-1-1s-1 .45-1 1v2H4c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1-.45 1-1s-.45-1-1-1"/></svg>
);

export default AppsFilledIcon;
