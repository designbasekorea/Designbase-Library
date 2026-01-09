import React from 'react';
import type { IconProps } from '../types';

const ScanFaceIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="m7.37 13.364.63-.406.63-.406v-.001l.008.012.04.057a5.592 5.592 0 0 0 .87.932c.61.519 1.444.989 2.452.989s1.842-.47 2.452-.988a5.6 5.6 0 0 0 .87-.933l.04-.057.008-.011.63.406.63.406v.002l-.003.003-.005.009-.019.027-.064.091a7.085 7.085 0 0 1-1.117 1.2c-.764.649-1.93 1.345-3.422 1.345s-2.658-.696-3.423-1.345a7 7 0 0 1-1.116-1.2l-.064-.09-.019-.028-.005-.009-.002-.003zM4 3.75a.25.25 0 0 0-.25.25v3h-1.5V4c0-.966.784-1.75 1.75-1.75h3v1.5zM20 3.75h-3v-1.5h3c.966 0 1.75.784 1.75 1.75v3h-1.5V4a.25.25 0 0 0-.25-.25M20.25 20v-3h1.5v3A1.75 1.75 0 0 1 20 21.75h-3v-1.5h3a.25.25 0 0 0 .25-.25M3.75 17v3c0 .138.112.25.25.25h3v1.5H4A1.75 1.75 0 0 1 2.25 20v-3z" clipRule="evenodd"/><path fill="currentColor" d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
);

export default ScanFaceIcon;
