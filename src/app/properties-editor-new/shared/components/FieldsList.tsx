import React from 'react';

import { IProperties } from '../interfaces';
import { Field } from './Field';
import { FieldGroup } from './fields/FieldGroup';

interface FieldsListProps {
    fields: IProperties[];
}
export const FieldsList: React.FC<FieldsListProps> = ({ fields = [] }) => {

    let groups: string[] = [];
    fields.forEach(prop => {
        if (prop.group && (!groups.some(grup => grup === prop.group))) {
            groups.push(prop.group);
        }
    });

    return (
        <div className="flex-column overflow-auto full-height">
            {fields.filter(field => field.group === undefined).map((field, index) => <Field key={index} field={field} />)}
            {groups.map((group, index) => {
                return (
                    <FieldGroup key={index} group={group}>
                        {fields.filter(prop => prop.group === group).map((field, index) => (
                            <Field
                                key={index}
                                field={field}
                            />
                        ))}
                    </FieldGroup>
                );
            })}
        </div>
    );
}
