import React, { useState, useCallback } from 'react';

import { FieldWrapper } from './../field-wrapper/FieldWrapper';
import { IProperties } from '../../../interfaces';
import { Switch } from '../../toggle-swicth/Switch';

interface InputSwitchProps extends IProperties<boolean> {
    onChange?(data: IProperties<boolean>): void;
}
export const InputSwitch: React.FC<InputSwitchProps> = ({ onChange, ...props }) => {
    const [value, setValue] = useState(props.value);

    const handleOnChange = useCallback((value: boolean) => {
        if (props.useOnChange && onChange) {
            onChange({ ...props, value });
            setValue(value);
        } else {
            setValue(value);
        }
    }, [onChange, props]);

    const handleOnBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        if (props.value !== value && onChange) {
            onChange({ ...props, value });
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
            {inputId => (<>
                <div className="flex1"/>
                <Switch
                    id={inputId}
                    checked={value}
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    hasError={props.valueHasError}
                    border={'var(--input-border)'}
                    autoFocus={props.focusOnRender}
                    hasWarning={props.valueHasWarning}
                    disabled={props.editValueDisabled}
                    borderError={'var(--input-border-error)'}
                    borderWarning={'var(--input-border-warning)'}
                    backgroundColor={'var(--main-background-bars)'}
                />
            </>)}
        </FieldWrapper>
    );
}
