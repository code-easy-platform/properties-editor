import React from 'react';

import { InputViewOnly, SimpleString, InputSwitch, InputSimpleNumber, InputImportFile, InputBigString, InputFullBigString } from './fields/inputs/';
import { IProperties } from '../interfaces';
import { TypeOfValues } from '../enums';

interface FieldProps {
    field: IProperties;
}
export const Field: React.FC<FieldProps> = ({ field }) => {

    switch (field.type) {
        case TypeOfValues.viewOnly:
            return <InputViewOnly {...field} />;

        case TypeOfValues.string:
            return <SimpleString onChange={console.log} {...field} />;

        case TypeOfValues.boolean:
            return <InputSwitch onChange={console.log} {...field} />;

        case TypeOfValues.number:
            return <InputSimpleNumber onChange={console.log} {...field} />;

        case TypeOfValues.binary:
            return <InputImportFile onChange={console.log} {...field} />;

        case TypeOfValues.bigstring:
            return <InputBigString onChange={console.log} {...field} />;

        case TypeOfValues.fullBigString:
            return <InputFullBigString onChange={console.log} {...field} />;

        default:
            return null;
    }
}
