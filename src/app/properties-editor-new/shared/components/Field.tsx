import React from 'react';

import { IProperties } from '../interfaces';

interface FieldProps {
    field: IProperties;
}
export const Field: React.FC<FieldProps> = ({ field }) => {

    return (
        <>{field.value}</>
    );
}
