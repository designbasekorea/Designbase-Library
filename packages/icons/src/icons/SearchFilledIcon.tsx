import React from 'react';
import type { IconProps } from '../types';

const SearchFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m21.707 20.293-3.682-3.682A8.95 8.95 0 0 0 20 11c0-4.962-4.037-9-9-9s-9 4.038-9 9 4.038 9 9 9a8.95 8.95 0 0 0 5.611-1.975l3.682 3.682zM4 11c0-3.86 3.14-7 7-7s7 3.14 7 7-3.141 7-7 7-7-3.141-7-7"/></svg>
);

export default SearchFilledIcon;
