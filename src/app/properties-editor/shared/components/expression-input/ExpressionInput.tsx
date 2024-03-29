import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { VscChevronDown } from 'react-icons/vsc';

import { SearchAutocomplete } from '../auto-complete/SearchAutocomplete';
import { ISuggestion } from '../../interfaces';
import './ExpressionInput.css';

interface ExpressionInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onPickerClick?(e: React.MouseEvent<HTMLInputElement, MouseEvent>): void;
    onSelectSuggest(option: ISuggestion): void;
    inputPickerDisabled?: boolean;
    suggestions?: ISuggestion[];
}
export const ExpressionInput: React.FC<ExpressionInputProps> = ({ onPickerClick, suggestions, inputPickerDisabled, onSelectSuggest, ...props }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef.current && props.autoFocus) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [props.autoFocus]);

    const [showAutoComplete, setAutoComplete] = useState(false);

    const css_picker_editor: React.CSSProperties = useMemo(() => ({
        border: 'var(--input-border)',
        cursor: 'pointer',
        borderRadius: 50,
        color: 'white',
        marginLeft: 4,
        height: 20,
        paddingRight: 4,
        paddingLeft: 4,
    }), []);

    const dismissSuggestion = useCallback(() => {
        window.onmouseup = null;
        setAutoComplete(false);
    }, [])

    const openSuggestions = useCallback(() => {
        window.onmouseup = dismissSuggestion;
        setAutoComplete(true);
    }, [dismissSuggestion])

    return (
        <div className="flex1" style={{ alignItems: 'center', justifyContent: 'flex-end', position: "relative" }}>
            <input
                {...props}
                ref={inputRef}
                autoComplete='off'
                style={{ ...props.style, width: '100%' }}
                className={`${(suggestions || []).length > 0 && "padding-right-g"}`}
            />
            {(!props.disabled && (suggestions || []).length > 0) && (
                <VscChevronDown
                    onClick={openSuggestions}
                    className={`btn background-transparent border-radius open-suggestions`}
                    style={{
                        zIndex: 1,
                        paddingTop: 0,
                        minHeight: 32,
                        paddingLeft: 6,
                        paddingRight: 6,
                        outline: 'none',
                        paddingBottom: 0,
                    }}
                    onKeyDown={e => {
                        if (e.code === 'Enter' || e.code === 'Space') {
                            openSuggestions();
                        }
                    }}
                />
            )}
            <SearchAutocomplete
                options={suggestions}
                show={showAutoComplete}
                onSelect={opt => {
                    dismissSuggestion();
                    !props.disabled && onSelectSuggest(opt);
                }}
            />
            {(!props.disabled && inputPickerDisabled) && (
                <input
                    type="button"
                    tabIndex={-1}
                    style={css_picker_editor}
                    className="full-height background-bars"
                    onClick={!props.disabled && onPickerClick}
                />
            )}
        </div>
    );
}
