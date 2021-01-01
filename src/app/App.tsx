import React, { useEffect, useState } from 'react';
import { observe, set } from 'react-observing';

import { Switch } from './properties-editor/shared/components/toggle-swicth/Switch';
import { IItem, PropertiesEditor } from './properties-editor';
import { Item } from './Mock';
import './App.css';

const App: React.FC = () => {
  const [item, setItem] = useState<IItem>({ id: observe(''), name: observe(''), subname: observe(undefined), properties: [] });
  useEffect(() => {
    setTimeout(() => {
      setItem(Item);
    }, 500);
  }, []);

  const [valueHasWarning, setValueHasWarning] = useState(false);
  const [valueIsDisabled, setValueIsDisabled] = useState(false);
  const [nameIsDisabled, setNameIsDisabled] = useState(false);
  const [nameHasWarning, setNameHasWarning] = useState(false);
  const [valueHasError, setValueHasError] = useState(false);
  const [nameHasError, setNameHasError] = useState(false);
  const [fileMaxSize, setFileMaxSize] = useState(1000000);

  item.properties.forEach(prop => {
    set(prop.editValueDisabled, valueIsDisabled);
    set(prop.editNameDisabled, nameIsDisabled);
    set(prop.valueHasWarning, valueHasWarning);
    set(prop.nameHasWarning, nameHasWarning);
    set(prop.valueHasError, valueHasError);
    set(prop.nameHasError, nameHasError);
    set(prop.fileMaxSize, fileMaxSize);
  });

  useEffect(() => console.log(item), [item]);

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
        <hr className="hr-white" />
        <div className="padding-s flex-itens-center flex-space-between" style={{ alignItems: 'center' }}>
          <label className="margin-right-s" style={{ height: 'fit-content' }}>File max size in bytes</label>
          <input type={"number"} style={{ width: 80 }} onChange={e => setFileMaxSize(Number(e.target.value))} value={fileMaxSize} />
        </div>
      </div>
      <div style={{ maxWidth: 300, minWidth: 300, alignContent: '', boxShadow: 'black 0px 0px 14px 0px' }}>
        <PropertiesEditor
          item={item}
          configs={{
            // borderDefaultColor: 'green',
          }}
        />
      </div>
    </div>
  );
}

export default App;
