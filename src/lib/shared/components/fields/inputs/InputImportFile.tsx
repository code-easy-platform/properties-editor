import React, { useCallback } from 'react';
import { useObserver, useObserverValue } from 'react-observing';

import { IProperty, IFileContent } from '../../../interfaces';
import { FieldWrapper } from '../field-wrapper/FieldWrapper';
import { InputFile } from '../../primitives/InputFile';


interface InputImportFileProps extends IProperty<IFileContent | undefined> { }
export const InputImportFile: React.FC<InputImportFileProps> = ({ ...props }) => {
  const typeOfFilesToAccept = useObserverValue(props.typeOfFilesToAccept);
  const editValueDisabled = useObserverValue(props.editValueDisabled);
  const valueHasWarning = useObserverValue(props.valueHasWarning);
  const nameHasWarning = useObserverValue(props.nameHasWarning);
  const valueHasError = useObserverValue(props.valueHasError);
  const nameHasError = useObserverValue(props.nameHasError);
  const fileMaxSize = useObserverValue(props.fileMaxSize);
  const information = useObserverValue(props.information);
  const [value, setValue] = useObserver(props.value);
  const name = useObserverValue(props.name);
  const id = useObserverValue(props.id);


  const handleOnChange = useCallback((file: IFileContent | undefined) => {
    setValue(file);
  }, [setValue]);


  return (
    <FieldWrapper
      minWidth={60}
      id={id || ''}
      name={name || ''}
      information={information}
      nameHasError={nameHasError}
      nameHasWarning={nameHasWarning}
    >
      {() => (
        <InputFile
          value={value}
          error={valueHasError}
          onChange={handleOnChange}
          fileMaxSize={fileMaxSize}
          warning={valueHasWarning}
          disabled={editValueDisabled}
          typeOfFilesToAccept={typeOfFilesToAccept}
        />
      )}
    </FieldWrapper>
  );
}
