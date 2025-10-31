import React from 'react';
import type { IconProps } from '../types';

const StarHalfFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22.95 8.989a1 1 0 0 0-.807-.679l-6.379-.924-2.867-5.827a1 1 0 0 0-1.794 0L8.236 7.386l-6.379.924a1.001 1.001 0 0 0-.557 1.704l4.625 4.533-1.11 6.382a1.001 1.001 0 0 0 1.444 1.06l5.742-2.963 5.741 2.963a1.01 1.01 0 0 0 1.051-.083c.306-.225.458-.603.394-.977l-1.11-6.382 4.625-4.533c.271-.266.368-.664.25-1.025zm-6.65 4.497a1 1 0 0 0-.285.885l.855 4.917-4.412-2.276a1 1 0 0 0-.458-.111V4.265l2.202 4.476a1 1 0 0 0 .754.548l4.901.71z"/></svg>
);

export default StarHalfFilledIcon;
