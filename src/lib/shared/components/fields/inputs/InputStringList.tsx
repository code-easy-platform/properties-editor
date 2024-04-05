import React from 'react';
import { useObserver, useObserverValue } from 'react-observing';
import { VscInfo, VscTrash } from 'react-icons/vsc';

import { IProperty } from '../../../interfaces';
import { Tooltip } from '../../primitives/Tooltip';

interface InputStringListProps extends IProperty<string[]> { }
export const InputStringList: React.FC<InputStringListProps> = ({ ...props }) => {
  const editValueDisabled = useObserverValue(props.editValueDisabled);
  const valueHasWarning = useObserverValue(props.valueHasWarning);
  const nameHasWarning = useObserverValue(props.nameHasWarning);
  const valueHasError = useObserverValue(props.valueHasError);
  const nameHasError = useObserverValue(props.nameHasError);
  const information = useObserverValue(props.information);
  const [options, setOptions] = useObserver(props.value);
  const name = useObserverValue(props.name);
  const id = useObserverValue(props.id);

  const handleAdd = () => {
    setOptions(old => [...old, '']);
  }

  return (
    <div className={`flex flex-col p-2 pt-1 gap-2 border rounded ${(valueHasError || nameHasError) ? "border border-red-500" : ""} ${(valueHasWarning || nameHasWarning) ? "border border-yellow-500" : ""}`}>
      <div className="flex items-center gap-2">
        <span className='text-sm font-light'>{name}</span>

        {(information !== "" && information !== undefined) && (
          <Tooltip text={information}>
            <VscInfo size={15} />
          </Tooltip>
        )}
      </div>

      <div id={id} className="flex flex-col gap-1">
        {options.map((option, index) => (
          <div key={index} className="flex gap-0.5">
            <input
              className="w-full bg-background p-1"
              disabled={editValueDisabled}
              autoComplete='off'
              value={option}
              onChange={e => {
                options[index] = e.target.value;
                setOptions([...options]);
              }}
            />
            <button className="p-1" disabled={editValueDisabled} onClick={() => setOptions([...options.filter((_, i) => i !== index)])}>
              <VscTrash />
            </button>
          </div>
        ))}

        {options.length === 0 && <span className="font-light">No options</span>}

        <button className="text-sm text-secondary" onClick={handleAdd}>
          + Add
        </button>
      </div>
    </div>
  );
}
