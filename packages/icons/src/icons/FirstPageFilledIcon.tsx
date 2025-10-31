import React from 'react';
import type { IconProps } from '../types';

const FirstPageFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8 5H6v14h2zM18.707 6.707l-1.414-1.414L10.586 12l6.707 6.707 1.414-1.414L13.414 12z"/></svg>
);

export default FirstPageFilledIcon;
