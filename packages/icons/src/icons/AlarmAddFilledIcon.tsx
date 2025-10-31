import React from 'react';
import type { IconProps } from '../types';

const AlarmAddFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m19.707 1.293-1.414 1.415 3 3 1.414-1.414zM4.293 1.292l-3 3 1.414 1.415 3-3zM12 3c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.037 9-9-4.037-9-9-9m4 10h-3v3h-2v-3H8v-2h3V8h2v3h3z"/></svg>
);

export default AlarmAddFilledIcon;
