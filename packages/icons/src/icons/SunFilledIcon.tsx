import React from 'react';
import type { IconProps } from '../types';

const SunFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12M13 2h-2v3h2zM13 19h-2v3h2zM18.324 4.247l-2.121 2.121 1.414 1.414 2.121-2.12zM6.324 16.218l-2.121 2.12 1.414 1.415 2.121-2.121zM22 11h-3v2h3zM5 11H2v2h3zM17.602 16.232l-1.414 1.415 2.121 2.12 1.415-1.413zM5.632 4.232 4.218 5.646l2.12 2.122 1.415-1.414z"/></svg>
);

export default SunFilledIcon;
