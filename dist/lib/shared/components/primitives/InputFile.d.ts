import { IFileContent } from '../../interfaces';

interface IInputFileProps {
    error: boolean | undefined;
    warning: boolean | undefined;
    disabled: boolean | undefined;
    fileMaxSize: number | undefined;
    value: IFileContent | undefined;
    typeOfFilesToAccept: string[] | undefined;
    onChange(value: IFileContent | undefined): void;
}
/**
 * Input use to upload files
 */
export declare const InputFile: ({ value, fileMaxSize, disabled, error, warning, typeOfFilesToAccept, onChange }: IInputFileProps) => import("react/jsx-runtime").JSX.Element;
export {};
