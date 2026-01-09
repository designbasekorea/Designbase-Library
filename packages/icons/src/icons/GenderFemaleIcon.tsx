import React from 'react';
import type { IconProps } from '../types';

const GenderFemaleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.25 22v-8h1.5v8z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16 18.75H8v-1.5h8zM12 4.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M6.25 9a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0" clipRule="evenodd"/></svg>
);

export default GenderFemaleIcon;
