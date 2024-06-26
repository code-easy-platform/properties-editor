import React, { useCallback, useRef } from 'react';


interface ResizerProps {
  oldWidth?: number;
  onChange(left: number): void;
  onResizeEnd?(left: number): void;
}
export const Resizer: React.FC<ResizerProps> = ({ oldWidth = 0, onChange, onResizeEnd }) => {
  const inputLeftDistance = useRef(0);


  const mouseMove = useCallback((e: MouseEvent) => {
    onChange((window.innerWidth - e.pageX) - inputLeftDistance.current);
  }, [onChange]);

  const mouseUp = useCallback((e: MouseEvent) => {
    window.document.body.style.cursor = 'unset';
    onResizeEnd && onResizeEnd((window.innerWidth - e.pageX) - inputLeftDistance.current);
    window.onmousemove = null;
    window.onmouseup = null;
  }, [onResizeEnd]);

  const mouseDown = useCallback((e: React.MouseEvent) => {
    inputLeftDistance.current = (window.innerWidth - e.pageX) - oldWidth;

    window.document.body.style.cursor = 'col-resize';
    window.onmousemove = mouseMove;
    window.onmouseup = mouseUp;
  }, [oldWidth, mouseMove, mouseUp]);


  return (
    <div
      onMouseDown={mouseDown}
      className="transition-all border-none cursor-col-resize rounded h-8 w-1 z-10 hover:bg-secondary"
    />
  );
}
