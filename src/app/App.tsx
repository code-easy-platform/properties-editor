import React from 'react';

import { PropertiesEditor } from './properties-editor/PropertiesEditor';
import { IItem, TypeValues } from './properties-editor/shared/interfaces';
import './App.scss';

const itens: IItem[] = [
  {
    id: '1',
    name: 'Any string',
    isHeader: true,
    properties: [
      {
        id: '1',
        name: 'String',
        value: 'Any string',
        type: TypeValues.string
      },
      {
        id: '2',
        value: true,
        name: 'Boolean',
        type: TypeValues.boolean
      },
      {
        id: '3',
        value: 0,
        name: 'Number',
        type: TypeValues.number
      },
      {
        id: '4',
        value: null,
        name: 'Binary',
        type: TypeValues.binary
      },
      {
        id: '5',
        value: '',
        name: 'Expression',
        type: TypeValues.expression
      },
      {
        id: '6',
        value: 'true',
        name: 'Big string',
        type: TypeValues.bigstring
      },
      {
        id: '7',
        value: 'true',
        name: 'Condiction',
        type: TypeValues.expression
      },
      {
        id: '8',
        value: 'My name',
        name: 'Name',
        type: TypeValues.assign
      }
    ]
  }
]

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ maxWidth: 300, minWidth: 300, alignContent: '' }}>
        <PropertiesEditor
          itens={itens}
          onChange={itens => console.log(itens)}
        />
      </div>
    </div>
  );
}

export default App;
