import React from 'react';
import type { IconProps } from '../types';

const OfflineFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 19a1 1 0 1 1 0 2 1 1 0 0 1 0-2m9.2-16.79L18.41 5c1.97.84 3.76 2.06 5.3 3.64l-1.43 1.39-.01.01a14.3 14.3 0 0 0-5.42-3.48l-2.48 2.48c2.17.47 4.19 1.58 5.75 3.2l-1.44 1.39a9.35 9.35 0 0 0-6.07-2.82L4.2 19.22l-1.41-1.41 6.66-6.66c-1.56.45-3 1.29-4.14 2.48l-1.44-1.39c2.07-2.16 4.96-3.41 7.94-3.46l2.83-2.83c-.87-.16-1.75-.25-2.65-.25-3.9 0-7.56 1.54-10.28 4.34L.28 8.64C3.39 5.45 7.55 3.69 12 3.69c1.48 0 2.92.21 4.31.59L19.79.8zM12 13.97c1.7 0 3.33.71 4.47 1.96l-1.48 1.35a4.064 4.064 0 0 0-5.98 0l-1.48-1.35A6.1 6.1 0 0 1 12 13.97"/></svg>
);

export default OfflineFilledIcon;
