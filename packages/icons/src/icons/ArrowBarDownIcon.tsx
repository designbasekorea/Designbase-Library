import React from 'react';
import type { IconProps } from '../types';

const ArrowBarDownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.75 9v11.5h-1.5V9zM20 5.75H4v-1.5h16z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m12 19.44-5.47-5.47-1.06 1.06L12 21.56l6.53-6.53-1.06-1.06z" clipRule="evenodd"/></svg>
);

export default ArrowBarDownIcon;
