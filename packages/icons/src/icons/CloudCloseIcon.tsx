import React from 'react';
import type { IconProps } from '../types';

const CloudCloseIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.23 9.323A7.75 7.75 0 0 1 12.5 4.25c3.782 0 6.923 2.71 7.606 6.291A4.74 4.74 0 0 1 23.25 15a4.75 4.75 0 0 1-4.75 4.75H6A5.25 5.25 0 0 1 .75 14.5c0-2.64 1.95-4.805 4.48-5.177M12.5 5.75a6.25 6.25 0 0 0-5.993 4.483l-.15.512-.534.025A3.74 3.74 0 0 0 2.25 14.5 3.75 3.75 0 0 0 6 18.25h12.5a3.243 3.243 0 0 0 .763-6.398l-.504-.122-.064-.514A6.25 6.25 0 0 0 12.5 5.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m14.47 15.53-5-5 1.06-1.06 5 5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m9.47 14.47 5-5 1.06 1.06-5 5z" clipRule="evenodd"/></svg>
);

export default CloudCloseIcon;
