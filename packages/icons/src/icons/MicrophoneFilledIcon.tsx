import React from 'react';
import type { IconProps } from '../types';

const MicrophoneFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 14c1.066 0 2.07-.416 2.828-1.171A3.97 3.97 0 0 0 16 10V5a4.03 4.03 0 0 0-1.172-2.828A4.02 4.02 0 0 0 12 1a3.97 3.97 0 0 0-2.828 1.171A3.97 3.97 0 0 0 8 5v5c0 1.068.416 2.073 1.171 2.828A4.02 4.02 0 0 0 12 14"/><path fill="currentColor" d="M17.657 15.657A7.95 7.95 0 0 0 20 10h-2a5.96 5.96 0 0 1-1.757 4.243A5.97 5.97 0 0 1 12 16a5.96 5.96 0 0 1-4.243-1.757A5.97 5.97 0 0 1 6 10H4c0 2.136.832 4.145 2.343 5.657A7.94 7.94 0 0 0 11 17.931V20H8v2h8v-2h-3v-2.069a7.94 7.94 0 0 0 4.657-2.274"/></svg>
);

export default MicrophoneFilledIcon;
