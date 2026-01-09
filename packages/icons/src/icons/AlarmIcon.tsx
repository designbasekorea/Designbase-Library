import React from 'react';
import type { IconProps } from '../types';

const AlarmIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.75 11.25V8h-1.5v4.75H16v-1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 4.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0M21.47 5.53l-3-3 1.06-1.06 3 3zM5.53 2.53l-3 3-1.06-1.06 3-3z" clipRule="evenodd"/></svg>
);

export default AlarmIcon;
