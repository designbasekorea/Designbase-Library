import React from 'react';
import type { IconProps } from '../types';

const PreviousFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19.4 3.1c-.3-.2-.8-.1-1.1.1l-10 8c-.2.2-.4.5-.4.8s.1.6.4.8l10 8c.2.1.4.2.6.2h.4c.3-.2.6-.5.6-.9V4q0-.6-.6-.9zM6 5H4v14h2z"/></svg>
);

export default PreviousFilledIcon;
