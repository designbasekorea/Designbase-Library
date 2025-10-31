import React from 'react';
import type { IconProps } from '../types';

const CabinetIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 2.25c.966 0 1.75.784 1.75 1.75v16A1.75 1.75 0 0 1 18 21.75h-.25V23h-1.5v-1.25h-8.5V23h-1.5v-1.25H6A1.75 1.75 0 0 1 4.25 20V4c0-.966.784-1.75 1.75-1.75zM5.75 20c0 .138.112.25.25.25h.25V20h1.5v.25h8.5V20h1.5v.25H18a.25.25 0 0 0 .25-.25v-4.25H5.75zM13 18.75h-2v-1.5h2zm-7.25-9v4.5h12.5v-4.5zm7.25 3h-2v-1.5h2zm-7-9a.25.25 0 0 0-.25.25v4.25h12.5V4a.25.25 0 0 0-.25-.25zm7 3h-2v-1.5h2z"/></svg>
);

export default CabinetIcon;
