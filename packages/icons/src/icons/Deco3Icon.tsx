import React from 'react';
import type { IconProps } from '../types';

const Deco3Icon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12.75 13.81V22h-1.5v-8.19l-5.82 5.82-1.06-1.06 5.82-5.82H2v-1.5h8.19L4.37 5.43l1.06-1.06 5.82 5.82V2h1.5v8.19l5.82-5.82 1.06 1.06-5.82 5.82H22v1.5h-8.19l5.82 5.82-1.06 1.06z" clip-rule="evenodd"/></svg>
);

export default Deco3Icon;
