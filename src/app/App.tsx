import React, { useState } from 'react';

import { PropertiesEditor, TypeOfValues, IItem } from './properties-editor/';
import { Switch } from './properties-editor/shared/components/toggle-swicth/Switch';
import './App.css';

let item: IItem = {
  id: 'T',
  isHeader: false,
  name: 'My name to view only',
  subname: 'My interesting subname',
  properties: [
    {
      id: '11',
      name: 'View only',
      type: TypeOfValues.viewOnly,
      value: 'My name to view only',
      information: 'View only, used just for show some information',
    },
    {
      id: '12',
      group: 'Simple',
      name: 'Simple string',
      type: TypeOfValues.string,
      value: 'tesstetesstetesstetesstetesstetesstetesste',
      information: 'Input simple string, allow you type any string',
    },
    {
      id: '13',
      value: false,
      name: 'Boolean',
      group: 'Simple',
      type: TypeOfValues.boolean,
      information: 'Input switch, allow you toggle between true or false',
    },
    {
      id: '14',
      value: 0,
      name: 'Number',
      group: 'Simple',
      type: TypeOfValues.number,
      information: 'Inpu simple number, allow you type any number',
    },
    {
      id: '15',
      value: null,
      name: 'Binary',
      group: 'Simple',
      type: TypeOfValues.binary,
      information: 'Input binary, allow you import your files from your device',
    },
    {
      id: '16',
      group: 'Simple',
      name: 'Big string',
      value: 'My big string',
      type: TypeOfValues.bigstring,
      information: 'Input big string, allow you write a big string with many lines',
    },
    {
      id: '17',
      group: 'Simple',
      value: 'My full big string',
      type: TypeOfValues.fullBigString,
      information: 'Input big string, allow you write a big string with many lines and not show the input label',
    },
    {
      id: '18',
      name: 'Combo',
      group: 'Simple',
      value: undefined,
      type: TypeOfValues.selection,
      information: 'Input selection, allow you select one of suggestions',
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
          description: 'Minha description',
          label: 'Opção sugerida 2',
          disabled: false,
          value: 'opts3',
          name: 'opts3',
        },
        {
          description: 'Minha description',
          label: 'Opção sugerida disable',
          disabled: true,
          value: 'opts4',
          name: 'opts4',
        }
      ],
    },
    {
      id: '19',
      value: true,
      group: 'Simple',
      name: 'Combo Yes/No',
      type: TypeOfValues.yesNoSelection,
      information: 'Input selection yes/no, allow you toggle between "yes" and "no". The output is boolean',
    },
    {
      id: '20',
      group: 'Advanced',
      name: 'Expression',
      value: 'tesstetes',
      useOnChange: true,
      type: TypeOfValues.expression,
      onPickerValueClick: (e) => console.log('Value', e),
      information: 'Input expression, allow you type expressions and conditions',
    },
    {
      id: '21',
      group: 'Advanced',
      useOnChange: true,
      value: 'tesstetes',
      name: 'Expression suggests',
      type: TypeOfValues.expression,
      onPickerValueClick: (e) => console.log('Value', e),
      information: 'Input expression, allow you type expressions and conditions and suggestion',
      suggestions: [
        {
          label: 'Opção sugerida',
          description: '',
          disabled: false,
          value: 'opts1',
          name: 'opts1',
        },
        {
          label: 'Opção.Sugerida.Sugerida.Sugerida',
          value: 'Opção.Sugerida.Sugerida.Sugerida',
          name: 'Opção.Sugerida.Sugerida.Sugerida',
          description: '',
          disabled: false,
        },
        {
          description: 'Minha description',
          label: 'Opção.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida.Sugerida',
          disabled: false,
          value: 'opts3',
          name: 'opts3',
        },
        {
          description: 'Minha description',
          label: 'Opção sugerida disabled',
          disabled: true,
          value: 'opts4',
          name: 'opts4',
        },
      ],
    },
    {
      id: '22',
      name: 'Name',
      value: 'My name',
      group: 'Advanced',
      propertieType: 'name',
      editNameDisabled: false,
      editValueDisabled: false,
      type: TypeOfValues.assign,
      onPickerNameClick: (e) => console.log('Name', e),
      onPickerValueClick: (e) => console.log('Value', e),
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
    },
  ]
};

