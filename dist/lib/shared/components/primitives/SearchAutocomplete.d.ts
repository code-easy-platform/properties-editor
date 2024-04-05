import { ISuggestion } from '../../interfaces';
import { default as React } from 'react';

interface SearchAutocompleteProps {
    show: boolean;
    selectedValue: string;
    options?: ISuggestion[];
    children: React.ReactNode;
    onClose?(): void;
    onSelect?(option: ISuggestion): void;
}
export declare const SearchAutocomplete: React.FC<SearchAutocompleteProps>;
export {};
