import React from 'react';
import type { IconProps } from '../types';

const BuildingIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 21.75H2v-1.5h20z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6 3.75c-.69 0-1.25.56-1.25 1.25v15.25h14.5V5c0-.69-.56-1.25-1.25-1.25zM3.25 5A2.75 2.75 0 0 1 6 2.25h12A2.75 2.75 0 0 1 20.75 5v16.75H3.25z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8 11.25h3v1.5H8zM11 17.75a.25.25 0 0 0-.25.25v2.25h2.5V18a.25.25 0 0 0-.25-.25zM9.25 18c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v3.75h-5.5zM8 7.25h3v1.5H8zM13 11.25h3v1.5h-3zM13 7.25h3v1.5h-3z" clipRule="evenodd"/></svg>
);

export default BuildingIcon;
