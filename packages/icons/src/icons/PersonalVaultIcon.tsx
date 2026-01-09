import React from 'react';
import type { IconProps } from '../types';

const PersonalVaultIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m16.773 8.287-1.631 1.631c.385.59.608 1.304.608 2.082s-.223 1.49-.608 2.081l1.63 1.63-1.06 1.062-1.63-1.631A3.8 3.8 0 0 1 12 15.75a3.8 3.8 0 0 1-2.082-.608l-1.63 1.63-1.06-1.06 1.63-1.63A3.8 3.8 0 0 1 8.25 12c0-.778.222-1.491.607-2.082l-1.63-1.63 1.06-1.061 1.631 1.63A3.8 3.8 0 0 1 12 8.25c.778 0 1.49.222 2.081.607l1.632-1.63zM12 9.75c-1.286 0-2.25.964-2.25 2.25s.964 2.25 2.25 2.25 2.25-.964 2.25-2.25-.964-2.25-2.25-2.25" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M20 3.25A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V6A2.75 2.75 0 0 1 4 3.25zM4 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd"/></svg>
);

export default PersonalVaultIcon;
