import React from 'react';
import type { IconProps } from '../types';

const SpeakerFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 13c-1.14 0-2 .859-2 2s.86 2 2 2 2-.859 2-2-.859-2-2-2M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="currentColor" d="M15 1H9C6.243 1 4 3.243 4 6v12c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V6c0-2.757-2.243-5-5-5m-3 3c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0 15c-2.243 0-4-1.757-4-4s1.757-4 4-4 4 1.757 4 4-1.757 4-4 4"/></svg>
);

export default SpeakerFilledIcon;
