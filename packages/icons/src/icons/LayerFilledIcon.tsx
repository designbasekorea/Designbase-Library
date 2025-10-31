import React from 'react';
import type { IconProps } from '../types';

const LayerFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m2.514 8.874 9 5a1 1 0 0 0 .972 0l9-5a1.001 1.001 0 0 0 0-1.748l-9-5a1 1 0 0 0-.972 0l-9 5a1 1 0 0 0 0 1.748"/><path fill="currentColor" d="M20.515 11.126 12 15.856l-8.514-4.73a1 1 0 0 0-.972 1.748l9 5a1 1 0 0 0 .972 0l9-5a1 1 0 0 0-.97-1.748z"/><path fill="currentColor" d="M20.515 15.126 12 19.856l-8.514-4.73a.997.997 0 0 0-1.36.389 1 1 0 0 0 .388 1.359l9 5a1 1 0 0 0 .972 0l9-5a1 1 0 0 0-.97-1.748z"/></svg>
);

export default LayerFilledIcon;
