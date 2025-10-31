import React from 'react';
import type { IconProps } from '../types';

const PersonalVaultFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 10c-1.14 0-2 .86-2 2s.86 2 2 2 2-.859 2-2-.859-2-2-2"/><path fill="currentColor" d="M20 3H4C2.346 3 1 4.346 1 6v12c0 1.654 1.346 3 3 3h16c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3m-4 9c0 .75-.21 1.437-.556 2.03l1.505 1.505-1.414 1.414-1.505-1.505A4 4 0 0 1 12 16c-.75 0-1.437-.21-2.03-.556l-1.505 1.505-1.414-1.414 1.505-1.505A4 4 0 0 1 8 12c0-.75.21-1.437.556-2.03L7.05 8.464 8.464 7.05 9.97 8.556A4 4 0 0 1 12 8c.75 0 1.437.21 2.03.556l1.506-1.506 1.414 1.414-1.506 1.506c.345.594.556 1.28.556 2.03"/></svg>
);

export default PersonalVaultFilledIcon;
