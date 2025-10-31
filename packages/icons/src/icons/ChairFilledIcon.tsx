import React from 'react';
import type { IconProps } from '../types';

const ChairFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8 4c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v6h2V4c0-1.65-1.35-3-3-3H9C7.35 1 6 2.35 6 4v6h2z"/><path fill="currentColor" d="M19 9v2h1v2h-.18A2.99 2.99 0 0 0 17 11H7c-1.3 0-2.4.84-2.82 2H4v-2h1V9H1v2h1v2c0 1.1.9 2 2 2h.18c.41 1.16 1.51 2 2.82 2h4v1.23l-5 1.33V22h2v-.9l3-.8v.7h2v-.7l3 .8v.9h2v-2.44l-5-1.33V17h4c1.3 0 2.4-.84 2.82-2H20c1.1 0 2-.9 2-2v-2h1V9zm-2 6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"/></svg>
);

export default ChairFilledIcon;
