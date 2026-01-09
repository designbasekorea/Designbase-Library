import React from 'react';
import type { IconProps } from '../types';

const HistoryIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.25 14.25H8v1.5H3.75V21h-1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 3.75A8.25 8.25 0 0 0 3.75 12h-1.5A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75a9.75 9.75 0 0 1-8.628-5.205l-.094-.107-.325-.361-.01-.011-.462-.516a3 3 0 0 1-.098-.124c-.007-.01-.03-.044-.054-.09l1.342-.671a.643.643 0 0 0-.068-.11l-.009-.012.021.025q.037.043.107.12c.091.103.212.237.335.373l.012.014.449.502.095.118a1 1 0 0 1 .051.084l.002.004A8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.25 7h1.5v4.69l2.78 2.78-1.06 1.06-3.22-3.22z" clipRule="evenodd"/></svg>
);

export default HistoryIcon;
