import React from 'react';
import type { IconProps } from '../types';

const SofaAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 8h-1V5.78C18 4.25 16.77 3 15.25 3h-6.5C7.23 3 6 4.25 6 5.78V8H5c-1.1 0-2 .9-2 2v5c0 1.3.84 2.4 2 2.82V20h2v-2h10v2h2v-2.18c1.16-.41 2-1.51 2-2.82v-5c0-1.1-.9-2-2-2M8.75 5h6.5c.41 0 .75.35.75.78v3.24c-.06.11-.14.22-.18.34l-.54 1.63H8.72l-.55-1.65c-.04-.12-.11-.22-.17-.32V5.77c0-.43.34-.78.75-.78zM19 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5h1.28l1 3h9.44l1-3H19z"/></svg>
);

export default SofaAltFilledIcon;
