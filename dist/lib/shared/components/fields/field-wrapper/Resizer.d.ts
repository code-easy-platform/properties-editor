import { default as React } from 'react';

interface ResizerProps {
    oldWidth?: number;
    onChange(left: number): void;
    onResizeEnd?(left: number): void;
}
export declare const Resizer: React.FC<ResizerProps>;
export {};
