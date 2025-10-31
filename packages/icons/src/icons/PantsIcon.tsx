import React from 'react';
import type { IconProps } from '../types';

const PantsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.589 8.725h-.006l1.242 13.025h-6.451l-2-11h-.748l-2 11H3.175L4.41 8.774h-.006l.075-.725.003-.03.001-.006.59-5.654h13.852zM10.34 4.11a4.75 4.75 0 0 1-4.43 4.737L4.825 20.25h3.549l2-11h3.252l2 11h3.549l-1.09-11.418a4.75 4.75 0 0 1-4.238-4.972h-3.514q.007.125.008.25M6.063 7.325A3.25 3.25 0 0 0 8.841 4.11l-.01-.25H6.426zM15.34 4.11a3.25 3.25 0 0 0 2.59 3.183l-.356-3.433H15.35q-.01.122-.01.25"/></svg>
);

export default PantsIcon;
