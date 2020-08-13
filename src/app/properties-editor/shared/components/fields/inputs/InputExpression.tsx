import React, { useState, useCallback } from 'react';

import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperties, ISuggestion } from '../../../interfaces';
import { ExpressionInput } from '../../expression-input/ExpressionInput';

interface SimpleStringProps extends IProperties<string> {
    onChange?(data: IProperties<string>): void;
}
export const InputExpression: React.FC<SimpleStringProps> = ({ onChange, ...props }) => {
    const [value, setValue] = useState(props.value);

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.useOnChange && onChange) {
            onChange({ ...props, value: e.currentTarget.value });
            setValue(e.currentTarget.value);
        } else {
            setValue(e.currentTarget.value);
        }
    }, [onChange, props]);

    const handleOnBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        if (props.value !== value && onChange) {
            onChange({ ...props, value });
        }
    }, [onChange, props, value]);

    const handleOnSelect = useCallback((option: ISuggestion<string>) => {
        console.log(option)
        if (option.value !== value && onChange) {
            onChange({ ...props, value: option.value });
            setValue(option.value);
        } else if (option.value !== value) {
            setValue(option.value);
        }
    }, [onChange, props, value]);

    return (
        <FieldWrapper
            minWidth={60}
            id={props.id || ''}
            name={props.name || ''}
            information={props.information}
            nameHasError={props.nameHasError}
            nameHasWarning={props.nameHasWarning}
        >
            {inputId => (
                <ExpressionInput
                    onPickerClick={props.onPickerValueClick}
                    className="full-width background-bars"
                    disabled={props.editValueDisabled}
                    onSelectSuggest={handleOnSelect}
                    autoFocus={props.focusOnRender}
                    suggestions={props.suggestions}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
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
