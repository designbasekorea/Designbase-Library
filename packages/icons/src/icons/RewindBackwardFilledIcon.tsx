import React from 'react';
import type { IconProps } from '../types';

const RewindBackwardFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M2 14h1v6h2v-8H2zM6.732 12.732A2.52 2.52 0 0 0 6 14.5v3c0 .667.26 1.295.732 1.768.465.466 1.11.732 1.768.732.667 0 1.294-.26 1.768-.731A2.52 2.52 0 0 0 11 17.5v-3c0-.667-.26-1.295-.732-1.768-.936-.936-2.594-.938-3.536 0M9 17.5a.5.5 0 0 1-.145.353.517.517 0 0 1-.708.002.5.5 0 0 1-.146-.354v-3a.502.502 0 0 1 1 0v3z"/><path fill="currentColor" d="M21.962 11.419a7 7 0 0 0-2.229-4.564A6.98 6.98 0 0 0 15.001 5H5.414l2.293-2.293-1.414-1.414L1.586 6l4.707 4.707 1.414-1.414L5.414 7h9.583a5 5 0 0 1 3.38 1.325 4.997 4.997 0 0 1 .565 6.739c-.748.963-2.256 1.936-3.94 1.936h-2v2h2c2.523 0 4.551-1.46 5.52-2.711a6.98 6.98 0 0 0 1.44-4.87"/></svg>
);

export default RewindBackwardFilledIcon;
