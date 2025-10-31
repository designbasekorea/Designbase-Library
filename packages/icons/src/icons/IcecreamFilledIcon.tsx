import React from 'react';
import type { IconProps } from '../types';

const IcecreamFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.788 11.385a1 1 0 0 0-.396-.294 7.4 7.4 0 0 0 .108-1.258c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5q.001.638.109 1.258a1 1 0 0 0-.397.294 1 1 0 0 0-.182.858l1 4a1 1 0 0 0 .97.758h1.18l.839 4.196a1 1 0 0 0 .98.804h6a1 1 0 0 0 .98-.804l.839-4.196h1.18a1 1 0 0 0 .97-.758l1-4a1 1 0 0 0-.182-.858zM14.181 20H9.82l-.6-3h5.561zm3.038-5H6.781l-.5-2h11.438z"/></svg>
);

export default IcecreamFilledIcon;
