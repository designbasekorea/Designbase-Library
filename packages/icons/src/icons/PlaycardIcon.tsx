import React from 'react';
import type { IconProps } from '../types';

const PlaycardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17 1.25A2.75 2.75 0 0 1 19.75 4v16A2.75 2.75 0 0 1 17 22.75H7A2.75 2.75 0 0 1 4.25 20V4A2.75 2.75 0 0 1 7 1.25zM7 2.75c-.69 0-1.25.56-1.25 1.25v16c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25zM16 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 7.25a.75.75 0 0 1 .67.415l2 4a.75.75 0 0 1 0 .67l-2 4a.75.75 0 0 1-1.34 0l-2-4a.75.75 0 0 1 0-.67l2-4A.75.75 0 0 1 12 7.25M10.838 12 12 14.323 13.161 12 12 9.677zM8 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
);

export default PlaycardIcon;
