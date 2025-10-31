import React from 'react';
import type { IconProps } from '../types';

const MuteFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12.3 4.1h.1c-.3-.2-.8 0-1.1.1L6.6 8H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h3.6l4.7 3.8c.2.1.4.2.6.2h.4c.3-.2.6-.5.6-.9V5q0-.6-.6-.9M21.9 9.7l-1.4-1.4-2.3 2.3-2.3-2.3-1.4 1.4 2.3 2.3-2.3 2.3 1.4 1.4 2.3-2.3 2.3 2.3 1.4-1.4-2.3-2.3z"/></svg>
);

export default MuteFilledIcon;
