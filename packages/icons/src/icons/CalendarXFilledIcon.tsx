import React from 'react';
import type { IconProps } from '../types';

const CalendarXFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 4h-2V2h-2v2H8V2H6v2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-5.172 13.414-1.414 1.414L12 17.414l-1.414 1.414-1.414-1.414L10.586 16l-1.414-1.414 1.414-1.414L12 14.586l1.414-1.414 1.414 1.414L13.414 16zM20 10H3.999V6H6v2h2V6h8v2h2V6h2z"/></svg>
);

export default CalendarXFilledIcon;
