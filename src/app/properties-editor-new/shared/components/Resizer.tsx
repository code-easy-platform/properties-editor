import React from 'react';

interface ResizerProps {
    onChange(left: number): void;
    onRisizeEnd?(left: number): void;
}
export const Resizer: React.FC<ResizerProps> = ({ onChange, onRisizeEnd }) => {

    const mouseMove = (e: MouseEvent) => {
        onChange(window.innerWidth - e.pageX);
    }

    const mouseUp = (e: MouseEvent) => {
        window.document.body.style.cursor = 'unset';
        onRisizeEnd && onRisizeEnd(window.innerWidth - e.pageX);
        window.onmousemove = null;
        window.onmouseup = null;
    }

    const mouseDown = () => {
        window.document.body.style.cursor = 'col-resize';
        window.onmousemove = mouseMove;
        window.onmouseup = mouseUp;
    }

    return (
        <div
            onMouseDown={mouseDown}
            style={{
                backgroundColor: 'transparent',
                cursor: 'col-resize',
                border: 'none',
                height: 20,
                zIndex: 1,
                width: 6,
            }}
        />
    );
}
