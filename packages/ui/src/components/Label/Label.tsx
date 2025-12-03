import React from 'react';
import './Label.scss';

export interface LabelProps {
    /** 라벨 텍스트 */
    children: React.ReactNode;
    /** input/textarea와 연결할 htmlFor */
    htmlFor?: string;
    /** 라벨 요소 id */
    id?: string;
    /** 필수 필드 표시 */
    required?: boolean;
    /** 라벨 크기 */
    size?: 's' | 'm' | 'l';
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 클릭 이벤트 */
    onClick?: () => void;
}

export const Label: React.FC<LabelProps> = ({
    children,
    htmlFor,
    id,
    required = false,
    size = 's',
    disabled = false,
    error = false,
    className,
    onClick,
}) => {
    const classes = [
        'designbase-label',
        `designbase-label--${size}`,
        disabled && 'designbase-label--disabled',
        error && 'designbase-label--error',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <label
            htmlFor={htmlFor}
            id={id}
            className={classes}
            onClick={onClick}
        >
            {children}
            {required && <span className="designbase-label__required">*</span>}
        </label>
    );
};

Label.displayName = 'Label';

export default Label;

