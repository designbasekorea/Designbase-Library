import React from 'react';
import type { IconProps } from '../types';

const SendFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M22.868 4.503A1 1 0 0 0 22 4H2a.999.999 0 0 0-.659 1.752l6.954 6.085 8.244-5.004a1 1 0 0 1 1.008 1.728L9.295 13.57l1.725 8.626a1 1 0 0 0 1.842.311l10-17a1 1 0 0 0 .006-1.003z"/></svg>
);

export default SendFilledIcon;
