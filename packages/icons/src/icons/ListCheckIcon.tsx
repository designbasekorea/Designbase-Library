import React from 'react';
import type { IconProps } from '../types';

const ListCheckIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m22.576 13.48-5.526 6.631-3.58-3.58 1.06-1.061 2.42 2.419 4.474-5.37zM16 7.75H2v-1.5h14zM16 12.75H2v-1.5h14zM12 17.75H2v-1.5h10z" clipRule="evenodd"/></svg>
);

export default ListCheckIcon;
