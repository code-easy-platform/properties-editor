import React, { useMemo } from 'react';
import { IObservable, useObserverValue } from 'react-observing';

import { IProperty } from '../../interfaces';
import { FieldGroup } from './FieldGroup';


interface FieldsListProps {
  fields: IObservable<IProperty[]>;
}
export const FieldsList: React.FC<FieldsListProps> = ({ fields }) => {
  const properties = useObserverValue(fields);


  const propertiesWithoutGroups = useMemo(() => {
    return properties.filter(field => field.group.value === undefined);
  }, [properties]);

  const propertiesWithGroups = useMemo(() => {
    const groups: string[] = [];

    properties.forEach(prop => {
      if (prop.group.value && (!groups.some(group => group === prop.group.value))) {
        groups.push(prop.group.value);
      }
    });

    return groups;
  }, [properties]);


  return (
    <div className="flex-1 flex-col w-full h-full">
      <FieldGroup properties={propertiesWithoutGroups} />

      {propertiesWithGroups.map((group) => {
        return (
          <FieldGroup
            key={group}
            group={group}
            properties={properties.filter(prop => prop.group.value === group)}
          />
        );
      })}

      {properties.length === 0 && <span className="font-light italic">Nothing here...</span>}
    </div>
  );
}
