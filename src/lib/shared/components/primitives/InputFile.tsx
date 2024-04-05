import React, { useCallback, useRef } from 'react';
import { VscTrash } from 'react-icons/vsc';

import { IFileContent } from '../../interfaces';


interface IInputFileProps {
  error: boolean | undefined;
  warning: boolean | undefined;
  disabled: boolean | undefined;
  fileMaxSize: number | undefined;
  value: IFileContent | undefined;
  typeOfFilesToAccept: string[] | undefined;
  onChange(value: IFileContent | undefined): void;
};
/**
 * Input use to upload files
 */
export const InputFile = ({ value, fileMaxSize, disabled, error, warning, typeOfFilesToAccept, onChange }: IInputFileProps) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const trashRef = useRef<HTMLDivElement>(null);


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const rawFile = e.target.files?.item(0);

    if (!rawFile) return;
    if (!rawFile.name) return;
    if (fileMaxSize && rawFile.size > fileMaxSize) return;


    const lastDot = rawFile.name.lastIndexOf(".") || 0;
    const extensionFile = rawFile.name.slice(lastDot, rawFile.name.length).toLowerCase();

    if (typeOfFilesToAccept && !typeOfFilesToAccept.includes(extensionFile)) return;

    const fileReader = new FileReader();
    fileReader.addEventListener("load", (event) => {
      if (!event.target) return;

      onChange({
        name: rawFile.name,
        size: rawFile.size,
        type: rawFile.type,
        lastModified: rawFile.lastModified,
        content: event.target.result instanceof ArrayBuffer
          ? Buffer.from(event.target.result).toString('base64')
          : event.target.result,
      });
    });
    fileReader.readAsDataURL(rawFile);
  }, [fileMaxSize, typeOfFilesToAccept]);

  const handlePicker = () => {
    if (disabled) return;

    const virtualInput = document.createElement('input');
    virtualInput.type = 'file';
    virtualInput.onchange = handleChange as any;
    if (typeOfFilesToAccept) virtualInput.accept = typeOfFilesToAccept.join(',');

    virtualInput.click();
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      handlePicker();
    } else if (e.code === 'Delete') {
      onChange(undefined);
    } else if (e.code === 'ArrowRight') {
      trashRef.current?.focus();
    }
  }

  const handleTrashKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.code === 'Enter' || e.code === 'Space') {
      inputRef.current?.focus();
      onChange(undefined);
    } else if (e.code === 'ArrowLeft') {
      inputRef.current?.focus();
    }
  }


  return (
    <div
      ref={inputRef}
      data-error={error}
      data-warning={warning}
      onClick={handlePicker}
      data-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleInputKeyDown}
      className='flex gap-2 bg-background p-1 rounded cursor-pointer focus:outline outline-primary ring-1 ring-transparent data-[warning]:ring-yellow-500 data-[error]:ring-red-500 data-[disabled]:opacity-50 data-[disabled]:focus:outline-none'
    >
      {value
        ? (
          <div className='flex-1 flex gap-1'>
            <img draggable={false} src={value.content || ''} height={24} width={24} alt={value.name} className="object-contain" />
            <div data-disabled={disabled} className='flex-1 data-[disabled]:cursor-default data-[disabled]:select-text'>
              {value.name}
            </div>
          </div>
        )
        : (
          <div className='flex-1'>
            Select a file...
          </div>
        )
      }

      <div
        ref={trashRef}
        data-show={!!value}
        data-disabled={disabled}
        onKeyDown={handleTrashKeyDown}
        tabIndex={!!value || disabled ? -1 : 1}
        onClick={e => { e.stopPropagation(); e.preventDefault(); onChange(undefined); }}
        className="cursor-pointer text-white self-start rounded-full hover:bg-primary focus:outline outline-primary data-[show=false]:hidden data-[disabled]:hidden"
      >
        <VscTrash size={24} className='p-1' />
      </div>
    </div>
  );
};
