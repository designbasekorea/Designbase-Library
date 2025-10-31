import React from 'react';
import type { IconProps } from '../types';

const NextFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M5.6 3.2c-.3-.2-.7-.3-1.1-.1-.3.2-.6.5-.6.9v16q0 .6.6.9h.4c.2 0 .4 0 .6-.2l10-8c.2-.2.4-.5.4-.8s-.1-.6-.4-.8zM20 5h-2v14h2z"/></svg>
);

export default NextFilledIcon;
