import React from 'react';
import type { IconProps } from '../types';

const CompassIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.25 12A9.713 9.713 0 0 1 12 2.25 9.713 9.713 0 0 1 21.75 12 9.713 9.713 0 0 1 12 21.75 9.713 9.713 0 0 1 2.25 12M12 3.75A8.213 8.213 0 0 0 3.75 12 8.213 8.213 0 0 0 12 20.25 8.213 8.213 0 0 0 20.25 12 8.213 8.213 0 0 0 12 3.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16.53 7.47c.201.2.271.498.181.767l-2 6a.75.75 0 0 1-.474.474l-6 2a.75.75 0 0 1-.949-.948l2-6a.75.75 0 0 1 .475-.475l6-2a.75.75 0 0 1 .767.182m-5.937 3.123-1.407 4.221 4.221-1.407 1.407-4.221z" clipRule="evenodd"/></svg>
);

export default CompassIcon;
