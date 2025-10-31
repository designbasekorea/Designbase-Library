import React from 'react';
import type { IconProps } from '../types';

const CaretUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m12 9.5-5 5h10z"/></svg>
);

export default CaretUpFilledIcon;
