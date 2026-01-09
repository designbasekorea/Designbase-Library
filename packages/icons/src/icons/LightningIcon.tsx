import React from 'react';
import type { IconProps } from '../types';

const LightningIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.727 1.67a.75.75 0 0 1 .673-.42h6.4a.75.75 0 0 1 .66 1.108l-3.2 5.892H20a.75.75 0 0 1 .514 1.296l-13.8 13a.75.75 0 0 1-1.194-.863l3.702-7.933H5a.75.75 0 0 1-.673-1.08zm1.14 1.08-4.663 9.5H10.4a.75.75 0 0 1 .68 1.067L8.535 18.77l9.575-9.02H13a.75.75 0 0 1-.66-1.108l3.2-5.892z" clipRule="evenodd"/></svg>
);

export default LightningIcon;
