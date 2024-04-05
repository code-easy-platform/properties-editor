import React, { useEffect, useState } from 'react';
import { useObserver, useObserverValue } from 'react-observing';

import { ExpressionInput } from '../../primitives/expression-input/ExpressionInput';
import { useConfigurations } from '../../../contexts';
import { IProperty } from './../../../interfaces';


interface IAssignProps extends IProperty<string> {
  inputClassName?: string;
}
export const Assign: React.FC<IAssignProps> = ({ inputClassName = '', ...props }) => {
  const { onPickerValueClick, onPickerNameClick, onGetNameSuggestions, onGetValueSuggestions } = useConfigurations();

  const valueInputPickerDisabled = useObserverValue(props.valueInputPickerDisabled);
  const nameInputPickerDisabled = useObserverValue(props.nameInputPickerDisabled);
  const editValueDisabled = useObserverValue(props.editValueDisabled);
  const editNameDisabled = useObserverValue(props.editNameDisabled);
  const valueHasWarning = useObserverValue(props.valueHasWarning);
  const nameHasWarning = useObserverValue(props.nameHasWarning);
  const valueHasError = useObserverValue(props.valueHasError);
  const nameHasError = useObserverValue(props.nameHasError);
  const [value, setValue] = useObserver(props.value);
  const [name, setName] = useObserver(props.name);


  const [nameSuggestions, setNameSuggestions] = useState(onGetNameSuggestions(props));
  const [suggestions, setSuggestions] = useState(onGetValueSuggestions(props));
  useEffect(() => {
    setNameSuggestions(onGetNameSuggestions(props));
  }, [props.propertyType.value, props.type.value, props.id.value, onGetNameSuggestions]);
  useEffect(() => {
    setSuggestions(onGetValueSuggestions(props));
  }, [props.propertyType.value, props.type.value, props.id.value, onGetValueSuggestions]);


  return (
    <div className="flex flex-col gap-0.5 w-full">
      <ExpressionInput
        value={name}
        error={nameHasError}
        placeholder="Property"
        warning={nameHasWarning}
        disabled={editNameDisabled}
        suggestions={nameSuggestions}
        id={'name_prop_id_' + props.id}
        key={'name_prop_key_' + props.id}
        disabledPicker={nameInputPickerDisabled}
        onChange={e => setName(e.currentTarget.value)}
        onPickerClick={() => onPickerNameClick?.(props)}
        onSelectSuggestion={option => setName(option.value.value.toString())}
      />

      <label className="flex items-center gap-2">
        <span
          children='='
          className="cursor-pointer"
          onClick={() => onPickerValueClick?.(props)}
        />
        <ExpressionInput
          value={value}
          placeholder="Value"
          error={valueHasError}
          warning={valueHasWarning}
          suggestions={suggestions}
          disabled={editValueDisabled}
          id={'value_prop_id_' + props.id}
          key={'value_prop_key_' + props.id}
          disabledPicker={valueInputPickerDisabled}
          onChange={e => setValue(e.currentTarget.value)}
          onPickerClick={() => onPickerValueClick?.(props)}
          onSelectSuggestion={option => setValue(option.value.value.toString())}
        />
      </label>
    </div>
  );
}
