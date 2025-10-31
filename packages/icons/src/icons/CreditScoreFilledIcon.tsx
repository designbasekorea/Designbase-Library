import React from 'react';
import type { IconProps } from '../types';

const CreditScoreFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m11 12.936-1.993-1.993-1.414 1.414L11 15.764l5.407-5.407-1.414-1.414zM4.8 7.599 3.201 6.398a10.9 10.9 0 0 0-2.202 6.603c0 2.896 1.119 5.63 3.15 7.7l1.428-1.4a8.95 8.95 0 0 1-2.578-6.3 8.93 8.93 0 0 1 1.8-5.401zM20.799 6.397l-1.6 1.201A8.9 8.9 0 0 1 21 12.999a8.94 8.94 0 0 1-2.578 6.3l1.428 1.4a10.93 10.93 0 0 0 3.15-7.7c0-2.403-.762-4.686-2.201-6.602M12 2a10.9 10.9 0 0 0-7.845 3.301l1.43 1.398A8.9 8.9 0 0 1 12 4c2.434 0 4.713.958 6.415 2.699l1.43-1.398A10.9 10.9 0 0 0 12 2"/></svg>
);

export default CreditScoreFilledIcon;
