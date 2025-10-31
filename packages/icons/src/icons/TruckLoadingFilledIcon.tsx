import React from 'react';
import type { IconProps } from '../types';

const TruckLoadingFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22 16h-2V6c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v10H5V4c0-1.1-.9-2-2-2H1v2h2v14h2.18c-.11.31-.18.65-.18 1 0 1.65 1.35 3 3 3s3-1.35 3-3c0-.35-.07-.69-.18-1h3.37c-.11.31-.18.65-.18 1 0 1.65 1.35 3 3 3s3-1.35 3-3c0-.35-.07-.69-.18-1h2.18v-2zM8 7h4v4h2V7h4v9H8zm1 12c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m8 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/></svg>
);

export default TruckLoadingFilledIcon;
