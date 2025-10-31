import React from 'react';
import type { IconProps } from '../types';

const SuitcaseFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17 6V4c0-1.654-1.346-3-3-3h-4C8.346 1 7 2.346 7 4v2c-1.103 0-2 .897-2 2v12c0 .737.405 1.375 1 1.722V23h2v-1h8v1h2v-1.278c.595-.347 1-.985 1-1.722V8c0-1.103-.897-2-2-2M9 4c0-.551.449-1 1-1h4c.552 0 1 .449 1 1v2H9z"/></svg>
);

export default SuitcaseFilledIcon;
