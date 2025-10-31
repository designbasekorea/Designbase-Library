import React from 'react';
import type { IconProps } from '../types';

const MilestoneFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m23.459 10-5.312-5h-5.146V2h-2v3h-7v10h7v7h2v-7h5.146z"/></svg>
);

export default MilestoneFilledIcon;
