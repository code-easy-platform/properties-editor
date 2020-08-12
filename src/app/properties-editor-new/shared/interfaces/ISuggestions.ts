export interface ISuggestion<T = string | number> {
    description: string;
    disabled: boolean;
    label: string;
    name: string;
    value: T;
}
