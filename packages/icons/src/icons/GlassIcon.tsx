import React from 'react';
import type { IconProps } from '../types';

const GlassIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M17 21.75H7v-1.5h10zM16.539 10.75H7.462v-1.5h9.077z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.25 21v-5h1.5v5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M7.252 2.942A.75.75 0 0 1 8 2.25h8a.75.75 0 0 1 .748.692l.617 8.015a5.38 5.38 0 1 1-10.73 0zm1.442.808-.563 7.322a3.881 3.881 0 1 0 7.738 0l-.563-7.322z" clipRule="evenodd"/></svg>
);

export default GlassIcon;
