import React from 'react';
import type { IconProps } from '../types';

const BookmarkFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16.5 2h-9c-1.7 0-3 1.3-3 3v16c0 .4.2.7.5.9s.7.2 1 0l6-3.7 6 3.7c.2 0 .3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.9V5c0-1.7-1.3-3-3-3"/></svg>
);

export default BookmarkFilledIcon;
