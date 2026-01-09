import React from 'react';
import type { IconProps } from '../types';

const GamepadAltIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M14.5 11.1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17.5 13.1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path fill="currentColor" fillRule="evenodd" d="M4.94 6.75c-.535.202-.89.688-.89 1.25v.022l-.501 8.32a1.442 1.442 0 0 0 2.3 1.258l2.25-1.738.066-.033.037-.019c.381-.19.919-.46 1.598-.46h4.4c.623 0 1.192.131 1.75.55l.009.006L18.15 17.6a1.442 1.442 0 0 0 2.301-1.258v-.003l-.499-8.181c-.074-.75-.782-1.408-1.452-1.408zm1.31-1.5v-.1H5.5c-1.56 0-2.937 1.18-2.95 2.826l-.499 8.279v.006c-.134 2.54 2.689 4.013 4.693 2.544l.007-.006 2.15-1.66c.378-.188.616-.29.899-.29h4.4c.375 0 .606.069.846.248l2.203 1.702.008.006c2.003 1.469 4.826-.005 4.692-2.544l-.501-8.218-.001-.011c-.131-1.446-1.42-2.782-2.947-2.782z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M7.75 13.6v-5h1.5v5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6 10.35h5v1.5H6z" clipRule="evenodd"/></svg>
);

export default GamepadAltIcon;
