import React from 'react';

import { IItem, IProperty, IPropertiesEditorConfigurations } from './shared/interfaces';
import { RecoilContainer } from './shared/stores/RecoilContainer';
import { ConfigurationProvider } from './shared/contexts';
import { PropertiesEditorForm } from './PropertiesEditor';

interface PropertiesEditorProps {
    item: IItem;
    configs?: IPropertiesEditorConfigurations;
    onChange?(fields: IProperty<any>[]): void;
}
export const PropertiesEditor: React.FC<PropertiesEditorProps> = ({ item, onChange, configs }) => {

    return (
        <ConfigurationProvider configs={configs as IPropertiesEditorConfigurations}>
            <RecoilContainer>
                <PropertiesEditorForm item={item} onChange={onChange} />
            </RecoilContainer>
        </ConfigurationProvider>
    );
}

export * from './shared/interfaces';
export * from './shared/enums';
