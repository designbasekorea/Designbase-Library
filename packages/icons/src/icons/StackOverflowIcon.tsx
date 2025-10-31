import React from 'react';
import type { IconProps } from '../types';

const StackOverflowIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M17.24 14.595h1.6V21H4.381v-6.405h1.598v4.804H17.24zM15.637 17.8v-1.604H7.582V17.8zm-.001-1.999.34-1.552-7.861-1.642-.338 1.553zm.44-2.037.678-1.463-7.281-3.399-.678 1.454v.01zm.922-1.845 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm-3.495-7.951 4.803 6.454 1.313-.971-4.807-6.452h.002z" clip-rule="evenodd"/></svg>
);

export default StackOverflowIcon;
