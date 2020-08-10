import React from 'react';

import { RecoilContainer } from './shared/stores/RecoilContainer';
import { ConfigurationProvider } from './shared/contexts';
import { PropertiesEditorForm } from './PropertiesEditor';
import { IItem } from './shared/interfaces';

interface PropertiesEditorProps {
    item: IItem;
}
export const PropertiesEditor: React.FC<PropertiesEditorProps> = ({ item }) => {

    return (
        <ConfigurationProvider configs={{}}>
            <RecoilContainer>
                <PropertiesEditorForm item={item} />
            </RecoilContainer>
        </ConfigurationProvider>
    );
}
