import React from 'react';
import type { IconProps } from '../types';

const CloseSmallFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m16.707 8.707-1.414-1.414L12 10.586 8.707 7.293 7.293 8.707 10.586 12l-3.293 3.293 1.414 1.414L12 13.414l3.293 3.293 1.414-1.414L13.414 12z"/></svg>
);

export default CloseSmallFilledIcon;
