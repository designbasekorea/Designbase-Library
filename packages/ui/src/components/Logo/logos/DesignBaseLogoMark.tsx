/**
 * DesignBase 심볼 마크 (텍스트 없는 로고)
 * 
 * 사용법:
 * <DesignBaseLogoMark size={32} color="#3B82F6" />
 */

import React from 'react';

export interface DesignBaseLogoMarkProps {
    /** 로고 크기 (정사각형) */
    size?: number;
    /** 로고 색상 */
    color?: string;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const DesignBaseLogoMark: React.FC<DesignBaseLogoMarkProps> = ({
    size = 38,
    color = 'currentColor',
    className,
}) => {
    // 원본 비율 유지: 95:100
    const aspectRatio = 95 / 100;
    const width = size * aspectRatio;
    const height = size;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 95 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="DesignBase Mark"
        >
            <path
                fill={color}
                d="M45,0H0V8l10,2V90L0,92v8H45A50,50,0,0,0,45,0ZM43.12,90H20V10H38.33a15,15,0,0,1,0,30H30.11V50h13a20,20,0,0,1,0,40ZM71.4,80A30,30,0,0,0,55.83,42.83,24.93,24.93,0,0,0,60.27,13,40,40,0,0,1,71.4,80Z"
            />
        </svg>
    );
};

DesignBaseLogoMark.displayName = 'DesignBaseLogoMark';

export default DesignBaseLogoMark;

