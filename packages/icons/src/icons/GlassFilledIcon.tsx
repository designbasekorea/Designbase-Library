import React from 'react';
import type { IconProps } from '../types';

const GlassFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13 16.904a5.65 5.65 0 0 0 3.132-1.708 5.64 5.64 0 0 0 1.482-4.257l-.617-8.015A1 1 0 0 0 16 2.001H8a1 1 0 0 0-.997.923l-.617 8.016a5.64 5.64 0 0 0 1.483 4.256A5.64 5.64 0 0 0 11 16.905v3.096H7v2h10v-2h-4v-3.097M15.074 4l.385 5H8.541l.385-5z"/></svg>
);

export default GlassFilledIcon;
