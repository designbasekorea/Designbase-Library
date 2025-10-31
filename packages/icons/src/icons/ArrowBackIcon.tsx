import React from 'react';
import type { IconProps } from '../types';

const ArrowBackIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16 5.25c1.123 0 2.231.42 3.135 1.234l.355.336c.857.864 1.26 2.086 1.26 3.18 0 1.198-.478 2.38-1.402 3.313-.861.971-2.071 1.437-3.348 1.437H6.31l3.72 3.72-1.06 1.06L3.44 14l5.53-5.53 1.06 1.06-3.72 3.72H16c.915 0 1.697-.33 2.235-.944l.017-.019.018-.018c.663-.663.98-1.474.98-2.269 0-.826-.336-1.703-.944-2.235l-.019-.017-.017-.018c-.664-.663-1.475-.98-2.27-.98h-2v-1.5z"/></svg>
);

export default ArrowBackIcon;