const App: React.FC = () => {
  const [useOnChange, setUseOnChange] = useState(false);
  const [nameHasError, setNameHasError] = useState(false);
  const [fileMaxSize, setFileMaxSize] = useState(1000000);
  const [valueHasError, setValueHasError] = useState(false);
  const [nameHasWarning, setNameHasWarning] = useState(false);
  const [nameIsDisabled, setNameIsDisabled] = useState(false);
  const [valueHasWarning, setValueHasWarning] = useState(false);
  const [valueIsDisabled, setValueIsDisabled] = useState(false);

  item.properties.forEach(prop => {
    prop.nameHasError = nameHasError;
    prop.valueHasError = valueHasError;
    prop.nameHasWarning = nameHasWarning;
    prop.valueHasWarning = valueHasWarning;
    prop.editValueDisabled = valueIsDisabled;
    prop.editNameDisabled = nameIsDisabled;
    prop.useOnChange = useOnChange;
    prop.fileMaxSize = fileMaxSize;
  });

  return (
    <div className="App">
      <div className="padding-s flex-column">
        <div className="padding-s flex-itens-center flex-space-between">
          <label className="margin-right-s">Name has error</label>
          <Switch
            checked={nameHasError}
            border={'var(--input-border)'}
            onChange={() => setNameHasError(!nameHasError)}
            backgroundColor={'var(--main-background-bars)'}
          />
        </div>
        <div className="padding-s flex-itens-center flex-space-between">
          <label className="margin-right-s">Name has warning</label>
          <Switch
            checked={nameHasWarning}
            border={'var(--input-border)'}
            backgroundColor={'var(--main-background-bars)'}
            onChange={() => setNameHasWarning(!nameHasWarning)}
          />
        </div>
        <div className="padding-s flex-itens-center flex-space-between">
          <label className="margin-right-s">Value has error</label>
          <Switch
            checked={valueHasError}
            border={'var(--input-border)'}
            backgroundColor={'var(--main-background-bars)'}
            onChange={() => setValueHasError(!valueHasError)}
          />
        </div>
        <div className="padding-s flex-itens-center flex-space-between">
          <label className="margin-right-s">Value has warning</label>
          <Switch
            checked={valueHasWarning}
            border={'var(--input-border)'}
            backgroundColor={'var(--main-background-bars)'}
            onChange={() => setValueHasWarning(!valueHasWarning)}
          />
        </div>
        <hr className="hr-white" />
        <div className="padding-s flex-itens-center flex-space-between">
          <label className="margin-right-s">Value is disable</label>
          <Switch
            checked={valueIsDisabled}
            border={'var(--input-border)'}
            backgroundColor={'var(--main-background-bars)'}
            onChange={() => setValueIsDisabled(!valueIsDisabled)}
          />
        </div>
        <div className="padding-s flex-itens-center flex-space-between">
          <label className="margin-right-s">Name is disable</label>
          <Switch
            checked={nameIsDisabled}
            border={'var(--input-border)'}
            backgroundColor={'var(--main-background-bars)'}
            onChange={() => setNameIsDisabled(!nameIsDisabled)}
          />
        </div>
        <div className="padding-s flex-itens-center flex-space-between flex-center">
          <label className="margin-right-s">Use on change</label>
          <Switch
            checked={useOnChange}
            border={'var(--input-border)'}
            backgroundColor={'var(--main-background-bars)'}
            onChange={() => setUseOnChange(!useOnChange)}
          />
        </div>
        <hr className="hr-white" />
        <div className="padding-s flex-itens-center flex-space-between" style={{ alignItems: 'center' }}>
          <label className="margin-right-s" style={{ height: 'fit-content' }}>File max size in bytes</label>
          <input type={"number"} style={{ width: 80 }} onChange={e => setFileMaxSize(Number(e.target.value))} value={fileMaxSize} />
        </div>
      </div>
      <div style={{ maxWidth: 300, minWidth: 300, alignContent: '', boxShadow: 'black 0px 0px 14px 0px' }}>
        <PropertiesEditor
          item={item}
        // onChange={console.log}
        // onChangeInputWidth={(width) => console.log(width)}
        />
      </div>
    </div>
  );
}

export default App;
