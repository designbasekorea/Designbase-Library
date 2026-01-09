import React from 'react';
import type { IconProps } from '../types';

const MailboxIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.25 7A4.76 4.76 0 0 1 7 2.25h10.5c2.314 0 4.25 1.936 4.25 4.25v8.25H2.25zm12.032-3.25H7A3.26 3.26 0 0 0 3.75 7v6.25h9.5V6.5a4.22 4.22 0 0 1 1.032-2.75m.468 9.5V6.5c0-1.486 1.264-2.75 2.75-2.75s2.75 1.264 2.75 2.75v6.75z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M10 7.75H7v-1.5h3zM11.25 21v-7h1.5v7z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16 21.75H8v-1.5h8z" clipRule="evenodd"/></svg>
);

export default MailboxIcon;
