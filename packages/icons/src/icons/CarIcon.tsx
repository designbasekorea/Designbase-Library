import React from 'react';
import type { IconProps } from '../types';

const CarIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.541 11.25H21c.966 0 1.75.784 1.75 1.75v5.75h-3.106a2.749 2.749 0 0 1-5.288 0H8.644a2.749 2.749 0 0 1-5.288 0H1.25v-6.872l.038-.115L3.46 5.25h13.083zM6 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m11 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-14.25.5h.606a2.749 2.749 0 0 1 5.288 0h5.712A2.75 2.75 0 0 1 18 15.44v-1.19h3v1.5h-2.422c.51.358.891.885 1.066 1.5h1.606V13a.25.25 0 0 0-.25-.25H2.75zm.291-6H9.25v-4.5H4.541zm7.709 0h6.209l-1.499-4.5h-4.71z"/></svg>
);

export default CarIcon;
