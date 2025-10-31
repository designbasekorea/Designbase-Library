import React from 'react';
import type { IconProps } from '../types';

const TagFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12.414 4H4v8.414l10 10L22.414 14zM8.7 9.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>
);

export default TagFilledIcon;
