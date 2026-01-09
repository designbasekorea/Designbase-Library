import React from 'react';
import type { IconProps } from '../types';

const NoticeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.25 14.25h5.5V20c0 .47-.16.92-.495 1.255S9.47 21.75 9 21.75H7c-.47 0-.92-.16-1.255-.495S5.25 20.47 5.25 20zm1.5 1.5V20c0 .13.04.18.055.195.016.015.065.055.195.055h2c.13 0 .18-.04.195-.055.015-.016.055-.065.055-.195v-4.25z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18.376 2.351A.75.75 0 0 1 18.75 3v16a.75.75 0 0 1-1.122.651L10.8 15.75H3a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 3 6.25h7.8l6.828-3.901a.75.75 0 0 1 .748.002M17.25 4.292l-5.878 3.36A.75.75 0 0 1 11 7.75H3.75v6.5H11a.75.75 0 0 1 .372.099l5.878 3.359z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M20.25 11c0-1.286-.964-2.25-2.25-2.25v-1.5c2.114 0 3.75 1.636 3.75 3.75s-1.636 3.75-3.75 3.75v-1.5c1.286 0 2.25-.964 2.25-2.25" clipRule="evenodd"/></svg>
);

export default NoticeIcon;
