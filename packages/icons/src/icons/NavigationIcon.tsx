import React from 'react';
import type { IconProps } from '../types';

const NavigationIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .67.415l9 18a.75.75 0 0 1-.975 1.02L12 17.821l-8.695 3.864a.75.75 0 0 1-.976-1.02l9-18A.75.75 0 0 1 12 2.25M4.606 19.466l7.09-3.151a.75.75 0 0 1 .609 0l7.09 3.15L12 4.678z" clipRule="evenodd"/></svg>
);

export default NavigationIcon;
