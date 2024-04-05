import React, { memo, useCallback } from 'react';
import { observe, useObserver, useObserverValue } from 'react-observing';
import { VscInfo, VscTrash } from 'react-icons/vsc';

import { IProperty, IMappedFieldOptionList } from '../../../interfaces';
import { Tooltip } from '../../primitives/Tooltip';


interface InputOptionListProps extends IProperty<IMappedFieldOptionList[]> { }
export const InputOptionList: React.FC<InputOptionListProps> = ({ ...props }) => {
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
    setOptions(old => [
      ...old,
      {
        name: observe(''),
        value: observe(''),
      }
    ]);
  }

  const handleDelete = useCallback((position: number) => {
    setOptions(old => {
      old.splice(position, 1);
      return [...old];
    });
  }, [setOptions]);

  return (
    <div className={`flex flex-col p-2 gap-2 bg-background rounded ${(valueHasError || nameHasError) ? "border border-red-500" : ""} ${(valueHasWarning || nameHasWarning) ? "border border-yellow-500" : ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span>{name}</span>

          {(information !== "" && information !== undefined) && (
            <Tooltip text={information}>
              <VscInfo size={15} />
            </Tooltip>
          )}
        </div>
      </div>

      <div id={id} className="flex flex-col gap-1">
        {options.map((option, index) => (
          <Option
            name={option.name}
            value={option.value}
            key={option.value.id}
            disabled={!!editValueDisabled}
            onDelete={() => handleDelete(index)}
          />
        ))}

        {options.length === 0 && <span className="font-light italic">No options</span>}
      </div>

      <button className="text-sm text-primary" onClick={handleAdd}>
        + Add
      </button>
    </div>
  );
}

interface IOptionProps extends IMappedFieldOptionList {
  disabled: boolean;
  onDelete: () => void;
}
const Option: React.FC<IOptionProps> = memo(({ name: nameObservable, value: valueObservable, disabled, onDelete }) => {
  const [value, setValue] = useObserver(valueObservable);
  const [name, setName] = useObserver(nameObservable);

  return (
    <div className="flex gap-0.5">
      <input
        className={"w-full bg-paper p-1 rounded-r-none"}
        onChange={e => setName(e.target.value)}
        autoComplete={'off'}
        disabled={disabled}
        placeholder="Name"
        value={name}
      />
      <input
        className={"w-full bg-paper p-1 rounded-l-none"}
        onChange={e => setValue(e.target.value)}
        autoComplete={'off'}
        placeholder="Value"
        disabled={disabled}
        value={value}
      />
      <button className="p-1" onClick={onDelete}>
        <VscTrash />
      </button>
    </div>
  );
});
