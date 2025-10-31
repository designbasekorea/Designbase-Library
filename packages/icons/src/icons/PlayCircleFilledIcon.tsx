import React from 'react';
import type { IconProps } from '../types';

const PlayCircleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 1C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1m4.541 11.841-6 3.857a1.01 1.01 0 0 1-1.02.037A1 1 0 0 1 9 15.857V8.143a1 1 0 0 1 1.541-.841l6 3.857a1 1 0 0 1 0 1.682"/></svg>
);

export default PlayCircleFilledIcon;
