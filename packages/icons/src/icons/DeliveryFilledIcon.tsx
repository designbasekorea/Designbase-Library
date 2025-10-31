import React from 'react';
import type { IconProps } from '../types';

const DeliveryFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m22.684 11.131-1.236-2.472A2.99 2.99 0 0 0 18.764 7H18c0-1.654-1.346-3-3-3H4C2.346 4 1 5.346 1 7v9c0 .868.388 1.671 1.023 2.232A2.995 2.995 0 0 0 5 21a3 3 0 0 0 2.816-2h6.369a3 3 0 0 0 2.816 2c1.654 0 3-1.346 3-3h1c1.103 0 2-.897 2-2v-3.528c0-.462-.11-.926-.317-1.341M5 19a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m12 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-3h-1.78a3 3 0 0 0-1.22-.816V9h.764c.381 0 .724.212.895.553l1.236 2.472c.069.138.105.293.105.447z"/></svg>
);

export default DeliveryFilledIcon;
