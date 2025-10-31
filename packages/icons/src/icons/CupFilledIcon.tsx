import React from 'react';
import type { IconProps } from '../types';

const CupFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 9a3 3 0 0 0-2-2.816V5.5C19 4.122 17.879 3 16.5 3H11V1H9v2H7.5A2.503 2.503 0 0 0 5 5.5v.684A3 3 0 0 0 3 9a3 3 0 0 0 2.542 2.954L6.044 23h11.912l.502-11.046A2.996 2.996 0 0 0 21 9M7.5 5h9a.5.5 0 0 1 .5.5V6H7v-.5a.5.5 0 0 1 .5-.5M18 10H6c-.551 0-1-.449-1-1s.449-1 1-1h12a1.001 1.001 0 0 1 0 2"/></svg>
);

export default CupFilledIcon;
