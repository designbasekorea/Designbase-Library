import React from 'react';
import type { IconProps } from '../types';

const EditFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.854 3.145A3.89 3.89 0 0 0 18.091 2a3.93 3.93 0 0 0-2.762 1.144L2 16.431V22h5.569L20.857 8.67a3.94 3.94 0 0 0 1.144-2.762 3.93 3.93 0 0 0-1.146-2.764zm-1.413 4.112L18.212 8.49 15.51 5.788l1.234-1.23c.713-.716 1.978-.716 2.698 0 .354.354.558.846.558 1.349s-.204.995-.559 1.35"/></svg>
);

export default EditFilledIcon;
