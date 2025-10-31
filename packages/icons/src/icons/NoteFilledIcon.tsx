import React from 'react';
import type { IconProps } from '../types';

const NoteFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h9.414L21 15.414V4c0-1.103-.897-2-2-2m0 12h-6v6H5V4h14z"/></svg>
);

export default NoteFilledIcon;
