import React from 'react';
import type { IconProps } from '../types';

const WriteIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M3.056 6.056A2.75 2.75 0 0 1 5 5.25h3v1.5H5A1.25 1.25 0 0 0 3.75 8v11A1.25 1.25 0 0 0 5 20.25h11A1.25 1.25 0 0 0 17.25 19v-3h1.5v3A2.75 2.75 0 0 1 16 21.75H5A2.75 2.75 0 0 1 2.25 19V8c0-.73.29-1.429.806-1.944" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M16.885 3.084a2.85 2.85 0 0 1 4.03 4.03l-9.604 9.636H7.25v-4.061zm2.015.666a1.35 1.35 0 0 0-.955.395L8.75 13.311v1.939h1.939l9.166-9.195A1.35 1.35 0 0 0 18.9 3.75" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m18.47 8.53-3-3 1.06-1.06 3 3z" clip-rule="evenodd"/></svg>
);

export default WriteIcon;
