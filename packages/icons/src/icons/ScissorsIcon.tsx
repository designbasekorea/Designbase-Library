import React from 'react';
import type { IconProps } from '../types';

const ScissorsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 6a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M18 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M2.44 5.531a.75.75 0 0 1 1.054-.116l12.638 10.127a.75.75 0 0 1-.938 1.17L2.556 6.585a.75.75 0 0 1-.116-1.054M16.248 7.404a.75.75 0 0 1-.116 1.054l-2.647 2.121a.75.75 0 0 1-.938-1.17l2.647-2.121a.75.75 0 0 1 1.054.116M8.584 13.545a.75.75 0 0 1-.116 1.054l-4.974 3.986a.75.75 0 0 1-.938-1.17l4.974-3.986a.75.75 0 0 1 1.054.116" clipRule="evenodd"/></svg>
);

export default ScissorsIcon;
