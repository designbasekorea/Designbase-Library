import React from 'react';
import type { IconProps } from '../types';

const FileNewFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13.414 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8.586zM15 16h-2v2h-2v-2H9v-2h2v-2h2v2h2zm-1-8V5.414L16.586 8z"/></svg>
);

export default FileNewFilledIcon;
