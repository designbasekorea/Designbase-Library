import React from 'react';
import type { IconProps } from '../types';

const PlayStoreIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M15.911 8.659 6.36 3.29c-.633-.342-1.226-.39-1.746-.016l8.34 8.34zm3.578 4.69c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4 4.659v14.706c0 .38.084.709.236.97l8.097-8.098L4.1 4.002c-.064.197-.1.417-.1.658m.902 16.25q.232.09.495.09.47 0 .968-.275l9.255-5.197-2.666-2.67z" clip-rule="evenodd"/></svg>
);

export default PlayStoreIcon;
