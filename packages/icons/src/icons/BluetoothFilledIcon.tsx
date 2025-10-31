import React from 'react';
import type { IconProps } from '../types';

const BluetoothFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 23h-.4c-.3-.2-.6-.5-.6-.9v-7.9l-4.6 3.7-1.2-1.6 5.3-4.2-5.3-4.2 1.2-1.6L11 10V2q0-.6.6-.9c.3-.2.8-.1 1.1.1l6.3 5c.2.2.4.5.4.8s-.1.6-.4.8L13.7 12l5.3 4.2c.2.2.4.5.4.8s-.1.6-.4.8l-6.3 5c-.2.1-.4.2-.6.2zm1-8.9v5.8l3.6-2.9zm0-10v5.8L16.6 7z"/></svg>
);

export default BluetoothFilledIcon;
