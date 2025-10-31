import React from 'react';
import type { IconProps } from '../types';

const SubRightFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m15.707 8.293-1.414 1.414L18.586 14H5V5H3v11h15.586l-4.293 4.293 1.414 1.414L22.414 15z"/></svg>
);

export default SubRightFilledIcon;
