import React from 'react';
import type { IconProps } from '../types';

const FilmIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 2.25A2.75 2.75 0 0 1 21.75 5v14A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5A2.75 2.75 0 0 1 5 2.25zM3.75 19c0 .69.56 1.25 1.25 1.25h2.25v-3.5h-3.5zm5 1.25h6.5V3.75h-6.5zm8 0H19c.69 0 1.25-.56 1.25-1.25v-2.25h-3.5zm-13-5h3.5v-2.5h-3.5zm13 0h3.5v-2.5h-3.5zm-13-4h3.5v-2.5h-3.5zm13-2.5v2.5h3.5v-2.5zm0-1.5h3.5V5c0-.69-.56-1.25-1.25-1.25h-2.25zM5 3.75c-.69 0-1.25.56-1.25 1.25v2.25h3.5v-3.5z"/></svg>
);

export default FilmIcon;
