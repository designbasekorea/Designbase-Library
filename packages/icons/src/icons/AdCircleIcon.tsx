import React from 'react';
import type { IconProps } from '../types';

const AdCircleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5A9.25 9.25 0 0 0 2.75 12 9.25 9.25 0 0 0 12 21.25 9.25 9.25 0 0 0 21.25 12 9.25 9.25 0 0 0 12 2.75m-4 5.5A2.75 2.75 0 0 1 10.75 11v5h-1.5v-2.4h-2.5V16h-1.5v-5A2.75 2.75 0 0 1 8 8.25m7.333 0c1.969 0 3.417 1.764 3.417 3.75s-1.45 3.75-3.417 3.75H13.25v-7.5zm-.583 6h.583c.978 0 1.917-.922 1.917-2.25s-.938-2.25-1.917-2.25h-.583zM8 9.75c-.69 0-1.25.56-1.25 1.25v1.1h2.5V11c0-.69-.56-1.25-1.25-1.25"/></svg>
);

export default AdCircleIcon;
