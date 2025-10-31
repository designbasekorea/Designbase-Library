import React from 'react';
import type { IconProps } from '../types';

const UploadFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 15v4H4v-4H2v6h20v-6z"/><path fill="currentColor" d="M11 6.414V17h2V6.414l3.293 3.293 1.414-1.414L12 2.586 6.293 8.293l1.414 1.414z"/></svg>
);

export default UploadFilledIcon;
