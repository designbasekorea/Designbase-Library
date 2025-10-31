import React from 'react';
import type { IconProps } from '../types';

const RewindForwardFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.707 10.707 22.414 6l-4.707-4.707-1.414 1.414L18.586 5H8.998a6.98 6.98 0 0 0-4.73 1.855 6.99 6.99 0 0 0-2.23 4.564 7 7 0 0 0 1.441 4.87C4.447 17.539 6.474 19 9 19h2v-2H9c-1.687 0-3.193-.972-3.939-1.936a5 5 0 0 1-1.03-3.479 5 5 0 0 1 1.593-3.26A5 5 0 0 1 9 7h9.586l-2.293 2.293z"/><path fill="currentColor" d="M13 14h1v6h2v-8h-3zM17.733 12.731A2.51 2.51 0 0 0 17 14.5v3c0 .668.26 1.295.731 1.767A2.5 2.5 0 0 0 19.5 20c.668 0 1.295-.26 1.767-.731A2.5 2.5 0 0 0 22 17.5v-3c0-.668-.26-1.295-.731-1.767-.935-.938-2.6-.938-3.536-.002M20 17.5c0 .132-.053.26-.146.354a.514.514 0 0 1-.707 0 .5.5 0 0 1-.146-.354v-3a.495.495 0 0 1 .5-.5.495.495 0 0 1 .5.5z"/></svg>
);

export default RewindForwardFilledIcon;
