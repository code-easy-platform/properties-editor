import React, { useRef, useEffect } from 'react';
import * as SwitchRadix from '@radix-ui/react-switch';


interface SwitchProps {
  checked: boolean;
  hasError?: boolean;
  hasWarning?: boolean;
  id?: string | undefined;
  disabled?: boolean | undefined;
  autoFocus?: boolean | undefined;
  onChange(value: boolean): void;
  onBlur?(e: React.FocusEvent<HTMLButtonElement>): void;
}
export const Switch: React.FC<SwitchProps> = ({ id, checked = false, autoFocus, onChange, onBlur, hasError = false, disabled = false, hasWarning }) => {

  const inputRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);


  return (
    <SwitchRadix.Root
      id={id}
      ref={inputRef}
      onBlur={onBlur}
      checked={checked}
      disabled={disabled}
      autoFocus={autoFocus}
      data-error={hasError}
      data-warning={hasWarning && !hasError}
      onCheckedChange={() => onChange(!checked)}
      className="p-1 w-12 h-7 rounded-full bg-background cursor-pointer flex items-center justify-start hover:opacity-100 focus:ring-1 ring-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none data-[warning=true]:ring-yellow-500 data-[warning=true]:ring-1 data-[error=true]:ring-red-500 data-[error=true]:ring-1"
    >
      <SwitchRadix.Thumb
        className="w-[20px] h-[20px] bg-primary rounded-full transition-transform duration-100 translate-x-0 will-change-transform data-[state=unchecked]:bg-secondary data-[state=unchecked]:opacity-50 data-[state=checked]:translate-x-5"
      />
    </SwitchRadix.Root>
  );
}
