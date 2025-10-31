import React from 'react';
import type { IconProps } from '../types';

const ArrowBackFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.507 6.493C18.545 5.53 17.299 5 16 5h-2v2h2c.765 0 1.508.322 2.142.953.529.463.858 1.248.858 2.047 0 .765-.322 1.508-.952 2.141-.622.71-1.457.859-2.048.859H6.914l3.293-3.293-1.414-1.414L3.086 14l5.707 5.707 1.414-1.414L6.914 15H16c1.421 0 2.682-.548 3.507-1.493C20.47 12.544 21 11.299 21 10c0-1.38-.576-2.708-1.493-3.507"/></svg>
);

export default ArrowBackFilledIcon;
