import React from 'react';
import type { IconProps } from '../types';

const YoutubeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M19.831 5.437Q18.265 5.007 12 5q-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778q-.412 1.566-.417 4.814-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765q1.582.43 7.83.437 6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763q.414-1.564.417-4.812.02-3.266-.407-4.83a2.5 2.5 0 0 0-1.762-1.767m-9.83 3.568 5.207 3.005-5.212 2.995z" clip-rule="evenodd"/></svg>
);

export default YoutubeIcon;
