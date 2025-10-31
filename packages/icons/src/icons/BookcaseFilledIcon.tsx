import React from 'react';
import type { IconProps } from '../types';

const BookcaseFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M5 4h14v4h-2V5h-2v3H5zm5 7v3H9v-3H7v3H5v-4h14v4h-7v-3zm8 9v-3h-2v3h-1v-3h-2v3H5v-4h14v4z"/></svg>
);

export default BookcaseFilledIcon;
