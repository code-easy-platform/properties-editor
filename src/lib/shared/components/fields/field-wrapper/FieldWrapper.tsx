import React, { useRef, useEffect, useState } from 'react';
import { useObserver } from 'react-observing';
import { VscInfo } from 'react-icons/vsc';

import { LocalStorageService } from '../../../local-storage/LocalStorage';
import { InputWidthStore } from './../../../stores/InputWidth';
import { useConfigs } from '../../../contexts';
import { Resizer } from './Resizer';
import { Tooltip } from '../../primitives/Tooltip';


interface FieldWrapperProps {
  dividerPositionX?: number;

  id: string;
  name: string;
  minWidth?: number;
  information?: string;
  nameHasError?: boolean;
  nameHasWarning?: boolean;
  /**
   * Used to render a child with a specific id 
   * @param id Id used in the label htmlFor
   */
  children(id: string): React.ReactNode;
  subChildren?(id: string): React.ReactNode;
  onDoubleClick?(e: React.MouseEvent<HTMLLabelElement, MouseEvent>): void;
}
export const FieldWrapper: React.FC<FieldWrapperProps> = ({ children, subChildren, dividerPositionX = 0, id, name, information, minWidth, nameHasError, nameHasWarning, onDoubleClick }) => {
  const { inputTextError, inputTextWarning, inputTextDefault } = useConfigs();
  const [inputWidth, setInputWidth] = useObserver(InputWidthStore);
  const containerWidth = useRef<any>(null);


  const [container, setContainer] = useState<{ width: number }>({ width: 200 });
  useEffect(() => {
    if (containerWidth.current) {
      setContainer({ width: containerWidth.current.offsetWidth || 0 });

      const elementCurrent = containerWidth.current;
      const handleResize = () => setContainer({ width: containerWidth.current.offsetWidth || 0 });

      elementCurrent.addEventListener('resizer', handleResize);
      return () => elementCurrent.removeEventListener('resizer', handleResize);
    }
  }, []);


  return (
    <div className={"flex-1 flex flex-col"}>
      <div ref={containerWidth} className={"flex px-0 items-center justify-between relative"}>
        <label
          htmlFor={id}
          onDoubleClick={onDoubleClick}
          className="flex-1 overflow-hidden overflow-ellipsis inline-block whitespace-nowrap"
          style={{
            width: (container.width - inputWidth),
            textDecoration: nameHasError ? inputTextError : nameHasWarning ? inputTextWarning : inputTextDefault,
          }}
        >
          <div className="flex items-center gap-2">
            {name}

            {(information !== "" && information !== undefined) && (
              <Tooltip text={information}>
                <VscInfo size={15} />
              </Tooltip>
            )}
          </div>
        </label>
        <Resizer
          oldWidth={inputWidth}
          onChange={setInputWidth}
          onResizeEnd={newWidth => LocalStorageService.setInputsWidth(newWidth)}
        />
        <div style={{ width: inputWidth ? `${inputWidth - dividerPositionX}px` : '70%', minWidth, maxWidth: '90%' }}>
          {children(id)}
        </div>
      </div>

      {subChildren?.(`${name}_${id}`)}
    </div>
  );
}
