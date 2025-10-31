import React from 'react';
import type { IconProps } from '../types';

const SockIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.741 5.892a.8.8 0 0 1 0 .215v6.036c0 .753-.31 1.473-.853 1.992l-6.737 6.41-.011.012-.012.01a4.75 4.75 0 0 1-6.461-6.959l.014-.014.014-.013 5.546-4.92V1.25h8.5zm-7 .858v2.587l-.252.225-5.78 5.123a3.25 3.25 0 0 0-.023 4.588l.115.11a3.25 3.25 0 0 0 4.332.06l6.72-6.394c.248-.237.388-.565.388-.906V6.75zm0-1.5h5.5v-2.5h-5.5z"/></svg>
);

export default SockIcon;
