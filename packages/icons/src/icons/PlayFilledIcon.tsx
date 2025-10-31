import React from 'react';
import type { IconProps } from '../types';

const PlayFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m20.5 11.2-14-9c-.3-.2-.7-.2-1 0s-.5.5-.5.9v18c0 .4.2.7.5.9.1 0 .3.1.5.1s.4 0 .5-.2l14-9c.3-.2.5-.5.5-.8s-.2-.7-.5-.8z"/></svg>
);

export default PlayFilledIcon;
