import { IPropertiesEditorConfigurations, IProperty, ISuggestion } from './shared/interfaces';
import { IObservable } from 'react-observing';
import { default as React } from 'react';

interface PropertiesEditorProps {
    properties: IObservable<IProperty[]>;
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
export declare const PropertiesEditor: React.FC<PropertiesEditorProps>;
export type { TFieldsTreeValue } from './shared/components/fields/FieldsTree';
export * from './shared/interfaces';
export * from './shared/helpers';
export * from './shared/enums';
