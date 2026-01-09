import React from 'react';
import type { IconProps } from '../types';

const CreditCardIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M1.25 7A2.756 2.756 0 0 1 4 4.25h16A2.756 2.756 0 0 1 22.75 7v10A2.756 2.756 0 0 1 20 19.75H4A2.756 2.756 0 0 1 1.25 17zM4 5.75c-.686 0-1.25.564-1.25 1.25v10c0 .686.564 1.25 1.25 1.25h16c.686 0 1.25-.564 1.25-1.25V7c0-.686-.564-1.25-1.25-1.25z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M22 10.75H2v-1.5h20zM9 14.75H5v-1.5h4zM15 14.75h-4v-1.5h4z" clipRule="evenodd"/></svg>
);

export default CreditCardIcon;
