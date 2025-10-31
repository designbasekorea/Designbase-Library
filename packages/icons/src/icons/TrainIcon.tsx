import React from 'react';
import type { IconProps } from '../types';

const TrainIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.25 11c0-2.9-2.35-5.25-5.25-5.25H2.75v10.5H21a.25.25 0 0 0 .25-.25zm1.5 5A1.75 1.75 0 0 1 21 17.75H1.25V4.25H16A6.75 6.75 0 0 1 22.75 11z"/><path fill="currentColor" d="M11 12.25v1.5H2v-1.5zM13.25 9V5h1.5v4c0 .69.56 1.25 1.25 1.25h6v1.5h-6A2.75 2.75 0 0 1 13.25 9M2.75 18a1.25 1.25 0 1 0 2.5 0h1.5a2.75 2.75 0 1 1-5.5 0zM16.75 18a1.25 1.25 0 1 0 2.5 0h1.5a2.75 2.75 0 1 1-5.5 0z"/><path fill="currentColor" d="M6.75 18a1.25 1.25 0 1 0 2.5 0h1.5a2.75 2.75 0 1 1-5.5 0z"/></svg>
);

export default TrainIcon;
