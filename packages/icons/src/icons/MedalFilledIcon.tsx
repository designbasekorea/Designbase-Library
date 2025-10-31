import React from 'react';
import type { IconProps } from '../types';

const MedalFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M23.124 8.117 20.677 2H3.323L.876 8.117l4.28 6.42A7 7 0 0 0 5 16c0 3.859 3.14 7 7 7s7-3.141 7-7a7 7 0 0 0-.157-1.464zM17.931 12.3a7.05 7.05 0 0 0-2.355-2.306l4.125-5.048 1.175 2.937zM10.36 9.202 9.378 8h5.245l-.982 1.202A7 7 0 0 0 12.001 9c-.566 0-1.113.075-1.64.202zM3.124 7.883l1.175-2.937 4.125 5.047A7.04 7.04 0 0 0 6.069 12.3zM12 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5"/><path fill="currentColor" d="M12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3"/></svg>
);

export default MedalFilledIcon;
