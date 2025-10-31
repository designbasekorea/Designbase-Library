import React from 'react';
import type { IconProps } from '../types';

const MirrorFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9v13h14V9c0-3.86-3.14-7-7-7m5 18H7V9c0-2.76 2.24-5 5-5s5 2.24 5 5z"/><path fill="currentColor" d="M12.71 9.75a.996.996 0 1 0-1.41-1.41L8.34 11.3a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l2.96-2.96zM14.34 9.9l-4.53 4.53a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l4.53-4.53a.996.996 0 1 0-1.41-1.41z"/></svg>
);

export default MirrorFilledIcon;
