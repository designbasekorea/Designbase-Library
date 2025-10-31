import React from 'react';
import type { IconProps } from '../types';

const AbTestIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12.75 20h-1.5V4h1.5zM5 7.25c1.958 0 3.75 1.382 3.75 3.321V17h-1.5v-4.25h-4.5V17h-1.5v-6.429C1.25 8.633 3.042 7.25 5 7.25m14 0A2.75 2.75 0 0 1 21.75 10c0 .58-.181 1.115-.487 1.559A2.749 2.749 0 0 1 20 16.75h-4.75v-9.5zm-2.25 8H20a1.25 1.25 0 0 0 0-2.5h-3.25zM5 8.75c-1.356 0-2.25.92-2.25 1.821v.679h4.5v-.679C7.25 9.67 6.356 8.75 5 8.75m11.75 2.5H19a1.25 1.25 0 0 0 0-2.5h-2.25z"/></svg>
);

export default AbTestIcon;
