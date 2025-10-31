import React from 'react';
import type { IconProps } from '../types';

const PieChart25FilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.4 0-8-3.6-8-8s3.1-7.4 7-7.9V13h8.9c-.5 3.9-3.9 7-7.9 7"/></svg>
);

export default PieChart25FilledIcon;
