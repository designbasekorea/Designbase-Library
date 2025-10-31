import React from 'react';
import type { IconProps } from '../types';

const DeliveryIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M6.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M4 5.75c-.686 0-1.25.564-1.25 1.25v9c0 .46.256.874.635 1.085a.75.75 0 1 1-.73 1.31A2.75 2.75 0 0 1 1.25 16V7A2.756 2.756 0 0 1 4 4.25h11A2.756 2.756 0 0 1 17.75 7v9a.75.75 0 0 1-1.5 0V7c0-.686-.564-1.25-1.25-1.25z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M16.25 8a.75.75 0 0 1 .75-.75h1.764a2.75 2.75 0 0 1 2.46 1.52l1.236 2.473c.191.382.29.803.29 1.229V16c0 .964-.786 1.75-1.75 1.75h-2.27a.75.75 0 0 1 0-1.5H21c.136 0 .25-.114.25-.25v-3.528a1.25 1.25 0 0 0-.132-.559l-1.236-2.472a1.25 1.25 0 0 0-1.118-.691H17.75V16a.75.75 0 0 1-1.5 0zM5 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M2.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M17 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M14.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"/></svg>
);

export default DeliveryIcon;
