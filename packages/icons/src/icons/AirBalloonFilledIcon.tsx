import React from 'react';
import type { IconProps } from '../types';

const AirBalloonFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 1C7.14 1 4 3.58 4 7.57 4 12.06 7.74 16 12 16s8-3.94 8-8.43C20 3.58 16.86 1 12 1m2 6.57c0 3.08-1.34 5.93-2 6.39-.66-.46-2-3.31-2-6.39S11.45 3 12 3s2 1.41 2 4.57m-8 0c0-2.1 1.2-3.35 2.8-4-.49 1.05-.8 2.4-.8 4 0 1.72.42 3.88 1.15 5.59C7.24 11.96 6 9.68 6 7.57m8.85 5.59C15.58 11.45 16 9.29 16 7.57c0-1.6-.31-2.95-.8-4 1.6.65 2.8 1.91 2.8 4s-1.24 4.39-3.15 5.59M15.79 17.38c-.19-.24-.48-.38-.79-.38H9c-.31 0-.6.14-.79.38s-.26.56-.18.86l1 4c.11.45.51.76.97.76h4c.46 0 .86-.31.97-.76l1-4c.08-.3 0-.62-.18-.86"/></svg>
);

export default AirBalloonFilledIcon;
