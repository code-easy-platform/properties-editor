import { IProperty } from '../../interfaces';
import { IObservable } from 'react-observing';
import { default as React } from 'react';

interface FieldsListProps {
    fields: IObservable<IProperty[]>;
}
export declare const FieldsList: React.FC<FieldsListProps>;
export {};
