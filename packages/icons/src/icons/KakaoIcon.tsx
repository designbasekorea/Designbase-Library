import React from 'react';
import type { IconProps } from '../types';

const KakaoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 3C6.477 3 2 6.634 2 11.117c0 2.898 1.872 5.441 4.687 6.877-.153.544-.984 3.499-1.017 3.731 0 0-.02.174.09.241.11.066.238.015.238.015.315-.045 3.649-2.456 4.226-2.875q.866.127 1.776.128c5.523 0 10-3.634 10-8.117S17.523 3 12 3"/></svg>
);

export default KakaoIcon;
