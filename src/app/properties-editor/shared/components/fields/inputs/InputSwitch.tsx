import React from 'react';
import { useObserver, useObserverValue } from 'react-observing';

import { FieldWrapper } from './../field-wrapper/FieldWrapper';
import { Switch } from '../../toggle-swicth/Switch';
import { IProperty } from '../../../interfaces';
import { useConfigs } from '../../../contexts';

interface InputSwitchProps extends IProperty<boolean> { }
export const InputSwitch: React.FC<InputSwitchProps> = ({ ...props }) => {
    const { inputBorderError, inputBorderWarning, inputBorderDefault, textDefaultColor } = useConfigs();

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

    return (
        <FieldWrapper
            minWidth={60}
            id={id || ''}
            name={name || ''}
            information={information}
            nameHasError={nameHasError}
            nameHasWarning={nameHasWarning}
        >
            {inputId => (<>
                <div className="flex1" />
                <Switch
                    backgroundColor={'var(--main-background-bars)'}
                    onBlur={() => setFocusOnRender(false)}
                    onChange={value => setValue(value)}
                    borderWarning={inputBorderWarning}
                    borderError={inputBorderError}
                    hasWarning={valueHasWarning}
                    disabled={editValueDisabled}
                    border={inputBorderDefault}
                    autoFocus={focusOnRender}
                    color={textDefaultColor}
                    hasError={valueHasError}
                    checked={value}
                    id={inputId}
                />
            </>)}
        </FieldWrapper>
    );
}
