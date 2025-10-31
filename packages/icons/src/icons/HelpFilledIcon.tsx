import React from 'react';
import type { IconProps } from '../types';

const HelpFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 16h-2v-2h2zm1.1-5.3H14c-.7.5-1 .9-1 1.3v1h-2v-1c0-1.1.6-2.1 1.9-2.9h.2c.5-.4.9-.7.9-1.6s-.9-1.6-2-1.6-2 .9-2 2H8c0-2.2 1.8-4 4-4s4 1.6 4 3.6-1.3 2.8-1.9 3.2"/></svg>
);

export default HelpFilledIcon;
