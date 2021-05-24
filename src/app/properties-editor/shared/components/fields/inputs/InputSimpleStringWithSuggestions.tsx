import React, { useEffect, useRef } from 'react';
import { useObserver, useObserverValue } from 'react-observing';

import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { IProperty } from '../../../interfaces';
import { useConfigs } from '../../../contexts';

interface InputSimpleStringWithSuggestionsProps extends IProperty<string> { }
export const InputSimpleStringWithSuggestions: React.FC<InputSimpleStringWithSuggestionsProps> = ({ ...props }) => {
    const { inputBorderError, inputBorderWarning, inputBorderDefault, inputTextError, inputTextWarning, inputTextDefault } = useConfigs();

    const [focusOnRender, setFocusOnRender] = useObserver(props.focusOnRender);
    const editValueDisabled = useObserverValue(props.editValueDisabled);
    const valueHasWarning = useObserverValue(props.valueHasWarning);
    const nameHasWarning = useObserverValue(props.nameHasWarning);
    const valueHasError = useObserverValue(props.valueHasError);
    const nameHasError = useObserverValue(props.nameHasError);
    const information = useObserverValue(props.information);
    const [suggestions] = useObserver(props.suggestions);
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
                        className={"full-width background-bars"}
                        onBlur={() => setFocusOnRender(false)}
                        disabled={editValueDisabled}
                        list={'prop_data_id_' + id}
                        autoComplete={'off'}
                        ref={inputRef}
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
