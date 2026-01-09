import React from 'react';
import type { IconProps } from '../types';

const KeyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.228 3.226a6.75 6.75 0 0 1 9.545 9.546c-1.91 1.911-4.672 2.42-7.05 1.565l-.973.973v3.44H8.757l.028 3H3.25v-6.06l5.413-5.414c-.853-2.378-.346-5.138 1.565-7.05m8.485 1.061a5.25 5.25 0 0 0-7.425 0c-1.582 1.583-1.93 3.924-1.06 5.861l.212.472-5.69 5.69v3.94h2.521l-.028-3h3.007v-2.56l2.13-2.13.472.212c1.935.87 4.278.522 5.86-1.06a5.25 5.25 0 0 0 0-7.425" clipRule="evenodd"/></svg>
);

export default KeyIcon;
