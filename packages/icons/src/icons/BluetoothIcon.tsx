import React from 'react';
import type { IconProps } from '../types';

const BluetoothIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.675 1.324a.75.75 0 0 1 .793.09l6.25 5a.75.75 0 0 1 0 1.172L13.202 12l5.517 4.414a.75.75 0 0 1 0 1.172l-6.25 5A.75.75 0 0 1 11.25 22v-8.44l-5.031 4.026-.938-1.172L10.8 12 5.281 7.586l.938-1.172 5.031 4.026V2a.75.75 0 0 1 .425-.676m1.075 12.237L17.05 17l-4.3 3.44zm0-3.121V3.56L17.05 7z" clipRule="evenodd"/></svg>
);

export default BluetoothIcon;
