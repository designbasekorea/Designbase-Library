import React from 'react';
import type { IconProps } from '../types';

const ExchangeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.53 2.53 14.06 6l3.47 3.47-1.06 1.06L11.94 6l4.53-4.53z"/><path fill="currentColor" d="M21.25 7.96c0-.646-.548-1.21-1.273-1.21H13v-1.5h6.977c1.51 0 2.773 1.192 2.773 2.71V11h-1.5zM12.06 18l-4.53 4.53-1.06-1.06L9.94 18l-3.47-3.47 1.06-1.06z"/><path fill="currentColor" d="M1.25 16.04V13h1.5v3.04c0 .646.548 1.21 1.272 1.21H11v1.5H4.022c-1.509 0-2.772-1.192-2.772-2.71M8.25 6a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M17.963 13.25a.75.75 0 0 1 .723.541l1.307 4.501 1.286-4.498.025-.072a.75.75 0 0 1 1.434.409l-.017.075-2 7a.75.75 0 0 1-1.44.003l-1.302-4.48-1.257 4.474a.75.75 0 0 1-1.443.003l-2-7-.017-.075a.75.75 0 0 1 1.434-.41l.025.073 1.272 4.455 1.251-4.452.043-.115a.75.75 0 0 1 .676-.432"/><path fill="currentColor" d="M23 15.25a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1 0-1.5z"/></svg>
);

export default ExchangeIcon;
