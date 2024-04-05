import { IObservable } from "react-observing";


/**
 * 
 */
export interface IMappedFieldOptionList {
  /**
   * 
   */
  name: IObservable<string>;
  /**
   * 
   */
  value: IObservable<string>;
}