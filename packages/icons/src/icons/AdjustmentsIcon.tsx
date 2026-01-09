import React from 'react';
import type { IconProps } from '../types';

const AdjustmentsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M3.25 10a2.75 2.75 0 1 1 5.499-.001A2.75 2.75 0 0 1 3.25 10M6 8.75a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 6 8.75M5.25 6V3h1.5v3z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M5.25 21v-9h1.5v9zM9.25 16a2.75 2.75 0 1 1 5.499-.001A2.75 2.75 0 0 1 9.25 16M12 14.75a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 12 14.75M11.25 12V3h1.5v9z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.25 21v-3h1.5v3zM15.25 7a2.75 2.75 0 1 1 5.499-.001A2.75 2.75 0 0 1 15.25 7M18 5.75a1.25 1.25 0 1 0-.001 2.499A1.25 1.25 0 0 0 18 5.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M17.25 5V3h1.5v2zM17.25 21V11h1.5v10z" clipRule="evenodd"/></svg>
);

export default AdjustmentsIcon;
