import React from 'react';
import type { IconProps } from '../types';

const VideoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M21.37 6.347a.75.75 0 0 1 .38.653v10a.75.75 0 0 1-1.136.643l-5-3a.75.75 0 1 1 .772-1.286l3.864 2.318v-7.35l-3.864 2.318a.75.75 0 1 1-.772-1.286l5-3a.75.75 0 0 1 .755-.01" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h13a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v10.5h11.5V6.75z" clipRule="evenodd"/></svg>
);

export default VideoIcon;
