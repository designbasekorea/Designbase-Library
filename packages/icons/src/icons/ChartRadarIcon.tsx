import React from 'react';
import type { IconProps } from '../types';

const ChartRadarIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22.853 8.682 19.586 21.75H4.414L1.147 8.682 12 1.084zM6.532 20.25h10.934l-2.168-2.787H8.7zm-1.18-.927 2.17-2.789-1.4-5.514-3.076-.922zM18.08 10.96l-1.589 5.594 2.154 2.77 2.307-9.225zm-8.212 5.004h4.264l-2.133-2.741zm3.396-3.56 2.086 2.681 1.026-3.614zm-4.574 2.63 2.045-2.63-2.937-.88zm-.182-4.864 2.742.822V8.383zm4.242.822 2.84-.851-2.84-1.783zM3.697 8.727l2.93.877 4.623-3.012V3.439zm9.053-2.14 4.749 2.98 2.803-.84-7.552-5.288z"/></svg>
);

export default ChartRadarIcon;
