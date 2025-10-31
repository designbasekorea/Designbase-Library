import React from 'react';
import type { IconProps } from '../types';

const DressingTableIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2.25A6.753 6.753 0 0 1 18.75 9v1.25h2V22h-1.5v-4.25H4.75V22h-1.5V10.25h2V9A6.753 6.753 0 0 1 12 2.25m-7.25 14h14.5v-4.5H4.75zm8.25-1.5h-2v-1.5h2zm-1-11A5.253 5.253 0 0 0 6.75 9v1.25h10.5V9A5.253 5.253 0 0 0 12 3.75"/></svg>
);

export default DressingTableIcon;
