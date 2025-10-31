import React from 'react';
import type { IconProps } from '../types';

const SpeakerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M9 2.75A3.25 3.25 0 0 0 5.75 6v12A3.25 3.25 0 0 0 9 21.25h6A3.25 3.25 0 0 0 18.25 18V6A3.25 3.25 0 0 0 15 2.75zM4.25 6A4.75 4.75 0 0 1 9 1.25h6A4.75 4.75 0 0 1 19.75 6v12A4.75 4.75 0 0 1 15 22.75H9A4.75 4.75 0 0 1 4.25 18z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M9.25 7A2.756 2.756 0 0 1 12 4.25 2.756 2.756 0 0 1 14.75 7 2.756 2.756 0 0 1 12 9.75 2.756 2.756 0 0 1 9.25 7M12 5.75c-.686 0-1.25.564-1.25 1.25s.564 1.25 1.25 1.25 1.25-.564 1.25-1.25-.564-1.25-1.25-1.25M8.25 15c0-2.114 1.636-3.75 3.75-3.75s3.75 1.636 3.75 3.75-1.636 3.75-3.75 3.75S8.25 17.114 8.25 15M12 12.75c-1.286 0-2.25.964-2.25 2.25s.964 2.25 2.25 2.25 2.25-.964 2.25-2.25-.964-2.25-2.25-2.25" clip-rule="evenodd"/></svg>
);

export default SpeakerIcon;
