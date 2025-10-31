import React from 'react';
import type { IconProps } from '../types';

const FaceIdFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.999 2H16v2h2.999C19.551 4 20 4.449 20 5.001V8h2V5.001A3.005 3.005 0 0 0 18.999 2M20 18.999c0 .552-.449 1.001-1.001 1.001H16v2h2.999A3.005 3.005 0 0 0 22 18.999V16h-2zM4 5.001C4 4.449 4.449 4 5.001 4H8V2H5.001A3.004 3.004 0 0 0 2 5.001V8h2zM4 18.999V16H2v2.999A3.005 3.005 0 0 0 5.001 22H8v-2H5.001A1 1 0 0 1 4 18.999M7 8v2a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0M16 11a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1M11 13h.5c.841 0 1.5-.791 1.5-1.8V8a1 1 0 1 0-2 0l-.007 3A1 1 0 0 0 11 13M16.347 14.409a1 1 0 0 0-1.397-.216c-.689.505-1.792.807-2.949.807s-2.259-.302-2.949-.807a1 1 0 1 0-1.181 1.613c1.035.759 2.541 1.193 4.131 1.193s3.096-.435 4.131-1.193a1 1 0 0 0 .216-1.397z"/></svg>
);

export default FaceIdFilledIcon;
