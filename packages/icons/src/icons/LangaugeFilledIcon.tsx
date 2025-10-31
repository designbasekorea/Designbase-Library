import React from 'react';
import type { IconProps } from '../types';

const LangaugeFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M4 13c1.288 0 2.713-.464 4-1.227C9.287 12.536 10.712 13 12 13v-2c-.697 0-1.475-.21-2.235-.557C11.085 9.197 12 7.621 12 6V5h1V3H9V2H7v1H3v2h7v1c0 1.182-.847 2.404-2 3.345C6.847 8.404 6 7.183 6 6H4c0 1.621.915 3.197 2.235 4.443C5.475 10.79 4.696 11 4 11zM21.09 22.414l1.82-.828L17 8.584l-5.91 13.002 1.82.828L14.462 19h5.076zM15.371 17 17 13.417 18.629 17z"/></svg>
);

export default LangaugeFilledIcon;
