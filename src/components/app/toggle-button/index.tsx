import { Button } from '@nextui-org/react'
import { useContext, useMemo, useState } from 'react';
import { ContextValue, ItemProps, RootProps } from './toggle-button.interface';
import { ToggleContext } from './toggle-button.context';
import clsx from 'clsx';

export function ToggleButton({ children, defaultValue, onChange }: RootProps) {
    const [value, setValue] = useState(defaultValue);
    const valueProvider: ContextValue = { value, setValue, onChange };

    return (
        <ToggleContext.Provider value={valueProvider}>
            <div className="p-1 inline-block rounded-lg border-1 border-solid bg-white">{children}</div>
        </ToggleContext.Provider>
    );
}

export function ToggleButtonItem({ children, value }: ItemProps) {
    const { value: activeValue, setValue, onChange } = useContext(ToggleContext) as ContextValue;
    const isEnabled = useMemo(() => value === activeValue, [value, activeValue]);

    return (
        <Button
            aria-pressed={isEnabled ? "true" : "false"}
            size='sm'
            color='primary'
            className={clsx(
                "",
                isEnabled ? "font-semibold" : "text-colors-text-secondary bg-white",
            )}
            onClick={() => {
                setValue(value);
                onChange?.(value);
            }}
        >
            {children}
        </Button>
    );
}