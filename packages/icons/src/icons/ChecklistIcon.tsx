import React from 'react';
import type { IconProps } from '../types';

const ChecklistIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.75 8.69V20A1.75 1.75 0 0 1 18 21.75H6A1.75 1.75 0 0 1 4.25 20V4c0-.966.784-1.75 1.75-1.75h7.31zM6 3.75a.25.25 0 0 0-.25.25v16c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25V9.75h-6v-6zm11.53 10.78L14 18.06l-2.53-2.53 1.06-1.06L14 15.94l2.47-2.47zM10 16.75H7v-1.5h3zm2-3H7v-1.5h5zm1.75-5.5h3.44l-3.44-3.44z"/></svg>
);

export default ChecklistIcon;
