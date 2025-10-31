import React from 'react';
import type { IconProps } from '../types';

const HeadphoneIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.5 12.75c-.986 0-1.75.764-1.75 1.75v4c0 .986.764 1.75 1.75 1.75s1.75-.764 1.75-1.75v-4c0-.986-.764-1.75-1.75-1.75M1.25 14.5a3.226 3.226 0 0 1 3.25-3.25 3.226 3.226 0 0 1 3.25 3.25v4a3.226 3.226 0 0 1-3.25 3.25 3.226 3.226 0 0 1-3.25-3.25zM19.5 12.75c-.986 0-1.75.764-1.75 1.75v4c0 .986.764 1.75 1.75 1.75s1.75-.764 1.75-1.75v-4c0-.986-.764-1.75-1.75-1.75m-3.25 1.75a3.226 3.226 0 0 1 3.25-3.25 3.226 3.226 0 0 1 3.25 3.25v4a3.226 3.226 0 0 1-3.25 3.25 3.226 3.226 0 0 1-3.25-3.25z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M12 3.55c-3.686 0-6.75 3.064-6.75 6.75V12a.75.75 0 1 1-1.5 0v-1.7c0-4.514 3.736-8.25 8.25-8.25s8.25 3.736 8.25 8.25V12a.75.75 0 1 1-1.5 0v-1.7c0-3.686-3.064-6.75-6.75-6.75" clip-rule="evenodd"/></svg>
);

export default HeadphoneIcon;
