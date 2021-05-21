import { observe } from "react-observing";

import { ISuggestion } from "../interfaces";

type TOptional<T> = { [k in keyof T]?: T[k] };

export const newEmptySuggestion = (value: TOptional<ISuggestion>): ISuggestion => {
    return {
        description: value.description || observe(''),
        disabled: value.disabled || observe(false),
        value: value.value || observe(''),
        label: value.label || observe(''),
        name: value.name || observe(''),
    };
};
