import React from 'react';
import type { IconProps } from '../types';

const DoneAllIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.477 15.936 20.97 6.47l1.06 1.062-10.562 10.533-5.502-5.58 1.068-1.053zM3.165 11.43l5.736 5.807-1.067 1.054-5.736-5.806z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m10.47 12.95 6.5-6.481 1.06 1.062-6.5 6.482z" clipRule="evenodd"/></svg>
);

export default DoneAllIcon;
