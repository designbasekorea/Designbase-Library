import React from 'react';
import type { IconProps } from '../types';

const RepeatFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5 9.3c0-.6.2-1.1.7-1.7.6-.5 1.2-.7 1.8-.7h10.2l-2.4 2.4 1.4 1.4L21.4 6l-4.7-4.7-1.4 1.4 2.2 2.2h-10c-1.1 0-2.2.4-3.2 1.2h-.1C3.4 7.2 3 8.2 3 9.3V11h2zM19 14.7c0 .6-.2 1.1-.7 1.7-.5.5-1.2.7-1.8.7H6.3l2.4-2.4-1.4-1.4L2.6 18l4.7 4.7 1.4-1.4-2.2-2.2h10c1.1 0 2.2-.4 3.2-1.2h.1c.8-1.1 1.2-2.1 1.2-3.2V13h-2z"/></svg>
);

export default RepeatFilledIcon;
