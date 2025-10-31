import React from 'react';
import type { IconProps } from '../types';

const FastForwardFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m11.555 11.168-6-4A1 1 0 0 0 4.001 8v8a1 1 0 0 0 1.555.832l6-4a1 1 0 0 0-.001-1.664M20.555 11.168l-6-4A1 1 0 0 0 13.001 8v8a1 1 0 0 0 1.555.832l6-4a1 1 0 0 0-.001-1.664"/></svg>
);

export default FastForwardFilledIcon;
