import React from 'react';

export const ExpressionInput = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return (
        <div style={{
            justifyContent: 'flex-end',
            width: props.style?.width,
            maxWidth: props.style?.maxWidth,
            alignItems: 'center',
        }}>
            <input {...props} style={{  ...props.style, width: '100%', maxWidth: '100%' }} />
            <svg style={{ position: 'absolute' }} height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none' />
                <path fill='#ffffff15' d='M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z' />
            </svg>
        </div>
    );
}
