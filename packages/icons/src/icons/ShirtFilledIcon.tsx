import React from 'react';
import type { IconProps } from '../types';

const ShirtFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m14.75 2.8-.41.88c-.36.79-1.3 1.31-2.34 1.31s-1.98-.53-2.34-1.31l-.41-.88L.71 6.47l2.71 6.78L6 12.39V21h12v-8.61l2.58.86 2.71-6.78-8.54-3.66z"/></svg>
);

export default ShirtFilledIcon;
