import React from 'react';

import { IItem, TypeValues } from './properties-editor/shared/interfaces';
import { PropertiesEditor } from './properties-editor/PropertiesEditor';
import './App.css';

const item: IItem = {
  id: '1',
  name: 'My name to view only',
  subname: 'Teste',
  isHeader: true,
  properties: [
    {
      id: '0',
      name: 'Name',
      information: 'Minha infromação de teste. Esta informação serve para informar algo que pode ser importante ao usuário!',
      value: 'My name to view only',
      type: TypeValues.viewOnly,
      propertieType: 'viewOnly',
      valueHasError: false,
      nameHasError: false,
    },
    {
      id: '1',
      name: 'String',
      group: 'Simple',
      value: 'Any string',
      propertieType: 'String',
      type: TypeValues.string,
      information: 'Minha infromação de teste',
      editValueDisabled: false,
      editNameDisabled: false,
      valueHasError: false,
    },
    {
      id: '2',
      value: false,
      name: 'Boolean',
      group: 'Simple',
      propertieType: 'Boolean',
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
      group: 'Simple',
      information: 'Minha infromação de teste',
      editValueDisabled: false,
      propertieType: 'number',
      type: TypeValues.number,
      editNameDisabled: true,
      valueHasError: false,
      nameHasError: false,
    },
    {
      id: '4',
      value: null,
      name: 'Binary',
      group: 'Simple',
      propertieType: 'File',
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
      group: 'Advanced',
      name: 'Expression',
      information: 'Minha infromação de teste',
      type: TypeValues.expression,
      propertieType: 'expresion',
      editValueDisabled: false,
      openEditor: console.log,
      editNameDisabled: true,
      valueHasError: false,
      nameHasError: false,
    },
    {
      id: '6',
      group: 'Simple',
      name: 'Big string',
      value: 'My big string',
      propertieType: 'description',
      type: TypeValues.bigstring,
      information: 'Minha infromação de teste',
    },
    {
      id: '6',
      group: 'Simple',
      value: 'My full big string',
      propertieType: 'description',
      type: TypeValues.fullBigString,
    },
    {
      id: '7',
      value: 'true',
      group: 'Advanced',
      name: 'Condiction',
      propertieType: 'if',
      information: 'Minha infromação de teste',
      type: TypeValues.expression,
      editValueDisabled: false,
      openEditor: console.log,
      editNameDisabled: true,
      valueHasError: false,
      nameHasError: false,
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
      id: '8',
      name: 'Name',
      value: 'My name',
      group: 'Advanced',
      propertieType: 'name',
      information: 'Minha infromação de teste',
      nameSuggestions: [
        {
          label: 'Param1',
          description: '',
          disabled: false,
          value: 'Param1',
          name: 'Param1',
        },
        {
          label: 'Param2',
          description: '',
          disabled: false,
          value: 'Param2',
          name: 'Param2',
        },
        {
          label: 'Param3',
          description: '',
          disabled: false,
          value: 'Param3',
          name: 'Param3',
        },
        {
          label: 'Param4 disable',
          description: '',
          disabled: true,
          value: 'Param4',
          name: 'Param4',
        }
      ],
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
      ],
      editValueDisabled: false,
      openEditor: console.log,
      type: TypeValues.assign,
      editNameDisabled: false,
      valueHasError: false,
      nameHasError: false,
    },
    {
      id: '9',
      value: 'opts',
      name: 'Combo',
      group: 'Simple',
      propertieType: 'combo',
      editValueDisabled: false,
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
      value: 'false',
      group: 'Advanced',
      name: 'Combo Yes/No',
      propertieType: 'YesNo',
      editValueDisabled: false,
      type: TypeValues.yesNoSelection,
      information: 'Combo box para seleção de sim ou não(boolean)'
    },
    {
      id: '11',
      value: '',
      group: 'Advanced',
      name: 'Expression',
      information: 'Expression with suggestion',
      type: TypeValues.expression,
      propertieType: 'expresion',
      editValueDisabled: false,
      openEditor: console.log,
      editNameDisabled: true,
      valueHasError: false,
      nameHasError: false,
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
  ]
};

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ maxWidth: 300, minWidth: 300, alignContent: '', boxShadow: 'black 0px 0px 14px 0px' }}>
        <PropertiesEditor
          item={item}
          onChange={console.log}
          onChangeInputWidth={(width) => console.log(width)}
        />
      </div>
    </div>
  );
}

export default App;
