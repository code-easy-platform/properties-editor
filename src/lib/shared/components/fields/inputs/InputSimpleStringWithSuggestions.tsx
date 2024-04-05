import React, { useEffect, useState } from 'react';
import { useObserver, useObserverValue } from 'react-observing';

import { useConfigs, useConfigurations } from '../../../contexts';
import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperty } from '../../../interfaces';


interface InputSimpleStringWithSuggestionsProps extends IProperty<string> { }
export const InputSimpleStringWithSuggestions: React.FC<InputSimpleStringWithSuggestionsProps> = ({ ...props }) => {
  const { inputBorderError, inputBorderWarning, inputBorderDefault, inputTextError, inputTextWarning, inputTextDefault } = useConfigs();
  const { onGetValueSuggestions } = useConfigurations();


  const editValueDisabled = useObserverValue(props.editValueDisabled);
  const valueHasWarning = useObserverValue(props.valueHasWarning);
  const nameHasWarning = useObserverValue(props.nameHasWarning);
  const valueHasError = useObserverValue(props.valueHasError);
  const nameHasError = useObserverValue(props.nameHasError);
  const information = useObserverValue(props.information);
  const [value, setValue] = useObserver(props.value);
  const name = useObserverValue(props.name);
  const id = useObserverValue(props.id);


  const [suggestions, setSuggestions] = useState(onGetValueSuggestions(props));
  useEffect(() => {
    setSuggestions(onGetValueSuggestions(props));
  }, [props.propertyType.value, props.type.value, props.id.value, onGetValueSuggestions]);


  return (
    <FieldWrapper
      minWidth={60}
      id={id || ''}
      name={name || ''}
      information={information}
      nameHasError={nameHasError}
      nameHasWarning={nameHasWarning}
    >
      {inputId => (
        <>
          <input
            onChange={e => setValue(e.currentTarget.value)}
            className="w-full bg-background py-0.5"
            disabled={editValueDisabled}
            list={'prop_data_id_' + id}
            autoComplete={'off'}
            value={value}
            id={inputId}
            style={{
              textDecoration: valueHasError ? inputTextError : valueHasWarning ? inputTextWarning : inputTextDefault,
              border: valueHasError ? inputBorderError : valueHasWarning ? inputBorderWarning : inputBorderDefault,
            }}
          />

          {suggestions && (
            <datalist id={'prop_data_id_' + id}>
              {suggestions.map((suggestion, index) => <option key={index} value={suggestion.value.value} />)}
            </datalist>
          )}
        </>
      )}
    </FieldWrapper>
  );
}
