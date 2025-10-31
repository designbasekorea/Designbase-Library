import React from 'react';
import type { IconProps } from '../types';

const TriangleRulerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.97 1.97a.75.75 0 0 1 1.272.42l.008.113-.066 16.94a.75.75 0 0 1-.748.747l-16.933.06a.75.75 0 0 1-.533-1.28zm-2.667 4.787 1.592 1.592-1.061 1.06-1.592-1.592-1.768 1.768 1.591 1.592-1.06 1.06-1.592-1.591-1.767 1.768 1.591 1.592-1.06 1.06-1.592-1.591-1.768 1.766 1.591 1.591-1.06 1.06-1.591-1.59-2.44 2.441 14.369-.05.056-14.376z"/></svg>
);

export default TriangleRulerIcon;
