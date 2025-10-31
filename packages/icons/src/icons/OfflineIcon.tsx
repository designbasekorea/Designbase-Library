import React from 'react';
import type { IconProps } from '../types';

const OfflineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 19a1 1 0 1 1 0 2 1 1 0 0 1 0-2M21.03 2.03l-3.055 3.055a16.2 16.2 0 0 1 5.562 3.722l-1.074 1.047a14.64 14.64 0 0 0-5.654-3.603l-2.923 2.923a11.05 11.05 0 0 1 6.064 3.225l-1.08 1.041a9.53 9.53 0 0 0-6.336-2.915L4.03 19.03l-1.06-1.06 7.298-7.3a9.5 9.5 0 0 0-5.137 2.768L4.049 12.4a11 11 0 0 1 7.88-3.39l3.226-3.227A14.6 14.6 0 0 0 12 5.44c-4.1 0-7.808 1.684-10.462 4.414L.462 8.808A16.04 16.04 0 0 1 12 3.94c1.522 0 2.994.213 4.39.608L19.97.97z"/><path fill="currentColor" d="M12 14.21c1.685 0 3.215.713 4.284 1.885l-.554.505-.554.505A4.27 4.27 0 0 0 12 15.71a4.27 4.27 0 0 0-3.176 1.395l-1.11-1.01A5.78 5.78 0 0 1 12 14.21"/></svg>
);

export default OfflineIcon;
