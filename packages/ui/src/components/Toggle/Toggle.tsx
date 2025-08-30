import React, { forwardRef } from 'react';
import clsx from 'clsx';
import './Toggle.scss';

export interface ToggleProps {
    isSelected?: boolean;
    defaultSelected?: boolean;
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

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
    (
        {
            isSelected,
            defaultSelected,
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

        const handleClick = () => {
            if (!isDisabled && !isReadOnly) {
                const newValue = !selected;
                setSelected(newValue);
                onChange?.(newValue);
            }
        };

        const classes = clsx(
            'designbase-toggle',
            `designbase-toggle--${size}`,
            {
                'designbase-toggle--selected': selected,
                'designbase-toggle--disabled': isDisabled,
                'designbase-toggle--readonly': isReadOnly,
                'designbase-toggle--no-label': !hasLabel,
            },
            className
        );

        return (
            <button
                {...props}
                ref={forwardedRef}
                name={name}
                value={value}
                className={classes}
                onClick={handleClick}
                disabled={isDisabled}
                type="button"
            >
                <div className="designbase-toggle__track">
                    <div className="designbase-toggle__thumb" />
                </div>
                {children && <span className="designbase-toggle__label">{children}</span>}
            </button>
        );
    }
);

Toggle.displayName = 'Toggle';
