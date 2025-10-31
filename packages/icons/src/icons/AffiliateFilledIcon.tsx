import React from 'react';
import type { IconProps } from '../types';

const AffiliateFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m18.55 10.58.71-2.61c1.53-.14 2.73-1.41 2.73-2.97 0-1.65-1.35-3-3-3s-3 1.35-3 3c0 1.03.53 1.95 1.32 2.49l-.7 2.55q-.315-.03-.63-.03c-1.25 0-2.41.39-3.38 1.04L8.68 7.28c.18-.39.29-.82.29-1.27 0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3c.47 0 .9-.12 1.3-.31l3.89 3.74c-.74 1-1.18 2.23-1.18 3.56 0 .15.01.29.02.44l-2.68.71C6.77 16.45 5.93 16 4.97 16c-1.65 0-3 1.35-3 3s1.35 3 3 3 2.97-1.32 3-2.95l2.5-.67a6 6 0 0 0 5.5 3.62c3.31 0 6-2.69 6-6 0-2.39-1.41-4.46-3.45-5.42z"/></svg>
);

export default AffiliateFilledIcon;
