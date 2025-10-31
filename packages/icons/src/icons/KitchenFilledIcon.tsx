import React from 'react';
import type { IconProps } from '../types';

const KitchenFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21 7c0-2.757-2.243-5-5-5h-1v19h2v-6h4zM11 8c0 .551-.449 1-1 1H9V2H7v7H6c-.551 0-1-.449-1-1V2H3v6c0 1.654 1.346 3 3 3h1v10h2V11h1c1.654 0 3-1.346 3-3V2h-2z"/></svg>
);

export default KitchenFilledIcon;
