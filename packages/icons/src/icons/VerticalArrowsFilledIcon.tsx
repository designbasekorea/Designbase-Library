import React from 'react';
import type { IconProps } from '../types';

const VerticalArrowsFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 19.472 7.814 15.2l-1.428 1.401L12 22.329l5.614-5.728-1.427-1.401zM12 4.529l4.187 4.27 1.427-1.4L12 1.672 6.386 7.4l1.428 1.4z"/></svg>
);

export default VerticalArrowsFilledIcon;
