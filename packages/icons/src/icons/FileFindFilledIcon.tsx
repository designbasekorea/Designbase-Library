import React from 'react';
import type { IconProps } from '../types';

const FileFindFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M10 17.111A6.12 6.12 0 0 1 16.111 11c1.48 0 2.838.53 3.897 1.408V8.586L13.422 2H6.008c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h6.453A6.1 6.1 0 0 1 10 17.111m4.008-11.697L16.594 8h-2.586z"/><path fill="currentColor" d="M16.222 17.111a.113.113 0 0 0-.11-.111.113.113 0 0 0-.111.111c0 .059.052.11.111.11s.11-.051.11-.11"/><path fill="currentColor" d="m21.707 21.293-2.081-2.081c.37-.617.596-1.33.596-2.1a4.115 4.115 0 0 0-4.11-4.111 4.117 4.117 0 0 0-4.111 4.111 4.116 4.116 0 0 0 4.111 4.11c.77 0 1.483-.226 2.1-.596l2.081 2.081zM14 17.111c0-1.164.947-2.111 2.111-2.111s2.11.947 2.11 2.111a2.112 2.112 0 0 1-4.221 0"/></svg>
);

export default FileFindFilledIcon;
