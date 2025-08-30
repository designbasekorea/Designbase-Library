import React, { forwardRef } from 'react';
import clsx from 'clsx';
import './Checkbox.scss';

export interface CheckboxProps {
    isSelected?: boolean;
    defaultSelected?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    hasLabel?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
            size = 'md',
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

        const getIconColor = () => {
            if (isDisabled) {
                return 'var(--color-action-interactive-icon-disabled)';
            }
            if (selected || isIndeterminate) {
                return 'var(--color-action-interactive-icon-selected)';
            }
            return 'var(--color-action-interactive-icon)';
        };

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
                        <svg
                            className="designbase-checkbox__check-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 6L9 17L4 12"
                                stroke={getIconColor()}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                    {isIndeterminate && (
                        <svg
                            className="designbase-checkbox__indeterminate-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12H19"
                                stroke={getIconColor()}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>
                {children && <span className="designbase-checkbox__label">{children}</span>}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';
