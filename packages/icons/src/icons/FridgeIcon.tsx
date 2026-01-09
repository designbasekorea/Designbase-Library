import React from 'react';
import type { IconProps } from '../types';

const FridgeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M17.25 5c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25zM16 2.25A2.75 2.75 0 0 1 18.75 5v14A2.75 2.75 0 0 1 16 21.75H8A2.75 2.75 0 0 1 5.25 19V5A2.75 2.75 0 0 1 8 2.25z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M18 11.75H6v-1.5h12zM14.25 16v-2h1.5v2zM14.25 8V6h1.5v2z" clipRule="evenodd"/></svg>
);

export default FridgeIcon;
