import React from 'react';
import type { IconProps } from '../types';

const DeskFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M23 6.5H1v2h2v10h2V12h14v6.5h2v-10h2zM19 10H5V8.5h14z"/></svg>
);

export default DeskFilledIcon;
