import React from 'react';
import type { IconProps } from '../types';

const BookcaseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 2.25c.966 0 1.75.784 1.75 1.75v16A1.75 1.75 0 0 1 19 21.75H5A1.75 1.75 0 0 1 3.25 20V4c0-.966.784-1.75 1.75-1.75zM4.75 20c0 .138.112.25.25.25h8.25V17h1.5v3.25h1.5V17h1.5v3.25H19a.25.25 0 0 0 .25-.25v-4.25H4.75zm0-10.25v4.5h2.5V11h1.5v3.25h1.5V11h1.5v3.25h7.5v-4.5zm.25-6a.25.25 0 0 0-.25.25v4.25h10.5V5h1.5v3.25h2.5V4a.25.25 0 0 0-.25-.25z"/></svg>
);

export default BookcaseIcon;
