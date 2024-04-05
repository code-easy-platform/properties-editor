import React from 'react';
import { useObserver, useObserverValue } from 'react-observing';

import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperty } from '../../../interfaces';
import { useConfigs } from '../../../contexts';


interface InputSelectionYesNoProps extends IProperty<boolean> { }
export const InputSelectionYesNo: React.FC<InputSelectionYesNoProps> = ({ ...props }) => {
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
      id={id || ''}
      name={name || ''}
      information={information}
      nameHasError={nameHasError}
      nameHasWarning={nameHasWarning}
      onDoubleClick={() => setValue(oldValue => !oldValue)}
    >
      {inputId => (
        <select
          onChange={e => setValue(e.currentTarget.value === 'true')}
          className="bg-background py-0.5"
          disabled={editValueDisabled}
          value={String(value)}
          id={inputId}
          style={{
            textDecoration: valueHasError ? inputTextError : valueHasWarning ? inputTextWarning : inputTextDefault,
            border: valueHasError ? inputBorderError : valueHasWarning ? inputBorderWarning : inputBorderDefault,
            width: '100%',
          }}
        >
          <option children="Yes" value="true" />
          <option children="No" value="false" />
        </select>
      )}
    </FieldWrapper>
  );
}
