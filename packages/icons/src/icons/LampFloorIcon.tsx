import React from 'react';
import type { IconProps } from '../types';

const LampFloorIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M15 1.25c.3 0 .571.179.69.454l3 7A.75.75 0 0 1 18 9.75h-5.25V22a.75.75 0 0 1-1.5 0V9.75H6a.75.75 0 0 1-.69-1.046l3-7 .052-.099A.75.75 0 0 1 9 1.25zm-7.862 7h9.724l-2.357-5.5h-5.01z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22h6"/></svg>
);

export default LampFloorIcon;
