import React, { useCallback, useEffect, useRef } from 'react';
import { useObserver, useObserverValue } from 'react-observing';
import { VscClose, VscEdit } from 'react-icons/vsc';

import { IProperty } from '../../../interfaces';
import { useConfigs } from '../../../contexts';

const css_prop_item: React.CSSProperties = {
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 'min-content',
    position: 'relative',
    display: 'flex',
}
interface InputMultiTagsProps extends IProperty<string[]> { }
export const InputMultiTags: React.FC<InputMultiTagsProps> = ({ ...props }) => {
    const { inputBorderError, inputBorderWarning, inputBorderDefault, inputTextError, inputTextWarning, inputTextDefault, textDefaultColor } = useConfigs();

    const [focusOnRender, setFocusOnRender] = useObserver(props.focusOnRender);
    const editValueDisabled = useObserverValue(props.editValueDisabled);
    const valueHasWarning = useObserverValue(props.valueHasWarning);
    const valueHasError = useObserverValue(props.valueHasError);
    const [suggestions] = useObserver(props.suggestions);
    const [value, setValue] = useObserver(props.value);
    const [name] = useObserver(props.name);
    const id = useObserverValue(props.id);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current && focusOnRender) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [focusOnRender]);

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
        <div style={css_prop_item} className="padding-s padding-bottom-none">
            <label>{name}</label>

            <div style={{ flexWrap: 'wrap', justifyContent: "flex-start", alignItems: 'center', marginTop: 8 }}>
                {value.map((currentTag, index) => (
                    <span
                        key={currentTag}
                        className="background-bars"
                        style={{
                            margin: 4,
                            padding: 2,
                            paddingLeft: 4,
                            background: '',
                            paddingRight: 2,
                            borderRadius: 4,
                            display: 'flex',
                            fontSize: 'small',
                            alignItems: 'center',
                            justifyContent: "center",
                            border: `thin solid ${textDefaultColor}`,
                        }}
                    >
                        {currentTag}
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
                    onBlur={() => setFocusOnRender(false)}
                    onKeyUp={e => e.currentTarget.value = e.currentTarget.value.trim().replace(/;|,| |\./g, '')}
                    style={{
                        textDecoration: valueHasError ? inputTextError : valueHasWarning ? inputTextWarning : inputTextDefault,
                        border: valueHasError ? inputBorderError : valueHasWarning ? inputBorderWarning : inputBorderDefault,
                        padding: 0,
                        paddingLeft: 4,
                        width: '100%',
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
