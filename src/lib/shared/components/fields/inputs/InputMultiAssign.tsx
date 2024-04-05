import React, { Fragment, useCallback } from 'react';
import { useObserver, useObserverValue } from 'react-observing';
import { VscInfo, VscTrash } from 'react-icons/vsc';

import { newEmptyProperty } from '../../../helpers';
import { Tooltip } from '../../primitives/Tooltip';
import { IProperty } from '../../../interfaces';
import { Assign } from './Assign';


interface InputMultiAssignProps extends IProperty<IProperty[]> { }
export const InputMultiAssign: React.FC<InputMultiAssignProps> = ({ ...props }) => {
  const valueHasWarning = useObserverValue(props.valueHasWarning);
  const nameHasWarning = useObserverValue(props.nameHasWarning);
  const valueHasError = useObserverValue(props.valueHasError);
  const nameHasError = useObserverValue(props.nameHasError);
  const information = useObserverValue(props.information);
  const [options, setOptions] = useObserver(props.value);
  const name = useObserverValue(props.name);
  const id = useObserverValue(props.id);


  const handleAdd = useCallback(() => {
    setOptions(old => [...old, newEmptyProperty({})]);
  }, [setOptions]);

  const handleDelete = useCallback((position: number) => {
    setOptions(old => {
      old.splice(position, 1);
      return [...old];
    });
  }, [setOptions]);


  return (
    <div className={`flex flex-col p-2 pt-1 gap-2 border rounded ${(valueHasError || nameHasError) ? "border border-red-500" : ""} ${(valueHasWarning || nameHasWarning) ? "border border-yellow-500" : ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">

          <span className='text-sm font-light'>{name}</span>
          {(information !== "" && information !== undefined) && (
            <Tooltip text={information}>
              <VscInfo size={15} />
            </Tooltip>
          )}
        </div>
      </div>

      <div id={id} className={`flex flex-col gap-1`}>
        {options.map((option, index) => (
          <Fragment key={option.id.value}>
            <div className="flex items-center">
              <Assign
                {...option}
                inputClassName='bg-background'
                editValueDisabled={props.editValueDisabled}
              />

              <VscTrash
                onClick={() => handleDelete(index)}
                style={{ minWidth: 16, minHeight: 16 }}
                className="ml-1 cursor-pointer hover:text-red-400 active:opacity-80"
              />
            </div>
            {(index + 1) < options.length && <hr />}
          </Fragment>
        ))}

        {options.length === 0 && <span className="font-light italic">No options</span>}
      </div>

      <button className="text-sm text-secondary" onClick={handleAdd}>
        + Add
      </button>
    </div>
  );
}
