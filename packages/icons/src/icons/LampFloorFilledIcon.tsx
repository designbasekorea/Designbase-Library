import React from 'react';
import type { IconProps } from '../types';

const LampFloorFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m18.92 8.61-3-7C15.76 1.24 15.4 1 15 1H9c-.4 0-.76.24-.92.61l-3 7c-.13.31-.1.66.08.94.19.28.5.45.83.45h5v11h-2c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-2V10h5c.34 0 .65-.17.83-.45s.22-.64.08-.94z"/></svg>
);

export default LampFloorFilledIcon;
