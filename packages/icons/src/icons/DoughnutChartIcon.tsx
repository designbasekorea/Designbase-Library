import React from 'react';
import type { IconProps } from '../types';

const DoughnutChartIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 4.75a7.25 7.25 0 1 0 4.68 12.787l.484.573.484.573A8.75 8.75 0 1 1 12 3.25zm6.743 1.673A8.72 8.72 0 0 1 20.75 12a8.72 8.72 0 0 1-1.85 5.382l-.592-.462-.591-.461A7.22 7.22 0 0 0 19.25 12a7.22 7.22 0 0 0-1.663-4.62zm-5.21-3.04a8.7 8.7 0 0 1 4.1 1.92l-.483.574-.483.574a7.2 7.2 0 0 0-3.395-1.59z"/></svg>
);

export default DoughnutChartIcon;
