import React, { useEffect, useState } from 'react';
import { useObserver, useObserverValue } from 'react-observing';

import { ExpressionInput } from '../../primitives/expression-input/ExpressionInput';
import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { useConfigurations } from '../../../contexts';
import { IProperty } from '../../../interfaces';


export type TDefault = string;

interface InputExpressionProps extends IProperty<TDefault> {
  dividerPositionX?: number;
}
export const InputExpression: React.FC<InputExpressionProps> = ({ dividerPositionX = 0, ...props }) => {
  const { onPickerValueClick, onGetValueSuggestions, onGetValue } = useConfigurations();


  const [value, setValue] = useObserver(onGetValue ? onGetValue(props) : props.value);
  const valueInputPickerDisabled = useObserverValue(props.valueInputPickerDisabled);
  const editValueDisabled = useObserverValue(props.editValueDisabled);
  const valueHasWarning = useObserverValue(props.valueHasWarning);
  const nameHasWarning = useObserverValue(props.nameHasWarning);
  const valueHasError = useObserverValue(props.valueHasError);
  const nameHasError = useObserverValue(props.nameHasError);
  const information = useObserverValue(props.information);
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
      dividerPositionX={dividerPositionX}
      children={inputId => (
        <ExpressionInput
          onSelectSuggestion={option => setValue(option.value.value.toString())}
          onPickerClick={() => onPickerValueClick?.(props)}
          onChange={e => setValue(e.currentTarget.value)}
          disabledPicker={valueInputPickerDisabled}
          disabled={editValueDisabled}
          suggestions={suggestions}
          warning={valueHasWarning}
          error={valueHasError}
          value={value}
          id={inputId}
        />
      )}
    />
  );
}
