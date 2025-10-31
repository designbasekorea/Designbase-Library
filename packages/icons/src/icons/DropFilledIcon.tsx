import React from 'react';
import type { IconProps } from '../types';

const DropFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.795 9.753c-.772-1.545-1.862-2.936-2.826-4.093C14.944 4.431 12 1.618 12 1.618S9.056 4.43 8.032 5.66c-.964 1.157-2.054 2.55-2.826 4.093C4.395 11.375 4 12.797 4 14.1c0 4.356 3.589 7.9 8 7.9s8-3.544 8-7.9c0-1.3-.395-2.723-1.205-4.347"/></svg>
);

export default DropFilledIcon;
