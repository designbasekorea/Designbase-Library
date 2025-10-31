import React, { forwardRef } from 'react';
import clsx from 'clsx';
import './Radio.scss';

export interface RadioProps {
    isSelected?: boolean;
    defaultSelected?: boolean;
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

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    (
        {
            isSelected,
            defaultSelected,
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
            'designbase-radio',
            `designbase-radio--${size}`,
            {
                'designbase-radio--selected': selected,
                'designbase-radio--disabled': isDisabled,
                'designbase-radio--readonly': isReadOnly,
                'designbase-radio--no-label': !hasLabel,
            },
            className
        );

        const getIconColor = () => {
            if (isDisabled) {
                return 'var(--db-color-disabled)';
            }
            if (selected) {
                return 'var(--db-color-primary)';
            }
            return 'var(--db-color-primary)';
        };

        return (
            <label className={classes}>
                <input
                    {...props}
                    ref={forwardedRef}
                    name={name}
                    value={value}
                    type="radio"
                    checked={selected}
                    onChange={handleChange}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    required={isRequired}
                    className="designbase-radio__input"
                />
                <div className="designbase-radio__visual">
                    {selected && (
                        <div
                            className="designbase-radio__dot"
                            style={{ backgroundColor: getIconColor() }}
                        />
                    )}
                </div>
                {children && <span className="designbase-radio__label">{children}</span>}
            </label>
        );
    }
);

Radio.displayName = 'Radio';
