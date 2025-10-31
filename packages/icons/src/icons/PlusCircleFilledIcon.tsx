import React from 'react';
import type { IconProps } from '../types';

const PlusCircleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 1C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1m4 12h-3v3h-2v-3H8v-2h3V8h2v3h3z"/></svg>
);

export default PlusCircleFilledIcon;
