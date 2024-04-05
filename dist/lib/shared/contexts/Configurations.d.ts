import { IPropertiesEditorConfigurations, IProperty, ISuggestion } from './../interfaces';
import { IObservable } from 'react-observing';
import { default as React } from 'react';

interface IInternalConfigs extends IPropertiesEditorConfigurations {
    inputBorderWarning?: string;
    inputBorderDefault?: string;
    inputTextWarning?: string;
    inputTextDefault?: string;
    inputBorderError?: string;
    inputTextError?: string;
}
interface IConfigurationContextData {
    configs: IInternalConfigs;
    /**
     * This is used to emit value picker click in some cases
     */
    onPickerValueClick?: (property: IProperty) => void;
    /**
     * This is used to emit name picker click in some cases
     */
    onPickerNameClick?: (property: IProperty) => void;
    /**
     * This is used to get suggestions for fields when needed
     */
    onGetNameSuggestions: (property: IProperty) => ISuggestion[];
    /**
     * This is used to get suggestions for fields when needed
     */
    onGetValueSuggestions: (property: IProperty) => ISuggestion[];
    /**
     * This is used to get customized value when needed
     */
    onGetValue?: (property: IProperty) => IObservable<string>;
}
export declare const ConfigurationContext: React.Context<IConfigurationContextData>;
interface IConfigurationProviderProps {
    children: React.ReactElement;
    configs?: IPropertiesEditorConfigurations;
    /**
     * This is used to emit value picker click in some cases
     */
    onPickerValueClick?: (property: IProperty) => void;
    /**
     * This is used to emit name picker click in some cases
     */
    onPickerNameClick?: (property: IProperty) => void;
    /**
     * This is used to get suggestions for fields when needed
     */
    onGetNameSuggestions?: (property: IProperty) => ISuggestion[];
    /**
     * This is used to get suggestions for fields when needed
     */
    onGetValueSuggestions?: (property: IProperty) => ISuggestion[];
    /**
     * This is used to get customized value when needed
     */
    onGetValue?: (property: IProperty) => IObservable<string>;
}
export declare const ConfigurationProvider: ({ children, configs, onGetNameSuggestions, onGetValueSuggestions, onGetValue, ...rest }: IConfigurationProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useConfigurations: () => IConfigurationContextData;
export declare const useConfigs: () => IInternalConfigs;
export {};
