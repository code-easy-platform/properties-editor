import React, { useState, useCallback } from 'react';

import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperties } from '../../../interfaces';

interface InputSelectionYesNoProps extends IProperties<boolean> {
    onChange?(data: IProperties<boolean>): void;
}
export const InputSelectionYesNo: React.FC<InputSelectionYesNoProps> = ({ onChange, ...props }) => {
    const [value, setValue] = useState(props.value);

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange({ ...props, value: Boolean(e.currentTarget.value) });
            setValue(Boolean(e.currentTarget.value));
        }
    }, [onChange, props]);

    return (
        <FieldWrapper
            minWidth={40}
            id={props.id || ''}
            name={props.name || ''}
            information={props.information}
            nameHasError={props.nameHasError}
            nameHasWarning={props.nameHasWarning}
        >
            {inputId => (
                <select
                    disabled={props.editValueDisabled}
                    autoFocus={props.focusOnRender}
                    className={"background-bars"}
                    onChange={handleOnChange}
                    value={String(value)}
                    id={inputId}
                    style={{
                        textDecoration: props.valueHasError ? `var(--text-underline-error)` : props.valueHasWarning ? `var(--text-underline-warning)` : undefined,
                        border: props.valueHasError ? 'var(--input-border-error)' : props.valueHasWarning ? 'var(--input-border-warning)' : 'var(--input-border)',
                        width: '100%',
                    }}
                >
                    <option children={"Yes"} value={"true"} />
                    <option children={"No"} value={"false"} />
                </select>
            )}
        </FieldWrapper>
    );
}
