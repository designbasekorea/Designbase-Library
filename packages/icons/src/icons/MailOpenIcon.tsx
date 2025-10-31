import React from 'react';
import type { IconProps } from '../types';

const MailOpenIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.614 2.357a.75.75 0 0 1 .772 0l10 6a.75.75 0 0 1 0 1.286l-10 6a.75.75 0 0 1-.772 0l-10-6a.75.75 0 0 1 0-1.286zM3.458 9 12 14.125 20.542 9 12 3.875z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M2 8.25a.75.75 0 0 1 .75.75v10c0 .618.593 1.25 1.45 1.25h15.6c.857 0 1.45-.632 1.45-1.25V9a.75.75 0 0 1 1.5 0v10c0 1.582-1.407 2.75-2.95 2.75H4.2c-1.543 0-2.95-1.168-2.95-2.75V9A.75.75 0 0 1 2 8.25" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M10.636 13.603a.75.75 0 0 1-.238 1.033l-8 5a.75.75 0 0 1-.796-1.272l8-5a.75.75 0 0 1 1.034.238M13.364 13.603a.75.75 0 0 1 1.034-.239l8 5a.75.75 0 0 1-.796 1.272l-8-5a.75.75 0 0 1-.238-1.033" clip-rule="evenodd"/></svg>
);

export default MailOpenIcon;
