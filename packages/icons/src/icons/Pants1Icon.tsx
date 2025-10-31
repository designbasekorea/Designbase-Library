import React from 'react';
import type { IconProps } from '../types';

const Pants1Icon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m20 5.25.136.013a.75.75 0 0 1 .605.623l2 13a.75.75 0 0 1-.741.864h-8.2a.75.75 0 0 1-.735-.602l-.68-3.398h-.77l-.68 3.398a.75.75 0 0 1-.735.602H2a.75.75 0 0 1-.741-.864l2-13 .033-.132A.75.75 0 0 1 4 5.25zm-17.126 13h6.711l.68-3.398.037-.125A.75.75 0 0 1 11 14.25h2a.75.75 0 0 1 .735.602l.68 3.398h6.711l-1.77-11.5H4.645z"/><path fill="currentColor" d="M10.75 4v5h-1.5V4zM14.75 4v4h-1.5V4zM16.25 9.333V6h1.5v3.333c0 .536.409.917.85.917h2.169v1.5h-2.17c-1.326 0-2.349-1.111-2.349-2.417M6.25 9.333V6h1.5v3.333c0 1.306-1.023 2.417-2.35 2.417H3.23v-1.5H5.4c.441 0 .85-.38.85-.917"/></svg>
);

export default Pants1Icon;
