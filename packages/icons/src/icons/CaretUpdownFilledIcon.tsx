import React from 'react';
import type { IconProps } from '../types';

const CaretUpdownFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m7 10 5-5 5 5zM17 14l-5 5-5-5z" clipRule="evenodd"/></svg>
);

export default CaretUpdownFilledIcon;
