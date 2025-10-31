import React from 'react';
import type { IconProps } from '../types';

const HardDriveIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.127 3.26a.75.75 0 0 1 .6.558l2 8q.003.013.004.026l.006.03q.011.06.012.122l.001.004v7A1.75 1.75 0 0 1 20 20.75H4A1.75 1.75 0 0 1 2.25 19v-7.012l.001-.02.003-.045.002-.012a1 1 0 0 1 .016-.093l2-8 .041-.12A.75.75 0 0 1 5 3.25h14zM3.75 19c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25v-6.25H3.75zM13 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M3.96 11.25h16.08l-1.625-6.5H5.585z"/></svg>
);

export default HardDriveIcon;
