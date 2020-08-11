import React, { useRef, useEffect, useState } from 'react';
import { IconMoreInfo } from 'code-easy-components';
import { useRecoilState } from 'recoil';

import { InputWidthStore } from './../../../stores/InputWidth';
import { Resizer, Tooltip } from './../../';
import './FieldWrapper.css';
import { LocalStorageService } from '../../../local-storage/LocalStorage';

interface FieldWrapperProps {
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
    children(id: string): React.ReactNode
}
export const FieldWrapper: React.FC<FieldWrapperProps> = ({ children, id, name, information, minWidth, nameHasError, nameHasWarning }) => {
    const [inputWidth, setInputWidth] = useRecoilState(InputWidthStore);
    const containerWidth = useRef<any>(null);
    const infoIconRef = useRef<any>(null);

    const [container, setContainer] = useState<{ width: number }>({ width: 200 });
    useEffect(() => {
        if (containerWidth.current) {
            setContainer({ width: containerWidth.current.offsetWidth || 0 });
        }
    }, []);
    if (containerWidth.current) {
        containerWidth.current.addEventListener('resizer', () => {
            setContainer({ width: containerWidth.current.offsetWidth || 0 });
        });
    }

    return (
        <div ref={containerWidth} className={"padding-s padding-bottom-none container-field-wrapper"} >
            <label
                htmlFor={'prop_id_' + id}
                className={"flex1 label-field-wrapper"}
                style={{
                    textDecoration: nameHasError ? `var(--text-underline-error)` : nameHasWarning ? `var(--text-underline-warning)` : undefined,
                    width: (container.width - inputWidth),
                }}
            >
                {name}
                {(information !== "" && information !== undefined) && <img ref={infoIconRef} className="margin-left-xs" width={10} height={10} src={IconMoreInfo} alt="info-icon" />}
            </label>
            <Tooltip elementRef={infoIconRef} description={information} />
            <Resizer
                onChange={newWidth => {
                    setInputWidth(newWidth);
                    LocalStorageService.setInputsWidth(newWidth);
                }}
            />
            <div style={{ width: inputWidth ? `${inputWidth}px` : '70%', minWidth, maxWidth: '90%' }}>
                {children('prop_id_' + id)}
            </div>
        </div>
    );
}
