import React from 'react';
import { IObservable, useObserverValue } from 'react-observing';

import { FieldGroup } from './fields/FieldGroup';
import { IProperty } from '../interfaces';

interface FieldsListProps {
    fields: IObservable<IProperty[]>;
}
export const FieldsList: React.FC<FieldsListProps> = ({ fields }) => {
    const properties = useObserverValue(fields);

    let groups: string[] = [];
    properties.forEach(prop => {
        if (prop.group.value && (!groups.some(group => group === prop.group.value))) {
            groups.push(prop.group.value);
        }
    });

    return (
        <div className="flex-column overflow-auto full-height">
            <FieldGroup properties={properties.filter(field => field.group.value === undefined)} />

            {groups.map((group, index) => {
                return (
                    <FieldGroup
                        key={index}
                        group={group}
                        properties={properties.filter(prop => prop.group.value === group)}
                    />
                );
            })}
        </div>
    );
}
