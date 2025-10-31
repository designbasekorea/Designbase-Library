import React from 'react';
import type { IconProps } from '../types';

const AffiliateIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 2.25a2.75 2.75 0 0 1 .067 5.496l-.81 2.964A5.752 5.752 0 0 1 16 21.75a5.75 5.75 0 0 1-5.358-3.664l-2.9.771q.006.071.008.143a2.75 2.75 0 1 1-.491-1.566l3.025-.805a5.724 5.724 0 0 1 1.229-4.223L7.35 8.394A2.75 2.75 0 1 1 8.407 7.33l4.188 4.036a5.72 5.72 0 0 1 4.216-1.058l.803-2.936A2.75 2.75 0 0 1 19 2.25M5 17.75a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 5 17.75m11-6a4.25 4.25 0 1 0 .001 8.501A4.25 4.25 0 0 0 16 11.75m-10-7a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 6 4.75m13-1a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 19 3.75"/></svg>
);

export default AffiliateIcon;
