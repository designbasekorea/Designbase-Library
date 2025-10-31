import React from 'react';
import type { IconProps } from '../types';

const SignIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12.75 1v21h-1.5V1z"/><path fill="currentColor" d="m19.81 4.25 3.25 3.25-3.25 3.25h-8.56v-6.5zm-7.06 5h6.44l1.75-1.75-1.75-1.75h-6.44zM16 21.25v1.5H8v-1.5z"/><path fill="currentColor" d="M12.75 8.25v6.5H4.19L.94 11.5l3.25-3.25zM3.06 11.5l1.75 1.75h6.44v-3.5H4.81z"/></svg>
);

export default SignIcon;
