import React from 'react';
import type { IconProps } from '../types';

const GiftCardFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 9.5c0 .19 0 .5 1 .5h.6c-.34-.66-.74-1-1.07-1-.24.01-.53.21-.53.5"/><path fill="currentColor" d="M1 7v10c0 1.65 1.35 3 3 3h10v-6.59l-2.29 2.3-1.42-1.42 2.3-2.3C10.69 11.83 10 10.63 10 9.5 10 8.15 11.15 7 12.5 7c.54-.03 1.05.13 1.5.44V4H4C2.35 4 1 5.35 1 7M18 9.5c0-.29-.28-.49-.51-.5-.34 0-.75.34-1.09 1h.6c1 0 1-.34 1-.5"/><path fill="currentColor" d="M20 4h-4v3.46c.46-.31.97-.47 1.52-.46C18.86 7 20 8.15 20 9.5c0 1.13-.69 2.33-2.59 2.49l2.3 2.3-1.42 1.42-2.29-2.3V20h4c1.65 0 3-1.35 3-3V7c0-1.65-1.35-3-3-3"/></svg>
);

export default GiftCardFilledIcon;
