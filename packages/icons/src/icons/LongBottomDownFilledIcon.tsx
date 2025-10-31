import React from 'react';
import type { IconProps } from '../types';

const LongBottomDownFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m20.207 5.207-1.414-1.414L6 16.586V11H4v9h9v-2H7.414z"/></svg>
);

export default LongBottomDownFilledIcon;
