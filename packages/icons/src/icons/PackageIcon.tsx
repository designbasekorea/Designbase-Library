import React from 'react';
import type { IconProps } from '../types';

const PackageIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m12 1.14 9.65 5.421v9.778l-9.646 5.42-9.654-5.316V6.561zM3.85 7.439v8.118l8.146 4.485 8.154-4.581V7.439L12 2.86z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m21.267 7.754-8.9 5-.734-1.308 8.9-5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.25 21v-8.9h1.5V21z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m3.473 6.35 8.9 5.1-.746 1.3-8.9-5.1z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m7.233 8.846 8.9-5 .734 1.308-8.9 5z" clipRule="evenodd"/></svg>
);

export default PackageIcon;
