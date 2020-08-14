import React, { useState, useCallback } from 'react';

import { FieldWrapper } from './../field-wrapper/FieldWrapper';
import { Switch } from '../../toggle-swicth/Switch';
import { IProperties } from '../../../interfaces';

interface InputSwitchProps extends IProperties<boolean> {
    onChange?(data: IProperties<boolean>): void;
}
export const InputSwitch: React.FC<InputSwitchProps> = ({ onChange, ...props }) => {
    const [value, setValue] = useState(props.value);

    const handleOnChange = useCallback((value: boolean) => {
        if (onChange) {
            onChange({ ...props, value });
        }
        setValue(value);
    }, [onChange, props]);

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
                <div className="flex1" />
                <Switch
                    id={inputId}
                    checked={value}
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
