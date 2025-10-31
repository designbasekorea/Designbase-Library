import React from 'react';
import type { IconProps } from '../types';

const UserPlusFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22.2 9H19V5.8h-2V9h-3.2v2H17v3.2h2V11h3.2zM9 11c1.2 0 2.2-.5 2.8-1.2C12.6 9 13 8.1 13 7s-.5-2.2-1.2-2.8C11 3.4 10.1 3 9 3s-2.2.5-2.8 1.2C5.4 5 5 5.9 5 7s.5 2.2 1.2 2.8C7 10.6 7.9 11 9 11M11 13H7c-1.3 0-2.5.5-3.5 1.4Q2 15.75 2 18v3h14v-3c0-1.3-.5-2.5-1.4-3.5Q13.25 13 11 13"/></svg>
);

export default UserPlusFilledIcon;
