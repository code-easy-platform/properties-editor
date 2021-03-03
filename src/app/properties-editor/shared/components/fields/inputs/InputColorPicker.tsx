import React, { useEffect, useRef } from 'react';
import { useObserver, useObserverValue } from 'react-observing';
import { Utils } from 'code-easy-components';

import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperty } from '../../../interfaces';
import { useConfigs } from '../../../contexts';

interface InputColorPickerProps extends IProperty<string> { }
export const InputColorPicker: React.FC<InputColorPickerProps> = ({ ...props }) => {
    const { inputBorderError, inputBorderWarning, inputBorderDefault, inputTextError, inputTextWarning, inputTextDefault } = useConfigs();

    const [focusOnRender, setFocusOnRender] = useObserver(props.focusOnRender);
    const editValueDisabled = useObserverValue(props.editValueDisabled);
    const valueHasWarning = useObserverValue(props.valueHasWarning);
    const nameHasWarning = useObserverValue(props.nameHasWarning);
    const valueHasError = useObserverValue(props.valueHasError);
    const nameHasError = useObserverValue(props.nameHasError);
    const information = useObserverValue(props.information);
    const [value, setValue] = useObserver(props.value);
    const name = useObserverValue(props.name);
    const id = useObserverValue(props.id);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current && focusOnRender) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [focusOnRender]);

    return (
        <FieldWrapper
            minWidth={60}
            name={name || ''}
            information={information}
            id={id || Utils.getUUID()}
            nameHasError={nameHasError}
            nameHasWarning={nameHasWarning}
        >
            {inputId => (
                <input
                    onChange={e => { setValue(e.currentTarget.value); console.log(e.currentTarget.value) }}
                    onBlur={() => setFocusOnRender(false)}
                    disabled={editValueDisabled}
                    autoComplete={'off'}
                    ref={inputRef}
                    value={value}
                    type="color"
                    id={inputId}
                    style={{
                        textDecoration: valueHasError ? inputTextError : valueHasWarning ? inputTextWarning : inputTextDefault,
                        border: valueHasError ? inputBorderError : valueHasWarning ? inputBorderWarning : inputBorderDefault,
                        padding: 'var(--size-xs)',
                        marginLeft: 'auto',
                    }}
                />
            )}
        </FieldWrapper>
    );
}
