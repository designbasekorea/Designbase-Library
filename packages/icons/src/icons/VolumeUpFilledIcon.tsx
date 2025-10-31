import React from 'react';
import type { IconProps } from '../types';

const VolumeUpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12.4 4.1c-.3-.2-.8-.1-1.1.1L6.6 8H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h3.6l4.7 3.8c.2.1.4.2.6.2h.4c.3-.2.6-.5.6-.9V5q0-.6-.6-.9zM18.8 4.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4C19.1 7.3 20 9.5 20 12s-.9 4.6-2.6 6.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3c2-2.2 3.2-4.9 3.2-7.8s-1.1-5.7-3.2-7.8"/><path fill="currentColor" d="M16.2 7.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4c.7.7 1.2 1.8 1.2 2.8s-.4 2.1-1.2 2.8c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5 0 .7-.3c1.2-1 1.8-2.6 1.8-4.2s-.7-3.1-1.8-4.2"/></svg>
);

export default VolumeUpFilledIcon;
