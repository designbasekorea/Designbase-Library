import React from 'react';
import type { IconProps } from '../types';

const TransferAltFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m13.707 14.293-1.414 1.414L17 20.414l4.707-4.707-1.414-1.414-2.193 2.193V3.5h-2v13.186zM7.9 20.5V7.314l2.393 2.393 1.414-1.414L7 3.586 2.293 8.293l1.414 1.414L5.9 7.514V20.5z"/></svg>
);

export default TransferAltFilledIcon;
