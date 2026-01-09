import React from 'react';
import type { IconProps } from '../types';

const VolumeDownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M14.325 4.324A.75.75 0 0 1 14.75 5v14a.75.75 0 0 1-1.219.586L8.738 15.75H5a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 5 8.25h3.737l4.794-3.836a.75.75 0 0 1 .794-.09M13.25 6.56 9.469 9.586A.75.75 0 0 1 9 9.75H5.75v4.5H9a.75.75 0 0 1 .469.164l3.781 3.025zM17.97 7.97a.75.75 0 0 1 1.06 0c1.025 1.025 1.72 2.51 1.72 4.03 0 1.485-.571 2.998-1.748 4.058a.75.75 0 1 1-1.004-1.115c.823-.741 1.252-1.828 1.252-2.943 0-1.08-.506-2.195-1.28-2.97a.75.75 0 0 1 0-1.06" clipRule="evenodd"/></svg>
);

export default VolumeDownIcon;
