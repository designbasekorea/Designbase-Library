import React from 'react';
import type { IconProps } from '../types';

const HistoryFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12h2c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8c-2.873 0-5.476-1.528-6.909-4H8v-2H2v7h2v-3.013A9.96 9.96 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2"/><path fill="currentColor" d="M11 7v5.414l3.293 3.293 1.414-1.414L13 11.586V7z"/></svg>
);

export default HistoryFilledIcon;
