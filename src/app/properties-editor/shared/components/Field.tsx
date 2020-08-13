import React from 'react';

import {
    InputSelectionYesNo, InputExpression, InputSelection,
    InputViewOnly, SimpleString, InputSwitch, InputSimpleNumber,
    InputImportFile, InputBigString, InputFullBigString, Assign,
} from './fields/inputs/';
import { IProperties } from '../interfaces';
import { TypeOfValues } from '../enums';

interface FieldProps {
    field: IProperties;
    onChange?(data: IProperties): void;
}
export const Field: React.FC<FieldProps> = ({ field }) => {

    switch (field.type) {
        case TypeOfValues.viewOnly:
            return <InputViewOnly {...field} />;

        case TypeOfValues.string:
            return <SimpleString {...field} />;

        case TypeOfValues.boolean:
            return <InputSwitch {...field} />;

        case TypeOfValues.number:
            return <InputSimpleNumber {...field} />;

        case TypeOfValues.binary:
            return <InputImportFile {...field} />;

        case TypeOfValues.bigstring:
            return <InputBigString {...field} />;

        case TypeOfValues.fullBigString:
            return <InputFullBigString {...field} />;

        case TypeOfValues.selection:
            return <InputSelection {...field} />;

        case TypeOfValues.yesNoSelection:
            return <InputSelectionYesNo {...field} />;

        case TypeOfValues.expression:
            return <InputExpression {...field} />;

        case TypeOfValues.assign:
            return <Assign {...field} />;

        default:
            return null;
    }
}
