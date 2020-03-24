import React from 'react';

import { PropertiesEditor } from './properties-editor/PropertiesEditor';
import { IItem } from './properties-editor/shared/interfaces';
import './App.scss';

const itens: IItem[] = [
  {
    id: 1,
    name: 'IF',
    isHeader: true,
    properties: [
      {
        id: 1,
        label: 'Name',
        value: 'IF'
      },
      {
        id: 2,
        label: 'Condiction',
        value: 'true'
      },
    ]
  }
]

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ maxWidth: 300, minWidth: 300, alignContent: '' }}>
        <PropertiesEditor
          itens={itens}
        />
      </div>
    </div>
  );
}

export default App;
