import React from 'react';
import type { IconProps } from '../types';

const PlaylistIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M17 3.25V4zh.024a3 3 0 0 1 .201.01c.13.009.31.027.523.063.424.07 1.001.213 1.587.506.59.295 1.201.748 1.664 1.442.466.7.751 1.598.751 2.729 0 1.097-.27 2.421-.522 3.432a29 29 0 0 1-.504 1.766l-.009.028-.002.008-.001.002L20 13l-.712-.237v-.001l.003-.006.007-.023.03-.093q.04-.126.11-.356c.091-.304.213-.73.334-1.216.248-.99.478-2.165.478-3.068 0-.869-.215-1.47-.499-1.896a2.76 2.76 0 0 0-1.086-.933 4 4 0 0 0-.915-.32V17h-1.5V3.25zM14 6.75H2v-1.5h12zM14 10.75H2v-1.5h12zM9 14.75H2v-1.5h7z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M14 14.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M10.25 17a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"/></svg>
);

export default PlaylistIcon;
