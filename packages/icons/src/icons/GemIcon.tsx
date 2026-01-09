import React from 'react';
import type { IconProps } from '../types';

const GemIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.414 3.531A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 .586.281l4 5a.75.75 0 0 1-.01.95l-10 12a.75.75 0 0 1-1.152 0l-10-12a.75.75 0 0 1-.01-.95zM6.36 4.75 2.968 8.99 12 19.828 21.032 8.99 17.64 4.75z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m6.357 8.614 3-5 1.286.772L7.838 9.06 12 19.05l4.162-9.989-2.805-4.675 1.286-.772 3 5a.75.75 0 0 1 .05.674l-5 12a.75.75 0 0 1-1.385 0l-5-12a.75.75 0 0 1 .049-.674" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M22 9.75H2v-1.5h20z" clipRule="evenodd"/></svg>
);

export default GemIcon;
