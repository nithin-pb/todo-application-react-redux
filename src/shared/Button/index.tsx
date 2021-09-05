import React from 'react';
import './index.scss';

export default function Button(props: any) {
    return (
        <button className='button'>
            {props.text}
        </button>
    )
}