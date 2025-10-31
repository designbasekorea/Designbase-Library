import React from 'react';
import type { IconProps } from '../types';

const Deco1FilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22.363 11.068c-5.645-2.2-7.231-3.787-9.432-9.432a1 1 0 0 0-1.864 0c-2.2 5.645-3.787 7.231-9.432 9.432a1 1 0 0 0 0 1.864c5.645 2.2 7.231 3.787 9.432 9.432a1 1 0 0 0 1.864 0c2.2-5.645 3.787-7.231 9.432-9.432a1 1 0 0 0 0-1.864"/></svg>
);

export default Deco1FilledIcon;
