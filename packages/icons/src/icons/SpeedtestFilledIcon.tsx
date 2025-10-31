import React from 'react';
import type { IconProps } from '../types';

const SpeedtestFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.2 10.2c-.8-1.8-2-3.4-3.7-4.5-3.3-2.2-7.8-2.2-11.1 0-1.7 1.1-2.9 2.7-3.7 4.5s-1 3.8-.6 5.8q.45 1.95 1.5 3.6l1.7-1.1c-.6-.9-1-1.9-1.2-2.9-.3-1.6-.1-3.2.5-4.6.6-1.5 1.6-2.7 2.9-3.6 2.6-1.8 6.2-1.8 8.9 0 1.3.9 2.3 2.1 2.9 3.6.6 1.4.8 3 .5 4.6-.2 1-.6 2-1.2 2.9l1.7 1.1c.8-1.1 1.3-2.3 1.5-3.7.4-2 .2-4-.6-5.8z"/><path fill="currentColor" d="m15.328 9.228-4.03 4.03 1.414 1.415 4.03-4.03z"/></svg>
);

export default SpeedtestFilledIcon;
