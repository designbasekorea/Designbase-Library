import React from 'react';
import type { IconProps } from '../types';

const TextAlignCenterFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 5H2v2h20zM20 9H4v2h16zM22 13H2v2h20zM20 17H4v2h16z"/></svg>
);

export default TextAlignCenterFilledIcon;
