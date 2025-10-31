import React from 'react';
import type { IconProps } from '../types';

const BoldIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M5.25 3.25h7.65c1.277 0 2.487.465 3.348 1.437.924.934 1.402 2.115 1.402 3.313 0 1.167-.458 2.48-1.437 3.348-.934.925-2.115 1.402-3.313 1.402H5.25zm1.5 1.5v6.5h6.15c.795 0 1.606-.316 2.27-.98l.017-.018.02-.016c.607-.533.943-1.41.943-2.236 0-.795-.316-1.606-.98-2.27l-.018-.017-.016-.02c-.539-.614-1.321-.943-2.236-.943z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M14 12.75h-1.1v-1.5H14c1.285 0 2.503.471 3.364 1.456.773.884 1.386 2.052 1.386 3.294 0 1.167-.458 2.48-1.437 3.348-.933.925-2.115 1.402-3.313 1.402H5.25V12h1.5v7.25H14c.795 0 1.606-.317 2.27-.98l.017-.018.02-.016c.607-.533.943-1.41.943-2.236 0-.758-.387-1.59-1.014-2.306-.539-.615-1.321-.944-2.236-.944" clip-rule="evenodd"/></svg>
);

export default BoldIcon;
