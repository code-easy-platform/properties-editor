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
        id: '0',
        name: 'Name',
        value: 'My name to view only',
        type: TypeValues.viewOnly,
        editValueDisabled: false,
        editNameDisabled: false,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '1',
        name: 'String',
        value: 'Any string',
        type: TypeValues.string,
        editValueDisabled: true,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '2',
        value: true,
        name: 'Boolean',
        type: TypeValues.boolean,
        editValueDisabled: true,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '3',
        value: 0,
        name: 'Number',
        type: TypeValues.number,
        editValueDisabled: true,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '4',
        value: null,
        name: 'Binary',
        type: TypeValues.binary,
        editValueDisabled: true,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '5',
        value: '',
        name: 'Expression',
        type: TypeValues.expression,
        editValueDisabled: true,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '6',
        value: 'true',
        name: 'Big string',
        type: TypeValues.bigstring,
        editValueDisabled: true,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '7',
        value: 'true',
        name: 'Condiction',
        type: TypeValues.expression,
        editValueDisabled: true,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '8',
        name: 'Name',
        value: 'My name',
        type: TypeValues.assign,
        editValueDisabled: true,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
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
