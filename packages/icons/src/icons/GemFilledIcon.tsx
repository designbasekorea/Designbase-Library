import React from 'react';
import type { IconProps } from '../types';

const GemFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M1.5 10 9 18.9 6.3 10zM12 22l3.6-12H8.3zM15.1 8 12 3 8.8 8zM17.5 8h4.9l-3.7-4.6c-.2-.2-.5-.4-.8-.4h-3.8l3.3 5zM22 10h-4.3L15 18.9l7.5-8.9zM6.4 8l3.2-5H6c-.3 0-.6.1-.8.4L1.5 8z"/></svg>
);

export default GemFilledIcon;
