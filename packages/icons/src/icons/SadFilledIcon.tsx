import React from 'react';
import type { IconProps } from '../types';

const SadFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5m-5 8C7 8.7 7.7 8 8.5 8s1.5.7 1.5 1.5S9.3 11 8.5 11 7 10.3 7 9.5m8.5 7.4-1.4-.7c-1.3-.7-2.9-.7-4.2 0l-1.4.7-.9-1.8 1.4-.7c1.9-.9 4.1-.9 6 0l1.4.7zm0-5.9c-.8 0-1.5-.7-1.5-1.5S14.7 8 15.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5"/></svg>
);

export default SadFilledIcon;
