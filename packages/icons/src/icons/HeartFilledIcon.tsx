import React from 'react';
import type { IconProps } from '../types';

const HeartFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M16.61 2c-1.742 0-3.414.674-4.61 1.813C10.804 2.674 9.131 2 7.389 2 3.866 2 1 4.72 1 8.062c0 4.642 3.439 7.778 9.683 13.472l.224.205a.997.997 0 0 0 1.348 0c.902-.823 1.763-1.591 2.576-2.315 4.92-4.387 8.17-7.285 8.17-11.361 0-3.343-2.866-6.062-6.39-6.062z"/></svg>
);

export default HeartFilledIcon;
