import React from 'react';
import { useObserver, useObserverValue } from 'react-observing';

import { FieldWrapper } from './../field-wrapper/FieldWrapper';
import { Switch } from '../../primitives/Switch';
import { IProperty } from '../../../interfaces';


interface InputSwitchProps extends IProperty<boolean> { }
export const InputSwitch: React.FC<InputSwitchProps> = ({ ...props }) => {
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
        <div className="flex-1" />
        <Switch
          onChange={value => setValue(value)}
          hasWarning={valueHasWarning}
          disabled={editValueDisabled}
          hasError={valueHasError}
          checked={value}
          id={inputId}
        />
      </>)}
    </FieldWrapper>
  );
}
