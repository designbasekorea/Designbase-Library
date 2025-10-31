import React from 'react';
import type { IconProps } from '../types';

const AdCircleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M8 10c-.55 0-1 .45-1 1v.85h2V11c0-.55-.45-1-1-1M15.33 10H15v4h.33c.92 0 1.67-.9 1.67-2s-.75-2-1.67-2"/><path fill="currentColor" d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1m-1 15H9v-2.15H7V16H5v-5c0-1.65 1.35-3 3-3s3 1.35 3 3zm4.33 0H13V8h2.33C17.35 8 19 9.79 19 12s-1.64 4-3.67 4"/></svg>
);

export default AdCircleFilledIcon;
