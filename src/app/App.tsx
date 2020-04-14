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
        label: 'String',
        value: 'Any string',
        typeValue: TypeValues.string
      },
      {
        id: '2',
        value: true,
        label: 'Boolean',
        typeValue: TypeValues.boolean
      },
      {
        id: '3',
        value: 0,
        label: 'Number',
        typeValue: TypeValues.number
      },
      {
        id: '4',
        value: null,
        label: 'Binary',
        typeValue: TypeValues.binary
      },
      {
        id: '5',
        value: '',
        label: 'Expression',
        typeValue: TypeValues.expression
      },
      {
        id: '6',
        value: 'true',
        label: 'Big string',
        typeValue: TypeValues.bigstring
      },
      {
        id: '7',
        value: 'true',
        label: 'Condiction',
        typeValue: TypeValues.string
      }
    ]
  }
]

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ maxWidth: 300, minWidth: 300, height: 200, alignContent: '', marginTop: 400 }}>
        <PropertiesEditor
          itens={itens}
          onChange={itens => console.log(itens)}
        />
      </div>
    </div>
  );
}

export default App;
