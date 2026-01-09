import React from 'react';
import type { IconProps } from '../types';

const GiftIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.25 21V6h1.5v15z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3.25 9.25h17.5v12.5H3.25zm1.5 1.5v9.5h14.5v-9.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M2.25 5.25h19.5v5.5H2.25zm1.5 1.5v2.5h16.5v-2.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M7.591 2.742C6.473 2.598 5.75 3.426 5.75 4c0 .258.14.554.485.81.345.257.86.44 1.465.44h2.97c-.137-.2-.294-.414-.467-.63C9.465 3.7 8.546 2.9 7.59 2.741M12 6l.67-.336v-.002l-.002-.003-.005-.01-.019-.036-.068-.128a12.716 12.716 0 0 0-1.204-1.805c-.785-.978-2.012-2.174-3.554-2.42l-.01-.002-.009-.002C5.922 1.006 4.25 2.376 4.25 4c0 .842.46 1.546 1.09 2.014s1.465.736 2.36.736h5.514l-.543-1.086z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16.2 1.256c1.878-.25 3.55 1.12 3.55 2.744 0 .842-.46 1.546-1.09 2.014s-1.465.736-2.36.736h-5.514l.543-1.086L12 6l-.67-.336v-.002l.002-.003.005-.01.019-.036q.024-.046.068-.128a12.716 12.716 0 0 1 1.204-1.805c.785-.978 2.012-2.174 3.553-2.42l.01-.002zM13.33 5.25h2.97c.605 0 1.12-.183 1.465-.44.346-.256.485-.552.485-.81 0-.574-.723-1.402-1.841-1.258-.955.157-1.874.959-2.612 1.877-.173.217-.33.43-.468.63" clipRule="evenodd"/></svg>
);

export default GiftIcon;
