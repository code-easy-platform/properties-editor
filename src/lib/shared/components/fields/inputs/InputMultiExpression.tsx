import React from 'react';
import { useObserverValue } from 'react-observing';
import { VscInfo } from 'react-icons/vsc';

import { InputExpression } from './InputExpression';
import { Tooltip } from '../../primitives/Tooltip';
import { IProperty } from '../../../interfaces';


interface InputMultiExpressionProps extends IProperty<IProperty[]> { }
export const InputMultiExpression: React.FC<InputMultiExpressionProps> = ({ ...props }) => {
  const valueHasWarning = useObserverValue(props.valueHasWarning);
  const nameHasWarning = useObserverValue(props.nameHasWarning);
  const valueHasError = useObserverValue(props.valueHasError);
  const nameHasError = useObserverValue(props.nameHasError);
  const information = useObserverValue(props.information);
  const options = useObserverValue(props.value);
  const name = useObserverValue(props.name);
  const id = useObserverValue(props.id);


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
        {options.map(option => (
          <InputExpression
            {...option}

            editValueDisabled={props.editValueDisabled}
          />
        ))}

        {options.length === 0 && <span className="font-light italic">No options</span>}
      </div>
    </div>
  );
}
