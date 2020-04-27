import React from 'react';

import { IItem, TypeValues } from './properties-editor/shared/interfaces';
import { PropertiesEditor } from './properties-editor/PropertiesEditor';
import './App.css';

const itens: IItem[] = [
  {
    id: '1',
    name: 'My name to view only',
    isHeader: true,
    properties: [
      {
        id: '0',
        name: 'Name',
        value: 'My name to view only',
        type: TypeValues.viewOnly,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '1',
        name: 'String',
        value: 'Any string',
        type: TypeValues.string,
        editValueDisabled: false,
        editNameDisabled: true,
        valueHasError: true,
      },
      {
        id: '2',
        value: true,
        name: 'Boolean',
        type: TypeValues.boolean,
        editValueDisabled: false,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '3',
        value: 0,
        name: 'Number',
        type: TypeValues.number,
        editValueDisabled: false,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '4',
        value: null,
        name: 'Binary',
        type: TypeValues.binary,
        editValueDisabled: false,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '5',
        value: '',
        name: 'Expression',
        type: TypeValues.expression,
        editValueDisabled: false,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '6',
        name: 'Big string',
        value: 'My big string',
        type: TypeValues.bigstring,
      },
      {
        id: '7',
        value: 'true',
        name: 'Condiction',
        type: TypeValues.expression,
        editValueDisabled: false,
        editNameDisabled: true,
        valueHasError: false,
        nameHasError: false,
      },
      {
        id: '8',
        name: 'Name',
        value: 'My name',
        type: TypeValues.assign,
        editValueDisabled: false,
        editNameDisabled: false,
        valueHasError: true,
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
          onChangeInputWidth={(width) => console.log(width)}
        />
      </div>
    </div>
  );
}

export default App;
