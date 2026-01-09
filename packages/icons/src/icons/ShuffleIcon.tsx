import React from 'react';
import type { IconProps } from '../types';

const ShuffleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m19.94 7-2.47-2.47 1.06-1.06L22.06 7l-3.53 3.53-1.06-1.06zM18.53 13.47 22.06 17l-3.53 3.53-1.06-1.06L19.94 17l-2.47-2.47z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6 7.75H2v-1.5h4c3.214 0 5.75 2.536 5.75 5.75 0 2.386 1.864 4.25 4.25 4.25h5v1.5h-5c-3.214 0-5.75-2.536-5.75-5.75 0-2.386-1.864-4.25-4.25-4.25M12.54 7.408C13.585 6.595 14.75 6.25 16 6.25h5v1.5h-5c-.95 0-1.784.255-2.54.842zM6 16.25c.95 0 1.784-.255 2.54-.842l.92 1.184C8.416 17.405 7.25 17.75 6 17.75H2v-1.5z" clipRule="evenodd"/></svg>
);

export default ShuffleIcon;
