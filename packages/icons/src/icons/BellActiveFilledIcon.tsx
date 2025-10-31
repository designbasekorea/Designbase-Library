import React from 'react';
import type { IconProps } from '../types';

const BellActiveFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 13V9.953c-.144-3.064-2.445-6.343-6-6.871V2a1 1 0 0 0-2 0v1.082C7.445 3.611 5.145 6.893 5 10v3c0 1.586-.753 2.339-1.707 3.293A1 1 0 0 0 4 18h4c0 2.206 1.794 4 4 4s4-1.794 4-4h4a.999.999 0 0 0 .707-1.707C19.753 15.339 19 14.586 19 13m-7 7c-1.103 0-2-.897-2-2h4c0 1.103-.897 2-2 2M21.908 6.582c-.714-1.553-1.96-3.215-3.252-4.337a1.001 1.001 0 0 0-1.312 1.51c1.075.934 2.153 2.372 2.748 3.663a1 1 0 1 0 1.816-.836M3.909 7.417c.591-1.29 1.67-2.726 2.747-3.662a1 1 0 0 0-1.312-1.51C4.049 3.37 2.802 5.033 2.091 6.583a1 1 0 0 0 1.818.834"/></svg>
);

export default BellActiveFilledIcon;
