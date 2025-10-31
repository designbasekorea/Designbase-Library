import React from 'react';
import type { IconProps } from '../types';

const CalendarFindFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M11 17.111A6.12 6.12 0 0 1 17.111 11c2 0 3.773.97 4.889 2.461V6c0-1.103-.897-2-2-2h-2V2h-2v2H8V2H6v2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h9.461A6.1 6.1 0 0 1 11 17.111M3.999 10V6H6v2h2V6h8v2h2V6h2v4z"/><path fill="currentColor" d="M17.222 17.111a.113.113 0 0 0-.11-.111.113.113 0 0 0-.111.111c0 .059.052.11.111.11s.11-.051.11-.11"/><path fill="currentColor" d="m22.707 21.293-2.081-2.081c.37-.617.596-1.33.596-2.1a4.115 4.115 0 0 0-4.11-4.111 4.117 4.117 0 0 0-4.111 4.111 4.116 4.116 0 0 0 4.111 4.11c.77 0 1.483-.226 2.1-.596l2.081 2.081zM15 17.111c0-1.164.947-2.111 2.111-2.111s2.11.947 2.11 2.111a2.112 2.112 0 0 1-4.221 0"/></svg>
);

export default CalendarFindFilledIcon;
