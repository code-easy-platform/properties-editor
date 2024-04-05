import { IObservable } from "react-observing";

import { TypeOfValues } from "../enums";


export interface IProperty<T = any> {
  /**
   * List of files types accepted to import
   */
  typeOfFilesToAccept: IObservable<string[] | undefined>;
  /**
   * Allow you indicate if the value input picker is displayed
   */
  valueInputPickerDisabled: IObservable<boolean | undefined>;
  /**
   * Allow you indicate if the name input picker is displayed 
   */
  nameInputPickerDisabled: IObservable<boolean | undefined>;
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
  propertyType: IObservable<any | undefined>;
  /**
   * Indicates the group of the property, used to group some properties
   */
  group: IObservable<string | undefined>;
  /**
   * Indicates the order to show this property in the list of properties
   */
  order: IObservable<number | undefined>;
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

export type IPropertyWithoutObservable<T = any> = {
  [k in keyof IProperty<T>]: IProperty<T>[k]['value'];
}
