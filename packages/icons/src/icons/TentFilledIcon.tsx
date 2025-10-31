import React from 'react';
import type { IconProps } from '../types';

const TentFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22.345 18c-2.328-1.852-5.767-8.388-7.421-12.382A1 1 0 0 0 14 5H9.416V4h-2v1.954C6.518 8.795 3.959 15.904 1.883 18H1v2h22v-2zM9.416 10.745c1.175 2.388 2.763 5.266 4.428 7.255H9.416zm-2 1.14V18h-3.01c1.103-1.67 2.156-3.981 3.01-6.115"/></svg>
);

export default TentFilledIcon;
