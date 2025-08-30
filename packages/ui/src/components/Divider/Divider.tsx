import React from 'react';
import './Divider.scss';

export interface DividerProps {
    /** 구분선의 방향 */
    orientation?: 'horizontal' | 'vertical';
    /** 구분선의 두께 (px) */
    thickness?: number;
    /** 구분선의 색상 */
    color?: string;
    /** 구분선의 길이 (px) - vertical일 때만 적용 */
    length?: number;
    /** 구분선의 스타일 */
    variant?: 'solid' | 'dashed' | 'dotted';
    /** 좌우 마진 (horizontal) 또는 상하 마진 (vertical) */
    margin?: number | string;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
}

export const Divider: React.FC<DividerProps> = ({
    orientation = 'horizontal',
    thickness = 1,
    color,
    length,
    variant = 'solid',
    margin,
    className = '',
    style,
    ...props
}) => {
    const baseClass = 'designbase-divider';

    const dividerClasses = [
        baseClass,
        `${baseClass}--${orientation}`,
        `${baseClass}--${variant}`,
        className
    ].filter(Boolean).join(' ');

    const dividerStyle: React.CSSProperties = {
        ...style,
        borderWidth: orientation === 'horizontal' ? `${thickness}px 0 0 0` : `0 0 0 ${thickness}px`,
        borderStyle: variant,
        ...(color && {
            borderColor: color
        }),
        ...(orientation === 'vertical' && length && {
            height: `${length}px`
        }),
        ...(margin && {
            margin: typeof margin === 'number' ? `${margin}px` : margin
        })
    };

    return (
        <div
            className={dividerClasses}
            style={dividerStyle}
            role="separator"
            aria-orientation={orientation}
            {...props}
        />
    );
};

export default Divider;
