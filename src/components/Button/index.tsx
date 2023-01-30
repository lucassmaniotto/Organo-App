import React from 'react';
import './index.css';

interface ButtonProps{
    children: React.ReactElement;
}

export const Button = (props: ButtonProps) => {
    return (
        <button className="button">
            {props.children}
        </button>
    );
};