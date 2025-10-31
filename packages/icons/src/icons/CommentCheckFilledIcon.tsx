import React from 'react';
import type { IconProps } from '../types';

const CommentCheckFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 3H4C2.346 3 1 4.346 1 6v16a.999.999 0 0 0 1.625.781L7.351 19H20c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3m-9.5 12.414-3.707-3.707 1.414-1.414 2.293 2.293 5.293-5.293 1.414 1.414z"/></svg>
);

export default CommentCheckFilledIcon;
