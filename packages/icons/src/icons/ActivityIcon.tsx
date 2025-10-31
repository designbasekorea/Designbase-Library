import React from 'react';
import type { IconProps } from '../types';

const ActivityIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13.91 4.256a.75.75 0 0 1 .741.372l3.785 6.622H23v1.5h-5a.75.75 0 0 1-.651-.378L14.23 6.917l-3.51 12.29a.75.75 0 0 1-1.372.165L5.564 12.75H1v-1.5h5a.75.75 0 0 1 .651.378l3.117 5.454 3.511-12.288.038-.104a.75.75 0 0 1 .593-.434"/></svg>
);

export default ActivityIcon;
