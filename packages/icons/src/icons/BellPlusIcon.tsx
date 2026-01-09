import React from 'react';
import type { IconProps } from '../types';

const BellPlusIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.75 10.018V13c0 1.445-.466 2.453-1.06 3.25h12.62c-.594-.797-1.06-1.805-1.06-3.25v-2.982c-.057-1.117-.556-2.45-1.462-3.497C14.889 5.482 13.616 4.75 12 4.75s-2.889.732-3.788 1.771c-.906 1.048-1.405 2.38-1.462 3.497m.328-4.478C8.216 4.225 9.882 3.25 12 3.25s3.784.975 4.922 2.29c1.125 1.3 1.759 2.96 1.827 4.425l.001.035v3c0 1.67.788 2.477 1.78 3.47a.75.75 0 0 1-.53 1.28H4a.75.75 0 0 1-.53-1.28c.992-.992 1.78-1.8 1.78-3.47V9.965c.07-1.466.703-3.125 1.828-4.425" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9 16.25a.75.75 0 0 1 .75.75v1a2.25 2.25 0 1 0 4.5 0v-1a.75.75 0 0 1 1.5 0v1a3.75 3.75 0 1 1-7.5 0v-1a.75.75 0 0 1 .75-.75M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M15 11.75H9v-1.5h6z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.25 14V8h1.5v6z" clipRule="evenodd"/></svg>
);

export default BellPlusIcon;
