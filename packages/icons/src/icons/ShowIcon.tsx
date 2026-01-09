import React from 'react';
import type { IconProps } from '../types';

const ShowIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.25 12c0-2.055 1.695-3.75 3.75-3.75s3.75 1.694 3.75 3.75-1.694 3.75-3.75 3.75S8.25 14.056 8.25 12M12 9.75A2.27 2.27 0 0 0 9.75 12 2.27 2.27 0 0 0 12 14.25 2.27 2.27 0 0 0 14.25 12 2.27 2.27 0 0 0 12 9.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M2.833 12c.791 1.543 3.297 5.25 9.167 5.25 5.872 0 8.374-3.704 9.167-5.25-.791-1.543-3.297-5.25-9.167-5.25-5.871 0-8.374 3.704-9.167 5.25m-1.515-.312C2.006 10.183 4.823 5.25 12 5.25s9.997 4.938 10.682 6.438l.143.312-.143.312C21.994 13.817 19.177 18.75 12 18.75s-9.997-4.938-10.682-6.438L1.175 12z" clipRule="evenodd"/></svg>
);

export default ShowIcon;
