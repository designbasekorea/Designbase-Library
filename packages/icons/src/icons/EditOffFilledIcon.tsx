import React from 'react';
import type { IconProps } from '../types';

const EditOffFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="m16.868 12.673 3.987-4.002A3.93 3.93 0 0 0 22 5.908a3.93 3.93 0 0 0-1.146-2.764 3.89 3.89 0 0 0-2.763-1.145 3.93 3.93 0 0 0-2.762 1.144l-4.002 3.988zm2.574-8.113c.354.354.558.846.558 1.349s-.204.994-.56 1.35l-1.228 1.232-2.703-2.703 1.234-1.229c.713-.716 1.978-.716 2.698 0zM3.707 2.293 2.293 3.707l6.226 6.226L2 16.431V22h5.569l6.499-6.518 6.225 6.225 1.414-1.414z"/></svg>
);

export default EditOffFilledIcon;
