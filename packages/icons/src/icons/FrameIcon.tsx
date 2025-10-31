import React from 'react';
import type { IconProps } from '../types';

const FrameIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.227 6.25H21c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 21 21.75H3A1.75 1.75 0 0 1 1.25 20V8c0-.966.784-1.75 1.75-1.75h2.773L12 2.099zM13.04 18.269h-.001l-2.13 1.981H21a.25.25 0 0 0 .25-.25v-3.361l-3.247-2.996zM2.873 20.214q.056.035.127.036h5.706l2.72-2.528-2.927-2.703zM3 7.75a.25.25 0 0 0-.25.25v10.287L8.5 12.98l4.027 3.716 5.47-5.098 3.253 3V8a.25.25 0 0 0-.25-.25zm5.477-1.5h7.046L12 3.901z"/></svg>
);

export default FrameIcon;
