import React from 'react';
import type { IconProps } from '../types';

const MicrophoneOffFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M15.205 11.844S16 11.162 16 10V5a4.03 4.03 0 0 0-1.172-2.828A4.02 4.02 0 0 0 12 1a3.97 3.97 0 0 0-2.828 1.171A3.98 3.98 0 0 0 8 5c2.009 1.934 7.205 6.844 7.205 6.844M19.998 9.999l-2 .003a5.96 5.96 0 0 1-.986 3.297l1.668 1.102a7.94 7.94 0 0 0 1.318-4.402M15.677 17.091l4.616 4.616 1.414-1.414-18-18-1.414 1.414L8 9.414v.588c0 .621.147 1.243.426 1.798.278.555.69 1.044 1.188 1.415a4 4 0 0 0 2.934.748l1.618 1.618a6 6 0 0 1-1.905.414 5.97 5.97 0 0 1-3.11-.713A6.003 6.003 0 0 1 5.999 10h-2a8 8 0 0 0 7 7.937V20h-3v2h8v-2h-3v-2.079a8 8 0 0 0 2.677-.83z"/></svg>
);

export default MicrophoneOffFilledIcon;
