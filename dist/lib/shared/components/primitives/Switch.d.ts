import { default as React } from 'react';

interface SwitchProps {
    checked: boolean;
    hasError?: boolean;
    hasWarning?: boolean;
    id?: string | undefined;
    disabled?: boolean | undefined;
    autoFocus?: boolean | undefined;
    onChange(value: boolean): void;
    onBlur?(e: React.FocusEvent<HTMLButtonElement>): void;
}
export declare const Switch: React.FC<SwitchProps>;
export {};
