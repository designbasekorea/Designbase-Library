import React from 'react';
import type { IconProps } from '../types';

const EaselFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 17V2H4v15H3v2h3l-1.8 2.4a.998.998 0 0 0 .799 1.599 1 1 0 0 0 .801-.4l2.7-3.6h7.001l2.7 3.6c.196.263.496.4.801.4a.998.998 0 0 0 .799-1.599l-1.8-2.4h3v-2zM14 4v1h-4V4zM6 17V4h2v1c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V4h2v13z"/></svg>
);

export default EaselFilledIcon;
