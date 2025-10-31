import React from 'react';
import type { IconProps } from '../types';

const MailStarIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m1.665 8.67.67-1.34L12 12.161l9.665-4.833.67 1.342L12 13.839z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M4 5.75c-.686 0-1.25.564-1.25 1.25v10c0 .686.564 1.25 1.25 1.25h8v1.5H4A2.756 2.756 0 0 1 1.25 17V7A2.756 2.756 0 0 1 4 4.25h16A2.756 2.756 0 0 1 22.75 7v6h-1.5V7c0-.686-.564-1.25-1.25-1.25z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M18 12.65a.75.75 0 0 1 .676.425l1.027 2.14 2.403.343a.75.75 0 0 1 .424 1.272l-1.723 1.724.431 2.414a.75.75 0 0 1-1.084.797L18 20.645l-2.154 1.12a.75.75 0 0 1-1.084-.797l.43-2.415-1.722-1.723a.75.75 0 0 1 .424-1.272l2.403-.344 1.027-2.139A.75.75 0 0 1 18 12.65m0 2.483-.524 1.092a.75.75 0 0 1-.57.417l-1.315.188.94.94a.75.75 0 0 1 .207.662l-.232 1.3 1.148-.597a.75.75 0 0 1 .692 0l1.148.596-.232-1.3a.75.75 0 0 1 .208-.661l.939-.94-1.315-.187a.75.75 0 0 1-.57-.418z" clip-rule="evenodd"/></svg>
);

export default MailStarIcon;
