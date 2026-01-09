import React from 'react';
import type { IconProps } from '../types';

const PreviousIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.325 3.324A.75.75 0 0 1 19.75 4v16a.75.75 0 0 1-1.218.586l-10-8a.75.75 0 0 1 0-1.172l10-8a.75.75 0 0 1 .793-.09M10.2 12l8.049 6.44V5.56zM5.75 5v14h-1.5V5z" clipRule="evenodd"/></svg>
);

export default PreviousIcon;
