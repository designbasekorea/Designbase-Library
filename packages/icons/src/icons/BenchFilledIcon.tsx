import React from 'react';
import type { IconProps } from '../types';

const BenchFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 5H3v2h18zM23 12.11h-5V10h3V8H3v2h3v2.11H1v2h2V19h2v-4.89h14V19h2v-4.89h2zM8 10h8v2.11H8z"/></svg>
);

export default BenchFilledIcon;
