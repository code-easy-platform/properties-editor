import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FixedSizeList } from 'react-window';

import { ISuggestion } from '../../interfaces';


interface SearchAutocompleteProps {
  show: boolean;
  selectedValue: string;
  options?: ISuggestion[];
  children: React.ReactNode;
  onClose?(): void;
  onSelect?(option: ISuggestion): void;
}
export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({ children, options = [], selectedValue, show = false, onSelect, onClose }) => {
  const itemToFocusRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState('');


  const filteredOptions = useMemo(() => {
    return options.filter(({ label }) => label.value.toLowerCase().indexOf(search.toLowerCase()) > -1);
  }, [options, search]);


  useEffect(() => {
    if (show) setTimeout(() => inputRef.current?.focus(), 0);
  }, [show]);


  return (
    <DropdownMenu.Root open={show} onOpenChange={open => !open ? onClose?.() : {}}>
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='end'
          sideOffset={32}
          onMouseUp={e => e.stopPropagation()}
          className='z-20 h-60 w-60 p-1 flex flex-col gap-2 bg-paper shadow-xl rounded border'
        >
          <input
            value={search}
            ref={inputRef}
            placeholder="Type to search..."
            onFocus={e => e.target.select()}
            className={"rounded p-1 px-2 bg-background"}
            onChange={e => setSearch(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'ArrowDown' ? itemToFocusRef.current?.focus() : e.stopPropagation()}
          />

          <div className="overflow-overlay overflow-track-transparent flex flex-col flex-1">
            <FixedSizeList
              width={230}
              itemSize={34}
              itemData={filteredOptions}
              itemCount={filteredOptions.length}
              height={filteredOptions.length === 0 ? 0 : 190}
            >
              {({ style, data, index }) => (
                <DropdownMenu.Item
                  style={style}
                  key={data[index].label.value}
                  ref={index === 0 ? itemToFocusRef : undefined}
                  onClick={() => { onSelect && onSelect(data[index]); onClose && onClose(); }}
                  className={`p-1 rounded cursor-pointer outline-none hover:bg-primary focus:bg-primary active:opacity-80 select-none ${selectedValue === data[index].value.value ? 'font-bold' : ''}`}
                >
                  {data[index].label.value}
                </DropdownMenu.Item>
              )}
            </FixedSizeList>

            {filteredOptions.length === 0 && (
              <span className="self-center justify-self-center opacity-80">No options</span>
            )}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
