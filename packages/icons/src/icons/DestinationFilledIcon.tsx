import React from 'react';
import type { IconProps } from '../types';

const DestinationFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.721 14h-3.69C17.719 12.074 19 10.253 19 8.075 19 4.372 15.663 1 12 1 8.271 1 5 4.306 5 8.075 5 10.293 6.275 12.1 7.951 14H4.279l-2.667 8h20.775l-2.667-8zM12 5.2c1.57 0 2.8 1.23 2.8 2.8a2.77 2.77 0 0 1-2.8 2.8A2.77 2.77 0 0 1 9.2 8c0-1.57 1.23-2.8 2.8-2.8M4.387 20l1.333-4h4.049a58 58 0 0 1 1.468 1.648 1.002 1.002 0 0 0 1.524 0c.493-.581.983-1.122 1.463-1.648h4.055l1.333 4z"/></svg>
);

export default DestinationFilledIcon;
