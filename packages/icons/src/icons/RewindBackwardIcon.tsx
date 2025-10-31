import React from 'react';
import type { IconProps } from '../types';

const RewindBackwardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m4.06 6 3.47-3.47-1.06-1.06L1.94 6l4.53 4.53 1.06-1.06zM3.25 13.75H2v-1.5h2.75V20h-1.5zM6.91 12.908a2.253 2.253 0 0 1 3.181 0l.001.002c.42.422.658.993.658 1.59v3a2.25 2.25 0 0 1-.659 1.591v.001a2.253 2.253 0 0 1-3.182 0l-.001-.002a2.25 2.25 0 0 1-.658-1.59v-3c0-.597.237-1.17.659-1.591zm1.059 1.062a.75.75 0 0 0-.219.53v3a.753.753 0 0 0 .75.75.753.753 0 0 0 .75-.75v-3a.753.753 0 0 0-.75-.75.75.75 0 0 0-.531.22" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M3 5.25h12.002a6.75 6.75 0 0 1 5.321 10.886C19.283 17.48 17.265 18.75 15 18.75h-2v-1.5h2c1.735 0 3.338-1 4.137-2.032a5.253 5.253 0 0 0-4.138-8.468H3z" clip-rule="evenodd"/></svg>
);

export default RewindBackwardIcon;
