import { ISuggestion } from '../../../interfaces';
import { default as React } from 'react';

type TExpressionValue = string | number | readonly string[] | undefined;
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
    disabled?: boolean;
    warning?: boolean;
    error?: boolean;
    id?: string;
}
export declare const ExpressionInput: React.FC<ExpressionInputProps>;
export {};
