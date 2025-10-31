import React from 'react';
import type { IconProps } from '../types';

const WarningFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m22.9 19.5-10-17c-.4-.6-1.4-.6-1.7 0l-10.1 17c-.2.3-.2.7 0 1s.5.5.9.5h20c.4 0 .7-.2.9-.5s.2-.7 0-1M13 17h-2v-2h2zm0-3h-2V9h2z"/></svg>
);

export default WarningFilledIcon;
