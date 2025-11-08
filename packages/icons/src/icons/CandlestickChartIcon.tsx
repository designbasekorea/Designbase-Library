import React from 'react';
import type { IconProps } from '../types';

const CandlestickChartIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12.75 11.25h2v7.5h-2V22h-1.5v-3.25h-2v-7.5h2V8h1.5zm-7-3h2v9.5h-2V21h-1.5v-3.25h-2v-9.5h2V6h1.5zm14-3h2v10.5h-2V19h-1.5v-3.25h-2V5.25h2V2h1.5zm-9 12h2.5v-4.5h-2.5zm-7-1h2.5v-6.5h-2.5zm14-2h2.5v-7.5h-2.5z"/></svg>
);

export default CandlestickChartIcon;
