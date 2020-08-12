import React, { useState, useCallback } from 'react';

import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperties } from '../../../interfaces';

interface InputSelectionProps extends IProperties<string> {
    onChange?(data: IProperties<string>): void;
}
export const InputSelection: React.FC<InputSelectionProps> = ({ onChange, ...props }) => {
    const [value, setValue] = useState(props.value);

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.useOnChange && onChange) {
            onChange({ ...props, value: e.currentTarget.value });
            setValue(e.currentTarget.value);
        } else {
            setValue(e.currentTarget.value);
        }
    }, [onChange, props]);

    const handleOnBlur = useCallback((e: React.FocusEvent<HTMLSelectElement>) => {
        if (props.value !== value && onChange) {
            onChange({ ...props, value });
        }
    }, [onChange, props, value]);

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
                    onBlur={handleOnBlur}
                    value={value}
                    id={inputId}
                    style={{
                        textDecoration: props.valueHasError ? `var(--text-underline-error)` : props.valueHasWarning ? `var(--text-underline-warning)` : undefined,
                        border: props.valueHasError ? 'var(--input-border-error)' : props.valueHasWarning ? 'var(--input-border-warning)' : 'var(--input-border)',
                        width: '100%',
                    }}
                >
                    <option value={undefined}>Selecione</option>
                    {props.suggestions?.map((item, index) => {
                        return (
                            <option
                                title={item.description}
                                disabled={item.disabled}
                                children={item.label}
                                value={item.value}
                                key={index}
                            />
                        );
                    })}
                </select>
            )}
        </FieldWrapper>
    );
}
