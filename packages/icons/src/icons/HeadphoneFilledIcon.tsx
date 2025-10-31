import React from 'react';
import type { IconProps } from '../types';

const HeadphoneFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.5 11.157V10.3c0-4.687-3.813-8.5-8.5-8.5s-8.5 3.813-8.5 8.5v.857A3.444 3.444 0 0 0 1 14.5v4C1 20.463 2.538 22 4.5 22S8 20.463 8 18.5v-4a3.444 3.444 0 0 0-2.5-3.343V10.3c0-3.523 2.977-6.5 6.5-6.5s6.5 2.977 6.5 6.5v.857A3.444 3.444 0 0 0 16 14.5v4c0 1.963 1.537 3.5 3.5 3.5s3.5-1.537 3.5-3.5v-4a3.444 3.444 0 0 0-2.5-3.343"/></svg>
);

export default HeadphoneFilledIcon;
