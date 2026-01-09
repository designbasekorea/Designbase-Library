import React from 'react';
import type { IconProps } from '../types';

const WalletIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75.75c0 .765.54 1.25 1.05 1.25H18A2.756 2.756 0 0 1 20.75 10v2a.75.75 0 0 1-1.5 0v-2c0-.686-.564-1.25-1.25-1.25H4.8a2.4 2.4 0 0 1-1.05-.239V18c0 .765.54 1.25 1.05 1.25h13.4c.51 0 1.05-.485 1.05-1.25v-2a.75.75 0 0 1 1.5 0v2c0 1.435-1.06 2.75-2.55 2.75H4.8c-1.49 0-2.55-1.315-2.55-2.75V6A.75.75 0 0 1 3 5.25" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M5 4.75c-.686 0-1.25.564-1.25 1.25S4.314 7.25 5 7.25h12.25V6c0-.686-.564-1.25-1.25-1.25zM2.25 6A2.756 2.756 0 0 1 5 3.25h11A2.756 2.756 0 0 1 18.75 6v2a.75.75 0 0 1-.75.75H5A2.756 2.756 0 0 1 2.25 6M17 12.75c-.686 0-1.25.564-1.25 1.25s.564 1.25 1.25 1.25h4.25v-2.5zM14.25 14A2.756 2.756 0 0 1 17 11.25h5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-5A2.756 2.756 0 0 1 14.25 14" clipRule="evenodd"/></svg>
);

export default WalletIcon;
