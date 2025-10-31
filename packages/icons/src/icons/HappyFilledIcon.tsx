import React from 'react';
import type { IconProps } from '../types';

const HappyFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5M8.5 8c.8 0 1.5.7 1.5 1.5S9.3 11 8.5 11 7 10.3 7 9.5 7.7 8 8.5 8m3.5 9.4c-1.7 0-3.4-.6-4.7-1.9l1.4-1.4c1.8 1.8 4.8 1.8 6.6 0l1.4 1.4c-1.3 1.3-3 1.9-4.7 1.9m3.5-6.4c-.8 0-1.5-.7-1.5-1.5S14.7 8 15.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5"/></svg>
);

export default HappyFilledIcon;
