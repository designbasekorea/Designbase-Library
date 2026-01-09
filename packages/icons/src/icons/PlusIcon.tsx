import React from 'react';
import type { IconProps } from '../types';

const PlusIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 10.75h12v1.5H6z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.75 5.5v12h-1.5v-12z" clipRule="evenodd"/></svg>
);

export default PlusIcon;
