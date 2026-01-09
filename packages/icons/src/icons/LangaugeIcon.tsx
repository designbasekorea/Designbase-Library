import React from 'react';
import type { IconProps } from '../types';

const LangaugeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.25 3.25V2h1.5v1.25H13v1.5h-1.25V6c0 1.726-1.071 3.336-2.423 4.514.91.468 1.855.736 2.673.736v1.5c-1.316 0-2.744-.494-4-1.264-1.255.77-2.684 1.264-4 1.264v-1.5c.818 0 1.763-.268 2.673-.736C5.321 9.336 4.25 7.726 4.25 6h1.5c0 1.178.807 2.486 2.1 3.545l.15.12.15-.12c1.293-1.059 2.1-2.367 2.1-3.545V4.75H3v-1.5zM17 9.188l5.683 12.502-1.366.62-1.618-3.56H14.3l-1.618 3.56-1.366-.62zm-2.017 8.062h4.034L17 12.813z" clipRule="evenodd"/></svg>
);

export default LangaugeIcon;
