import React from 'react';
import type { IconProps } from '../types';

const NextIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.675 3.324a.75.75 0 0 1 .794.09l10 8a.75.75 0 0 1 0 1.172l-10 8A.75.75 0 0 1 4.25 20V4a.75.75 0 0 1 .425-.676M5.75 5.56v12.88L13.8 12zM18.25 19V5h1.5v14z" clipRule="evenodd"/></svg>
);

export default NextIcon;
