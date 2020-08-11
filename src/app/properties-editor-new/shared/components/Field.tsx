import React from 'react';

import { InputViewOnly, SimpleString, InputSwitch, InputSimpleNumber } from './fields/inputs/';
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

        default:
            return null;
    }
}
