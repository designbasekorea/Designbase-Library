import React from 'react';
import type { IconProps } from '../types';

const DoneAllFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m20.8 6.3-9.3 9.3-4.3-4.3-1.4 1.4 5.7 5.7L22.2 7.7zM3.317 11.305 1.895 12.71l5.768 5.829 1.422-1.407z"/><path fill="currentColor" d="m16.782 6.276-6.517 6.494 1.412 1.417 6.516-6.495z"/></svg>
);

export default DoneAllFilledIcon;
