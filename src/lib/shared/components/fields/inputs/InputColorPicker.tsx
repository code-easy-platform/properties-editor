import React from 'react';
import { useObserver, useObserverValue } from 'react-observing';
import { v4 as uuid } from 'uuid';

import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperty } from '../../../interfaces';
import { useConfigs } from '../../../contexts';

interface InputColorPickerProps extends IProperty<string> { }
export const InputColorPicker: React.FC<InputColorPickerProps> = ({ ...props }) => {
  const { inputBorderError, inputBorderWarning, inputBorderDefault, inputTextError, inputTextWarning, inputTextDefault } = useConfigs();

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
      name={name || ''}
      id={id || uuid()}
      information={information}
      nameHasError={nameHasError}
      nameHasWarning={nameHasWarning}
    >
      {inputId => (
        <input
          onChange={e => setValue(e.currentTarget.value)}
          className="bg-background p-1 disabled:opacity-50"
          disabled={editValueDisabled}
          autoComplete='off'
          value={value}
          type="color"
          id={inputId}
          style={{
            textDecoration: valueHasError ? inputTextError : valueHasWarning ? inputTextWarning : inputTextDefault,
            border: valueHasError ? inputBorderError : valueHasWarning ? inputBorderWarning : inputBorderDefault,
            marginLeft: 'auto',
          }}
        />
      )}
    </FieldWrapper>
  );
}
