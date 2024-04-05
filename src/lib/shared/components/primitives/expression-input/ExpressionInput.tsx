import React, { useState, useRef, useEffect, useCallback } from 'react';
import { VscChevronDown } from 'react-icons/vsc';
import { ISubscription } from 'react-observing';

import { SearchAutocomplete } from '../SearchAutocomplete';
import { ISuggestion } from '../../../interfaces';


type TExpressionValue = string | number | readonly string[] | undefined

interface ExpressionInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: TExpressionValue) => void;
  onPickerClick?(e: React.MouseEvent<HTMLInputElement, MouseEvent>): void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSelectSuggestion(option: ISuggestion): void;
  suggestions?: ISuggestion[];
  disabledPicker?: boolean;
  value: TExpressionValue;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  warning?: boolean;
  error?: boolean;
  id?: string;
}
export const ExpressionInput: React.FC<ExpressionInputProps> = ({
  id,
  error,
  value,
  warning,
  disabled,
  autoFocus,
  className,
  placeholder,
  suggestions,
  disabledPicker,
  onBlur,
  onChange,
  onKeyDown,
  onPickerClick,
  onSelectSuggestion
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [autoFocus]);

  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const [isTyping, setIsTyping] = useState(false);
  const [typedValue, setTypedValue] = useState(value);

  const [valueToShow, setValueToShow] = useState(value);
  useEffect(() => {
    if (!suggestions) {
      setValueToShow(value);
      return;
    }

    const suggestionByValue = suggestions?.find(suggestion => suggestion.value.value === value);
    setValueToShow(suggestionByValue?.label.value || value);

    const subscriptions: ISubscription[] = [];
    suggestions.forEach(suggestion => {
      subscriptions.push(suggestion.value.subscribe((valueCurrent) => {
        if (valueCurrent === value && suggestionByValue) setValueToShow(suggestionByValue?.label.value);
      }));
      subscriptions.push(suggestion.label.subscribe((labelCurrent) => {
        if (suggestion.value.value === value && suggestionByValue) setValueToShow(labelCurrent);
      }));
    });
    return () => subscriptions.forEach(sub => sub.unsubscribe());
  }, [suggestions, value]);

  useEffect(() => {
    if (!isTyping) setTypedValue(valueToShow);
  }, [valueToShow, isTyping]);


  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedValue(event.target.value);

    if (!suggestions) {
      onChange && onChange(event, event.target.value)
      return;
    }

    const newValue = event.target.value;
    const foundSuggestion = suggestions.find(suggestion => {
      const isLabelEqual = suggestion.label.value === newValue;
      const isNameEqual = suggestion.name.value === newValue;
      const isValueEqual = suggestion.value.value === newValue;

      return isLabelEqual || isNameEqual || isValueEqual;
    });

    if (foundSuggestion) {
      onSelectSuggestion && onSelectSuggestion(foundSuggestion);
    } else {
      onChange && onChange(event, newValue);
    }
  }, [suggestions, onChange, onSelectSuggestion]);

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsTyping(false);
    onBlur?.(event);
  }, [onBlur]);


  return (
    <div className="flex w-full items-center relative">
      <input
        data-error={error}
        data-warning={warning}
        data-has-suggestions={(suggestions || []).length > 0}

        id={id}
        ref={inputRef}
        autoComplete='off'
        onBlur={handleBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        onKeyDown={onKeyDown}
        onChange={handleChange}
        placeholder={placeholder}
        onFocus={() => setIsTyping(true)}
        {...isTyping ? { value: typedValue } : { value: valueToShow }}
        className={`${className} flex-1 p-1 py-0.5 data-[warning=true]:border data-[warning=true]:border-yellow-500 data-[error=true]:border data-[error=true]:border-red-500 data-[has-suggestions=true]:pr-6 disabled:opacity-50`}
      />

      {(!disabled && (suggestions || []).length > 0) && (
        <VscChevronDown
          size={24}
          onClick={() => setShowAutoComplete(true)}
          className="h-full rounded cursor-pointer open-suggestions text-text p-1 -ml-6 outline-none"
        />
      )}

      <SearchAutocomplete
        options={suggestions}
        show={showAutoComplete}
        selectedValue={String(value || '')}
        onClose={() => setShowAutoComplete(false)}
        onSelect={opt => !disabled && onSelectSuggestion(opt)}
      >
        <span />
      </SearchAutocomplete>

      {(!disabled && !disabledPicker) && (
        <input
          type="button"
          tabIndex={-1}
          onClick={!disabled && onPickerClick}
          className="h-5 cursor-pointer rounded-md ml-1 px-1.5 border bg-paper"
        />
      )}
    </div>
  );
}
