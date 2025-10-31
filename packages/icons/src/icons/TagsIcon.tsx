import React from 'react';
import type { IconProps } from '../types';

const TagsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m18.53 13.14-7.39 7.39-8.89-8.89V4.25h7.39zm4.53 0L16.2 20l-1.06-1.06 5.8-5.8-7.61-7.61 1.06-1.06zM3.75 11.02l7.39 7.39 5.27-5.27-7.39-7.39H3.75zm2.6-3.58a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
);

export default TagsIcon;
