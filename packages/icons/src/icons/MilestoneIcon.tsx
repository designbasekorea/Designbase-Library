import React from 'react';
import type { IconProps } from '../types';

const MilestoneIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.25 22v-8h1.5v8zM11.25 6V2h1.5v4z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M4.25 5.25h13.797L23.094 10l-5.047 4.75H4.25zm1.5 1.5v6.5h11.703L20.906 10l-3.453-3.25z" clip-rule="evenodd"/></svg>
);

export default MilestoneIcon;
