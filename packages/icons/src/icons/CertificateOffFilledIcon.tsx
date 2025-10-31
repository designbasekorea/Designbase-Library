import React from 'react';
import type { IconProps } from '../types';

const CertificateOffFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M21.942 5.421A3 3 0 0 0 19 3H9v2h10a.97.97 0 0 1 .692.307A.98.98 0 0 1 20 6v10h2V6q0-.294-.058-.579"/><path fill="currentColor" d="M18 7h-5v2h5zM9 11H6v2h3z"/><path fill="currentColor" d="m2.293 2.707.908.908A2.99 2.99 0 0 0 2 6v10c0 1.654 1.346 3 3 3h6v-2H5c-.551 0-1-.448-1-1V6c0-.429.275-.789.656-.93L6.586 7H6v2h2.586l2.979 2.979A3.96 3.96 0 0 0 11 14c0 1.005.385 1.914 1 2.618V21a1.001 1.001 0 0 0 1.6.8l1.4-1.05 1.4 1.05a1 1 0 0 0 1.047.095c.339-.17.553-.516.553-.895v-2.586l2.293 2.293 1.414-1.414-18-18zM15.6 18.7a.995.995 0 0 0-1.199 0l-.4.3v-1.142c.322.084.653.142 1 .142.344 0 .676-.058 1-.142V19z"/></svg>
);

export default CertificateOffFilledIcon;
