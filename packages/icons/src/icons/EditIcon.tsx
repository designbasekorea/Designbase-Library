import React from 'react';
import type { IconProps } from '../types';

const EditIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M15.506 3.322a3.655 3.655 0 0 1 5.172 0 3.655 3.655 0 0 1 0 5.172L7.466 21.75H2.25v-5.215zm2.586.428c-.572 0-1.121.227-1.525.632l-.002.001L3.75 17.157v3.093h3.093L19.618 7.434a2.16 2.16 0 0 0-1.526-3.684" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M17.7 10.453 13.548 6.3l1.06-1.06 4.154 4.154z" clipRule="evenodd"/></svg>
);

export default EditIcon;
