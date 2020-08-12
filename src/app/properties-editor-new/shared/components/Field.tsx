import React from 'react';

import {
    InputSelectionYesNo,
    InputViewOnly, SimpleString, InputSwitch, InputSimpleNumber,
    InputImportFile, InputBigString, InputFullBigString, InputSelection,
} from './fields/inputs/';
import { IProperties } from '../interfaces';
import { TypeOfValues } from '../enums';

interface FieldProps {
    field: IProperties;
    onChange?(data: IProperties): void;
}
export const Field: React.FC<FieldProps> = ({ field, onChange }) => {

    switch (field.type) {
        case TypeOfValues.viewOnly:
            return <InputViewOnly {...field} />;

        case TypeOfValues.string:
            return <SimpleString onChange={onChange} {...field} />;

        case TypeOfValues.boolean:
            return <InputSwitch onChange={onChange} {...field} />;

        case TypeOfValues.number:
            return <InputSimpleNumber onChange={onChange} {...field} />;

        case TypeOfValues.binary:
            return <InputImportFile onChange={onChange} {...field} />;

        case TypeOfValues.bigstring:
            return <InputBigString onChange={onChange} {...field} />;

        case TypeOfValues.fullBigString:
            return <InputFullBigString onChange={onChange} {...field} />;

        case TypeOfValues.selection:
            return <InputSelection onChange={onChange} {...field} />;

        case TypeOfValues.yesNoSelection:
            return <InputSelectionYesNo onChange={onChange} {...field} />;

        default:
            return null;
    }
}
