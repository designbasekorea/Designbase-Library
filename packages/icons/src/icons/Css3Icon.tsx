import React from 'react';
import type { IconProps } from '../types';

const Css3Icon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m19.807 3.143-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM7.1 6.423l.158 1.948 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z" clip-rule="evenodd"/></svg>
);

export default Css3Icon;
