import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Utils } from 'code-easy-components';

import './InputFile.css';

type InputFileProps = Omit<{
    /**
     * File content, if a image show a preview. 
     */
    fileContent: string | ArrayBuffer | null;
    /**
     * File name, used to show in the input.
     */
    fileName?: string;
    /**
     * Max size in bytes
     * Default value 1MB(1048576)
     */
    fileMaxSize?: number;
    /**
     * List of files types accepteds to import
     */
    typeOfFilesToAccept?: string[] | string;
    /**
     * Clear input file value
     */
    onClear: () => void;
}, keyof React.InputHTMLAttributes<HTMLInputElement>> & React.InputHTMLAttributes<HTMLInputElement>;
/**
 * Input use to upload files
 */
export const InputFile = React.forwardRef(({ fileName, onClear, typeOfFilesToAccept, fileMaxSize = 1048576, fileContent, ...props }: InputFileProps, ref: any) => {
    const [state, setState] = useState({ fileName });
    const input = useRef<HTMLInputElement>(null);

    const css_input_file: React.CSSProperties = useMemo(() => ({
        ...props.style,
        opacity: props.disabled ? 0.7 : undefined,
        textOverflow: 'ellipsis',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        textAlign: 'start',
        overflow: 'hidden',
    }), [props.disabled, props.style]);

    const css_remove_file: React.CSSProperties = useMemo(() => ({
        backgroundColor: 'var(--main-error-color)',
        border: 'var(--input-border)',
        alignSelf: 'center',
        cursor: 'pointer',
        borderRadius: 50,
        color: 'white',
        marginLeft: 4,
        height: 20,
        paddingRight: 4,
        paddingLeft: 4,
    }), []);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

        if (!e.target || !e.target.files) return;

        const fileName = e.target.files.item(0)?.name;
        if (!fileName) return;

        const lastDot = fileName.lastIndexOf(".") || 0;
        const extensionFile = fileName.substr(lastDot, fileName.length).toLowerCase();

        if (Array.isArray(typeOfFilesToAccept) ? !typeOfFilesToAccept.includes(extensionFile) : typeOfFilesToAccept !== extensionFile) return;

        setState({ fileName });

        if (props.onChange) props.onChange(e);
    }, [props, typeOfFilesToAccept]);

    return (<>
        <input
            ref={input}
            type={'file'}
            key={props.id}
            disabled={props.disabled}
            style={{ display: 'none' }}
            accept={Array.isArray(typeOfFilesToAccept) ? typeOfFilesToAccept.join(',') : typeOfFilesToAccept}
            onChange={(e: any) => {
                if (e.target.files[0]?.size < fileMaxSize) {
                    onChange(e)
                }
            }}
        />
        <div
            {...props}
            style={css_input_file}
            onClick={e => input.current?.click()}
            key={Utils.getUUID() + "_" + props.id}
            onKeyPress={e => input.current?.click()}
            tabIndex={!props.disabled ? 0 : undefined}
            className={props.className + " input-file-view padding-s padding-horizontal-xs"}
        >
            <div>
                {fileContent && <img src={String(fileContent)} height={16} alt="" className="padding-right-xs" />}
                {state.fileName || 'Select a file...'}
            </div>
        </div>
        {state.fileName && (
            <input
                type="button"
                tabIndex={-1}
                style={css_remove_file}
                className="full-height background-bars"
                onClick={() => {
                    setState({ fileName: undefined });
                    onClear();
                }}
            />
        )}
    </>);
});
