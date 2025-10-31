import React from 'react';
import type { IconProps } from '../types';

const FilmFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM4 19a1 1 0 0 0 1 1h2v-3H4zm5 1h6V4H9zm8 0h2a1 1 0 0 0 1-1v-2h-3zM4 15h3v-2H4zm13 0h3v-2h-3zM4 11h3V9H4zm13-2v2h3V9zm0-2h3V5a1 1 0 0 0-1-1h-2zM5 4a1 1 0 0 0-1 1v2h3V4z"/></svg>
);

export default FilmFilledIcon;
