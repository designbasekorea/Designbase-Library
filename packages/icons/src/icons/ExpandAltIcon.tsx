import React from 'react';
import type { IconProps } from '../types';

const ExpandAltIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m11.53 13.53-5.72 5.72H11v1.5H3.25V13h1.5v5.19l5.72-5.72zM20.75 11h-1.5V5.81l-5.72 5.72-1.06-1.06 5.72-5.72H13v-1.5h7.75z"/></svg>
);

export default ExpandAltIcon;
