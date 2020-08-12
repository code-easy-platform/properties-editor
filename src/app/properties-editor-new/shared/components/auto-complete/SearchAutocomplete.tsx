import React from 'react';

import { ISuggestion } from './../../interfaces';
import './SearchAutocomplete.css';

interface SearchAutocompleteProps {
    onSelect?(option: ISuggestion): void,
    options?: ISuggestion[],
    show: boolean,
}
export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({ options = [], show = false, onSelect }) => {

    if (!show || options.length === 0) return null;

    return (
        <ul onClick={e => e.stopPropagation()} style={{ transform: 'translateY(63%)', zIndex: 5000, minWidth: 100 }} className="options absolute padding-top-s padding-bottom-s box-shadow-small background-bars flex-column border-radius">
            {options.map(({ description, disabled, label, name, value }, index) => {
                return (
                    <li key={index} className="option-item">
                        <input
                            tabIndex={0}
                            type={"radio"}
                            name={"option"}
                            id={String(index)}
                            disabled={disabled}
                            autoFocus={index === 0}
                            onKeyDown={e => {
                                if (onSelect && !disabled && (e.keyCode === 13 || e.keyCode === 32)) {
                                    onSelect({ description, disabled, label, name, value });
                                }
                            }}
                        />
                        <label
                            htmlFor={String(index)}
                            title={label + "\n\n" + description}
                            className={`flex1 padding-s text-ellipsis${disabled ? ' disabled' : ''}`}
                            onMouseDown={disabled ? undefined : e => {
                                if (onSelect && !disabled) {
                                    onSelect({ description, disabled, label, name, value });
                                }
                            }}
                        >{label}</label>
                    </li>
                );
            })}
        </ul>
    );
}
