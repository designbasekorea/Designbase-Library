import React from 'react';
import type { IconProps } from '../types';

const MobileIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 20c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1"/><path fill="currentColor" fillRule="evenodd" d="M8 2.75c-.69 0-1.25.56-1.25 1.25v16c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25zM5.25 4A2.75 2.75 0 0 1 8 1.25h8A2.75 2.75 0 0 1 18.75 4v16A2.75 2.75 0 0 1 16 22.75H8A2.75 2.75 0 0 1 5.25 20z" clipRule="evenodd"/></svg>
);

export default MobileIcon;
