import React from 'react';
import type { IconProps } from '../types';

const GapHorizontalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M7.25 18V6c0-.686-.564-1.25-1.25-1.25H3v-1.5h3A2.756 2.756 0 0 1 8.75 6v12A2.756 2.756 0 0 1 6 20.75H3v-1.5h3c.686 0 1.25-.564 1.25-1.25M15.25 18V6A2.756 2.756 0 0 1 18 3.25h3v1.5h-3c-.686 0-1.25.564-1.25 1.25v12c0 .686.564 1.25 1.25 1.25h3v1.5h-3A2.756 2.756 0 0 1 15.25 18M12.75 5v14h-1.5V5z"/></svg>
);

export default GapHorizontalIcon;
