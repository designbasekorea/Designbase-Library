import React from 'react';
import type { IconProps } from '../types';

const PlayIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.64 2.342a.75.75 0 0 1 .766.027l14 9a.75.75 0 0 1 0 1.262l-14 9A.75.75 0 0 1 5.25 21V3a.75.75 0 0 1 .39-.658m1.11 2.032v15.252L18.613 12z" clipRule="evenodd"/></svg>
);

export default PlayIcon;
