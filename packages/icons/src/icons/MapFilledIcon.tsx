import React from 'react';
import type { IconProps } from '../types';

const MapFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.525 2.149a1 1 0 0 0-.973-.044l-5.553 2.776-5.553-2.776a1 1 0 0 0-.895 0l-6 3A1 1 0 0 0 1.998 6v14a1.003 1.003 0 0 0 1 1c.153 0 .306-.035.447-.105l5.553-2.776 5.553 2.776a1 1 0 0 0 .895 0l6-3c.339-.17.553-.516.553-.895V3a1 1 0 0 0-.474-.851M10 4.618l4 2v11.764l-4-2zm-6 2 4-2v11.764l-4 2zm16 9.764-4 2V6.618l4-2z"/></svg>
);

export default MapFilledIcon;
