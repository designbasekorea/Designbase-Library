import React from 'react';
import type { IconProps } from '../types';

const CameraIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M7.785 5.475A2.73 2.73 0 0 1 10.07 4.25h3.86c.907 0 1.773.452 2.285 1.225v.002l1.186 1.773H20A2.756 2.756 0 0 1 22.75 10v7A2.756 2.756 0 0 1 20 19.75H4A2.756 2.756 0 0 1 1.25 17v-7A2.756 2.756 0 0 1 4 7.25h2.6zm2.285.275c-.42 0-.804.206-1.034.553l-.002.004L7.4 8.75H4c-.686 0-1.25.564-1.25 1.25v7c0 .686.564 1.25 1.25 1.25h16c.686 0 1.25-.564 1.25-1.25v-7c0-.686-.564-1.25-1.25-1.25h-3.4l-1.636-2.447a1.24 1.24 0 0 0-1.034-.553z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 13a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"/></svg>
);

export default CameraIcon;
