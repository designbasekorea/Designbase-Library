import React from 'react';
import type { IconProps } from '../types';

const UserPinFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 2H5C3.3 2 2 3.3 2 5v11c0 1.7 1.3 3 3 3h3.6l3.4 3.4 3.4-3.4H19c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3m-7 4c1.1 0 2 .8 2 2s-.8 2-2 2-2-.8-2-2 .9-2 2-2m4 9H8v-.4c0-2 1.8-3.6 4-3.6s4 1.6 4 3.6z"/></svg>
);

export default UserPinFilledIcon;
