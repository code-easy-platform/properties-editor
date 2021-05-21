import { observe } from "react-observing";
import { v4 as uuid } from "uuid";

import { IProperty } from "../interfaces";
import { TypeOfValues } from "../enums";

type TOptional<T> = { [k in keyof T]?: T[k] };

export const newEmptyPropertie = (value: TOptional<IProperty>): IProperty => {
    return {
        id: value.id || observe(uuid()),
        value: value.value || observe(''),
        name: value.name || observe(undefined),
        order: value.order || observe(undefined),
        group: value.group || observe(undefined),
        suggestions: value.suggestions || observe([]),
        type: value.type || observe(TypeOfValues.string),
        information: value.information || observe(undefined),
        fileMaxSize: value.fileMaxSize || observe(undefined),
        nameSuggestions: value.nameSuggestions || observe([]),
        nameHasError: value.nameHasError || observe(undefined),
        propertieType: value.propertieType || observe('default'),
        valueHasError: value.valueHasError || observe(undefined),
        focusOnRender: value.focusOnRender || observe(undefined),
        nameHasWarning: value.nameHasWarning || observe(undefined),
        valueHasWarning: value.valueHasWarning || observe(undefined),
        editNameDisabled: value.editNameDisabled || observe(undefined),
        editValueDisabled: value.editValueDisabled || observe(undefined),
        onPickerNameClick: value.onPickerNameClick || observe(undefined),
        onPickerValueClick: value.onPickerValueClick || observe(undefined),
        typeOfFilesToAccept: value.typeOfFilesToAccept || observe(undefined),
        nameInputPickerDisabled: value.nameInputPickerDisabled || observe(true),
        valueInputPickerDisabled: value.valueInputPickerDisabled || observe(true),
    };
};
