import React, { createContext, useState, useEffect } from 'react';

import { IPropertiesEditorConfigurations } from './../interfaces/';

interface IConfigurationContextData {
    configs: IPropertiesEditorConfigurations
}
export const ConfigurationContext = createContext<IConfigurationContextData>({} as IConfigurationContextData);

export const ConfigurationProvider: React.FC<{ configs: IPropertiesEditorConfigurations }> = ({ children, configs }) => {

    /** Default values from configs */

    // GENERAL


    const [state, setState] = useState<IConfigurationContextData>({ configs });
    useEffect(() => {
        setState({ configs });
    }, [configs]);

    return (
        <ConfigurationContext.Provider value={state} >
            {children}
        </ConfigurationContext.Provider>
    );
};
