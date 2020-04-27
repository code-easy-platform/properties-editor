import React from 'react';

interface ResizerProps { onChange(left: number): void }
export const Resizer: React.FC<ResizerProps> = ({ onChange }) => {

    const mouseMove = (e: MouseEvent) => {
        onChange(((window.innerWidth / 2) - e.pageX) + 142);
    }

    const mouseUp = () => {
        window.onmousemove = null;
        window.onmouseup = null;
    }

    const mouseDown = () => {
        window.onmousemove = mouseMove;
        window.onmouseup = mouseUp;
    }

    return (
        <div
            onMouseDown={mouseDown}
            style={{
                backgroundColor: 'transparent',
                cursor: 'col-resize',
                height: '100%',
                border: 'none',
                zIndex: 1,
                width: 6,
            }}
        />
    );
}
