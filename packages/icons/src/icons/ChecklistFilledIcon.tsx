import React from 'react';
import type { IconProps } from '../types';

const ChecklistFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m14 15.586-1.293-1.293-1.414 1.414L14 18.414l3.707-3.707-1.414-1.414zM12 12H7v2h5zM10 15H7v2h3z"/><path fill="currentColor" d="M13.414 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8.586zM14 5.414 16.586 8H14zM6 20V4h6v6h6v10z"/></svg>
);

export default ChecklistFilledIcon;
