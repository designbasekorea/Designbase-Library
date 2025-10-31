import React from 'react';
import type { IconProps } from '../types';

const ShipFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m19.68 11-2.368-6H11V3H9v2H8V2H6v3H4.153l-1 6H.674l2.571 9h16.414l3.857-9zM13 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M7 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m11.341 10H4.754l-.571-2h15.015zm-14.73-4-.286-1h17.158l-.429 1z"/></svg>
);

export default ShipFilledIcon;
