import React, { useState, useCallback, useEffect } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { ISubscription } from 'react-observing';

import { LocalStorageService } from '../../local-storage/LocalStorage';
import { IProperty } from '../../interfaces';
import { Field } from './Field';


interface FieldGroupProps {
  group?: string;
  properties: IProperty[];
}
export const FieldGroup: React.FC<FieldGroupProps> = ({ properties, group }) => {
  const [isOpen, setIsOpen] = useState(group ? LocalStorageService.getGroupsInOpen(group) : true);
  const [sortedProperties, setSortedProperties] = useState<IProperty[]>([]);


  /* Initialize the state, and change when updated */
  useEffect(() => {
    setSortedProperties(() => {
      properties.sort((a, b) => ((a.order.value || 0) - (b.order.value || 0)));
      return properties;
    });
  }, [properties]);

  /* Subscribe in all order properties and update the sortedProperties state */
  useEffect(() => {
    const subscriptions: ISubscription[] = [];

    properties.forEach(prop => {
      subscriptions.push(prop.order.subscribe(() => {
        setSortedProperties(() => {
          properties.sort((a, b) => ((a.order.value || 0) - (b.order.value || 0)));
          return properties;
        });
      }))
    });

    return () => subscriptions.forEach(sub => sub.unsubscribe());
  }, [properties]);


  const handleOnClick = useCallback(() => {
    setIsOpen(!isOpen);
    if (group) {
      LocalStorageService.setGroupsInOpen(group, !isOpen);
    }
  }, [isOpen, group]);


  return (
    <div className="flex flex-col">
      {group && (
        <>
          <hr className="mt-3" />
          <div
            onClick={handleOnClick}
            className="flex py-3 px-0 justify-between cursor-pointer items-center"
          >
            {group.toUpperCase()}
            {isOpen ? <VscChevronUp /> : <VscChevronDown />}
          </div>
        </>
      )}
      {isOpen && <div data-animate={!!group} className="flex flex-col gap-1 data-[animate=true]:animate-fade-in">
        {sortedProperties.map((field) => (
          <Field
            field={field}
            key={field.id.value}
          />
        ))}
      </div>}
    </div>
  );
}
