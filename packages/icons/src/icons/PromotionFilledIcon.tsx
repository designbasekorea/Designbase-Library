import React from 'react';
import type { IconProps } from '../types';

const PromotionFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M20 4h-2V2h-2v2H8V2H6v2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4v-8h16v1h2V6c0-1.1-.9-2-2-2M4 10V6h2v2h2V6h8v2h2V6h2v4z"/><path fill="currentColor" d="m21.14 15.31-2.27-.32-.97-2.02c-.17-.35-.52-.57-.9-.57s-.74.22-.9.57l-.97 2.02-2.27.32c-.38.05-.69.31-.81.67s-.03.76.24 1.02l1.63 1.63-.41 2.29c-.07.38.08.76.39.98.31.23.72.26 1.05.08l2.04-1.06 2.04 1.06c.14.08.3.11.46.11.21 0 .42-.07.59-.19.31-.23.46-.61.39-.98l-.41-2.29L21.69 17a.99.99 0 0 0 .24-1.02.99.99 0 0 0-.81-.67z"/></svg>
);

export default PromotionFilledIcon;
