import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useObserver, useObserverValue } from 'react-observing';
import { VscClose, VscEdit } from 'react-icons/vsc';

import { useConfigs, useConfigurations } from '../../../contexts';
import { IProperty } from '../../../interfaces';


const css_prop_item: React.CSSProperties = {
  alignItems: 'flex-start',
  flexDirection: 'column',
  height: 'min-content',
  position: 'relative',
  display: 'flex',
}
interface InputMultiTagsProps extends IProperty<string[]> { }
export const InputMultiTags: React.FC<InputMultiTagsProps> = ({ ...props }) => {
  const { inputBorderError, inputBorderWarning, inputBorderDefault, inputTextError, inputTextWarning, inputTextDefault } = useConfigs();
  const { onGetValueSuggestions } = useConfigurations();


  const editValueDisabled = useObserverValue(props.editValueDisabled);
  const valueHasWarning = useObserverValue(props.valueHasWarning);
  const valueHasError = useObserverValue(props.valueHasError);
  const [value, setValue] = useObserver(props.value);
  const [name] = useObserver(props.name);
  const id = useObserverValue(props.id);


  const [suggestions, setSuggestions] = useState(onGetValueSuggestions(props));
  useEffect(() => {
    setSuggestions(onGetValueSuggestions(props));
  }, [props.propertyType.value, props.type.value, props.id.value, onGetValueSuggestions]);


  const inputRef = useRef<HTMLInputElement>(null);


  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    switch (e.code) {
      case 'Comma':
        setValue(old => {
          const newTag = e.currentTarget.value.trim().replaceAll(',', '');
          if (newTag.length > 0 && !old.includes(newTag)) return [...old, newTag];
          return old;
        });
        e.currentTarget.value = '';
        break;
      case 'Space':
        setValue(old => {
          const newTag = e.currentTarget.value.trim().replaceAll(' ', '');
          if (newTag.length > 0 && !old.includes(newTag)) return [...old, newTag];
          return old;
        });
        e.currentTarget.value = '';
        break;
      case 'Enter':
        setValue(old => {
          const newTag = e.currentTarget.value.trim();
          if (newTag.length > 0 && !old.includes(newTag)) return [...old, newTag];
          return old;
        });
        e.currentTarget.value = '';
        break;
      case 'NumpadEnter':
        setValue(old => {
          const newTag = e.currentTarget.value.trim();
          if (newTag.length > 0 && !old.includes(newTag)) return [...old, newTag];
          return old;
        });
        e.currentTarget.value = '';
        break;
      case 'Slash':
        setValue(old => {
          const newTag = e.currentTarget.value.trim().replaceAll(';', '');
          if (newTag.length > 0 && !old.includes(newTag)) return [...old, newTag];
          return old;
        });
        e.currentTarget.value = '';
        break;
      default:
        break;
    }
  }, [setValue]);

  const handlePaste: React.ClipboardEventHandler<HTMLInputElement> = useCallback((e) => {
    e.preventDefault();

    const classNames = e.clipboardData.getData('text').split(/,| |\n/g).map(word => word.trim()).filter(word => word.length > 0);
    setValue(old => {
      return [
        ...old,
        ...classNames.filter(word => !old.includes(word)),
      ];
    });
  }, [setValue]);


  return (
    <div style={css_prop_item} data-disabled={editValueDisabled} className="p-2 gap-2 bg-background rounded data-[disabled=true]:opacity-50">
      <label>{name}</label>

      <div className="flex flex-wrap justify-start items-center gap-1">
        {value.map((currentTag, index) => (
          <span key={currentTag} className="flex gap-1 items-center justify-between border px-2 py-0.5 bg-paper rounded-lg">
            {currentTag}
            <div className="flex gap-1">
              <VscEdit
                style={{ padding: 2, cursor: 'pointer' }}
                onClick={() => {
                  setValue(value.filter((_, i) => i !== index));
                  if (inputRef.current) {
                    inputRef.current.value = currentTag;
                    inputRef.current.focus();
                    inputRef.current.select();
                  }
                }}
              />
              <VscClose
                style={{ padding: 2, cursor: 'pointer' }}
                onClick={() => setValue(value.filter((_, i) => i !== index))}
              />
            </div>
          </span>
        ))}

        <input
          ref={inputRef}
          autoComplete="off"
          id={'prop_id_' + id}
          placeholder="Add..."
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          list={'prop_data_id_' + id}
          disabled={editValueDisabled}
          className="w-full bg-paper px-2 mt-2"
          onKeyUp={e => e.currentTarget.value = e.currentTarget.value.trim().replace(/;|,| |\./g, '')}
          style={{
            textDecoration: valueHasError ? inputTextError : valueHasWarning ? inputTextWarning : inputTextDefault,
            border: valueHasError ? inputBorderError : valueHasWarning ? inputBorderWarning : inputBorderDefault,
            height: 26,
          }}
        />

        {suggestions && (
          <datalist id={'prop_data_id_' + id}>
            {suggestions.map((suggestion, index) => <option key={index} value={suggestion.value.value} />)}
          </datalist>
        )}
      </div>
    </div>
  );
}
