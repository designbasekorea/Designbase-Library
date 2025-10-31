import React from 'react';
import type { IconProps } from '../types';

const GameFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m16.1 12 4.16-4.16c.33-.33.39-.85.13-1.25A9.96 9.96 0 0 0 11.99 2C6.49 2 2 6.49 2 12s4.49 10 10 10a9.94 9.94 0 0 0 8.4-4.59c.26-.4.2-.92-.13-1.25L16.11 12zM12 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/></svg>
);

export default GameFilledIcon;
