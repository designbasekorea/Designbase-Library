import React from 'react';
import type { IconProps } from '../types';

const ShuffleFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m17.3 14.7 1.3 1.3H16c-2.2 0-4-1.8-4-4 0-3.4-2.6-6-6-6H2v2h4c2.2 0 4 1.8 4 4 0 3.4 2.6 6 6 6h2.6l-1.3 1.3 1.4 1.4 3.7-3.7-3.7-3.7zM16 8h2.6l-1.3 1.3 1.4 1.4L22.4 7l-3.7-3.7-1.4 1.4L18.6 6H16q-2.1 0-3.6 1.2l1.2 1.6c.7-.5 1.5-.8 2.4-.8M6 16H2v2h4q2.1 0 3.6-1.2l-1.2-1.6c-.7.5-1.5.8-2.4.8"/></svg>
);

export default ShuffleFilledIcon;
