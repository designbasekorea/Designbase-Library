import React from 'react';
import type { IconProps } from '../types';

const TerraceFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M13 10h7c.55 0 1-.45 1-1V7c0-.34-.18-.67-.47-.85l-8-5c-.32-.2-.74-.2-1.06 0l-8 5c-.29.18-.47.5-.47.85v2c0 .55.45 1 1 1h7v10H9v2h6v-2h-2z"/><path fill="currentColor" d="M3 13H1v9h2v-3h2v3h2v-5H3zM21 13v4h-4v5h2v-3h2v3h2v-9z"/></svg>
);

export default TerraceFilledIcon;
