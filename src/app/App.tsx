import React from 'react';

import { IItem, TypeValues } from './properties-editor/shared/interfaces';
import { PropertiesEditor } from './properties-editor/PropertiesEditor';
import './App.css';

const item: IItem = {
  id: '1',
  name: 'My name to view only',
  isHeader: true,
  properties: [
    {
      id: '0',
      name: 'Name',
      information: 'Minha infromação de teste. Esta informação serve para informar algo que pode ser importante ao usuário!',
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
      information: 'Minha infromação de teste',
      editValueDisabled: false,
      editNameDisabled: false,
      valueHasError: false,
    },
    {
      id: '2',
      value: true,
      name: 'Boolean',
      information: 'Minha infromação de teste',
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
      information: 'Minha infromação de teste',
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
      information: 'Minha infromação de teste',
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
      information: 'Minha infromação de teste',
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
      information: 'Minha infromação de teste',
    },
    {
      id: '7',
      value: 'true',
      name: 'Condiction',
      information: 'Minha infromação de teste',
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
      information: 'Minha infromação de teste',
      type: TypeValues.assign,
      editValueDisabled: false,
      editNameDisabled: false,
      valueHasError: false,
      nameHasError: false,
    },
    {
      id: '9',
      value: 'opts',
      editValueDisabled: false,
      name: 'Combo',
      type: TypeValues.selection,
      information: 'Combo box para seleção única de itens',
      suggestions: [
        {
          label: 'Opção sugerida',
          description: '',
          disabled: false,
          value: 'opts1',
          name: 'opts1',
        },
        {
          label: 'Opção sugerida 1',
          description: '',
          disabled: false,
          value: 'opts2',
          name: 'opts2',
        },
        {
          label: 'Opção sugerida 2',
          description: '',
          disabled: false,
          value: 'opts3',
          name: 'opts3',
        },
        {
          label: 'Opção sugerida disable',
          description: '',
          disabled: true,
          value: 'opts4',
          name: 'opts4',
        }
      ]
    },
    {
      id: '10',
      name: 'Combo Yes/No',
      value: 'false',
      editValueDisabled: false,
      type: TypeValues.yesNoSelection,
      information: 'Combo box para seleção de sim ou não(boolean)'
    }
  ]
};

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ maxWidth: 300, minWidth: 300, alignContent: '' }}>
        <PropertiesEditor
          item={item}
          onChange={itens => console.log(itens)}
          onChangeInputWidth={(width) => console.log(width)}
        />
      </div>
    </div>
  );
}

export default App;
