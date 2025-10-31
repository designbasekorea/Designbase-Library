import React from 'react';
import type { IconProps } from '../types';

const SofaFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 8h-1V5.78C20 4.25 18.77 3 17.25 3h-3.5c-.67 0-1.27.25-1.74.65-.48-.4-1.09-.66-1.76-.66h-3.5C5.23 2.99 4 4.24 4 5.77V8H3c-1.1 0-2 .9-2 2v5c0 1.3.84 2.4 2 2.82V20h2v-2h14v2h2v-2.18c1.16-.41 2-1.51 2-2.82v-5c0-1.1-.9-2-2-2m-7.25-3h3.5c.41 0 .75.35.75.78v3.24c-.06.11-.14.22-.18.34l-.54 1.63H13V5.77c0-.43.34-.78.75-.78zm-7-.01h3.5c.41 0 .75.35.75.78V11H6.72l-.55-1.65c-.04-.12-.11-.22-.17-.32V5.77c0-.43.34-.78.75-.78M21 15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5h1.28l1 3h13.44l1-3H21z"/></svg>
);

export default SofaFilledIcon;
