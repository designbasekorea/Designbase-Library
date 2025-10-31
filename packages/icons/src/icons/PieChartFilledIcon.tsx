import React from 'react';
import type { IconProps } from '../types';

const PieChartFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM21 12h-9"/><path stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="m18 19-6-7V3"/></svg>
);

export default PieChartFilledIcon;
