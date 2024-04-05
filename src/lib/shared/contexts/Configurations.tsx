import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { IObservable } from 'react-observing';

import { IPropertiesEditorConfigurations, IProperty, ISuggestion } from './../interfaces';


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

export const ConfigurationContext = createContext<IConfigurationContextData>({} as IConfigurationContextData);

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
};
export const ConfigurationProvider = ({ children, configs, onGetNameSuggestions, onGetValueSuggestions, onGetValue, ...rest }: IConfigurationProviderProps) => {
  const configsTransformed = useMemo(() => {
    return {
      // GENERAL
      errorColor: configs?.errorColor || 'red',
      warningColor: configs?.warningColor || 'yellow',
      textDefaultColor: configs?.textDefaultColor || 'white',
      borderDefaultColor: configs?.borderDefaultColor || '#3c3c3c',

      // Inputs
      inputTextDefault: undefined,
      inputBorderError: `thin solid  ${configs?.errorColor || 'red'}`,
      inputTextError: `underline wavy ${configs?.errorColor || 'red'}`,
      inputBorderWarning: `thin solid  ${configs?.warningColor || 'yellow'}`,
      inputTextWarning: `underline wavy ${configs?.warningColor || 'yellow'}`,
      inputBorderDefault: `thin solid  ${configs?.borderDefaultColor || '#3c3c3c'}`,
    }
  }, [configs]);


  const handleGetNameSuggestions = useCallback((property: IProperty) => {
    if (!onGetNameSuggestions) return [];
    return onGetNameSuggestions(property);
  }, [onGetNameSuggestions]);

  const handleGetValueSuggestions = useCallback((property: IProperty) => {
    if (!onGetValueSuggestions) return [];
    return onGetValueSuggestions(property);
  }, [onGetValueSuggestions]);

  const handleGetValue = useMemo(() => {
    if (!onGetValue) return undefined;
    return (property: IProperty) => onGetValue(property);
  }, [onGetValue]);


  return (
    <ConfigurationContext.Provider
      value={{
        onGetValue: handleGetValue,
        configs: configsTransformed,
        onGetNameSuggestions: handleGetNameSuggestions,
        onGetValueSuggestions: handleGetValueSuggestions,
        ...rest,
      }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};

export const useConfigurations = () => useContext(ConfigurationContext);
export const useConfigs = () => useConfigurations().configs;
