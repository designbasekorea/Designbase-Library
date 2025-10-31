import React from 'react';
import type { IconProps } from '../types';

const ShareAltIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M13.69 3.317a.75.75 0 0 1 .804.119l8 7a.75.75 0 0 1 0 1.128l-8 7A.75.75 0 0 1 13.25 18v-3.24c-1.925.051-3.579.315-5.062.932-1.659.692-3.157 1.85-4.588 3.758A.75.75 0 0 1 2.25 19c0-4.145 1.147-6.888 3.291-8.698 1.96-1.655 4.655-2.437 7.709-2.943V4a.75.75 0 0 1 .44-.683m1.06 2.336V8a.75.75 0 0 1-.638.742c-3.283.497-5.85 1.225-7.603 2.706-1.359 1.147-2.303 2.812-2.631 5.39 1.153-1.15 2.386-1.969 3.734-2.53 1.928-.804 4.04-1.058 6.388-1.058a.75.75 0 0 1 .75.75v2.347L20.861 11z" clip-rule="evenodd"/></svg>
);

export default ShareAltIcon;
