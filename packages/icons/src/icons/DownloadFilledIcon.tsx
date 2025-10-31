import React from 'react';
import type { IconProps } from '../types';

const DownloadFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 15v4H4v-4H2v6h20v-6z"/><path fill="currentColor" d="m17.707 11.707-1.414-1.414L13 13.586V3h-2v10.586l-3.293-3.293-1.414 1.414L12 17.414z"/></svg>
);

export default DownloadFilledIcon;
