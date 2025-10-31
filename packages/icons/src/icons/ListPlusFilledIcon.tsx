import React from 'react';
import type { IconProps } from '../types';

const ListPlusFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 6H2v2h14zM14 11H2v2h12zM12 16H2v2h10zM22 16h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/></svg>
);

export default ListPlusFilledIcon;
