import React from 'react';
import type { IconProps } from '../types';

const GiftFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M11 13H3v9h8zM21 13h-8v9h8zM11 5H2v6h9zM22 5h-9v6h9z"/><path fill="currentColor" d="M7.7 5C6.727 5 6 4.472 6 4c0-.218.135-.466.36-.663a1.5 1.5 0 0 1 1.183-.35c1.001.16 1.956 1.107 2.643 2.014h3.628c.685-.906 1.633-1.851 2.618-2.01.449-.06.89.067 1.208.347.226.197.36.445.36.663 0 .472-.728 1-1.7 1h3.481c.133-.313.219-.646.219-1 0-.798-.38-1.588-1.043-2.168-.752-.66-1.766-.961-2.815-.82C14.3 1.309 12.864 2.87 12 4.089c-.866-1.22-2.309-2.781-4.167-3.078a3.53 3.53 0 0 0-2.79.823C4.38 2.413 4.001 3.203 4.001 4c0 .354.086.687.219 1z"/></svg>
);

export default GiftFilledIcon;
