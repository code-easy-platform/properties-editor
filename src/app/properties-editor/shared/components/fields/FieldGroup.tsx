import React, { useState, useCallback, useEffect } from 'react';
import { IconExpandedFolder, IconCollapsedFolder } from 'code-easy-components';

import { LocalStorageService } from '../../local-storage/LocalStorage';
import { IProperty } from '../../interfaces';
import { Field } from '../Field';
import { ISubscription } from 'react-observing';

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
        <div className="flex-column">
            {group && (
                <>
                    <hr className="hr hr-white margin-top-m " />
                    <div
                        className="padding-top-m padding-bottom-m padding-horizontal-s flex-space-between"
                        style={{ cursor: 'pointer' }}
                        onClick={handleOnClick}
                    >
                        {group.toUpperCase()}
                        {isOpen
                            ? <img src={IconCollapsedFolder} alt="icon" />
                            : <img src={IconExpandedFolder} alt="icon" />
                        }
                    </div>
                </>
            )}
            {isOpen && <div className="flex-column fade-in">
                {sortedProperties.map((field, index) => (
                    <Field
                        key={index}
                        field={field}
                    />
                ))}
            </div>}
        </div>
    );
}
