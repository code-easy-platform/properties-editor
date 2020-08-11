import React, { useState, useCallback } from 'react';

import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperties } from '../../../interfaces';

interface InputSimpleNumberProps extends IProperties<number> {
    onChange?(data: IProperties): void;
}
export const InputSimpleNumber: React.FC<InputSimpleNumberProps> = (props) => {
    const { onChange } = props;

    const [value, setValue] = useState(props.value);

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.useOnChange && onChange) {
            onChange({ ...props, value: Number(e.currentTarget.value) });
            setValue(Number(e.currentTarget.value));
        } else {
            setValue(Number(e.currentTarget.value));
        }
    }, [onChange, props]);

    const handleOnBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
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
                <input
                    className={"full-width background-bars"}
                    disabled={props.editValueDisabled}
                    autoFocus={props.focusOnRender}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    autoComplete={'off'}
                    type={"number"}
                    value={value}
                    id={inputId}
                    style={{
                        textDecoration: props.valueHasError ? `var(--text-underline-error)` : props.valueHasWarning ? `var(--text-underline-warning)` : undefined,
                        border: props.valueHasError ? 'var(--input-border-error)' : props.valueHasWarning ? 'var(--input-border-warning)' : 'var(--input-border)',
                    }}
                />
            )}
        </FieldWrapper>
    );
}
