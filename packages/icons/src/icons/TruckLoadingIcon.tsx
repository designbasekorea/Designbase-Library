import React from 'react';
import type { IconProps } from '../types';

const TruckLoadingIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M3.25 4A.25.25 0 0 0 3 3.75H1v-1.5h2c.966 0 1.75.784 1.75 1.75v12.25H22v1.5H3.25z"/><path fill="currentColor" d="M9.25 19a1.25 1.25 0 1 0-2.499-.001A1.25 1.25 0 0 0 9.25 19m1.5 0a2.75 2.75 0 1 1-5.499.001A2.75 2.75 0 0 1 10.75 19M18.25 19a1.25 1.25 0 1 0-2.499-.001A1.25 1.25 0 0 0 18.25 19m1.5 0a2.75 2.75 0 1 1-5.499.001A2.75 2.75 0 0 1 19.75 19"/><path fill="currentColor" d="M19 5.25a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75V6A.75.75 0 0 1 7 5.25zm-11.25 11h10.5v-9.5H7.75z"/><path fill="currentColor" d="M13.75 6v5h-1.5V6z"/></svg>
);

export default TruckLoadingIcon;
