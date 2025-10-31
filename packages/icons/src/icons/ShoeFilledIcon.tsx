import React from 'react';
import type { IconProps } from '../types';

const ShoeFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 9h-.82l-7.83-2.94a.99.99 0 0 0-1.06.23C8.81 6.77 7.29 8 6 8S3.18 6.77 2.71 6.29c-.29-.28-.72-.37-1.09-.21S1 6.6 1 7v8c0 1.65 1.35 3 3 3h16c1.65 0 3-1.35 3-3v-2c0-2.21-1.79-4-4-4M3 9.03c.83.51 1.89.97 3 .97 1.77 0 3.42-1.17 4.22-1.85l1.34.5-.45.9A.998.998 0 0 0 12 11c.37 0 .72-.2.89-.55l.55-1.09 1.06.4-.4.8c-.25.49-.04 1.09.45 1.34.14.07.29.1.44.1.37 0 .72-.2.9-.56l.49-.98 1.26.47c.11.04.23.06.35.06h1c1.1 0 2 .9 2 2H3V9.02z"/></svg>
);

export default ShoeFilledIcon;
