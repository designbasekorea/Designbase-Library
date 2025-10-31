import React from 'react';
import type { IconProps } from '../types';

const ActivityFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m18.58 11-3.71-6.5c-.2-.35-.6-.54-.99-.5-.4.05-.73.33-.84.72L9.69 16.44 6.87 11.5c-.18-.31-.51-.5-.87-.5H1v2h4.42l3.71 6.5c.18.31.51.5.87.5h.12c.4-.05.73-.33.84-.72l3.35-11.72 2.82 4.94c.18.31.51.5.87.5h5v-2z"/></svg>
);

export default ActivityFilledIcon;
