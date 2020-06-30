import React from 'react';

import './DefaultSwitch.css';

export const DefaultSwitch = ({ id, checked = false, autoFocus, onChange, hasError = false, disabled = false }: { id?: any, checked: boolean, autoFocus: boolean | undefined, onChange(value: boolean): void, hasError: boolean, disabled: boolean | undefined }) => {
    return (
        <label className="switch">
            <input id={id} type="checkbox" autoFocus={autoFocus} onChange={e => onChange(!checked)} disabled={disabled} checked={checked} />
            <span
                className="slider round"
                style={{
                    backgroundColor: 'var(--main-background-bars)',
                    border: hasError ? 'var(--input-border-error)' : 'var(--input-border)',
                }}
            />
        </label>
    );
}
