import React from 'react';
import type { IconProps } from '../types';

const BookFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M6.3 1.9c-.806 0-1.649.356-2.268.955C3.366 3.41 3 4.24 3 5.2v13.5c0 .017.005.033.005.05S3 18.783 3 18.8h.011c.028.776.37 1.576.945 2.169.555.666 1.385 1.03 2.344 1.03H21V1.9zM8 7h8v2H8zm11 13H6.3c-.255 0-.604-.057-.819-.325l-.075-.083a1.4 1.4 0 0 1-.4-.842c.017-.282.17-.613.4-.842l.075-.083c.215-.27.564-.325.819-.325H19z"/></svg>
);

export default BookFilledIcon;
