import React from 'react';
import type { IconProps } from '../types';

const ChartRadarFilledIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M12 .78.863 8.574 4.219 22h15.562l3.355-13.425zm5.537 8.515L13 6.448V3.921l6.735 4.715zM11 10.656l-1.904-.57L11 8.843zm-.686 1.882-1.508 1.938-.657-2.588zM12 13.63l1.621 2.084h-3.242zm1.686-1.09 2.325-.698-.767 2.701zM13 10.655V8.81l1.991 1.25zm-2-4.199L6.588 9.333l-2.323-.697L11 3.921zm-5.083 4.762 1.334 5.257-1.779 2.288-2.075-8.3zm2.907 6.494h6.353L16.956 20H7.045zm7.943-1.213 1.517-5.34 2.32-.697-2.076 8.301z"/></svg>
);

export default ChartRadarFilledIcon;
