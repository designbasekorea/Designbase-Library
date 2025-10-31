import React from 'react';
import type { IconProps } from '../types';

const ListCheckFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m21.231 12.36-4.298 5.16-2.226-2.227-1.414 1.414 3.774 3.774 5.702-6.84zM16 6H2v2h14zM16 11H2v2h14zM12 16H2v2h10z"/></svg>
);

export default ListCheckFilledIcon;
