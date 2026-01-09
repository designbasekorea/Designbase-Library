import React from 'react';
import type { IconProps } from '../types';

const BellDeactivatedIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 4.75a4.8 4.8 0 0 0-2.9.947.75.75 0 0 1-.89-1.208A6.3 6.3 0 0 1 12 3.25c2.118 0 3.784.975 4.922 2.29 1.125 1.3 1.759 2.96 1.827 4.425l.001.035v3a.75.75 0 0 1-1.5 0v-2.982c-.057-1.117-.556-2.45-1.462-3.497C14.889 5.482 13.616 4.75 12 4.75M6.774 7.222a.75.75 0 0 1 .406.98 5.6 5.6 0 0 0-.43 1.816V13c0 1.445-.466 2.453-1.06 3.25h9.887a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.53-1.28c.992-.992 1.78-1.8 1.78-3.47V9.965c.036-.76.223-1.563.544-2.337a.75.75 0 0 1 .98-.406" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9 16.25a.75.75 0 0 1 .75.75v1a2.25 2.25 0 1 0 4.5 0v-1a.75.75 0 0 1 1.5 0v1a3.75 3.75 0 1 1-7.5 0v-1a.75.75 0 0 1 .75-.75M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M5.92 8.402 1.76 4.242l1.06-1.061 18 18-1.06 1.06z" clipRule="evenodd"/></svg>
);

export default BellDeactivatedIcon;
