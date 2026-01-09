import React from 'react';
import type { IconProps } from '../types';

const LinkIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m15.344 9.698-5.657 5.657-1.06-1.06 5.657-5.657z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M17.819 6.163a4.25 4.25 0 0 0-6.01 0l-1.415 1.414-1.06-1.06 1.414-1.414a5.75 5.75 0 0 1 8.132 8.132l-1.416 1.414-1.06-1.062 1.415-1.413a4.25 4.25 0 0 0 0-6.01M6.154 11.818l1.412-1.412-.53-.531-.53-.53-1.414 1.414-.003.003c-2.22 2.244-2.211 5.86.029 8.075 2.245 2.22 5.824 2.31 8.102.056l.003-.003 1.414-1.414-1.06-1.06-1.412 1.41v.002c-1.67 1.65-4.308 1.608-5.993-.057-1.645-1.627-1.659-4.293-.018-5.953" clipRule="evenodd"/></svg>
);

export default LinkIcon;
