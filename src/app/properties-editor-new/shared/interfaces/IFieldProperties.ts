import { TypeOfValues } from "../enums";
import { ISuggestion } from "./";

export interface IProperties<T=any> {
    onPickerClick?(e: React.MouseEvent<HTMLInputElement, MouseEvent>): void;
    nameSuggestions?: ISuggestion[];
    suggestions?: ISuggestion[];
    editValueDisabled?: boolean;
    editNameDisabled?: boolean;
    valueHasWarning?: boolean;
    nameHasWarning?: boolean;
    valueHasError?: boolean;
    id: string | undefined;
    nameHasError?: boolean;
    useOnChange?: boolean;
    /**
     * This property allows the input to be focused automatically when rendered on the screen
     */
    focusOnRender?: boolean;
    information?: string;
    /**
     * Max size in bytes
     * Default value 1MB(1048576)
     */
    fileMaxSize?: number;
    propertieType?: any;
    type: TypeOfValues;
    group?: string;
    name?: string;
    value: T;
}
