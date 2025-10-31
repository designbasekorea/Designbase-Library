import React from 'react';
import type { IconProps } from '../types';

const Deco3FilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 11h-7.586l5.393-5.393-1.414-1.414L13 9.585V2h-2v7.586L5.607 4.193 4.193 5.607 9.586 11H2v2h7.585l-5.392 5.393 1.414 1.414L11 14.414V22h2v-7.586l5.393 5.393 1.414-1.414L14.414 13H22z"/></svg>
);

export default Deco3FilledIcon;
