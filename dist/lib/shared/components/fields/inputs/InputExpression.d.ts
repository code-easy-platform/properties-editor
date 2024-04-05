import { IProperty } from '../../../interfaces';
import { default as React } from 'react';

export type TDefault = string;
interface InputExpressionProps extends IProperty<TDefault> {
    dividerPositionX?: number;
}
export declare const InputExpression: React.FC<InputExpressionProps>;
export {};
