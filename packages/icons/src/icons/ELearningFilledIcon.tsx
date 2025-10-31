import React from 'react';
import type { IconProps } from '../types';

const ELearningFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5 18h14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3H5C3.346 4 2 5.346 2 7v8c0 1.654 1.346 3 3 3M4 7c0-.551.449-1 1-1h14c.552 0 1 .449 1 1v8a1 1 0 0 1-1 1h-2c0-1.857-1.029-3.461-2.536-4.324A2.93 2.93 0 0 0 15 10c0-.831-.352-1.636-.893-2.107A2.97 2.97 0 0 0 12 7c-.832 0-1.636.352-2.107.893A2.97 2.97 0 0 0 9 10a2.9 2.9 0 0 0 .515 1.688C8.02 12.553 7 14.152 7 16H5c-.551 0-1-.448-1-1zM23 19H1v2h22z"/></svg>
);

export default ELearningFilledIcon;
