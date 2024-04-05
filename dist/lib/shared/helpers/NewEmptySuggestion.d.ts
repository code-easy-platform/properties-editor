import { ISuggestion } from '../interfaces';

type TOptional<T> = {
    [k in keyof T]?: T[k];
};
export declare const newEmptySuggestion: (value: TOptional<ISuggestion>) => ISuggestion;
export {};
