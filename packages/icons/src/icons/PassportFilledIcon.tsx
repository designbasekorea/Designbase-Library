import React from 'react';
import type { IconProps } from '../types';

const PassportFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M9.7 7.738A4 4 0 0 0 8.142 10h.936c.111-.85.339-1.616.622-2.262M8.142 12A4 4 0 0 0 9.7 14.262 8.4 8.4 0 0 1 9.078 12zM15.858 10A4 4 0 0 0 14.3 7.738c.283.647.511 1.413.622 2.262zM12 14.334A6.7 6.7 0 0 0 12.906 12h-1.812A6.7 6.7 0 0 0 12 14.334"/><path fill="currentColor" d="M18 1H6C4.346 1 3 2.346 3 4v16c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3m-2 19H8v-2h8zm-4-3c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6"/><path fill="currentColor" d="M11.094 10h1.812A6.7 6.7 0 0 0 12 7.666 6.7 6.7 0 0 0 11.094 10M14.3 14.263A4 4 0 0 0 15.858 12h-.936a8.4 8.4 0 0 1-.622 2.263"/></svg>
);

export default PassportFilledIcon;
