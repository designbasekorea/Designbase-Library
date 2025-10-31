import React from 'react';
import type { IconProps } from '../types';

const BagAltIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13 2.25A2.756 2.756 0 0 1 15.75 5v1.25h6.06l-.922 11.958a2.754 2.754 0 0 1-2.738 2.542H5.85a2.74 2.74 0 0 1-2.738-2.542L2.19 6.25H8.25V5A2.756 2.756 0 0 1 11 2.25zM4.607 18.093A1.24 1.24 0 0 0 5.85 19.25h12.3c.645 0 1.192-.505 1.243-1.157l.796-10.343H15.75V10h-1.5V7.75h-4.5V10h-1.5V7.75H3.81zM11 3.75c-.686 0-1.25.564-1.25 1.25v1.25h4.5V5c0-.686-.564-1.25-1.25-1.25z"/></svg>
);

export default BagAltIcon;
