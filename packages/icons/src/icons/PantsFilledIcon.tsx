import React from 'react';
import type { IconProps } from '../types';

const PantsFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m19.85 8.94-.71-6.83H4.85L4.13 9h.04L2.9 22h6.93l2-11h.33l2 11h6.93L19.84 8.94zm-2.5-4.83.28 2.84a3.01 3.01 0 0 1-2.04-2.84zm-8.76 0c0 1.39-.95 2.57-2.24 2.9l.3-2.9z"/></svg>
);

export default PantsFilledIcon;
