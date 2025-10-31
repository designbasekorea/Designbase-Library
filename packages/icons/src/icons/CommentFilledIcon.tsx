import React from 'react';
import type { IconProps } from '../types';

const CommentFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 3H4C2.3 3 1 4.3 1 6v16q0 .6.6.9H2c.2 0 .4 0 .6-.2l4.7-3.8h12.6c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3z"/></svg>
);

export default CommentFilledIcon;
