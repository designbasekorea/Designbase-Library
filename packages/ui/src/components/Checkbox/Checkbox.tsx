import React, { forwardRef } from 'react';
import clsx from 'clsx';
import './Checkbox.scss';

// DoneIcon이 있으면 사용하고, 없으면 기본 SVG 사용
let DoneIcon: React.FC<{ size?: number }> | null = null;
let MinusIcon: React.FC<{ size?: number }> | null = null;

try {
    const icons = require('@designbasekorea/icons');
    DoneIcon = icons.DoneIcon || null;
    MinusIcon = icons.MinusIcon || null;
} catch (e) {
    // 아이콘 패키지가 없으면 기본 SVG 사용
}

export interface CheckboxProps {
    isSelected?: boolean;
    defaultSelected?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    hasLabel?: boolean;
    size?: 's' | 'm' | 'l';
    children?: React.ReactNode;
    className?: string;
    name?: string;
    value?: string;
    onChange?: (isSelected: boolean) => void;
    [key: string]: any;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            isSelected,
            defaultSelected,
            isIndeterminate = false,
            isDisabled = false,
            isReadOnly = false,
            isRequired = false,
            hasLabel = true,
            size = 'm',
            children,
            className,
            name,
            value,
            onChange,
            ...props
        },
        forwardedRef
    ) => {
        const [selected, setSelected] = React.useState(isSelected ?? defaultSelected ?? false);

        React.useEffect(() => {
            if (isSelected !== undefined) {
                setSelected(isSelected);
            }
        }, [isSelected]);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!isDisabled && !isReadOnly) {
                const newValue = event.target.checked;
                setSelected(newValue);
                onChange?.(newValue);
            }
        };

        const classes = clsx(
            'designbase-checkbox',
            `designbase-checkbox--${size}`,
            {
                'designbase-checkbox--selected': selected,
                'designbase-checkbox--indeterminate': isIndeterminate,
                'designbase-checkbox--disabled': isDisabled,
                'designbase-checkbox--readonly': isReadOnly,
                'designbase-checkbox--no-label': !hasLabel,
            },
            className
        );

        return (
            <label className={classes}>
                <input
                    {...props}
                    ref={forwardedRef}
                    name={name}
                    value={value}
                    type="checkbox"
                    checked={selected}
                    onChange={handleChange}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    required={isRequired}
                    className="designbase-checkbox__input"
                />
                <div className="designbase-checkbox__visual">
                    {selected && !isIndeterminate && (
                        <div className="designbase-checkbox__check-icon">
                            {DoneIcon ? (
                                <DoneIcon size={16} />
                            ) : (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                >
                                    <path
                                        d="M20 6L9 17L4 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </div>
                    )}
                    {isIndeterminate && (
                        <div className="designbase-checkbox__indeterminate-icon">
                            {MinusIcon ? (
                                <MinusIcon size={16} />
                            ) : (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                >
                                    <path
                                        d="M5 12H19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </div>
                    )}
                </div>
                {children && <span className="designbase-checkbox__label">{children}</span>}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';
