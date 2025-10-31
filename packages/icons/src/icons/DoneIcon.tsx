import React from 'react';
import type { IconProps } from '../types';

const DoneIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M9.476 15.936 18.97 6.47l1.06 1.062L9.468 18.064l-5.502-5.58 1.068-1.053z" clip-rule="evenodd"/></svg>
);

export default DoneIcon;
