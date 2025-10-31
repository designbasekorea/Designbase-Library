import React from 'react';
import type { IconProps } from '../types';

const BrandDolbyDigitalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M20.101 6.75c-2.967 0-5.351 2.362-5.351 5.25s2.384 5.25 5.352 5.25h.148V6.75zM13.25 12c0-3.74 3.08-6.75 6.851-6.75h1.649v13.5h-1.648c-3.772 0-6.852-3.01-6.852-6.75M2.25 5.25h1.649c3.771 0 6.851 3.01 6.851 6.75s-3.079 6.75-6.851 6.75H2.25zm1.5 1.5v10.5h.149c2.968 0 5.351-2.362 5.351-5.25S6.866 6.75 3.899 6.75z" clip-rule="evenodd"/></svg>
);

export default BrandDolbyDigitalIcon;
