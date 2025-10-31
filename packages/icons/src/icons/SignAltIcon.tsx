import React from 'react';
import type { IconProps } from '../types';

const SignAltIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m18.81 3.25 3.25 3.25-3.25 3.25H4.25v-6.5zm-13.06 5h12.44l1.75-1.75-1.75-1.75H5.75zM16 21.25v1.5H8v-1.5zM19.75 11.25v6.5H5.19L1.94 14.5l3.25-3.25zM4.06 14.5l1.75 1.75h12.44v-3.5H5.81z"/><path fill="currentColor" d="M12.75 17v5h-1.5v-5zM12.75 9v3h-1.5V9zM12.75 1v3h-1.5V1z"/></svg>
);

export default SignAltIcon;
