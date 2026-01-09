import React from 'react';
import type { IconProps } from '../types';

const ThumbDownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.74 4.75a2.25 2.25 0 0 0-2.241 2.046l-.554 6.09A1.25 1.25 0 0 0 5.19 14.25H9a.75.75 0 0 1 .75.75v4c0 1.339 1.297 2.892 3.5 2.428V15a.75.75 0 0 1 .75-.75h1.25V7c0-.77-.235-1.314-.586-1.664-.35-.35-.895-.586-1.664-.586zm8.518-.861C14.632 3.46 13.855 3.25 13 3.25H6.74a3.75 3.75 0 0 0-3.735 3.41l-.554 6.091A2.75 2.75 0 0 0 5.19 15.75h3.06V19c0 2.462 2.501 4.874 5.987 3.712A.75.75 0 0 0 14.75 22v-6.25H21a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.742.639m1.492.861v9.5h3.5v-9.5z" clipRule="evenodd"/></svg>
);

export default ThumbDownIcon;
