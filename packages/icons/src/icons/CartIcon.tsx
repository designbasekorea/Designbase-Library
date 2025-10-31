import React from 'react';
import type { IconProps } from '../types';

const CartIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M3 2.25c.945 0 1.714.75 1.747 1.688L4.94 6.25h16.899l-1.167 10.5h-2.093a2.75 2.75 0 1 1-3.156 0H9.578a2.75 2.75 0 1 1-3.156 0H4.31L3.253 4.063 3.25 4.03V4A.25.25 0 0 0 3 3.75H1v-1.5zm5 15.5a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 8 17.75m9 0a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 17 17.75m-11.31-2.5h13.64l.832-7.5H5.064z"/></svg>
);

export default CartIcon;
