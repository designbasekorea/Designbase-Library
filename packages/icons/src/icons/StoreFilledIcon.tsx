import React from 'react';
import type { IconProps } from '../types';

const StoreFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M19 2H5C3.346 2 2 3.346 2 5v2.6c0 .966.379 1.82 1 2.44V22h18V10.116c.634-.603 1-1.467 1-2.516V5c0-1.654-1.346-3-3-3M5 20v-9.006c.808.086 1.645-.174 2.323-.749q.099-.084.19-.174a3.4 3.4 0 0 0 1.822.915c.858.144 1.764-.127 2.488-.741q.099-.084.19-.174a3.4 3.4 0 0 0 1.822.915c.857.144 1.763-.127 2.487-.741q.073-.062.142-.126.072.072.149.139a3.1 3.1 0 0 0 2.053.766c.11 0 .221-.013.333-.024v9z"/><path fill="currentColor" d="M14 12c-1.654 0-3 1.346-3 3v3h6v-3c0-1.654-1.346-3-3-3m1 4h-2v-1a1 1 0 0 1 2 0z"/></svg>
);

export default StoreFilledIcon;
