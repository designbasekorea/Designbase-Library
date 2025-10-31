import React from 'react';
import type { IconProps } from '../types';

const MessageMinusFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.05 16.255a10.02 10.02 0 0 0-.152-8.818 9.94 9.94 0 0 0-5.832-4.954 9.94 9.94 0 0 0-7.628.622C2.532 5.621.588 11.658 3.104 16.563a9.93 9.93 0 0 0 5.833 4.954 9.954 9.954 0 0 0 7.326-.473l4.408.723a.98.98 0 0 0 .873-.283 1 1 0 0 0 .273-.877l-.768-4.353zM16.999 13H7.002v-2h9.997z"/></svg>
);

export default MessageMinusFilledIcon;
