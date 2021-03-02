import { IObservable } from "react-observing";

import { TypeOfValues } from "../enums";
import { ISuggestion } from "./";

export interface IProperty<T = any> {
    /**
     * This will be used only in types assigns and expressions
     * @param e Event emit by html input
     */
    onPickerValueClick: IObservable<((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined>;
    /**
     * This will be used only in type assigns
     * @param e Event emit by html input
     */
    onPickerNameClick: IObservable<((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined>;
    /**
     * List of files types accepteds to import
     */
    typeOfFilesToAccept: IObservable<string[] | string | undefined>;
    /**
     * Allow you indicate if the value input picker is displayed
     */
    valueInputPickerDisabled: IObservable<boolean | undefined>;
    /**
     * Allow you indicate if the name input picker is displayed 
     */
    nameInputPickerDisabled: IObservable<boolean | undefined>;
    /**
     * This will be used only in type assigns
     */
    nameSuggestions: IObservable<ISuggestion[] | undefined>;
    /**
     * This will be used only in types assigns and expressions
     */
    suggestions: IObservable<ISuggestion[] | undefined>;
    /**
     * Disable the input
     */
    editValueDisabled: IObservable<boolean | undefined>;
    /**
     * This will be used only in type assigns
     */
    editNameDisabled: IObservable<boolean | undefined>;
    /**
     * Allow you indicate if the input has a warning 
     */
    valueHasWarning: IObservable<boolean | undefined>;
    /**
     * Allow you indicate if the label has a warning
     */
    nameHasWarning: IObservable<boolean | undefined>;
    /**
     * This property allows the input to be focused automatically when rendered on the screen
     */
    focusOnRender: IObservable<boolean | undefined>;
    /**
     * Allow you indicate if the input has a error 
     */
    valueHasError: IObservable<boolean | undefined>;
    /**
     * Allow you indicate if the label has a error 
     */
    nameHasError: IObservable<boolean | undefined>;
    /**
     * Used to display information between the label and the input 
     */
    information: IObservable<string | undefined>;
    /**
     * Max size in bytes
     * Default value 1MB(1048576)
     */
    fileMaxSize: IObservable<number | undefined>;
    /**
     * Help you indicating some type of the attribute this property represents 
     */
    propertieType: IObservable<any | undefined>;
    /**
     * Indicates the group of the property, used to group some properties
     */
    group: IObservable<string | undefined>;
    /**
     * Value displayed in the label of the input
     */
    name: IObservable<string | undefined>;
    /**
     * Property identifier
     */
    id: IObservable<string | undefined>;
    /**
     * Define the type of field will be displayed
     */
    type: IObservable<TypeOfValues>;
    /**
     * Value to be displayed in the input
     */
    value: IObservable<T>;
}
