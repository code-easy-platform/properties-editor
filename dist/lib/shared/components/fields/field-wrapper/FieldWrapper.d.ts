import { default as React } from 'react';

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
export declare const FieldWrapper: React.FC<FieldWrapperProps>;
export {};
