import React from 'react';
import type { IconProps } from '../types';

const CupIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m7.717 21.25-.468-10.284-1.498.068.532 11.716h11.434l.532-11.716-1.498-.068-.468 10.284zM10.75 1v3h-1.5V1z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6 7.75a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 1 0 0-2.5zM3.25 9A2.75 2.75 0 0 1 6 6.25h12a2.75 2.75 0 1 1 0 5.5H6A2.75 2.75 0 0 1 3.25 9" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M7.5 4.75a.75.75 0 0 0-.75.75V7h-1.5V5.5A2.25 2.25 0 0 1 7.5 3.25h9a2.25 2.25 0 0 1 2.25 2.25V7h-1.5V5.5a.75.75 0 0 0-.75-.75z" clipRule="evenodd"/></svg>
);

export default CupIcon;
