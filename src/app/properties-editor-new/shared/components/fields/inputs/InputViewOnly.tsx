import React from 'react';

import { IProperties } from '../../../interfaces';
import { FieldWrapper } from '../..';

export const InputViewOnly: React.FC<IProperties> = (props) => {
    const { valueHasError = false, nameHasError = false, nameHasWarning = false, valueHasWarning = false, id, value, information, name } = props;

    return (
        <FieldWrapper
            minWidth={60}
            id={id || ''}
            name={name || ''}
            nameHasError={nameHasError}
            information={information}
            nameHasWarning={nameHasWarning}
        >
            {inputId => (
                <label
                    style={{
                        textDecoration: valueHasError ? `var(--text-underline-error)` : valueHasWarning ? `var(--text-underline-warning)` : undefined,
                        backgroundColor: 'transparent',
                        textOverflow: 'ellipsis',
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        textAlign: 'start',
                        overflow: 'hidden',
                    }}
                    children={value}
                    id={inputId}
                />
            )}
        </FieldWrapper>
    );
}
