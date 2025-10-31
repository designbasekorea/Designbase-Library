import React from 'react';
import type { IconProps } from '../types';

const LongUpLeftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.207 18.793 7.414 6H13V4H4v9h2V7.414l12.793 12.793z"/></svg>
);

export default LongUpLeftFilledIcon;
