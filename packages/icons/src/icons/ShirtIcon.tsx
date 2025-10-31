import React from 'react';
import type { IconProps } from '../types';

const ShirtIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m22.968 6.6-2.534 6.336-2.684-.895v8.709H6.25v-8.709l-2.684.894L1.032 6.6l8.095-3.47.307.661C9.81 4.601 10.778 5.25 12 5.25s2.19-.65 2.566-1.459l.307-.661zm-7.42-1.548C14.778 6.096 13.456 6.75 12 6.75s-2.778-.654-3.55-1.698l-5.482 2.35 1.466 3.663L7.75 9.96v9.29h8.5V9.96l3.315 1.104 1.466-3.663z"/></svg>
);

export default ShirtIcon;
