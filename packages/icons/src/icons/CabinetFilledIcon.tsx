import React from 'react';
import type { IconProps } from '../types';

const CabinetFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2v1h2v-1h8v1h2v-1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h12v4H6zm12 6v4H6v-4zM6 20v-4h12v4z"/><path fill="currentColor" d="M13 17h-2v2h2zM13 11h-2v2h2zM13 5h-2v2h2z"/></svg>
);

export default CabinetFilledIcon;
