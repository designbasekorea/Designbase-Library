import React from 'react';
import type { IconProps } from '../types';

const BluetoothXIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m20.47 9.53-4-4 1.06-1.06 4 4z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m16.47 8.47 4-4 1.06 1.06-4 4zM6.233 16.457l8.25-7.857 1.034 1.086-8.25 7.857z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.705 1.31a.75.75 0 0 1 .812.147l3 2.857L14.483 5.4 12.75 3.75v7.929l5.017 4.778a.75.75 0 0 1 0 1.086l-5.25 5A.75.75 0 0 1 11.25 22v-9.679L6.233 7.543l1.034-1.086 3.983 3.793V2c0-.3.179-.571.455-.69m1.045 12.44v6.5L16.163 17z" clipRule="evenodd"/></svg>
);

export default BluetoothXIcon;
