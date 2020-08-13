import React, { useState, useCallback } from 'react';

import { IProperties } from '../../../interfaces';

const css_prop_item: React.CSSProperties = {
    justifyContent: 'space-between',
    height: 'min-content',
    alignItems: 'center',
    position: 'relative',
}
interface InputFullBigStringProps extends IProperties<string> {
    onChange?(data: IProperties<string>): void;
}
export const InputFullBigString: React.FC<InputFullBigStringProps> = ({ onChange, ...props }) => {
    const [value, setValue] = useState(props.value);

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (props.useOnChange && onChange) {
            onChange({ ...props, value: e.currentTarget.value });
            setValue(e.currentTarget.value);
        } else {
            setValue(e.currentTarget.value);
        }
    }, [onChange, props]);

    const handleOnBlur = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (props.value !== value && onChange) {
            onChange({ ...props, value });
        }
    }, [onChange, props, value]);

    return (
        <div style={css_prop_item} className="padding-s padding-bottom-none">
            <textarea
                className={"full-width background-bars"}
                disabled={props.editValueDisabled}
                autoFocus={props.focusOnRender}
                id={'prop_id_' + props.id}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                autoComplete={"off"}
                value={value}
                style={{
                    textDecoration: props.valueHasError ? `var(--text-underline-error)` : props.valueHasWarning ? `var(--text-underline-warning)` : undefined,
                    border: props.valueHasError ? 'var(--input-border-error)' : props.valueHasWarning ? 'var(--input-border-warning)' : 'var(--input-border)',
                    resize: 'vertical',
                    height: '100px',
                }}
            />
        </div>
    );
}
