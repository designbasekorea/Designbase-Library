import React from 'react';
import type { IconProps } from '../types';

const TagsFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M9.74 4H2v7.74l9.14 9.14 7.74-7.74zM6.35 9.44c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/><path fill="currentColor" d="m14.57 4.29-1.42 1.42 7.44 7.43-5.63 5.62 1.42 1.42 7.03-7.04z"/></svg>
);

export default TagsFilledIcon;
