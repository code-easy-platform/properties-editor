import React from 'react';
import * as TooltipRadix from '@radix-ui/react-tooltip';


interface TooltipProps {
  text: string;
  children: React.ReactNode;
}
export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root delayDuration={0}>
        <TooltipRadix.Trigger className='p-0 m-0' tabIndex={-1}>
          {children}
        </TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <TooltipRadix.Content className='p-2 bg-paper z-20 shadow border rounded max-w-xs'>
            {text}
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
