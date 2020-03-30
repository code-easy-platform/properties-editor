import React, { useState } from 'react';

export const ExpressionInput = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    // const onDoubleClick = props.onDoubleClick ? props.onDoubleClick : () => { };

    const [state, setState] = useState({
        isOpenEditor: false
    })

    return (
        <div style={{
            justifyContent: 'flex-end',
            width: props.style?.width,
            maxWidth: props.style?.maxWidth,
            alignItems: 'center',
        }}>
            <input {...props} onDoubleClick={e => setState({ isOpenEditor: true })} style={{ ...props.style, width: '100%', maxWidth: '100%', paddingRight: '24px' }} />
            <svg onClick={(e: any) => setState({ isOpenEditor: true })} style={{ position: 'absolute', cursor: 'pointer' }} height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none' />
                <path fill='#ffffff15' d='M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z' />
            </svg>



            {state.isOpenEditor && <div style={{ position: 'fixed', left: '0px', top: '0px', width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>

                <div contentEditable={true} style={{ width: '70%', height: '70%', backgroundColor: '#2c2c2c' }}>

                </div>

            </div>}



        </div>
    );
}
