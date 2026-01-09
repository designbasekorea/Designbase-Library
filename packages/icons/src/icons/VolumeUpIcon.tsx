import React from 'react';
import type { IconProps } from '../types';

const VolumeUpIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.325 4.324A.75.75 0 0 1 12.75 5v14a.75.75 0 0 1-1.219.586L6.738 15.75H3a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 3 8.25h3.737l4.794-3.836a.75.75 0 0 1 .794-.09M11.25 6.56 7.469 9.586A.75.75 0 0 1 7 9.75H3.75v4.5H7a.75.75 0 0 1 .469.164l3.781 3.025zM17.57 4.37a.75.75 0 0 1 1.06 0c2.046 2.046 3.12 4.739 3.12 7.63 0 2.908-1.185 5.589-3.105 7.616a.75.75 0 1 1-1.09-1.032c1.68-1.773 2.695-4.092 2.695-6.584 0-2.508-.926-4.815-2.68-6.57a.75.75 0 0 1 0-1.06" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M14.97 7.97a.75.75 0 0 1 1.06 0c1.025 1.025 1.72 2.51 1.72 4.03 0 1.485-.571 2.998-1.748 4.058a.75.75 0 1 1-1.004-1.115c.823-.741 1.252-1.828 1.252-2.943 0-1.08-.505-2.195-1.28-2.97a.75.75 0 0 1 0-1.06" clipRule="evenodd"/></svg>
);

export default VolumeUpIcon;
