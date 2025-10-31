import React from 'react';
import type { IconProps } from '../types';

const BookmarkIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M7.5 3.75c-.686 0-1.25.564-1.25 1.25v14.658l5.357-3.297a.75.75 0 0 1 .786 0l5.357 3.297V5c0-.686-.564-1.25-1.25-1.25zM4.75 5A2.756 2.756 0 0 1 7.5 2.25h9A2.756 2.756 0 0 1 19.25 5v16a.75.75 0 0 1-1.143.639L12 17.88l-6.107 3.758A.75.75 0 0 1 4.75 21z" clip-rule="evenodd"/></svg>
);

export default BookmarkIcon;
