import React, { useState, useEffect } from 'react';

import { IItem, IProperties } from '../interfaces';
import { PropItem } from './PropItem';

interface ListItemProps extends IItem { onChange(data: IItem): void; inputWidth: number; paiRef: any; onChangeInputWidth(width: number): void; }
export const ListItem: React.FC<ListItemProps> = ({ id, name, properties, isHeader, onChange, inputWidth, paiRef, onChangeInputWidth }) => {

    const [state, setState] = useState<IItem>({ id, name, properties, isHeader });
    useEffect(() => {
        setState({ id, name, properties, isHeader });
    }, [id, name, properties, isHeader]);

    const css_list_item: React.CSSProperties = {
        backgroundColor: isHeader ? 'var(--main-background-bars)' : '',
        justifyContent: 'space-between',
        height: 'min-content',
        alignItems: 'center',
        padding: 12,
        paddingRight: 8,
        paddingLeft: 8,
    }

    const onChangeItemProp = (item: IProperties, propIndex: number) => {

        state.properties[propIndex] = item;
        state.name = state.properties[0].value;

        setState({ ...state });

        onChange(state);

    }

    return (
        <>
            <div style={css_list_item}>{state.name}</div>
            {state.properties.map((prop, index) => <PropItem onChangeInputWidth={onChangeInputWidth} paiRef={paiRef} inputWidth={inputWidth} onChange={item => onChangeItemProp(item, index)} {...prop} />)}
        </>
    );
}
