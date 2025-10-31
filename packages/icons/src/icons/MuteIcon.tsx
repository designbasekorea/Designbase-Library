import React from 'react';
import type { IconProps } from '../types';

const MuteIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12.325 4.324A.75.75 0 0 1 12.75 5v14a.75.75 0 0 1-1.219.586L6.738 15.75H3a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 3 8.25h3.737l4.794-3.836a.75.75 0 0 1 .794-.09M11.25 6.56 7.469 9.586A.75.75 0 0 1 7 9.75H3.75v4.5H7a.75.75 0 0 1 .469.164l3.781 3.025zM14.67 14.47l6-6 1.06 1.06-6 6z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m20.67 15.53-6-6 1.06-1.06 6 6z" clip-rule="evenodd"/></svg>
);

export default MuteIcon;
