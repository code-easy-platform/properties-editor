import { IProperty } from '../../interfaces';
import { default as React } from 'react';

interface FieldGroupProps {
    group?: string;
    properties: IProperty[];
}
export declare const FieldGroup: React.FC<FieldGroupProps>;
export {};
