import React from 'react';
import type { IconProps } from '../types';

const Refresh2Icon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M20.25 8.25V3h1.5v6.75H16v-1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 3.75A8.25 8.25 0 0 0 3.75 12h-1.5A9.75 9.75 0 0 1 12 2.25a9.75 9.75 0 0 1 8.628 5.205l.094.106.324.361.011.012.462.517a3 3 0 0 1 .098.123c.007.01.03.044.054.09l-1.342.671a.586.586 0 0 0 .068.11l.009.012-.021-.025q-.037-.043-.107-.12l-.335-.373-.013-.015-.494-.554-.05-.065a1 1 0 0 1-.05-.084l-.002-.004A8.25 8.25 0 0 0 12 3.75M12 20.25A8.25 8.25 0 0 0 20.25 12h1.5A9.75 9.75 0 0 1 12 21.75a9.75 9.75 0 0 1-9.195-6.5l1.414-.5A8.25 8.25 0 0 0 12 20.25" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M2.25 14.25H8v1.5H3.75V21h-1.5z" clipRule="evenodd"/></svg>
);

export default Refresh2Icon;
