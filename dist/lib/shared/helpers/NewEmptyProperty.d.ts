import { IProperty } from '../interfaces';

type TOptional<T> = {
    [k in keyof T]?: T[k];
};
export declare const newEmptyProperty: (value: TOptional<IProperty>) => IProperty;
export {};
