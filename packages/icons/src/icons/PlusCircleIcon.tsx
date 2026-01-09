import React from 'react';
import type { IconProps } from '../types';

const PlusCircleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M1.25 11.5C1.25 5.586 6.086.75 12 .75S22.75 5.586 22.75 11.5 17.914 22.25 12 22.25 1.25 17.414 1.25 11.5M12 2.25c-5.086 0-9.25 4.164-9.25 9.25s4.164 9.25 9.25 9.25 9.25-4.164 9.25-9.25S17.086 2.25 12 2.25" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.25 15.5v-8h1.5v8z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8 10.75h8v1.5H8z" clipRule="evenodd"/></svg>
);

export default PlusCircleIcon;
