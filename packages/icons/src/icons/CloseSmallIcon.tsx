import React from 'react';
import type { IconProps } from '../types';

const CloseSmallIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m7.47 15.47 8-8 1.06 1.06-8 8z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m8.53 7.47 8 8-1.06 1.06-8-8z" clip-rule="evenodd"/></svg>
);

export default CloseSmallIcon;
