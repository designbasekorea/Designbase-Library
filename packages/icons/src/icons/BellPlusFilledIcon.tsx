import React from 'react';
import type { IconProps } from '../types';

const BellPlusFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20.707 16.293C19.753 15.339 19 14.586 19 13V9.953c-.144-3.064-2.445-6.343-6-6.871V2a1 1 0 0 0-2 0v1.082C7.446 3.611 5.145 6.893 5 10v3c0 1.586-.753 2.339-1.707 3.293A1 1 0 0 0 4 18h4c0 2.206 1.794 4 4 4s4-1.794 4-4h4a.999.999 0 0 0 .707-1.707M12 20c-1.103 0-2-.897-2-2h4c0 1.103-.897 2-2 2m3-8h-2v2h-2v-2H9v-2h2V8h2v2h2z"/></svg>
);

export default BellPlusFilledIcon;
