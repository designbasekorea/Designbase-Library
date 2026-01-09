import React from 'react';
import type { IconProps } from '../types';

const CrownIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 4.25a.75.75 0 0 1 .586.281l3.62 4.527 5.459-2.729a.75.75 0 0 1 1.082.739l-1 11a.75.75 0 0 1-.747.682H3a.75.75 0 0 1-.747-.682l-1-11a.75.75 0 0 1 1.082-.739l5.458 2.729 3.621-4.527A.75.75 0 0 1 12 4.25m0 1.95L8.586 10.47a.75.75 0 0 1-.921.202L2.869 8.273l.816 8.977h16.63l.816-8.977-4.796 2.398a.75.75 0 0 1-.92-.202z" clipRule="evenodd"/></svg>
);

export default CrownIcon;
