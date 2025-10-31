import React from 'react';
import type { IconProps } from '../types';

const SelectMultipleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m-7.011 11.925-3.707-3.82 1.436-1.393 2.293 2.363 4.282-4.282 1.414 1.414z"/><path fill="currentColor" d="M4 18V9H2v9c0 2.206 1.794 4 4 4h9v-2H6c-1.103 0-2-.897-2-2"/></svg>
);

export default SelectMultipleFilledIcon;
