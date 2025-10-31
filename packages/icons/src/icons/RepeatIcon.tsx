import React from 'react';
import type { IconProps } from '../types';

const RepeatIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m18.94 6-3.47-3.47 1.06-1.06L21.06 6l-4.53 4.53-1.06-1.06z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M5.532 7.433c.587-.488 1.3-.783 1.968-.783h12.4v-1.5H7.5c-1.116 0-2.183.49-2.988 1.18l-.044.038-.037.044C3.757 7.197 3.25 8.164 3.25 9.3V11h1.5V9.3c0-.648.279-1.267.782-1.867M5.06 18l3.47-3.47-1.06-1.06L2.94 18l4.53 4.53 1.06-1.06z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M19.25 14.7V13h1.5v1.7c0 1.136-.508 2.103-1.18 2.888l-.038.044-.044.037c-.805.69-1.872 1.181-2.988 1.181H4v-1.5h12.5c.668 0 1.381-.295 1.968-.783.503-.6.782-1.22.782-1.867" clip-rule="evenodd"/></svg>
);

export default RepeatIcon;
