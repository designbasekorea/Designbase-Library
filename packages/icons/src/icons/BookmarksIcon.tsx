import React from 'react';
import type { IconProps } from '../types';

const BookmarksIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M7 7.75c-.686 0-1.25.564-1.25 1.25v10.675l3.864-2.318a.75.75 0 0 1 .772 0l3.864 2.318V9c0-.686-.564-1.25-1.25-1.25zM4.25 9A2.756 2.756 0 0 1 7 6.25h6A2.756 2.756 0 0 1 15.75 9v12a.75.75 0 0 1-1.136.643L10 18.875l-4.614 2.768A.75.75 0 0 1 4.25 21z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M15 3.75h-4v-1.5h4A4.76 4.76 0 0 1 19.75 7v10h-1.5V7A3.26 3.26 0 0 0 15 3.75" clip-rule="evenodd"/></svg>
);

export default BookmarksIcon;
