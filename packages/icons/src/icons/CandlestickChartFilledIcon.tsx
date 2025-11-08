import React from 'react';
import type { IconProps } from '../types';

const CandlestickChartFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M6 6H4v2H2v10h2v3h2v-3h2V8H6zM13 8h-2v3H9v8h2v3h2v-3h2v-8h-2zm0 9h-2v-4h2zM22 5h-2V2h-2v3h-2v11h2v3h2v-3h2z"/></svg>
);

export default CandlestickChartFilledIcon;
