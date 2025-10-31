import React from 'react';
import type { IconProps } from '../types';

const GoogleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M11.956 10.356v3.45h4.792c-.446 2.194-2.313 3.454-4.792 3.454a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.28c1.259 0 2.397.448 3.29 1.179l2.6-2.6c-1.584-1.38-3.615-2.232-5.89-2.232a8.91 8.91 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.25 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/></svg>
);

export default GoogleIcon;
