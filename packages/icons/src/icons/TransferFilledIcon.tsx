import React from 'react';
import type { IconProps } from '../types';

const TransferFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m14.293 10.293 1.414 1.414L20.414 7l-4.707-4.707-1.414 1.414L16.486 5.9H3.5v2h13.186zM20.5 16.1H7.314l2.393-2.393-1.414-1.414L3.586 17l4.707 4.707 1.414-1.414L7.514 18.1H20.5z"/></svg>
);

export default TransferFilledIcon;
