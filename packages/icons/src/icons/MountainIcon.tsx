import React from 'react';
import type { IconProps } from '../types';

const MountainIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8.95 7.25a.75.75 0 0 1 .623.334l3.436 5.154 2.392-3.188.058-.07a.752.752 0 0 1 1.165.104l6 9 .051.089A.75.75 0 0 1 22 19.75H1.617a.75.75 0 0 1-.624-1.166l7.332-11 .057-.074a.75.75 0 0 1 .567-.26m-5.931 11H14.88L8.95 9.352zm10.872-4.188 2.792 4.188h3.916l-4.635-6.952zM19 2.25A2.75 2.75 0 1 1 19 7.75a2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/></svg>
);

export default MountainIcon;
