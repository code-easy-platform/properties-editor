import { useEffect, useRef, useState } from 'react';
import { observe, set } from 'react-observing';

import { Switch } from 'properties-editor/src/lib/shared/components/primitives/Switch';
import { PropertiesEditor } from 'properties-editor/src';

import { PROPERTIES } from './../Mock';
import './../styles.css';


export const App = () => {
  const properties = useRef(observe(PROPERTIES));


  const [valueHasWarning, setValueHasWarning] = useState(false);
  const [valueIsDisabled, setValueIsDisabled] = useState(false);
  const [nameIsDisabled, setNameIsDisabled] = useState(false);
  const [nameHasWarning, setNameHasWarning] = useState(false);
  const [valueHasError, setValueHasError] = useState(false);
  const [nameHasError, setNameHasError] = useState(false);
  const [fileMaxSize, setFileMaxSize] = useState(1000000);


  useEffect(() => {
    properties.current.value.forEach(prop => {
      set(prop.editValueDisabled, valueIsDisabled);
      set(prop.editNameDisabled, nameIsDisabled);
      set(prop.valueHasWarning, valueHasWarning);
      set(prop.nameHasWarning, nameHasWarning);
      set(prop.valueHasError, valueHasError);
      set(prop.nameHasError, nameHasError);
      set(prop.fileMaxSize, fileMaxSize);
    });
  }, [
    valueIsDisabled,
    nameIsDisabled,
    valueHasWarning,
    nameHasWarning,
    valueHasError,
    nameHasError,
    fileMaxSize,
  ]);


  return (
    <div className='w-screen h-screen bg-background flex justify-center gap-2'>
      <div className='mt-2 p-2 bg-paper self-start rounded'>
        <div className="p-1 flex itens-center justify-between gap-1">
          <label>Name has error</label>
          <Switch
            checked={nameHasError}
            onChange={() => setNameHasError(!nameHasError)}
          />
        </div>
        <div className="p-1 flex itens-center justify-between gap-1">
          <label>Name has warning</label>
          <Switch
            checked={nameHasWarning}
            onChange={() => setNameHasWarning(!nameHasWarning)}
          />
        </div>
        <div className="p-1 flex itens-center justify-between gap-1">
          <label>Value has error</label>
          <Switch
            checked={valueHasError}
            onChange={() => setValueHasError(!valueHasError)}
          />
        </div>
        <div className="p-1 flex itens-center justify-between gap-1">
          <label>Value has warning</label>
          <Switch
            checked={valueHasWarning}
            onChange={() => setValueHasWarning(!valueHasWarning)}
          />
        </div>
        <hr className="hr-white" />
        <div className="p-1 flex itens-center justify-between gap-1">
          <label>Value is disable</label>
          <Switch
            checked={valueIsDisabled}
            onChange={() => setValueIsDisabled(!valueIsDisabled)}
          />
        </div>
        <div className="p-1 flex itens-center justify-between gap-1">
          <label>Name is disable</label>
          <Switch
            checked={nameIsDisabled}
            onChange={() => setNameIsDisabled(!nameIsDisabled)}
          />
        </div>
        <hr className="hr-white" />
        <div className="p-1 flex itens-center justify-between gap-1" style={{ alignItems: 'center' }}>
          <label style={{ height: 'fit-content' }}>File max size in bytes</label>
          <input type={"number"} style={{ width: 80 }} onChange={e => setFileMaxSize(Number(e.target.value))} value={fileMaxSize} />
        </div>
      </div>

      <div className='w-96 bg-paper mt-2 p-2 pb-20 rounded overflow-auto'>
        <PropertiesEditor
          properties={properties.current}
        />
      </div>
    </div>
  );
}
