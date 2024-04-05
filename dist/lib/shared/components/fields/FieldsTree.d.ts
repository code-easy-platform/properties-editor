import { IProperty } from '../../interfaces';
import { IObservable } from 'react-observing';

export type TFieldsTreeValue = {
    root: IObservable<IProperty>;
    fields: IObservable<IProperty[]>;
};
interface IFieldsTreeProps extends IProperty<TFieldsTreeValue> {
}
export declare const FieldsTree: ({ value }: IFieldsTreeProps) => import("react/jsx-runtime").JSX.Element;
export {};
