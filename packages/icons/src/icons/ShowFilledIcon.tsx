import React from 'react';
import type { IconProps } from '../types';

const ShowFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path fill="currentColor" d="M22.909 11.584C22.204 10.039 19.331 5 12 5S1.797 10.04 1.091 11.584L.901 12l.19.416C1.797 13.96 4.67 19 12.001 19s10.203-5.039 10.909-6.584L23.1 12zM12 17c-5.577 0-8.044-3.421-8.884-5C3.957 10.421 6.427 7 12 7s8.044 3.421 8.885 5c-.842 1.579-3.311 5-8.885 5"/></svg>
);

export default ShowFilledIcon;
