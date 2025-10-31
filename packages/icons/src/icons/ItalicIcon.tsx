import React from 'react';
import type { IconProps } from '../types';

const ItalicIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M18 3.75h-8v-1.5h8zM14 21.75H6v-1.5h8z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="m8.777 20.8 5-18 1.446.4-5 18z" clip-rule="evenodd"/></svg>
);

export default ItalicIcon;
