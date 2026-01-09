import React from 'react';
import type { IconProps } from '../types';

const PlayCircleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.64 7.485a.75.75 0 0 1 .766.027l6 3.857a.75.75 0 0 1 0 1.262l-6 3.857a.75.75 0 0 1-1.156-.631V8.143a.75.75 0 0 1 .39-.658m1.11 2.032v4.966L14.613 12z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.086 6.086 1.25 12 1.25S22.75 6.086 22.75 12 17.914 22.75 12 22.75 1.25 17.914 1.25 12M12 2.75c-5.086 0-9.25 4.164-9.25 9.25s4.164 9.25 9.25 9.25 9.25-4.164 9.25-9.25S17.086 2.75 12 2.75" clipRule="evenodd"/></svg>
);

export default PlayCircleIcon;
