import React from 'react';
import type { IconProps } from '../types';

const SpeedtestIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 5.75a8.24 8.24 0 0 0-7.617 5.096l-.002.005a8.23 8.23 0 0 0-.475 4.763A8.3 8.3 0 0 0 5.17 18.62l-1.242.84a9.8 9.8 0 0 1-1.494-3.55l-.001-.007a9.73 9.73 0 0 1 .564-5.631A9.744 9.744 0 0 1 12 4.25a9.74 9.74 0 0 1 9.002 6.022 9.73 9.73 0 0 1 .564 5.631l-.001.006a9.8 9.8 0 0 1-1.494 3.551l-1.242-.84a8.3 8.3 0 0 0 1.265-3.006 8.23 8.23 0 0 0-.475-4.763l-.003-.005A8.244 8.244 0 0 0 12 5.75" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m11.47 13.47 4-4 1.06 1.06-4 4z" clip-rule="evenodd"/></svg>
);

export default SpeedtestIcon;
